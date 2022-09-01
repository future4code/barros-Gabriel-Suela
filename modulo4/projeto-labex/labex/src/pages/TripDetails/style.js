import styled from "styled-components";


export const Container = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-direction: center;

    section {
        margin: 10px; 
        
    p {
      color: #E04D01;
      font-size: 1rem;
      padding: 10px;
      font-weight: 500;
      text-align: center;
    }
    }

    h1 {
        text-align: center;
        margin: 5px}

   
`

export const Card = styled.div `
    background-color: #2A2550;
    margin-bottom: 20px;
    padding: 10px;
    width: 600px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    @media screen and (max-width: 768px){
        width: 450px;
    }

    @media screen and (max-width: 400px){
        width: 350px;
    }
    

    p {
        font-weight: 500;
        padding: 5px;
        color: #E04D01;
        
    }

    h3 {
        color: #E04D01;
        padding: 5px;
    }

    
`

export const ButtonArea = styled.div `
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        border-radius: 10px;
        margin:  0px 20px;
        @media screen and (max-width: 768px){
            height: 40px;
            text-align: center;
        }
    }
`