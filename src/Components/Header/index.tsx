import { useEffect, useState } from "react";
import { DateRange } from "../DateRange";
import { Months } from "../Months";
import { useLocation } from "react-router-dom";
import { HeaderContainer,MonthsContainer } from "./style";

export const Header = () => {
  const [link, setLink] = useState("Resumo");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setLink("Resumo");
    } else if (location.pathname === "/sales") {
      setLink("Vendas");
    }
  }, [location]);

  return (
    <HeaderContainer>
      <DateRange />
      <MonthsContainer>
        <h2>{link}</h2>
        <Months />
      </MonthsContainer>
    </HeaderContainer>
  );
};
