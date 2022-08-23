import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }

  input{
    height: 30px;
    outline: none;
    width: 500px;
    height: 40px;
    margin-bottom: 20px;
    border-radius: 10px;
    padding: 10px;
    color: #2a2550;
    font-weight: 600;
  }
`;

export const ButtonArea = styled.div `
  text-align: center;
`
