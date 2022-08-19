import styled from "styled-components";

export const Container = styled.div `
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        color:  #E04D01;
    }
`

export const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
    padding: 20px;
    background-color: #2A2550;
    width: 300px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    &:hover {
        transform: scale(1.1);
        transition: ease-in-out .3s;
        cursor: pointer;
    }

    p{
        color: #E04D01;
        font-size: 1rem;
    }

    
`

export const ButtonArea = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;

  

`