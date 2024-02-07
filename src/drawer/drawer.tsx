import { Flex, Text } from '@radix-ui/themes'
import { ButtonDrawerItem } from './drawer-items/button-drawer-item'

export function Drawer() {
  return (
    <Flex
      direction="column"
      p="5"
      style={{
        width: 300,
        position: 'fixed',
        left: 0,
        top: 'var(--space-8)',
        bottom: 0,
        backgroundColor: '#fff',
        borderRight: '1px solid var(--gray-4)',
        zIndex: 100,
      }}
    >
      <Text size="5" weight="bold" mb="4">
        Drawer
      </Text>
      <ButtonDrawerItem />
    </Flex>
  )
}
