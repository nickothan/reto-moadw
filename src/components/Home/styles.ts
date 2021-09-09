import styled from 'styled-components/macro'

export const StylesHome = styled.div`
  padding: 20px 0;
  margin: auto;
  width: 65%;
  height: 100%;
  color: white;

  h1 {
    font-size: 3rem;
  }

  & > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 20px;
  }

  & > div:last-child {
    display: flex;
    justify-content: space-evenly;
    margin: 30px;
  }

  @media only screen and (max-width: 992px) {
    width: 80%;
  }
  @media only screen and (max-width: 768px) {
    width: 90%;
  }
  @media only screen and (max-width: 576px) {
    padding-top: 0;
    width: 90%;

    & > div:first-child {
      display: flex;
      flex-direction: column;
    }
  }
`
export const StylesUser = styled.li`
  margin: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 30px 20px;
  border: 2px solid salmon;
  border-radius: 8px;

  & > div {
    padding: 0 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  h3 {
    margin-left: 20px;
    font-size: 2rem;
  }

  img {
    background-color: salmon;
    min-width: 50px;
    width: 90px;
    min-height: 50px;
    height: 90px;
    border-radius: 50%;
  }

  @media only screen and (max-width: 576px) {
    grid-template-columns: 1fr;
    padding: 20px;

    & > div:first-child {
      margin-bottom: 10px;
      padding-bottom: 15px;
      justify-content: space-around;
      border-bottom: 2px solid salmon;
    }

    & > div:last-child {
      justify-content: space-between;
    }

    img {
      width: 70px;
      height: 70px;
    }
  }
`

export const Donation = styled.div`
  p {
    font-weight: 600;
  }

  span {
    font-size: 1.9rem;
    font-weight: 700;
  }
`
