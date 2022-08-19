import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useProtectedPage } from '../../hook/useProtectedPage'
import useRequestData from '../../hook/useRequestData'
import { BASE_URL } from '../constants/constants'
import * as C from './style'
import { FaTrash } from "react-icons/fa"

function AdminHomePage() {
  const [data, loading, error] = useRequestData(`${BASE_URL}gabriel/trips`)




    useProtectedPage()
    const navigate = useNavigate()

    const newTrips = () => {
        navigate('/admin/trips/create')
    }

    const lastPage = () => {
        navigate(-1)
    }

    const logOut = () => {
      localStorage.removeItem('token')
      navigate('/login')
    }  
    
    const tripsList = data&&data.map((item)=>(
    
    <div key={item.id}>
      <C.Card>
        <p>{item.name}</p>
        <FaTrash color='orange'/>
      </C.Card>
    </div>
    ))
  return (
   
    <C.Container>
        <h1>Admin control</h1>
    <C.ButtonArea>
      <button onClick={lastPage}>Voltar</button>
      <button onClick={newTrips}>Criar Viagem</button>
      <button onClick={logOut}>Logout</button>
    </C.ButtonArea>
    <div>
      {tripsList}
    </div>
    
    
    </C.Container>
    
  )
}

export default AdminHomePage