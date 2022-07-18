import React from "react";
import { Forms } from "../style";

export default () => {
    return (
        <div>
            <h1>Etapa 3 - Informações gerais de ensino</h1>

            <Forms>
            <label htmlFor='graduacao'>5. Porque você não terminou um curso de graduação?</label>
            <input type='text' name="graducao"></input>

            <label htmlFor="complementar">6. Você fez algum curso complementar?</label>
            <select name="complementar">
            <option value=''>Curso técnico</option>
            <option value=''>Cursos de inglês</option>
            <option value=''>Não fiz curso complementar</option>

            </select>


            </Forms>
        </div>
    )
}