
import './App.css';
import axios from 'axios';
import { useState } from 'react';


function App() {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [usuario, setUsuario] = useState([])

  const usuarioMap = usuario.map((item) => {
    return (
      <li key={item.id}
      nome={item.nome}
      email={item.email}
      />
    )
  })

  console.log(usuarioMap)
  const handleNome = (e) => {
    e.preventDefault()
    setNome(e.target.value)
    console.log(nome)
  }

  const handleEmail = (e) => {
    e.preventDefault()
    setEmail(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    const newUser = [...usuario, {nome: usuario, email:email}]
    setUsuario(newUser)
    setNome('')
    setEmail('')
    alert('Usuario cadastrado')
  }


  return (
    <div className="App">
      <div>
      <button>Trocar de tela</button>
      <form>

      <input 
      placeholder='Digite seu nome' 
      type="text" 
      name="nome"
      value={nome}
      onChange={handleNome}
      />

      <input  
      placeholder="Digite seu email"
      type="email" 
      name="email"
      value={email}
      onChange={handleEmail}
      />
      <button
      onClick={handleClick}
      >Enviar</button>

      
        
      </form>
     
        {usuarioMap}
     
      
      </div>
    </div>
  );
}

export default App;
