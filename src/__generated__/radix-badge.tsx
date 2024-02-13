import { renderChildren } from '@/node-component'
import { EmptyPlaceholder } from '@/empty-placeholder'
import { Node, FragmentNode } from '@/node-class/node'
import { useStore } from '@nanostores/react'
import { atom, map } from 'nanostores'
import { Card, Flex } from '@radix-ui/themes'
import {
  SelectControls,
  SwitchControls,
  SlotToggleControls,
  TextFieldControls,
} from '@/control-center/controls-template'
import { NodeComponent } from '@/node-component'
import { type ReactNode } from 'react'
import { Badge } from '@radix-ui/themes'

export type RadixBadgeNodeProps = {
  size?: '1' | '2'
  variant?: 'solid' | 'soft' | 'surface' | 'outline'
  color?:
    | 'tomato'
    | 'red'
    | 'ruby'
    | 'crimson'
    | 'pink'
    | 'plum'
    | 'purple'
    | 'violet'
    | 'iris'
    | 'indigo'
    | 'blue'
    | 'cyan'
    | 'teal'
    | 'jade'
    | 'green'
    | 'grass'
    | 'brown'
    | 'orange'
    | 'sky'
    | 'mint'
    | 'lime'
    | 'yellow'
    | 'amber'
    | 'gold'
    | 'bronze'
    | 'gray'
  highContrast?: boolean
  radius?: 'none' | 'small' | 'medium' | 'large' | 'full'
}

export class RadixBadgeNode extends Node {
  readonly nodeName = 'RadixBadge'

  public readonly defaultProps: RadixBadgeNodeProps = {}

  readonly $props = map(this.defaultProps)

  slotsInfo = {}

  slotsInfoArray = []

  readonly $slots = atom<{}>({})

  constructor() {
    super({
      isUnselectable: false,
    })

    // Enable required slot inside constructor instead of property initializer
    // because enableSlot() sets parent of the slot
  }
}

export function RadixBadgeNodeComponent({ node }: { node: RadixBadgeNode }) {
  const children = useStore(node.$children)
  const props = useStore(node.$props)

  return (
    <Badge {...props}>
      {children.length > 0 ? (
        renderChildren(children)
      ) : (
        <EmptyPlaceholder name="RadixBadge" />
      )}
    </Badge>
  )
}

export function RadixBadgeNodeControls({ nodes }: { nodes: RadixBadgeNode[] }) {
  return (
    <>
      <SelectControls
        controlsLabel="size"
        nodes={nodes}
        propsAtomKey="$props"
        propertyKey="size"
        defaultValue="1"
        options={[
          { label: 'default', value: undefined },
          { label: '1', value: '1' },
          { label: '2', value: '2' },
        ]}
      />
      <SelectControls
        controlsLabel="variant"
        nodes={nodes}
        propsAtomKey="$props"
        propertyKey="variant"
        defaultValue="soft"
        options={[
          { label: 'default', value: undefined },
          { label: 'solid', value: 'solid' },
          { label: 'soft', value: 'soft' },
          { label: 'surface', value: 'surface' },
          { label: 'outline', value: 'outline' },
        ]}
      />
      <SelectControls
        controlsLabel="color"
        nodes={nodes}
        propsAtomKey="$props"
        propertyKey="color"
        defaultValue={undefined}
        options={[
          { label: 'default', value: undefined },
          { label: 'tomato', value: 'tomato' },
          { label: 'red', value: 'red' },
          { label: 'ruby', value: 'ruby' },
          { label: 'crimson', value: 'crimson' },
          { label: 'pink', value: 'pink' },
          { label: 'plum', value: 'plum' },
          { label: 'purple', value: 'purple' },
          { label: 'violet', value: 'violet' },
          { label: 'iris', value: 'iris' },
          { label: 'indigo', value: 'indigo' },
          { label: 'blue', value: 'blue' },
          { label: 'cyan', value: 'cyan' },
          { label: 'teal', value: 'teal' },
          { label: 'jade', value: 'jade' },
          { label: 'green', value: 'green' },
          { label: 'grass', value: 'grass' },
          { label: 'brown', value: 'brown' },
          { label: 'orange', value: 'orange' },
          { label: 'sky', value: 'sky' },
          { label: 'mint', value: 'mint' },
          { label: 'lime', value: 'lime' },
          { label: 'yellow', value: 'yellow' },
          { label: 'amber', value: 'amber' },
          { label: 'gold', value: 'gold' },
          { label: 'bronze', value: 'bronze' },
          { label: 'gray', value: 'gray' },
        ]}
      />
      <SwitchControls
        controlsLabel="highContrast"
        nodes={nodes}
        propsAtomKey="$props"
        propertyKey="highContrast"
        defaultValue={undefined}
      />
      <SelectControls
        controlsLabel="radius"
        nodes={nodes}
        propsAtomKey="$props"
        propertyKey="radius"
        defaultValue={undefined}
        options={[
          { label: 'default', value: undefined },
          { label: 'none', value: 'none' },
          { label: 'small', value: 'small' },
          { label: 'medium', value: 'medium' },
          { label: 'large', value: 'large' },
          { label: 'full', value: 'full' },
        ]}
      />
    </>
  )
}