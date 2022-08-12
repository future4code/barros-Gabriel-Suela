import styled from "styled-components";

export const Container = styled.div `
    width: 100vw;
    height: 100vh;


    h1 {
        color: #E04D01;
        margin-bottom: 10px;
        text-align: center;
        font-weight: 900;
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
    height: 250px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
    
    &:hover {
        transform: scale(1.02);
        transition: all .2s ease-in-out;
    }

    p {
        font-weight: 500;
        padding: 5px;
        color: #E04D01;
    }
`