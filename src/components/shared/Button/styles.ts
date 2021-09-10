//* Libraries
import styled from 'styled-components/macro'

export const StyledButton = styled.button`
  display: inline-block;
  padding: 7px 15px;
  color: #8bcee8;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 600;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  background-color: transparent;
  outline: none;
  border: solid 1px;
  border-radius: 25px;
  transition: all 0.3s linear;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to right, #8bcee8, #9ec3f8);
    color: #000;
    border: none;
  }
`
