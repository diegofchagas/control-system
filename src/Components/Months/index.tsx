import React from 'react'

import { MontButton } from '../MonthButton'

export const Months = () => {


  return (
    <div style={{display:'flex', gap:'1rem'}}>
      <MontButton month={-2}/>
      <MontButton month={-1}/>
      <MontButton month={0}/>
    </div>
  )
}
