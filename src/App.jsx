import { useState } from "react";
import { Wheel } from "react-custom-roulette";
import './App.css'

const data = [
  { option: "Tente outra vez", style: { backgroundColor: "#0033A0", textColor: "white" } },
  { 
    image: { uri: "https://sindelphos.delphos.com.br:8443/apex/cr/r/2050/files/static/v60/logo-caixa-residencial.png", sizeMultiplier: 0.5, landscape: true},
    option: "Ganhou!",
    style: { backgroundColor: "#ffffff" } 
  },
  { option: "Não foi dessa vez", style: { backgroundColor: "#0033A0", textColor: "white" } },
  { 
    image: { uri: "https://sindelphos.delphos.com.br:8443/apex/cr/r/2050/files/static/v60/logo-caixa-residencial.png", sizeMultiplier: 0.5, landscape: true},
    option: "Ganhou!",
    style: { backgroundColor: "#ffffff" } 
  },
  { option: "PASSE A VEZ", style: { backgroundColor: "#0033A0", textColor: "white" } },
  { 
    image: { uri: "https://sindelphos.delphos.com.br:8443/apex/cr/r/2050/files/static/v60/logo-caixa-residencial.png", sizeMultiplier: 0.5, landscape: true},
    option: "Ganhou!",
    style: { backgroundColor: "#ffffff" } 
  },
];

function App() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length); // Escolhe um segmento aleatório
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh"}}>
      <div style={{ marginBottom: "30px"}}>
        <h1 style={{ margin: "10px 0px 5px 0", verticalAlign: "middle"}}>Roleta do</h1>
        <img src="https://sindelphos.delphos.com.br:8443/apex/cr/r/2050/files/static/v60/logo-caixa-residencial.png" alt="Logo Caixa Residencial" width={200} height={85.5}/>
      </div>
      <div style={{ textAlign: "center" }}>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          onStopSpinning={() => {
            setMustSpin(false);
            alert(`Resultado: ${data[prizeNumber].option}`);
          }}
          outerBorderWidth={2}
          radiusLineWidth={2}
          textDistance={55}
        />
        <button onClick={handleSpinClick} style={{ marginTop: "20px", padding: "10px 20px", backgroundColor: "#ff9a4e"}}>
          Girar Roleta
        </button>
      </div>
    </div>
  );
};

export default App
