import { PropsWithChildren, createContext } from 'react'
import { useFetch } from '../Hooks/useFetch'

type DataContextProps ={
  data: DataSalesProps[] | null;
  loading:boolean;
  error: string | null
}

type DataSalesProps ={
  id:number;
  nome:string;
  preco:number;
  status:string;
  pagamento:string;
  parcelas: number | null;
  data: string;
}

export const DataContext = createContext({ } as DataContextProps)

export const DataContextProvider = ({children}: PropsWithChildren) => {
   const {data,loading,error} = useFetch<DataSalesProps[]>('https://data.origamid.dev/vendas/')
  return (
    <DataContext.Provider value={{data, loading,error}}>
      {children}
    </DataContext.Provider>
  )
}
