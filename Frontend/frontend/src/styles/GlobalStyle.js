import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    :root{
        --primary-color: #222260;
        --primary-color2: rgba(34, 34, 96, .6);
        --primary-color3: rgba(34, 34, 96, .4);
        --color-green: #42AD00;
        --color-grey: #aaa;
        --color-accent: #F56692;
        --color-delete: #FF0000;
        /* Glassmorphism variables */
        --glass-bg: rgba(255, 255, 255, 0.18);
        --glass-border: 1.5px solid rgba(255, 255, 255, 0.4);
        --glass-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
        --glass-blur: blur(12px);
        --glass-radius: 20px;
    }

    body{
        font-family: 'Nunito', sans-serif;
        font-size: clamp(1rem, 1.5vw, 1.2rem);
        min-height: 100vh;
        color: var(--primary-color2);
        overflow: hidden;
        background: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 50%, #fbc2eb 100%);
        background-attachment: fixed;
        position: relative;
    }

    h1, h2, h3, h4, h5, h6{
        color: var(--primary-color);
    }

    .glass {
        background: var(--glass-bg);
        border: var(--glass-border);
        box-shadow: var(--glass-shadow);
        backdrop-filter: var(--glass-blur);
        -webkit-backdrop-filter: var(--glass-blur);
        border-radius: var(--glass-radius);
    }

    .error{
        color: red;
        animation: shake 0.5s ease-in-out;
        @keyframes shake {
            0%{
                transform: translateX(0);
            }
            25%{
                transform: translateX(10px);
            }
            50%{
                transform: translateX(-10px);
            }
            75%{
                transform: translateX(10px);
            }
            100%{
                transform: translateX(0);
            }
        }
    }
`;