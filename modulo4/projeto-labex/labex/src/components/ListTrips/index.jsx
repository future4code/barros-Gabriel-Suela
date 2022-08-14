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


  const tripsList = data&&data.map((item)=>(
    
      <div key={item.id}>
        
        <C.Card>
        <p>Nome: {item.name}</p> 
        <p>Data: {item.date}</p>
        <p>Descrição: {item.description}</p>
        <p>Planeta: {item.planet}</p>
        <p>Duração: {item.durationInDays} dias</p>
        <button onClick={goToDetails}>Aplicar</button>
        </C.Card>
        
      </div>
    
  ))

  return (
    
    
    <C.Container>
   
        <h1>Lista de Viagens</h1>
        
    
      
      
      <C.Trips>
      <button onClick={lastPage}>Voltar</button>
      {loading && <span>Carregando...</span>}
      {!loading && error && <span>Ocorreu um erro</span>}
      {tripsList}
      
      </C.Trips>
  
      
      
    </C.Container>
    
  )
}

export default ListTrips