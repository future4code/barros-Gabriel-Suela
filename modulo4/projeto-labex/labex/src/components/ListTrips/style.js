import styled from "styled-components";

export const Container = styled.div `
    width: 100vw;
    height: 100vh;


    h1 {
        color: #E04D01;
        margin-bottom: 10px;
        text-align: center;
        font-weight: 900;
        @media screen and (max-width: 768px){
            margin-top: 10px;
        }
    }

    button {
        text-align: center;
    }

    span {
        font-size: 2rem;
        font-weight: 500;
        padding: 5px;
        color: #E04D01;
    }


`

export const ButtonArea = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Trips = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const Card = styled.div`
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

    button {
        width: 100%;
        border-radius: 10px;
        margin: 0;

        @media screen and (max-width: 768px){
            height: 40px;
            text-align: center;
        }
    }
`