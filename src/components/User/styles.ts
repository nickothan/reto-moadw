//* Libraries
import styled from 'styled-components/macro'

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  margin: auto;
  width: 65%;
  height: 100%;
  text-align: center;
  color: white;

  h2 {
    font-size: 3rem;
  }

  img {
    background-color: royalblue;
    margin: 20px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  & > p:first-child {
    color: #8a8a8a;
  }

  @media only screen and (max-width: 425px) {
    width: 85%;
  }

  @media only screen and (max-width: 999px) {
    width: 85%;
  }
`
export const Donations = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-around;
  align-items: center;
  margin: 30px 0;
  padding: 30px 40px;
  width: 80%;
  border: 1px solid salmon;
  border-radius: 8px;
  text-align: start;

  p {
    font-weight: 600;
  }

  div:first-child {
    border-right: 1px solid;
  }

  div:last-child {
    margin-left: 50px;
  }

  span {
    font-size: 1.5rem;
    font-weight: 900;
  }

  @media only screen and (max-width: 999px) {
    width: 80%;
  }

  @media only screen and (max-width: 767px) {
    width: 90%;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    grid-template-columns: 1fr;
    margin: 20px 0;
    padding: 20px 40px;

    & > div {
      padding: 20px;
    }

    div:first-child {
      border-right: none;
      border-bottom: 1px solid;
      padding-top: 0;
    }
    div:last-child {
      margin-left: 0px;
      margin-top: 0px;
      padding-bottom: 0;
    }
  }
`
