import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { SalesCharts } from "../../Components/SalesCharts";
import { BoxContainer, ChartContainer, SummaryContainer } from "./style";

export const Summary = () => {
  const { data } = useContext(DataContext);
  return (
    <section>
      <SummaryContainer>
        <BoxContainer>
          <h2>Vendas</h2>
          <span>
            {data
              ?.reduce((acc, total) => {
                return acc + total.preco;
              }, 0)
              .toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
          </span>
        </BoxContainer>

        <BoxContainer>
          <h2>Recebido</h2>
          <span>
            {data
              ?.filter((item) => item.status === "pago")
              .reduce((acc, total) => {
                return acc + total.preco;
              }, 0)
              .toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
          </span>
        </BoxContainer>

        <BoxContainer className="processando">
          <h2>Processando</h2>
          <span>
            {data
              ?.filter((item) => item.status === "processando")
              .reduce((acc, total) => {
                return acc + total.preco;
              }, 0)
              .toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
          </span>
        </BoxContainer>
      </SummaryContainer>

      <ChartContainer>
        {data && <SalesCharts data={data}/> } 
      </ChartContainer>

    </section>
  );
};
