//* Styles
import { StyledHeader, ContainerButton } from "./styles"
//* Logos
import { ReactComponent as Logo } from "assets/Logo.svg"
import { ReactComponent as ArrowLeft } from "assets/arrow-left.svg"
//* Routing
import { Link } from "react-router-dom"

const Header = () => (
  <StyledHeader>
    <ContainerButton>
      <Link to="/home">
        <ArrowLeft />
      </Link>
    </ContainerButton>

    <Logo />
  </StyledHeader>
)

export default Header
