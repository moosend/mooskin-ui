import { createGlobalStyle } from 'styled-components';

import OutlinedIcons from '../../assets/mooskin-icons/outlined.woff2';
import RegularIcons from '../../assets/mooskin-icons/regular.woff2';
import RoundIcons from '../../assets/mooskin-icons/round.woff2';
import SharpIcons from '../../assets/mooskin-icons/sharp.woff2';
import TwoToneIcons from '../../assets/mooskin-icons/two-tone.woff2';

export const GlobalStyle = createGlobalStyle`
    /* Global Styles */
    * {
        box-sizing: border-box;
        outline: none;
        font-family: system-ui;
        margin: 0;
        padding: 0;
        color: #212121;
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
`;

export default GlobalStyle;
