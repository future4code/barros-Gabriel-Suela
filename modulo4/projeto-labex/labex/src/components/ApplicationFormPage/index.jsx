import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Button } from '../HomePage/style'
import * as C from './style'

function ApplicationFormPage() {

    const navigate = useNavigate()


  return (
    <C.Container>
      <h1>Inscreva-se para uma viagem</h1>

      <form>

      <select>Escolha uma viagem</select>
      <input type="text" placeholder='Nome'></input>
      <input type="number" placeholder='Idade'></input>
      <input type="text" placeholder='Texto de Candidatura'></input>
      <input type="text" placeholder='Profissão'></input>
      <select></select>
      </form>

      <div>
        <Button>Voltar</Button>
        <Button>Enviar</Button>
      </div>

    </C.Container>
  )
}

export default ApplicationFormPage