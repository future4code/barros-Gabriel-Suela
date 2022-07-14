import React, { useState } from "react";
import "./ChatWindow.css";
import MessageItem from "./MessageItem";


export default () => {
  const [mensagens, setMensagens] = useState([])
  const [message, setMessage] = useState("");
  const [user, setUser] = useState("");


  const mensagensMap = mensagens.map((item, index)=>{
    return(
    <MessageItem 
    key={index}
    nome={item.nome}
    msg={item.msg} />
  )})

  const handleName = (e) => {
    e.preventDefault()
    setUser(e.target.value)
  }

  const handleMensagem = (e) => {
    e.preventDefault()
    setMessage(e.target.value)
  }

    const handleClick = (e) =>{
    e.preventDefault()
    const newMessage = [...mensagens, {nome:user, msg:message}]
    setMensagens(newMessage)
    setUser("")
    setMessage("")
    
  }

  const handleDoubleClick = (e) =>{
    const newArray = mensagensMap.filter((item, index) => {
        return index && item !== e
    })
    if (e.detail === 2){
        setMensagens(newArray)

    }
  }

    const handleKey = (e) => {
    if (e.key === 'Enter'){
      e.preventDefault();
      console.log('tecla enter')
      const newMessage = [...mensagens, {nome:user, msg:message}]
      setMensagens(newMessage)
      setUser("")
      setMessage("")
    }
  }


  return (
    <div className="chatWindow">
      <div className="chatWindow-body" >
            <ul>
              <li onClick={handleDoubleClick}>
                {mensagensMap} 
              </li>
               
            </ul>
            
       
      </div>
      <div className="chatWindow-footer">
        <div className="chatWindow-pre">

        
          <input
            className="chatWindow-rem"
            type="text"
            placeholder="Remetente"
            value={user}
            onChange={handleName}
          ></input>


        </div>
        <div className="chatWindow-inputarea">



          <input
            className="chatWindow-input"
            type="text"
            placeholder="Digite uma mensagem"
            value={message}
            onChange={handleMensagem}
            onKeyDown={handleKey}
          ></input>


        </div>
        <div className="chatWindow-pos">
          <div className="chatWindow--btn">


            <button
            
            onClick={handleClick}
            >Enviar</button>


          </div>
        </div>
      </div>
    </div>
  );
};