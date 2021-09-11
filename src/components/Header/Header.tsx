//* Styles
import { StyledHeader, ContainerButton } from './styles'
//* Logos
import { ReactComponent as Logo } from '../../assets/Logo.svg'
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg'

const Header = () => (
  <StyledHeader>
    <ContainerButton>
      <ArrowLeft />
    </ContainerButton>

    <Logo />
  </StyledHeader>
)

export default Header
