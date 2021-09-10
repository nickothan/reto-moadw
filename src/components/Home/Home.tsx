//* libraries
import { useEffect, useState } from 'react'

import { StylesHome, StylesUser, Donation } from './styles'

import Button from '../shared/Button'
import Select from '../shared/Select'

const API_URL =
  'https://moadw-challenge.herokuapp.com/api/find-many?skip=0&limit=3&sort=0'

const User = () => {
  const [totalReactPackages, setTotalReactPackages] = useState(null)

  useEffect(() => {
    // GET reques tusing fetch inside useEffect React hook
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(':: data : ', data)
        setTotalReactPackages(data.total)
      })

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, [])

  return (
    <StylesUser>
      {console.log(':: Data : ', totalReactPackages)}
      <div>
        <img src='' alt='Perfil' />
        <h3>Lorrie Cardelosa</h3>
      </div>
      <div>
        <Donation>
          <p>TOTAL DONATION</p>
          <span>143</span>
        </Donation>
        <Button>Button</Button>
      </div>
    </StylesUser>
  )
}

export default function Home() {
  return (
    <StylesHome>
      <div>
        <h1>Donations</h1>
        <Select />
      </div>
      <ul>
        <User />
        <User />
        <User />
      </ul>
      <div>
        <Button>Prev</Button>
        <Button>Next</Button>
      </div>
    </StylesHome>
  )
}
