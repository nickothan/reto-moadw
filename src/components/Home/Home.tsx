//* libraries
import { StylesHome, StylesUser, Donation } from './styles'

import Button from '../shared/Button'
import Select from '../shared/Select'

const User = () => (
  <StylesUser>
    <img src='' alt='Image Perfil' />
    <h3>Lorrie Cardelosa</h3>
    <Donation>
      <p>TOTAL DONATION</p>
      <span>143</span>
    </Donation>
    <Button>Button</Button>
  </StylesUser>
)

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
