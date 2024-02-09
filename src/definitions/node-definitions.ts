import { NodeDefinition } from '@/node-definition'

const importFrom = '@radix-ui/themes'

const color = [
  'tomato',
  'red',
  'ruby',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'iris',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'jade',
  'green',
  'grass',
  'brown',
  'orange',
  'sky',
  'mint',
  'lime',
  'yellow',
  'amber',
  'gold',
  'bronze',
  'gray',
]

export const textDef: NodeDefinition = {
  nodeName: 'RadixText',
  lib: {
    mod: 'Text',
    from: importFrom,
  },
  props: [
    // TODO: `as` cannot be used in combination with `asChild`
    // {
    //   key: 'asChild',
    //   type: 'boolean',
    //   default: false,
    // },
    {
      key: 'as',
      type: ['p', 'label', 'div', 'span'],
      default: 'span',
    },
    {
      key: 'size',
      type: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    },
    {
      key: 'weight',
      type: ['light', 'regular', 'medium', 'bold'],
    },
    {
      key: 'align',
      type: ['left', 'center', 'right'],
    },
    {
      key: 'trim',
      type: ['normal', 'start', 'end', 'both'],
    },
    {
      key: 'color',
      type: color,
    },
    {
      key: 'highContrast',
      type: 'boolean',
    },
  ],
}

export const buttonDef: NodeDefinition = {
  nodeName: 'RadixButton',
  lib: {
    mod: 'Button',
    from: importFrom,
  },
  props: [
    {
      key: 'asChild',
      type: 'boolean',
      default: false,
    },
    {
      key: 'size',
      type: ['1', '2', '3'],
      default: '2',
    },
    {
      key: 'variant',
      type: ['classic', 'solid', 'soft', 'surface', 'outline', 'ghost'],
      default: 'solid',
    },
    {
      key: 'color',
      type: color,
    },
    {
      key: 'radius',
      type: ['none', 'small', 'medium', 'large', 'full'],
    },
  ],
}

export const switchDef: NodeDefinition = {
  nodeName: 'RadixSwitch',
  lib: {
    mod: 'Switch',
    from: importFrom,
  },
  leaf: true,
  props: [
    {
      key: 'size',
      type: ['1', '2', '3'],
      default: '2',
    },
    {
      key: 'variant',
      type: ['classic', 'surface', 'soft'],
      default: 'surface',
    },
    {
      key: 'highContrast',
      type: 'boolean',
    },
    {
      key: 'radius',
      type: ['none', 'small', 'medium', 'large', 'full'],
    },
  ],
}

export const flexDef: NodeDefinition = {
  nodeName: 'RadixFlex',
  lib: {
    mod: 'Flex',
    from: importFrom,
  },
  props: [
    {
      key: 'asChild',
      type: 'boolean',
      default: false,
    },
    {
      key: 'display',
      type: ['none', 'inline-flex', 'flex'],
      default: 'flex',
    },
    {
      key: 'direction',
      type: ['row', 'row-reverse', 'column', 'column-reverse'],
    },
    {
      key: 'align',
      type: ['start', 'center', 'end', 'stretch', 'baseline'],
    },
    {
      key: 'justify',
      type: ['start', 'center', 'end', 'between'],
      default: 'start',
    },
    {
      key: 'wrap',
      type: ['wrap', 'nowrap', 'wrap-reverse'],
    },
    {
      key: 'gap',
      type: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    },
  ],
}

export const containerDef: NodeDefinition = {
  nodeName: 'RadixContainer',
  lib: {
    mod: 'Container',
    from: importFrom,
  },
  props: [
    {
      key: 'size',
      type: ['1', '2', '3', '4'],
      default: '4',
    },
    {
      key: 'display',
      type: ['none', 'block'],
    },
  ],
}

export const blockquoteDef: NodeDefinition = {
  nodeName: 'RadixBlockquote',
  lib: {
    mod: 'Blockquote',
    from: importFrom,
  },
  props: [
    {
      key: 'size',
      type: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    },
    {
      key: 'weight',
      type: ['light', 'regular', 'medium', 'bold'],
    },
    {
      key: 'color',
      type: color,
    },
    {
      key: 'highContrast',
      type: 'boolean',
    },
  ],
}

export const dialogDef: NodeDefinition = {
  nodeName: 'RadixDialog',
  lib: { mod: 'Dialog', from: importFrom },
  componentName: 'Dialog.Root',
  portal: true,
  props: [
    {
      key: 'open',
      type: 'boolean',
      default: true,
    },
  ],
  slots: [
    {
      key: 'content',
      required: true,
      componentName: 'Dialog.Content',
      props: [{ key: 'size', type: ['1', '2', '3', '4'], default: '3' }],
      slots: [
        {
          key: 'title',
          componentName: 'Dialog.Title',
        },
        {
          key: 'description',
          componentName: 'Dialog.Description',
        },
        {
          key: 'contentBody',
          required: true,
        },
      ],
    },
  ],
}
