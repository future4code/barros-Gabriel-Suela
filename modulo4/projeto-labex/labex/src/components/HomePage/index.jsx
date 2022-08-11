import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as C from './style'

function HomePage() {

    const navigate = useNavigate()

    


  return (
    <>
    <C.Container>
     <h1>LabeX</h1>
     <C.Button>Ver Viagens</C.Button>
     <C.Button>Área de Admin</C.Button>

    </C.Container>
    
    </>
  )
}

export default HomePage