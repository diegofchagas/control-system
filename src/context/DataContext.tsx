import { PropsWithChildren, createContext, useState } from "react";
import { format, subDays } from 'date-fns';
import { useFetch } from "../Hooks/useFetch";

export type DataContextProps = {
  data: DataSalesProps[] | null;
  loading: boolean;
  error: string | null;
  inicio: string;
  final: string;
  linkActive: string;
  changeStartDate: (date: string) => void;
  changeEndDate: (date: string) => void;
  changeLinkActive: (link:string)=> void;
};

export type DataSalesProps = {
  id: number;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "pix" | "cartao";
  parcelas: number | null;
  data: string;
};

export const DataContext = createContext({} as DataContextProps);

const getDaysAgo = (days: number)=> {
  const date = subDays(new Date(), days);
  return format(date, 'yyyy-MM-dd');
}

export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const [inicio, setInicio] = useState(getDaysAgo(20));
  const [final, setFinal] = useState(getDaysAgo(0));
  const [linkActive, setLinkActive] = useState("")

  const { data, loading, error } = useFetch<DataSalesProps[]>(
    `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
  );
  


  const changeStartDate = (date: string) => {
    setInicio(date);
  };

  const changeEndDate = (date: string) => {
    setFinal(date);
  };

  const changeLinkActive = (link: string) =>{
    setLinkActive(link)
  }

  return (
    <DataContext.Provider
      value={{
        data,
        loading,
        error,
        inicio,
        final,
        changeStartDate,
        changeEndDate,
        changeLinkActive,
        linkActive
      }}
    >
      {children},
    </DataContext.Provider>
  );
};
