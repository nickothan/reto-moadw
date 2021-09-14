import styled from "styled-components/macro"

export const Wrapper = styled.div``

export const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 40px;

  min-width: 133px;
  min-height: 36px;

  position: relative;
  background: black;
  background-clip: padding-box;
  border: solid 1px transparent;
  border-radius: 15px;

  cursor: pointer;
  transition: all 5s linear;

  > div {
    font-size: 18px;
    font-weight: bold;
    background: linear-gradient(to right, #74ede6, #9fc3f9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    background: linear-gradient(to right, #74ede6, #9fc3f9);
  }

  img {
    max-width: 119px;
    max-height: 119px;
    border-radius: 50%;
    overflow: hidden;
  }
`
