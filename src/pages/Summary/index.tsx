import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { SalesCharts } from "../../Components/SalesCharts";

export const Summary = () => {
  const { data } = useContext(DataContext);
  return (
    <section>
      <div>
        <div className="vendas">
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
        </div>

        <div className="recebido">
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
        </div>

        <div className="processando">
          <h2>Recebido</h2>
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
        </div>
      </div>
      <div>
        <h2>Gráfico de Vendas</h2>
       {data && <SalesCharts data={data}/> } 
      </div>
    </section>
  );
};
