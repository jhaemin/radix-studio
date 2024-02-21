import { Custom, NodeDefinition, Prop } from '@/node-definition'

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
const radius = ['none', 'small', 'medium', 'large', 'full']

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

export const headingDef: NodeDefinition = {
  nodeName: 'RadixHeading',
  lib: {
    mod: 'Heading',
    from: importFrom,
  },
  props: [
    {
      key: 'as',
      type: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      default: 'h1',
    },
    {
      key: 'size',
      type: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      default: '6',
    },
    {
      key: 'weight',
      type: ['light', 'regular', 'medium', 'bold'],
      default: 'bold',
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

export const codeDef: NodeDefinition = {
  nodeName: 'RadixCode',
  lib: {
    mod: 'Code',
    from: importFrom,
  },
  props: [
    {
      key: 'size',
      type: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    },
    {
      key: 'variant',
      type: ['solid', 'soft', 'outline', 'ghost'],
      default: 'soft',
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

export const linkDef: NodeDefinition = {
  nodeName: 'RadixLink',
  lib: {
    mod: 'Link',
    from: importFrom,
  },
  props: [
    {
      key: 'href',
      label: 'URL',
      type: 'string',
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
      key: 'trim',
      type: ['normal', 'start', 'end', 'both'],
    },
    {
      key: 'underline',
      type: ['auto', 'hover', 'always'],
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
    // {
    //   key: 'asChild',
    //   type: 'boolean',
    //   default: false,
    // },
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
      type: radius,
    },
  ],
}

export const badgeDef: NodeDefinition = {
  nodeName: 'RadixBadge',
  lib: {
    mod: 'Badge',
    from: importFrom,
  },
  props: [
    {
      key: 'size',
      type: ['1', '2'],
      default: '1',
    },
    {
      key: 'variant',
      type: ['solid', 'soft', 'surface', 'outline'],
      default: 'soft',
    },
    {
      key: 'color',
      type: color,
    },
    {
      key: 'highContrast',
      type: 'boolean',
    },
    {
      key: 'radius',
      type: radius,
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
      type: radius,
    },
  ],
}

const zeroToNine = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const commonMarginProps: Prop[] = [
  {
    key: 'm',
    type: zeroToNine,
  },
  {
    key: 'mx',
    type: zeroToNine,
  },
  {
    key: 'my',
    type: zeroToNine,
  },
  {
    key: 'mt',
    type: zeroToNine,
  },
  {
    key: 'mr',
    type: zeroToNine,
  },
  {
    key: 'mb',
    type: zeroToNine,
  },
  {
    key: 'ml',
    type: zeroToNine,
  },
]

const commonLayoutProps: Prop[] = [
  ...commonMarginProps,
  {
    key: 'p',
    type: zeroToNine,
  },
  {
    key: 'px',
    type: zeroToNine,
  },
  {
    key: 'py',
    type: zeroToNine,
  },
  {
    key: 'pt',
    type: zeroToNine,
  },
  {
    key: 'pr',
    type: zeroToNine,
  },
  {
    key: 'pb',
    type: zeroToNine,
  },
  {
    key: 'pl',
    type: zeroToNine,
  },
  {
    key: 'position',
    type: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
  },
  {
    key: 'inset',
    type: ['auto', '0', '50%', '100%'],
  },
  {
    key: 'top',
    type: ['auto', '0', '50%', '100%'],
  },
  {
    key: 'right',
    type: ['auto', '0', '50%', '100%'],
  },
  {
    key: 'bottom',
    type: ['auto', '0', '50%', '100%'],
  },
  {
    key: 'left',
    type: ['auto', '0', '50%', '100%'],
  },
  {
    key: 'shrink',
    type: ['0', '1'],
  },
  {
    key: 'grow',
    type: ['0', '1'],
  },
]

export const boxDef: NodeDefinition = {
  nodeName: 'RadixBox',
  lib: {
    mod: 'Box',
    from: importFrom,
  },
  props: [
    {
      key: 'display',
      type: ['none', 'inline', 'inline-block', 'block'],
    },
    ...commonLayoutProps,
  ],
}

export const flexDef: NodeDefinition = {
  nodeName: 'RadixFlex',
  lib: {
    mod: 'Flex',
    from: importFrom,
  },
  props: [
    // {
    //   key: 'asChild',
    //   type: 'boolean',
    //   default: false,
    // },
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
    ...commonLayoutProps,
  ],
}

export const gridDef: NodeDefinition = {
  nodeName: 'RadixGrid',
  lib: {
    mod: 'Grid',
    from: importFrom,
  },
  props: [
    {
      key: 'display',
      type: ['none', 'inline-grid', 'grid'],
      default: 'grid',
    },
    {
      key: 'columns',
      type: 'string',
    },
    {
      key: 'rows',
      type: 'string',
    },
    {
      key: 'flow',
      type: ['row', 'column', 'dense', 'row-dense', 'column-dense'],
    },
    {
      key: 'align',
      type: ['start', 'center', 'end', 'stretch', 'baseline'],
    },
    {
      key: 'justify',
      type: ['start', 'center', 'end', 'between'],
    },
    {
      key: 'gap',
      type: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    },
    {
      key: 'gapX',
      type: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    },
    {
      key: 'gapY',
      type: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    },
    ...commonLayoutProps,
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
  unselectable: true,
  portal: true,
  props: [
    {
      key: 'open',
      type: 'boolean',
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

export const calloutDef: NodeDefinition = {
  nodeName: 'RadixCallout',
  lib: { mod: 'Callout', from: importFrom },
  componentName: 'Callout.Root',
  props: [
    {
      key: 'size',
      type: ['1', '2', '3'],
      default: '2',
    },
    {
      key: 'variant',
      type: ['soft', 'surface', 'outline'],
      default: 'soft',
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
  slots: [
    {
      key: 'icon',
      componentName: 'Callout.Icon',
    },
    {
      key: 'text',
      componentName: 'Callout.Text',
      required: true,
    },
  ],
}

export const avatarDef: NodeDefinition = {
  nodeName: 'RadixAvatar',
  lib: { mod: 'Avatar', from: importFrom },
  leaf: true,
  props: [
    {
      key: 'src',
      type: 'string',
    },
    {
      key: 'size',
      type: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      default: '3',
    },
    {
      key: 'variant',
      type: ['solid', 'soft'],
      default: 'soft',
    },
    {
      key: 'color',
      type: color,
    },
    {
      key: 'highContrast',
      type: 'boolean',
    },
    {
      key: 'radius',
      type: radius,
    },
    {
      key: 'fallback',
      type: Custom('NonNullable<ReactNode>'),
      required: true,
      default: 'A',
    },
  ],
}

export const cardDef: NodeDefinition = {
  nodeName: 'RadixCard',
  lib: { mod: 'Card', from: importFrom },
  props: [
    {
      key: 'size',
      type: ['1', '2', '3', '4', '5'],
      default: '1',
    },
    {
      key: 'variant',
      type: ['surface', 'classic', 'ghost'],
      default: 'surface',
    },
  ],
}

export const checkboxDef: NodeDefinition = {
  nodeName: 'RadixCheckbox',
  lib: { mod: 'Checkbox', from: importFrom },
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
      key: 'color',
      type: color,
    },
    {
      key: 'highContrast',
      type: 'boolean',
    },
  ],
}

export const textFieldDef: NodeDefinition = {
  nodeName: 'RadixTextField',
  lib: { mod: 'TextField', from: importFrom },
  componentName: 'TextField.Input',
  leaf: true,
  props: [
    {
      key: 'placeholder',
      type: 'string',
    },
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
      key: 'color',
      type: color,
    },
    {
      key: 'radius',
      type: radius,
    },
  ],
}

export const tableRootDef: NodeDefinition = {
  nodeName: 'RadixTableRoot',
  lib: { mod: 'Table', from: importFrom },
  componentName: 'Table.Root',
  props: [
    {
      key: 'size',
      type: ['1', '2', '3'],
      default: '2',
    },
    {
      key: 'variant',
      type: ['surface', 'ghost'],
      default: 'ghost',
    },
  ],
}

export const tableHeaderDef: NodeDefinition = {
  nodeName: 'RadixTableHeader',
  lib: { mod: 'Table', from: importFrom },
  componentName: 'Table.Header',
}

export const tableBodyDef: NodeDefinition = {
  nodeName: 'RadixTableBody',
  lib: { mod: 'Table', from: importFrom },
  componentName: 'Table.Body',
}

export const tableRowDef: NodeDefinition = {
  nodeName: 'RadixTableRow',
  lib: { mod: 'Table', from: importFrom },
  componentName: 'Table.Row',
}

export const tableCellDef: NodeDefinition = {
  nodeName: 'RadixTableCell',
  lib: { mod: 'Table', from: importFrom },
  componentName: 'Table.Cell',
}

export const tableColumnHeaderCellDef: NodeDefinition = {
  nodeName: 'RadixColumnHeaderCell',
  lib: { mod: 'Table', from: importFrom },
  componentName: 'Table.ColumnHeaderCell',
}

export const tableRowHeaderCellDef: NodeDefinition = {
  nodeName: 'RadixRowHeaderCell',
  lib: { mod: 'Table', from: importFrom },
  componentName: 'Table.RowHeaderCell',
}
