import { useHistory } from "react-router-dom"
// styles
import {
  WrapperUserBox,
  Name,
  DonationText,
  DonationNumber,
  Button,
} from "./styles"
// svg
import { ReactComponent as BackIcon } from "assets/arrow-right.svg"
// types
import { UserType } from "../../useHome"

const Src =
  "https://admin.freetour.com/images/tours/10180/free-nice-guided-tour-in-spanish-01.jpg"

const User: React.FC<UserType> = (user) => {
  let history = useHistory()
  const { id, first_name, last_name, image, total } = user

  const handleClick = (id: number) => {
    history.push(`/profile/${id}`)
  }

  return (
    <WrapperUserBox>
      <img src={image || Src} alt="logo" />
      <Name>
        {first_name} {last_name}
      </Name>
      <div>
        <DonationText>Total Donations</DonationText>
        <DonationNumber>{total}</DonationNumber>
      </div>
      <Button onClick={() => handleClick(id)}>
        <BackIcon />
      </Button>
    </WrapperUserBox>
  )
}

export default User
