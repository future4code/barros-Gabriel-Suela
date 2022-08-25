
import Router from '../src/routes/Router'
import React, { useEffect, useState } from 'react'
import './index.css'
import {Header} from './components/Header'
import { MenuMobile } from './components/MenuMobile'


function App() {
  const [menuIsVisible, setMenuIsVisible] = useState(true)  

  useEffect(()=>{
    setMenuIsVisible(false)
  },[])

  return (

    <>
    <MenuMobile 
    menuIsVisible={menuIsVisible}
    setMenuIsVisible={setMenuIsVisible}
    
    />
    <Header setMenuIsVisible={setMenuIsVisible}/>
    <Router/>
    </>
   
    
  )
}

export default App
