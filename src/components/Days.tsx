import dayjs from 'dayjs'

import { Flex } from '@siakit/layout'
import { Text } from '@siakit/text'

const days = dayjs().daysInMonth()
console.log(days)

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
