//* styles
import { UserContainer, Donations } from './styles'
//*components
import Button from '../shared/Button'

export default function User() {
  return (
    <UserContainer>
      <h2>Lorrie Cardenosa</h2>
      <img src='' alt='Perfil image' />
      <p>Yogt-Koyanagi sindrome, unspecified ere</p>
      <Donations>
        <div>
          <p>TOTAL DONATIONS</p>
          <span>143</span>
        </div>
        <div>
          <p>TOTAL DONATED</p>
          <span>$382,883.03</span>
        </div>
      </Donations>
      <Button>MAKE A DONATION</Button>
    </UserContainer>
  )
}
