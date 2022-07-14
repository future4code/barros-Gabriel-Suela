import React from "react";
import './HeaderComponent.css'
import Logo from '../img/wpp.png'

export default () => {
    return (
        <div className="chatHeader">
            <img src={Logo} width='40px'/>
            <h1>LabeZap</h1>
        </div>
    )
}