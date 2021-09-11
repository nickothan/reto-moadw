import styled from 'styled-components/macro'

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 30px 0 20px 0;
  width: 60%;
  border-bottom: 2px solid gray;
  background-color: transparent;

  @media only screen and (max-width: 999px) {
    width: 70%;
  }
  @media only screen and (max-width: 767px) {
    width: 80%;
  }
  @media only screen and (max-width: 425px) {
    width: 85%;
  }
`
export const ContainerButton = styled.div`
  position: absolute;
`
