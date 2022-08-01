import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";


const MatchesContainer = styled.div `
    display: flex;
    align-items: center;
    
`
const Matches = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-top: 20px;
    margin-left: 20px;
`

const MatchesInfo = styled.span`
    text-align: center;
    font-weight: bold;
    margin: 20px 20px 0px;
`
const Title = styled.h2 `
    margin-left: 20px;
    padding-top: 10px;
`

const ResetButton = styled.button`

  background-color: rgba(51, 51, 51, 0.05);
  border-radius: 8px;
  border-width: 0;
  color: #333333;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  margin: 20px;
  padding: 10px 12px;
  text-align: center;

`

function matches () {
    const [matches, setMatches] = useState([])


    const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches'

    useEffect(()=>{
        getMatches()
    },[])

    const getMatches = () =>{
        axios.get(url).then((res) =>{
            setMatches(res.data.matches)
            console.log(res.data)
        }).catch((err)=>{
            console.log(err.message)
        })
    }
    
    const allMatches = matches.map ((user)=>{
        return (
            <MatchesContainer key={user.id}>
            <Matches src={user.photo} />
            <MatchesInfo>{user.name}</MatchesInfo>
            </MatchesContainer>
        )
    })

    const clearProfile = () => {
        axios
          .put(
            "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear"
          )
          .then((res) => {
            alert("Perfis resetados");
            getMatches();
          })
          .catch((err) => {
            console.log(err.response);
          });
      };
    
    return (

        <div>
            <Title>Matches</Title>
           
                {allMatches}
            
        <ResetButton onClick={() => {
          clearProfile();
        }}>Limpar</ResetButton>
        </div>

    )
}


export default matches