import { Gear, House, Storefront } from "@phosphor-icons/react";
import { NavLink, useLocation } from "react-router-dom";
import { ContainerSide, Nav } from "./style";
import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext";

export const Sidenav = () => {
  const { linkActive, changeLinkActive } = useContext(DataContext);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      changeLinkActive('/');
    } else if (location.pathname === "/sales") {
      changeLinkActive("/sales");
    }
  }, [changeLinkActive, location]);

  return (
    <ContainerSide>
      <h1>Control System</h1>
      <Nav>
        <ul>
          <div>
          <li className={linkActive === '/'  ? "active-link" : ''}>
            <span>
              {" "}
              <House color="#fff" weight="bold" size={24} />{" "}
            </span>
            <NavLink to="/">Resumo</NavLink>
          </li>
          <li className={linkActive === '/sales'  ? "active-link" : ''}>
            <span>
              {" "}
              <Storefront color="#fff" weight="bold" size={24} />
            </span>
            <NavLink to="/sales">Vendas</NavLink>
          </li>
          </div>
          <li style={{marginTop:'2rem'}}>
            <span>
              {" "}
              <Gear color="#fff" weight="bold" size={24} />
            </span>
            <a>Configurções</a>
          </li>
        </ul>
      </Nav>
    </ContainerSide>
  );
};
