import { Container } from "./style";
import {IoClose} from 'react-icons/io5'
import { useEffect } from "react";


export function MenuMobile ({menuIsVisible, setMenuIsVisible}) {

    const logOut = () => {
        localStorage.removeItem("token");
      };

      useEffect(()=>{
        document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
      }, [menuIsVisible])

    return (
        <Container isVisible = {menuIsVisible}>
        <IoClose size={40} onClick={()=>setMenuIsVisible(false)} />
        <nav>
            <a href="/" onClick={logOut}>Home</a>
            <a href="/login">Login</a>
            <a href="/trips/list">Viagens</a>
        </nav>
        </Container>
    )
}