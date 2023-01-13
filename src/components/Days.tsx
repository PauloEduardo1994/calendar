import dayjs from 'dayjs'

import { Flex } from '@siakit/layout'
import { Text } from '@siakit/text'

const teste = dayjs().daysInMonth()
const teste2 = teste - 1
console.log(teste, teste2)

export function Days() {
  return (
    <>
      <Flex>
        <Text>teste</Text>
      </Flex>
      <Flex>
        <Text>teste</Text>
      </Flex>
      <Flex>
        <Text>teste</Text>
      </Flex>
    </>
  )
}
