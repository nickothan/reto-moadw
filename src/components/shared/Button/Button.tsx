//? Librerias
import { ReactNode } from 'react'
import { StyledButton } from './styles'

//? Propiedades del coponente boton
export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset' | undefined
  children?: ReactNode | undefined
}

const Button = ({ type = 'button', children }: ButtonProps) => (
  <StyledButton type={type}>{children}</StyledButton>
)

export default Button
