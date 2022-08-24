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

    a {
        font-size: 1.5rem;
        text-transform: uppercase;
        font-weight: 700;
        transition: ease cubic-bezier(0.075, 0.82, 0.165, 1);
        cursor: pointer;
        color: #E04D01;
        position: relative;
        text-decoration: none;

        &:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: #FF7700;
            visibility: hidden;
            transform: scaleX(0);
            -webkit-transform: scaleX(0);
            -webkit-transition: all 0.3 ease-in-out 0s;
            transition: all 0.3s ease-in-out 0s;
            
        }

        &:hover:before{
            visibility: visible;
            -webkit-transform: scaleX(1);
            transform: scaleX(1);
        }
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

  

    button {

        @media screen and (max-width: 768px){
            padding: 10px;
            
        }

        
    }

`