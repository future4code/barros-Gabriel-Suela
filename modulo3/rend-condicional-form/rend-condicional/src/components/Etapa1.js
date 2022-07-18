import React from "react";
import { Forms } from "../style";
import './Etapa1.css'

export default () => {
    return (
        <div>
            <h1>Etapa 1 - Dados Gerais</h1>

            <Forms>
                <label htmlFor="name"> 1. Qual seu nome?</label>
                <input 
                type='text'
                name='name'/>

                <label htmlFor="age">2. Qual sua idade?</label>
                <input 
                type='number' 
                name='age'/>

                <label htmlFor="email">3. Qual seu e-mail?</label>
                <input 
                type='email'
                name="email"/>

                <label htmlFor="escolar">4. Qual a sua escolaridade?</label>
                <select
                type='select' 
                name="escolar">
                <option value=''>Ensino Médio Incompleto</option>
                <option value=''>Ensino Médio Completo</option>
                <option value=''>Ensino Superior Incompleto</option>
                <option value=''>Ensino Superior Completo</option>

                </select>
            </Forms>

            </div>

       
    )
}