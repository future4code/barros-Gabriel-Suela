import React, { useEffect } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { useProtectedPage } from '../../hook/useProtectedPage'
import useRequestData from '../../hook/useRequestData'
import {BASE_URL} from '../../components/constants/constants'
import { useState } from 'react'
import axios from 'axios'

function TripDetails() {

    const [tripDetails, setTripDetails] = useState([])
    const [candidate, setCandidate] = useState([])
    const [approved, setApproved] = useState([])
    let {id} = useParams()
    const navigate = useNavigate()
   
    const token = localStorage.getItem('token')
    useProtectedPage();


    const approveCandidate = (id) => {
      const body = {
        approved: true
      }
      const token = localStorage.getItem('token')
      axios.put(`${BASE_URL}trips/${id}/cadidates/${id}/decide`, body, {headers:{auth:token}})
      .then((res)=>{
        alert('Cadidato aprovado!')
      }).catch((err)=>{
        console.log(err.response);
      })

    }
    


    const getTripDetail = () => {
      axios.get(`${BASE_URL}trip/${id}`, {headers:{
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
    
    
    console.log()
 

   

  return (
    <div>

      <h1>trips details</h1>
      <p>{getTripDetail.name}</p>
      <p>{getTripDetail.description}</p>
      <p>{getTripDetail.planet}</p>
      <p>{getTripDetail.durationInDays}</p>
      <p>{getTripDetail.date}</p>
      <p>{getTripDetail.description}</p>
      <p>{getTripDetail.candidate}</p>
    </div>
  )
}

export default TripDetails