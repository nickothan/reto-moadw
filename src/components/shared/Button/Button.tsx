import React from "react"
// styles
import { ButtonWrapper } from "./styles"

type ButtonProps = {
  children: React.ReactNode
  type?: "button" | "submit" | "reset"
}

const Button: React.FC<ButtonProps> = ({ children, ...args }) => (
  <ButtonWrapper type={args.type || "button"} {...args}>
    <div>{children}</div>
  </ButtonWrapper>
)

export default Button
