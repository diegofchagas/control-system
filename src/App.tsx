import { Header } from "./Components/Header";
import { Sidenav } from "./Components/Sidenav";
import { Summary } from "./pages/Summary";

function App() {
  return (
    <>
      <Sidenav />
      <main>
        <Header />
        <Summary />
      </main>
    </>
  );
}

export default App;
