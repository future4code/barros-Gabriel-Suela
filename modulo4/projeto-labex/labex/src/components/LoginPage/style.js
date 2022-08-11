import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    form {
        display: flex;
        flex-direction: column;
        
    }

    input {
        padding: 10px;
        width: 500px;
        margin-bottom: 20px;
        outline: 0;
        border-radius: 20px;
    }
`

export const ButtonArea = styled.div `
    text-align: center;

    button {
        
        margin-right: 20px;
        padding: 10px;
        border-radius: 20px;
        outline: 0;
        border: 0;
        width: 150px;
    }
`