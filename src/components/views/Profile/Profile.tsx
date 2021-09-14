//* styles
import { UserContainer, Donations } from "./styles"
//*components
import Button from "../../shared/Button"

import { useParams } from "react-router-dom"
import useProfile from "./useProfile"

const Profile = () => {
  const { id } = useParams<{ id?: string }>()
  const { profile } = useProfile(Number(id) || 0)

  return (
    <UserContainer>
      <h2>
        {profile?.first_name} <br /> {profile?.last_name}
      </h2>
      <img src={profile?.image} alt="Perfil" />
      <p>{profile?.description}</p>
      <Donations>
        <div>
          <p>TOTAL DONATIONS</p>
          <span>{profile?.donations}</span>
        </div>
        <div>
          <p>TOTAL DONATED</p>
          <span>{profile?.total}</span>
        </div>
      </Donations>
      <Button>MAKE A DONATION</Button>
    </UserContainer>
  )
}

export default Profile
