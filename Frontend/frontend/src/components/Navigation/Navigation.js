import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import avatar from '../../img/avatar.png';
import { signout } from '../../utils/icons';
import { menuItems } from '../../utils/menuItems';
import { AuthContext } from '../../context/AuthContext';

function Navigation({ active, setActive }) {
    const { signOut, user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut();
        navigate('/login');
    };

    return (
        <NavStyled>
            {/* Creating a user container */}
            <div className="user-con">
                <img src={avatar} alt="User Avatar" />
                <div className="text">
                    <h2>{user ? `Hello, ${user.fullName || user.email || 'User'}` : 'Hello, User'}</h2>
                    <p>Your Money Tracker</p>
                </div>
            </div>

            {/* Creating a menu item unordered list */}
            <ul className="menu-items">
                {menuItems.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active' : ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                ))}
            </ul>

            <div className="bottom-nav">
                <Button onClick={handleSignOut}>
                    {signout} Log Out
                </Button>
            </div>
        </NavStyled>
    );
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    /* Glassmorphism for nav */
    background: var(--glass-bg);
    border: var(--glass-border);
    box-shadow: var(--glass-shadow);
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
    border-radius: var(--glass-radius);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;

    .user-con {
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;

        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: var(--glass-bg);
            border: var(--glass-border);
            box-shadow: var(--glass-shadow);
            padding: 0.2rem;
        }

        h2 {
            color: rgba(34, 34, 96, 1);
        }

        p {
            color: rgba(34, 34, 96, 0.6);
        }
    }

    .menu-items {
        flex: 1;
        display: flex;
        flex-direction: column;

        li {
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: 0.6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.4s ease-in-out;
            color: rgba(34, 34, 96, 0.6);
            padding-left: 1rem;
            position: relative;

            i {
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.4rem;
                transition: all 0.4s ease-in-out;
            }
        }
    }

    .active {
        color: rgba(34, 34, 96, 1) !important;

        i {
            color: rgba(34, 34, 96, 1) !important;
        }

        &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }

    .bottom-nav {
        display: flex;
        justify-content: center;
        /* Use glassy button style for logout */
        button {
            background: var(--glass-bg);
            border: var(--glass-border);
            box-shadow: var(--glass-shadow);
            backdrop-filter: var(--glass-blur);
            -webkit-backdrop-filter: var(--glass-blur);
            border-radius: var(--glass-radius);
            color: var(--color-delete);
            font-weight: 600;
            padding: 0.7rem 1.5rem;
            transition: all 0.3s;
            &:hover, &:focus {
                background: rgba(255,255,255,0.28);
                box-shadow: 0 8px 32px 0 rgba(31,38,135,0.25);
                outline: 2px solid var(--color-accent);
            }
        }
    }
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    background-color: #ff4b5c; /* Button color */
    color: #fff;
    border: none;
    border-radius: 8px; /* Rounded corners */
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;

    &:hover {
        background-color: #ff2a45; /* Darker shade on hover */
    }

    &:active {
        background-color: #e03d4e; /* Even darker shade on click */
        transform: scale(0.98); /* Slightly scale down */
    }

    svg {
        margin-right: 0.5rem; /* Space between icon and text */
    }
`;

export default Navigation;
