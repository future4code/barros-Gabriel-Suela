import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as C from './style'

function HomePage() {

    const navigate = useNavigate()

    const goToTrips = () => {
      navigate ('/trips/list')
    }

    const goToAdmin = () => {
      navigate('/login')
    }


  return (
    <C.Container>
    

     <h1>LabeX</h1>
     <C.Button onClick={goToTrips}>Ver Viagens</C.Button>
     <C.Button onClick={goToAdmin}>Área de Admin</C.Button>

 
    
    </C.Container>
  )
}

export default HomePage