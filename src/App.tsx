import { BrowserRouter } from "react-router-dom";
import { Header } from "./Components/Header";
import { Sidenav } from "./Components/Sidenav";
//import { Sales } from "./pages/Sales";
//import { Summary } from "./pages/Summary";
import { Router } from "./Router";

function App() {
  return (
    <BrowserRouter>
      <Sidenav />
      <main>
        <Header />
        <Router/>
      </main>
    </BrowserRouter>
  );
}

export default App;
