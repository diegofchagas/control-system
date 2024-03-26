import React from 'react'

import { MontButton } from '../MonthButton'
import { ButtonsContainer } from './style'

export const Months = () => {


  return (
    <ButtonsContainer>
      <MontButton month={-3}/>
      <MontButton month={-2}/>
      <MontButton month={-1}/>
      <MontButton month={0}/>
    </ButtonsContainer>
  )
}
