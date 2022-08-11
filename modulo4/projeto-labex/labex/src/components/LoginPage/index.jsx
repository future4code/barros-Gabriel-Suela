import React from 'react'
import {useNavigate} from 'react-router-dom'

function AdminHomePage() {
    const navigate = useNavigate()

    const newTrips = () => {
        navigate('/admin/trips/create')
    }

    const lastPage = () => {
        navigate(-1)
    }

  return (
    <div>
        <p>Admin control</p>
        <button onClick={newTrips}>Nova viagem</button>
        <button onClick={lastPage}>Voltar</button>
    </div>
  )
}

export default AdminHomePage