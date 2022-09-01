import { Container } from "./style";
import {IoClose} from 'react-icons/io5'
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { goToHome,goToAdmin, goToTrips } from "../../routes/Coordinator";

export function MenuMobile ({menuIsVisible, setMenuIsVisible}) {

    const navigate = useNavigate()

      useEffect(()=>{
        document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
      }, [menuIsVisible])

    return (
      
        <Container isVisible = {menuIsVisible}>
          
        <IoClose size={40} onClick={()=>setMenuIsVisible(false)} />
        <nav>
            <a onClick={()=>goToHome(navigate)}>Home</a>
            <a onClick={()=>goToAdmin(navigate)}>Login</a>
            <a onClick={()=>goToTrips(navigate)}>Viagens</a>
        </nav>
        
        </Container>
      
    )
}