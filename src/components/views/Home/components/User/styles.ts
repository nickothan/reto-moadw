import styled from "styled-components/macro"

export const Wrapper = styled.div``

export const WrapperUserBox = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 2fr 3fr 3fr 1fr;

  padding: 32px;

  position: relative;
  background: black;
  background-clip: padding-box;
  border: solid 1px transparent;
  border-radius: 1em;

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
    background: linear-gradient(to right, #ee8f00, #50d98b, #00c0f5);
  }

  img {
    width: 119px;
    height: 119px;
    border-radius: 50%;
    overflow: hidden;
  }
`

export const Name = styled.div`
  font-size: 40px;
  font-weight: bold;
`

export const DonationText = styled.div`
  font-size: 20px;
  font-weight: bold;
`

export const DonationNumber = styled.div`
  font-size: 40px;
  font-weight: bold;
`

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 59px;
  height: 59px;
  background: linear-gradient(to right, #74ede6, #9fc3f9);

  border-radius: 50%;

  svg {
    height: 30px;
  }
`
