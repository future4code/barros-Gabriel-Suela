import React from 'react'
import {useNavigate} from 'react-router-dom'
import * as C from './style'

function CreateTripPage() {

    const navigate = useNavigate()


  return (
    <C.Container>

    <form>

    <input type="text"/>
    

    </form>


    </C.Container>
  )
}

export default CreateTripPage