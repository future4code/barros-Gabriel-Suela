import React from "react";
import './CardPequeno.css'

 function CardPequeno(props){
    return (
        <div className="small-card-container">
          <div className="small-card-item1">
          <img src={props.imagem1}/>
          <h4>{props.email}</h4>
            </div>  

        <div className="small-card-item2">
            <img src={props.imagem2}/>
            <h4>{props.endereco}</h4>
        </div>
        </div>
        

        
        
    )
}

export default CardPequeno;