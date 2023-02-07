import { Card } from '@siakit/card'
import { styled } from '@siakit/core'
import { Flex } from '@siakit/layout'

export const Container = styled(Card, {
  // border: '1px solid lightgrey',
  // borderRadius: '4px',
  margin: '16px',
  boxShadow: '$lg',
  backgroundColor: 'gray',
  // transition: `backgroundColor 4s ease`,
  // backgroundColor: `${(props: any) =>
  //   props.isDragging ? 'lightblue' : 'white'}`,
})

export const CardMonth = styled(Card, {
  boxShadow: '$lg',
  borderColor: '$violet11',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ColorDay = styled(Flex, {
  boxShadow: '$lg',
  backgroundColor: '$violet9',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '4px',
  padding: '5px',
  margin: '-5px',
})
