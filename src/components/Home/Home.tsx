//* libraries
import { StylesHome } from './styles'

import Button from '../shared/Button'
import Select from '../shared/Select'

export default function Home() {
  return (
    <StylesHome>
      <div>
        <h1>Donations</h1>
        <Select />
      </div>
      <ul></ul>
      <div>
        <Button>Prev</Button>
        <Button>Next</Button>
      </div>
    </StylesHome>
  )
}
