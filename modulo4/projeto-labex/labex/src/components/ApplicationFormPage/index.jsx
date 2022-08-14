import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Button } from '../HomePage/style'
import * as C from './style'
import useRequestData from '../../hook/useRequestData'
import { BASE_URL } from '../constants/constants'

function ApplicationFormPage() {


    const navigate = useNavigate()

    const lastPage = () => {
      navigate (-1)
    }



  return (
    <C.Container>
      <h1>Inscreva-se para uma viagem</h1>

      <form>

      <select >
   
      </select>
      <input type="text" placeholder='Nome'></input>
      <input type="number" placeholder='Idade'></input>
      <input type="text" placeholder='Texto de Candidatura'></input>
      <input type="text" placeholder='Profissão'></input>
      <select></select>
      </form>

      <div>
        <Button onClick={lastPage}>Voltar</Button>
        <Button>Enviar</Button>
      </div>

    </C.Container>
  )
}

export default ApplicationFormPage