
import { ReactNode } from 'react'
import { StyledButton } from './styles'

//* Props of Button

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset' | undefined
  children?: ReactNode | undefined
}

const Button = ({ type = 'button', children }: ButtonProps) => (
  <StyledButton type={type}>{children}</StyledButton>
)

export default Button
