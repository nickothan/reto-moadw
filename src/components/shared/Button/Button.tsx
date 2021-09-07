//? Librerias
import { ReactNode } from 'react'
import { StyledButton } from './styles'

//? Propiedades del coponente boton
export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset' | undefined
  children?: ReactNode | undefined
  primary?: boolean
}

const Button = ({ type = 'button', children, ...arg }: ButtonProps) => (
  <StyledButton type={type} {...arg}>
    {children}
  </StyledButton>
)

export default Button
