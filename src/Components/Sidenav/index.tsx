import { House, Storefront } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";


export const Sidenav = () => {
  return (
    <div>
      <h1>Control System</h1>
      <nav>
        <ul>
          <li>
            <span>
              {" "}
              <House />{" "}
            </span>
            <NavLink to="/">Resumo</NavLink>
          </li>
          <li>
            <span>
              {" "}
              <Storefront />{" "}
            </span>
            <NavLink to="/sales">Vendas</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
