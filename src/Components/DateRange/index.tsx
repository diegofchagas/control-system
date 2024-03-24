import React, { useContext } from 'react'
import { Input } from '../Input'
import { DataContext } from '../../context/DataContext'
import { Form } from './style';

export const DateRange = () => {

  const {inicio,final, changeStartDate,changeEndDate} = useContext(DataContext);

  return (
    <Form>
      <Input label='Início' value={inicio} onChange={({target}) =>changeStartDate(target.value)}/>
      <Input label='Final' value={final} onChange={({target})=> changeEndDate(target.value)}/>
    </Form>
  )
}
