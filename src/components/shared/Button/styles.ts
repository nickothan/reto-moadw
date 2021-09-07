// ? Librerias
import styled from 'styled-components/macro'
import { ButtonProps } from './Button'

const Button = styled.button<ButtonProps>`
  ${({
    primary: isPrimary
  }) => {
    const defaultStyle = `
      display: inline-block;
      min-width: 135px;
      color: #8bcee8;
      font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      line-height: 1.5;
      font-weight: 400;
      text-align: center;
      vertical-align: middle;
      text-decoration: none;
      outline: none;
      border: solid 1px;
      transition: all 0.3s linear;
      cursor: pointer;
    `

    const styles = `
    ${defaultStyle}
    ${isPrimary && primary}
    `

    return styles
  }}
