import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        text-align: center;
        font-size: 3rem;
        font-weight: 900;
    }

 
`

export const FormArea = styled.div`

   
    padding: 30px;
    background-color: #2A2550;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    height: 400px;
    
    
    
    form {
        display: flex;
        flex-direction: column;
    }

    input {
        padding: 15px;
        width: 500px;
        height: 50px;
        margin: 20px 0px;
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
    margin-top: 20px;
`