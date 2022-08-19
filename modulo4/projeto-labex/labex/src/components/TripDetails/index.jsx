import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useProtectedPage } from '../../hook/useProtectedPage'
import useRequestData from '../../hook/useRequestData'
import {BASE_URL} from '../constants/constants'
import { useState } from 'react'
import axios from 'axios'

function TripDetails(id) {

    const navigate = useNavigate()

    useProtectedPage();
    
    

    

  return (
    <div>

      <h1>trips</h1>
    </div>
  )
}

export default TripDetails