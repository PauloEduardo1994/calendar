import { Card } from '@siakit/card'
import { styled } from '@siakit/core'

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
