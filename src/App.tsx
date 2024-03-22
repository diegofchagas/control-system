import { BrowserRouter } from "react-router-dom";
import { Header } from "./Components/Header";
import { Sidenav } from "./Components/Sidenav";
import { Router } from "./Router";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Sidenav />
        <main>
          <Header />
          <Router />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
