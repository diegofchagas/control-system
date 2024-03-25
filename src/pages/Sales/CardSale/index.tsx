import { NavLink } from "react-router-dom";
import { DataSalesProps } from "../../../context/DataContext";
import { CardContainer } from "./style";

type SaleProps = {
  sale: DataSalesProps;
};

export const CardSale = ({ sale }: SaleProps) => {
  return (
    <CardContainer style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <NavLink to={`/sales/${sale.id}`}>{sale.id}</NavLink>
        <span>{sale.nome}</span>
      </div>
      <span>
        {sale.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
    </CardContainer>
  );
};
