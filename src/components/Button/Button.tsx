import React, { type FC, type ReactNode } from 'react'

interface Props{
  children: ReactNode
}

const Button:FC<Props> = ({children}) => <button>{children}</button>


export default Button