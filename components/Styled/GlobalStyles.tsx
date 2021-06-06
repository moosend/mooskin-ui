import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    /* Google Font Imports */
    @import url('https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Hind:wght@400;500;600;700&display=swap');

    /* Global Styles */
    * {
        box-sizing: border-box;
        outline: none;
        font-family: Arial, sans-serif;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        margin: 0;
        padding: 0;
        color: #2d2d2d;
    }
`;

export default GlobalStyle;
