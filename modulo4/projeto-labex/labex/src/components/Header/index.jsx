import React from 'react'
import {RiMenu3Fill} from 'react-icons/ri'
import { Container } from './style'

export function Header({menuIsVisible, setMenuIsVisible}) {
  return (
    <Container isVisible={menuIsVisible}>

    <RiMenu3Fill onClick={()=> setMenuIsVisible(true)} size={40} />

    </Container>
  )
}

