import React from "react";
import './MessageItem.css'




export default (props) => {
    return (
        <div className="messageLine">
            <div className="messageItem">
                <strong>{props.nome}</strong>
                <p>{props.msg}</p> 
            </div>
        </div>
    )
}