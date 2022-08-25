import React, { useEffect } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { useProtectedPage } from '../../hook/useProtectedPage'
import useRequestData from '../../hook/useRequestData'
import {BASE_URL} from '../../components/constants/constants'
import { useState } from 'react'
import axios from 'axios'
import * as C from './style'
import {lastPage} from '../../routes/Coordinator'


function TripDetails() {

    const [tripDetails, setTripDetails] = useState({})
    const [candidate, setCandidate] = useState([])
    const [approved, setApproved] = useState([])
    let {id} = useParams()
    const navigate = useNavigate()
   
    const token = localStorage.getItem('token')
    useProtectedPage();


    const approveCandidate = (candidateId) => {
      const body = {
        approved: true
      }
      const token = localStorage.getItem('token')
      axios.put(`${BASE_URL}trips/${id}/cadidates/${candidateId}/decide`, body, {headers:{auth:token}})
      .then((res)=>{
        alert('Cadidato aprovado!')
      }).catch((err)=>{
        console.log(err.response);
      })

    }

    const reproveCandidate = (candidateId) => {
      const body = {
        approved: false
      }
      const token = localStorage.getItem('token')

      axios.put(`${BASE_URL}trips/${id}/${candidateId}/decide`, body, {headers:{auth:token}})
      .then((res)=>{
        alert('Candidato reprovado')
        console.log(res.data.trip);
      })
      .catch((err)=>{
        alert('Ops! algo de errado')
        console.log(err.response);
      })
    }


    const getTripDetail = () => {
      axios.get(`${BASE_URL}gabriel/trip/${id}`, {headers:{
        auth:token
      }}).then((res)=>{
        setTripDetails(res.data.trip)
      }).catch((err)=>{
        console.log(err)
      })
    }

    useEffect(()=>{
      getTripDetail()
    }, [])


    
   
    const candidatesList = tripDetails.candidates && tripDetails.candidates.map ((item)=>{
      return (
        <C.Card key={item.id}>
          <h3>Candidatos</h3>
          <p>Nome: {item.name}</p> 
          <p>Idade: {item.age}</p>
          <p>Candidatura: {item.applicationText}</p>
          <p>Profissão: {item.profession}</p>
          <p>Pais: {item.country}</p>
          <C.ButtonArea>
          <button onClick={()=> approveCandidate(item.id, item.name)}>Aprovar</button>
          <button onClick={()=> reproveCandidate(item.id, item.name)}>Reprovar</button>
          </C.ButtonArea>

        </C.Card>
      )
    })
 
    
   

  return (
    <C.Container>
      <h1>Detalhes da viagem:</h1>
      <h1>{tripDetails.name}</h1>

      <section>
      <p>Descrição: {tripDetails.description}</p>
      <p>Planeta: {tripDetails.planet}</p>
      <p>Data: {tripDetails.date}</p>
      <p>Duração: {tripDetails.durationInDays} dias</p>
      </section>
    
      {candidatesList}

      <button onClick={()=>lastPage(navigate)}>Voltar</button>
      
    </C.Container>
  )
}

export default TripDetails