import { $allRenderedNodes } from '@/atoms'
import { dataAttributes } from './data-attributes'
import { getEaselIframeId } from './easel/easel-wrapper'
import { Node } from './node-class/node'
import { PageNode } from './node-class/page'
import { NodeName } from './node-name'

/**
 * Only use when you have to get node atom from HTML element
 */
export function getRenderedNodeById(nodeId: string) {
  // Finding from Window is for Easel iframe
  const node = $allRenderedNodes.get()[nodeId]

  if (!node) {
    console.log($allRenderedNodes.get())
    console.warn(
      `Node is not rendered: ${nodeId}. Maybe it is unmounted or not rendered yet.`,
    )
    return null
  }

  return node
}

/**
 * Calculates the index of a child node in its parent's children array
 *
 * If the given node is not a child of any node, `undefined` is returned
 */
export function getChildNodeIndex(child: Node) {
  const parent = child.parent

  if (!parent) {
    return undefined
  }

  return parent.children.indexOf(child)
}

export function findNodeElm(node: Node) {
  if (node instanceof PageNode) {
    return findEaselIframe(node)?.contentDocument?.body ?? null
  }

  if (!node.ownerPage) return null

  const iframe = findEaselIframe(node.ownerPage)

  return (
    iframe?.contentDocument?.getElementById(node.id)?.firstElementChild ?? null
  )
}

export function getClosestNodeElm(target: Element):
  | {
      elm: Element
      node: Node
    }
  | {
      elm: null
      node: null
    } {
  // If the target is the body element, it means the target is the page node itself
  if (target.isSameNode(target.ownerDocument.body)) {
    const nodeId = getNodeIdFromElement(target.ownerDocument.body)

    if (!nodeId) {
      return {
        elm: null,
        node: null,
      }
    }

    return {
      elm: target.ownerDocument.body,
      node: getRenderedNodeById(nodeId)!,
    }
  }

  const elmWithAttribute = target.closest(`[${dataAttributes.node}]`)

  if (!elmWithAttribute) {
    return {
      elm: null,
      node: null,
    }
  }

  const nodeId = elmWithAttribute.getAttribute(dataAttributes.nodeId)!

  if (!nodeId) {
    throw new Error('Node does not have an id')
  }

  const node = getRenderedNodeById(nodeId)

  if (!node) {
    return {
      elm: null,
      node: null,
    }
  }

  if (node instanceof PageNode) {
    return {
      elm: elmWithAttribute,
      node,
    }
  }

  const firstElementChild = elmWithAttribute.firstElementChild

  if (!firstElementChild) {
    throw new Error(`Node element does not have a first element child`)
  }

  return {
    elm: elmWithAttribute.firstElementChild,
    node,
  }
}

/**
 * Some containable nodes don't allow to select children nodes. (temporarily)
 *
 * For example, Text inside Flex is selectable while Text inside Button is not selectable.
 */
export function getClosestSelectableNodeSet(elm: Element):
  | {
      elm: Element
      node: Node
    }
  | {
      elm: null
      node: null
    } {
  const { elm: closestNodeElm, node: closestNode } = getClosestNodeElm(elm)

  if (!closestNode) {
    return {
      elm: null,
      node: null,
    }
  }

  if (!isSelectableNode(closestNode)) {
    // Page node element is always body element.
    // But other node elements are first element child of the node wrapper element.
    return getClosestSelectableNodeSet(
      closestNodeElm.parentElement?.parentElement ?? document.body,
    )
  }

  return {
    elm: closestNodeElm,
    node: closestNode,
  }
}

export function getClosestMoveableNodeSet(elm: Element):
  | {
      elm: Element
      node: Node
    }
  | {
      elm: null
      node: null
    } {
  const { elm: closestNodeElm, node: closestNode } = getClosestNodeElm(elm)

  if (!closestNode) {
    return {
      elm: null,
      node: null,
    }
  }

  if (!closestNode.isMovable) {
    // Page node element is always body element.
    // But other node elements are first element child of the node wrapper element.
    return getClosestMoveableNodeSet(
      closestNodeElm.parentElement?.parentElement ?? document.body,
    )
  }

  return {
    elm: closestNodeElm,
    node: closestNode,
  }
}

/**
 * TODO: separate into selectable and sibling droppable.
 * For example, with Text Editing turned off, TextNode is not selectable and not editable, but other nodes can be dropped around it by drag and drop.
 * It's very important user experience.
 */
export function isSelectableNode(node: Node) {
  const nodeName = node.nodeName

  if (nodeName === 'Fragment') {
    return false
  }

  return true
}

/**
 * Check if the event target is an element
 */
export function isInstanceOfElement(target: EventTarget): target is Element {
  if (target instanceof Element) {
    return true
  }

  // Check if the target is an element inside an iframe
  return Array.from(window.frames).some(
    (w) => target instanceof (w as Window & typeof globalThis).Element,
  )
}

export function findEaselIframe(page: PageNode) {
  const iframe = document.getElementById(
    getEaselIframeId(page.id),
  ) as HTMLIFrameElement | null

  return iframe
}

export function isUnwrappableNode(node: Node) {
  if (node.children.length === 0) return false

  const nodeName = node.nodeName
  const unwrappableNodeNames: NodeName[] = ['Flex', 'Container']

  return unwrappableNodeNames.includes(nodeName)
}

export function getNodeIdFromElement(target: Element) {
  return target.getAttribute(dataAttributes.nodeId)
}
