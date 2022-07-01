import React from "react";
import { FormContainer } from "../../style";
import "./style.css";

export default function ChatComponent() {
  return (
    <FormContainer>
      <form>
        <label htmlFor="remetente">Remetente</label>
        <input type="text" id="remetente"></input>

        <label htmlFor="mensagem">Msg:</label>
        <input type="text" id="mensagem"></input>
      </form>
      <button>Enviar Mensagem</button>
    </FormContainer>
  );
}
