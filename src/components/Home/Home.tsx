//* libraries
import { StylesHome, StylesUser, Donation } from './styles'

import Button from '../shared/Button'
import Select from '../shared/Select'

const User = () => ()

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
