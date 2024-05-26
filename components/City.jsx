import React from 'react'
import styled from 'styled-components'

const StyledCity = styled.div`
  margin-bottom: ${props => props.$margin_bottom};
  color: ${({ $light, theme }) => $light ? theme.color.light : theme.color.dark};
`

StyledCity.defaultProps = {
  $margin_bottom: "2rem"
}

const City = (props) => {
  // 除了light剩下的都在rest里
  const { ...rest } = props
  return (
    <StyledCity {...rest} />
  )
}

export default City