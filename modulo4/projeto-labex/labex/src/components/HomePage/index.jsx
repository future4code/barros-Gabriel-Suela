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
    
      <section>
       <h1>LabeX </h1>
       <img src='https://images.vexels.com/media/users/3/152536/isolated/preview/401b51c3a9098f12b566121c92009877-mars-planet-icon.png' width={100} />
      </section>
    <div>
      <C.Button onClick={goToTrips}>Ver Viagens</C.Button>
      <C.Button onClick={goToAdmin}>Área de Admin</C.Button>
    </div>
     

    
    </C.Container>
  )
}

export default HomePage