import styled from "styled-components/macro"

export const Wrapper = styled.div``

export const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-weight: Bold;
    font-size: 70px;

    background: linear-gradient(to right, #74ede6, #9fc3f9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`

export const WrapperUsers = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-bottom: 36px;
`

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 16px;
  margin-bottom: 36px;
`
