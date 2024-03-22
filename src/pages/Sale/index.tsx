import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../Hooks/useFetch'
import { DataSalesProps } from '../../context/DataContext'

export const Sale = () => {
  const {id} = useParams()
  const {data} = useFetch<DataSalesProps>(`https://data.origamid.dev/vendas/${id}`);

  return (
    <div>
      <p>ID: {data?.id}</p>
      <p>Nome:{data?.nome}</p>
      <p>Preço:{data?.preco}</p>
      <p>Status:{data?.status}</p>
      <p>Pagamento:{data?.pagamento}</p>

    </div>
  )
}
