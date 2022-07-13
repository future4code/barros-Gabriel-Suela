
import { useState } from 'react';
import './App.css';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import EtapaFinal from './components/EtapaFinal';


function App() {

const [etapa, setEtapa] = useState(0)



let next;
 switch (etapa) {
  case 1:
    next = <Etapa1></Etapa1>
    console.log('teste')
  break;
  case 2:
    next = <Etapa2></Etapa2>
    console.log('teste 2');
  break;
  case 3:
    next = <Etapa3></Etapa3>
    console.log('teste 3');
  break;
  case 4:
    next = <EtapaFinal></EtapaFinal>
    console.log('teste 4');
  break;
 
 }


const soma = (e) => {
  e.preventDefault()
  setEtapa(etapa + 1)
  console.log('click')
}




  return (
    <div className="App">
      {next}
      <button onClick={soma}>Próxima etapa</button>
    </div>
  );
}

export default App;
