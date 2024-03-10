import { renderChildren } from '@/node-component'
import { EmptyPlaceholder } from '@/empty-placeholder'
import { Node, FragmentNode } from '@/node-class/node'
import { useStore } from '@nanostores/react'
import { atom, map } from 'nanostores'
import { Card as RadixCard, Flex as RadixFlex } from '@radix-ui/themes'
import {
  SelectControls,
  SwitchControls,
  SlotToggleControls,
  TextFieldControls,
} from '@/control-center/controls-template'
import { NodeComponent } from '@/node-component'
import { Prop } from '@/node-definition'
import { makeNodeProps } from '@/data-attributes'
import { type ReactNode } from 'react'
import { Flex } from '@radix-ui/themes-2.0.2'

export type RadixFlexNodeProps = {
  display?: 'none' | 'inline-flex' | 'flex'
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
  justify?: 'start' | 'center' | 'end' | 'between'
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  gap?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
  m?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
  mx?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
  my?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
  mt?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
  mr?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
  mb?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
  ml?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
  p?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
  px?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
  py?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
  pt?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
  pr?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
  pb?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
  pl?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'
  inset?: 'auto' | '0' | '50%' | '100%'
  top?: 'auto' | '0' | '50%' | '100%'
  right?: 'auto' | '0' | '50%' | '100%'
  bottom?: 'auto' | '0' | '50%' | '100%'
  left?: 'auto' | '0' | '50%' | '100%'
  shrink?: '0' | '1'
  grow?: '0' | '1'
}

export class RadixFlexNode extends Node {
  readonly nodeName = 'RadixFlex'
  readonly componentName = 'Flex'

  public readonly defaultProps: RadixFlexNodeProps = {}

  propsDefinition: Prop[] = [
    { key: 'display', type: ['none', 'inline-flex', 'flex'], default: 'flex' },
    {
      key: 'direction',
      type: ['row', 'row-reverse', 'column', 'column-reverse'],
    },
    { key: 'align', type: ['start', 'center', 'end', 'stretch', 'baseline'] },
    {
      key: 'justify',
      type: ['start', 'center', 'end', 'between'],
      default: 'start',
    },
    { key: 'wrap', type: ['wrap', 'nowrap', 'wrap-reverse'] },
    { key: 'gap', type: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] },
    { key: 'm', type: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] },
    { key: 'mx', type: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] },
    { key: 'my', type: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] },
    { key: 'mt', type: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] },
    { key: 'mr', type: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] },
    { key: 'mb', type: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] },
    { key: 'ml', type: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] },
    { key: 'p', type: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] },
    { key: 'px', type: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] },
    { key: 'py', type: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] },
    { key: 'pt', type: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] },
    { key: 'pr', type: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] },
    { key: 'pb', type: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] },
    { key: 'pl', type: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] },
    {
      key: 'position',
      type: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
    },
    { key: 'inset', type: ['auto', '0', '50%', '100%'] },
    { key: 'top', type: ['auto', '0', '50%', '100%'] },
    { key: 'right', type: ['auto', '0', '50%', '100%'] },
    { key: 'bottom', type: ['auto', '0', '50%', '100%'] },
    { key: 'left', type: ['auto', '0', '50%', '100%'] },
    { key: 'shrink', type: ['0', '1'] },
    { key: 'grow', type: ['0', '1'] },
  ]

  readonly $props = map(this.defaultProps)
  readonly slotProps = {}

  slotsInfoArray = []

  constructor() {
    super({
      isUnselectable: false,
    })
  }
}

export function RadixFlexNodeComponent({ node }: { node: RadixFlexNode }) {
  const nodeProps = makeNodeProps(node)
  const children = useStore(node.$children)
  const props = useStore(node.$props)

  return (
    <Flex {...props} {...nodeProps}>
      {children.length > 0 ? (
        renderChildren(children)
      ) : (
        <EmptyPlaceholder name="Flex" />
      )}
    </Flex>
  )
}
