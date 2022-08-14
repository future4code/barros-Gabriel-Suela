import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;

  h1 {
    font-size: 5rem;
    font-weight: 900;
  }

  section {
    display: flex;
    margin-bottom: 30px;
  }

  img {
    margin-left: 20px;
    object-fit: contain;
    animation: spin 8s linear infinite;
  }
  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export const Button = styled.button``;
