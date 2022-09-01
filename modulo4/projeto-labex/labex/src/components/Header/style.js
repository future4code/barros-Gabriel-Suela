
import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    
    > svg {
        color: orange;
        cursor: pointer;

        @media screen and (min-width: 768px){
            display: none;
        }
    }

`