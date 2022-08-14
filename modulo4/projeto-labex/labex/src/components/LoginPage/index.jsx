import React from 'react'
import * as C from './style'
import { useNavigate } from 'react-router-dom'



function LoginPage() {

    const navigate = useNavigate()

    const goLogIn = () => {
        navigate('/admin/trips/list')
    }

    const lastPage = () => {
        navigate(-1)
    }




  return (
    
    <C.Container>
  
        
    <C.FormArea>
    <h1>Login </h1>
    
    
        <form>
        <input type="email" placeholder='E-mail'/>
        <input type='password' placeholder='Senha'/>

        </form>
       
    <C.ButtonArea>
    <button onClick={lastPage}>Voltar</button>
    <button onClick={goLogIn}>Entrar</button>
    </C.ButtonArea>
    </C.FormArea>
     

    </C.Container>

  
    
  
  )
}

export default LoginPage