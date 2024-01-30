import React, { FC, ReactNode } from 'react'
import { Text } from 'braid-design-system';

interface Props{
  children: ReactNode
}

const BraidText:FC<Props> = ({children}) => {
  return (
    <Text>{children}</Text>
  )
}

export default BraidText