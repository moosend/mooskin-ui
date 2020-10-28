import {createGlobalStyle} from 'styled-components';

import OutlinedIcons from '../../assets/mooskin-icons/outlined.woff2';
import RegularIcons from '../../assets/mooskin-icons/regular.woff2';
import RoundIcons from '../../assets/mooskin-icons/round.woff2';
import SharpIcons from '../../assets/mooskin-icons/sharp.woff2';
import TwoToneIcons from '../../assets/mooskin-icons/two-tone.woff2';

export const GlobalStyle = createGlobalStyle`
    /* Google Font Imports */
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

    /* Global Styles */
    * {
        box-sizing: border-box;
        outline: none;
        font-family: Arial, sans-serif;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        margin: 0;
        padding: 0;
    }

    /* Mooskin Icons */
    @font-face {
        font-family: 'Mooskin Icons';
        font-style: normal;
        font-weight: 400;
        src: url(${RegularIcons}) format('woff2');
    }
    @font-face {
        font-family: 'Mooskin Icons Outlined';
        font-style: normal;
        font-weight: 400;
        src: url(${OutlinedIcons}) format('woff2');
    }
    @font-face {
        font-family: 'Mooskin Icons Round';
        font-style: normal;
        font-weight: 400;
        src: url(${RoundIcons}) format('woff2');
    }
    @font-face {
        font-family: 'Mooskin Icons Sharp';
        font-style: normal;
        font-weight: 400;
        src: url(${SharpIcons}) format('woff2');
    }
    @font-face {
        font-family: 'Mooskin Icons Two Tone';
        font-style: normal;
        font-weight: 400;
        src: url(${TwoToneIcons}) format('woff2');
    }

    .mooskin-icons {
        font-family: 'Mooskin Icons';
        font-weight: normal;
        font-style: normal;
        font-size: 24px;
        line-height: 1;
        letter-spacing: normal;
        text-transform: none;
        display: inline-block;
        white-space: nowrap;
        word-wrap: normal;
        direction: ltr;
        /* -webkit-font-feature-settings: 'liga'; */
        -webkit-font-smoothing: antialiased;
    }
`;

export default GlobalStyle;
