
import './App.css';
import eu from './eu.png';

function App() {
  function alertaBoaNoite (){
    alert ("Boa noite!")
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Olá! Eu sou o Gabriel</h1>
        <img src={eu} className="App-logo" alt="logo" />
        <p>
          Este é o meu primeiro site React
        </p>
       <button onClick={alertaBoaNoite}> Aperte este botão </button>
      </header>
    </div>
  );
}

export default App;
