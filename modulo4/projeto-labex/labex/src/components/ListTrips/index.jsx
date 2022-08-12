import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import useRequestData from '../../hook/useRequestData'
import { BASE_URL } from '../constants/constants'
import * as C from './style'


function ListTrips() {
  const [data, loading, error] = useRequestData(`${BASE_URL}gabriel/trips`)

  const navigate = useNavigate()

  const lastPage = () => {
    navigate (-1)
  }

  const goToSubscribe = () => {
    navigate('/trips/application')
  }

  const goToDetails = () => {
    navigate('/admin/trips/:id')
  }


  const tripsList = loading&&data.map((item)=>(
    
      <div key={item.id}>
        <C.Card onClick={goToDetails}>
        <p>Nome: {item.name}</p> 
        <p>Data: {item.date}</p>
        <p>Descrição: {item.description}</p>
        <p>Planeta: {item.planet}</p>
        <p>Duração: {item.durationInDays} dias</p>
        </C.Card>
        
      </div>
    
  ))

  return (
    
    
    <C.Container>
      <h1>Lista de Viagens</h1>
      
      <C.Trips>
      {tripsList}
      
      </C.Trips>
      <C.ButtonArea>
      <button onClick={lastPage}>Voltar</button>
      <button onClick={goToSubscribe}>Inscrever-se</button>
      </C.ButtonArea>
      
      
    </C.Container>
    
  )
}

export default ListTrips