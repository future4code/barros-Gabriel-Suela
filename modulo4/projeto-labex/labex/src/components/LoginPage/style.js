import styled from "styled-components";

export const Container = styled.div `
    width: 100vw;
    height: 100vh;

    h1 {
        text-align: center;
        font-size: 3rem;
        font-weight: 900;
    }

 
`

export const FormArea = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    
    form {
        display: flex;
        flex-direction: column;
    }

    input {
        padding: 20px;
        width: 500px;
        margin-bottom: 20px;
        outline: 0;
        border-radius: 20px;
        color: #2A2550;
        font-weight: 700;
        font-size: 1rem;
        border: 0;
    }
`



export const ButtonArea = styled.div `
    text-align: center;

`