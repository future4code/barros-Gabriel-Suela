import styled, { css } from "styled-components";

export const Container = styled.section `
    position: absolute;
    backdrop-filter: blur(3px);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(42, 37, 80, 0.85);
    opacity: 0;
    pointer-events: none;
    transform: translateY(50px);
    

    > svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
        color: #E04D01;
        cursor: pointer;
        transform: rotate(45deg);
        transition: .7s;
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1.5rem;
        transform: scale(0.7);
        transition: .7s;
    }

    a {
        text-decoration: none;
        font-size: 2rem;
        color: #E04D01;
        font-weight: 700;
    }

    ${({isVisible}) => isVisible && css `
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);

    > svg {
        transform: rotate(0deg);
    }

    nav {
        transform: scale(1)
    }

    ` }


`