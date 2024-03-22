import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { CardSale } from "./CardSale";

export const Sales = () => {
  const { data } = useContext(DataContext);
  return (
    <div>
      <ul>
        {data?.map(sales=> <li>
          <CardSale sale={sales}/>
        </li>)}
      </ul>
      
    </div>
  );
};
