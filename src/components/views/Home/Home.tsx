//* Styles
import { StylesHome, StylesUser, Donation } from "./styles"
//* Components
import Button from "../../shared/Button"
import Select from "../../shared/Select"
//* Hooks
import useHome, { UserType } from "./useHome"

const User = (user: UserType) => {
  const { first_name, image, last_name, total } = user
  return (
    <StylesUser>
      <div>
        <img src={image} alt="Perfil" />
        <h3>
          {first_name} {last_name}
        </h3>
      </div>
      <div>
        <Donation>
          <p>TOTAL DONATION</p>
          <span>{total}</span>
        </Donation>
        <Button>Button</Button>
      </div>
    </StylesUser>
  )
}

export default function Home() {
  const { data } = useHome()

  return (
    <StylesHome>
      <div>
        <h1>Donations</h1>
        <Select />
      </div>
      <ul>{data && data.map((user) => <User key={user.id} {...user} />)}</ul>
      <div>
        <Button>Prev</Button>
        <Button>Next</Button>
      </div>
    </StylesHome>
  )
}
