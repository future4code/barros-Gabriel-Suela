
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {

  const [users, setUsers] = useState([])
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState ('')

  useEffect(() =>{
    getAllUsers()
  }, [])

  const body = {
    "name": nome,
    "email": email
}

  const getAllUsers = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',{
      headers: {
        Authorization: "gabriel-suela-barros"
      }
    }).then((res)=>{
      setUsers(res.data)
    }).catch((err)=>{
      console.log(err.response)
    })
  }


  const createUser = (e) => {
    e.preventDefault()
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',body,{
      headers: {
        Authorization: "gabriel-suela-barros"
      }
    }).then((res)=>{
      console.log(res.data)
      alert('Usuário criado com sucesso')
      getAllUsers()
    }).catch((err)=>{
      alert('Ops! Alguma coisa deu errado')
      console.log(err)
    })
    
  }

  const handleNome  = (e) =>{
    
    setNome(e.target.value)

  }

  const handleEmail = (e) => {
    
    setEmail(e.target.value)
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
      onClick={createUser}
      >Enviar</button>

      
        
      </form>
     
        {users.map((user)=>{
          return (
            <li key={user.id}>
              {user.name}

            </li>
          )
        })}
     
      
      </div>
    </div>
  );
}

export default App;
