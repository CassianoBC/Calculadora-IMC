import CalculadoraIMC from "./components/Calculadora";
import Footer from "./components/Footer";
import Tabela from "./components/Tabela";

import "./global.css";

function App() {

  return (
    <>
      <div className="main-content">
        <CalculadoraIMC />
        <Tabela />
      </div>
      <Footer />
    </>
  )
}

export default App
