import React from 'react'
import {useNavigate} from 'react-router-dom'
import * as C from './style'

function AdminHomePage() {
    const navigate = useNavigate()

    const newTrips = () => {
        navigate('/admin/trips/create')
    }

    const lastPage = () => {
        navigate(-1)
    }

  return (
    <>
    <C.Container>
        <h1>Admin control</h1>
        
    </C.Container>
    <C.ButtonArea>
      <button onClick={lastPage}>Voltar</button>
      <button onClick={newTrips}>Criar Viagem</button>
      <button>Logout</button>
    </C.ButtonArea>
    
    </>
  )
}

export default AdminHomePage