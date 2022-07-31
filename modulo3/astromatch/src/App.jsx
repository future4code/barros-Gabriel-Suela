import { useState } from "react";

import "./App.css";

import Card from "./components/TinderCard";
import Matches from './components/Matches'
import PersonIcon from "@mui/icons-material/Person";
import { IconButton } from "@mui/material";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';


function App() {
  const [page, setPage] = useState('inicial')

  const ChoosePage = () => {
    switch(page){
      case'inicial':
      return <Card/>;
      case'match':
      return <Matches/>;
      default:
        return <Card/>
    }
  }
  

  const goToHomePage = () => {
    setPage('inicial')
    console.log('click')
  }

  const goToMatches = () => {
    setPage('match')
    console.log('click')
  }

  return (
    <div className="App">
      
      <div className="header">
        <IconButton>
             <PersonIcon className="header__icon" fontSize="large" onClick={goToHomePage} ></PersonIcon>
        </IconButton>

      <img
        className="header__logo"
        src="https://br.tinderpressroom.com/image/flame-gradient-RGB_tn1100-category.png"
        alt="tinder logo"
      />
       <IconButton>
        <QuestionAnswerIcon 
        className="header__icon"
        fontSize='large'
        onClick={goToMatches} ></QuestionAnswerIcon>
       </IconButton>
    </div>
      
      {ChoosePage()}
    </div>
  );
}

export default App;
