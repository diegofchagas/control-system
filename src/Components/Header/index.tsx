import { useEffect, useState } from "react";
import { DateRange } from "../DateRange";
import { Months } from "../Months";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [link, setLink] = useState("summary");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setLink("summary");
    } else if (location.pathname === "/sales") {
      setLink("sales");
    }
  }, [location]);

  return (
    <header>
      <div>
        <DateRange />
        <h2>{link}</h2>
      </div>

      <Months />
    </header>
  );
};
