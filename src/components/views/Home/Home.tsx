// img
import Header from "components/shared/Header"
// components
import User from "./components/User"
import Button from "components/shared/Button"
import Select from "components/shared/Select"
// styles
import { WrapperHeader, WrapperUsers, WrapperButtons } from "./styles"
// hooks
import useHome from "./useHome"

const Home = () => {
  const { data } = useHome()

  return (
    <div>
      <Header />
      <div>
        <WrapperHeader>
          <h1>Donations</h1>
          <Select />
        </WrapperHeader>

        <WrapperUsers>
          {data?.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </WrapperUsers>

        <WrapperButtons>
          <Button>prev</Button>
          <Button>next</Button>
        </WrapperButtons>
      </div>
    </div>
  )
}

export default Home
