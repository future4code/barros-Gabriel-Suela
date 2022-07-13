import React from "react";
import { Forms } from "../style";

export default () => {
    return (
        <div>
            <h1>Etapa 2 - Informações do ensino superior</h1>
        <Forms>

        <label htmlFor="curso">5. Qual Curso?</label>
        <input type='text' name="curso"></input>

        <label htmlFor="unidade">6. Qual a unidade de ensino?</label>
        <input type='text' name="unidade"></input>

        </Forms>



        </div>
    )
}