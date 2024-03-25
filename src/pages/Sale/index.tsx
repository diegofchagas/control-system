import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../Hooks/useFetch'
import { DataSalesProps } from '../../context/DataContext'
import { Container } from './style'

export const Sale = () => {
  const {id} = useParams()
  const {data} = useFetch<DataSalesProps>(`https://data.origamid.dev/vendas/${id}`);

  return (
    <Container>
      <div className='id'>ID: {data?.id}</div>
      <div>Nome: {data?.nome}</div>
      <div>divreço: {data?.preco.toLocaleString("pt-br", { style:"currency", currency:'BRl'})}</div>
      <div>Status: {data?.status}</div>
      <div>Pagamento: {data?.pagamento}</div>
    </Container>
  )
}
