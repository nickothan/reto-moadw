import { StyledSelect } from './styles'

const Select = () => (
  <StyledSelect defaultValue=''>
    <option value='value1' selected>
      Donations
    </option>
    <option value='value2'>Name</option>
    <option value='value3'>Other</option>
  </StyledSelect>
)

export default Select
