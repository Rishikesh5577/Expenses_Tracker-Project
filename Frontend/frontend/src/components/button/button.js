import React from 'react'
import styled from 'styled-components'

function button({name, icon, onClick, color = '#222260', bg, iColor}) {
    return (
        <ButtonStyled style={{color: color, background: bg}} onClick={onClick}>
            {icon && <span style={{color: iColor || color}}>{icon}</span>}
            {name}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    outline: none;
    border: none;
    font-family: inherit;
    font-size: inherit;
    display: flex;
    align-items: center;
    gap: .5rem;
    cursor: pointer;
    transition: all .4s ease-in-out;
    /* Glassmorphism styles */
    background: var(--glass-bg);
    border: var(--glass-border);
    box-shadow: var(--glass-shadow);
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
    border-radius: var(--glass-radius);
    padding: 0.7rem 1.5rem;
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.5px;
    &:hover, &:focus {
        background: rgba(255,255,255,0.28);
        box-shadow: 0 8px 32px 0 rgba(31,38,135,0.25);
        outline: 2px solid var(--color-accent);
    }
`;

export default button