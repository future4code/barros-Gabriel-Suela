import React, { useEffect } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { useProtectedPage } from '../../hook/useProtectedPage'
import useRequestData from '../../hook/useRequestData'
import {BASE_URL} from '../constants/constants'
import { useState } from 'react'
import axios from 'axios'

function TripDetails() {

    const [tripDetails, setTripDetails] = useState([])
    const [candidate, setCandidate] = useState([])
    const [approved, setApproved] = useState([])

    const navigate = useNavigate()
    const trip = useParams()
    const token = localStorage.getItem('token')
    useProtectedPage();


    const getTripDetail = (id) => {
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
    
    
    console.log(getTripDetail)
 

   

  return (
    <div>

      <h1>trips</h1>
  
    </div>
  )
}

export default TripDetails