import styled from 'styled-components';

// Models
import { IDivBoxComponentProps } from '../Box/model';
import {
    IInputComponentProps,
    IInputContainerComponentProps,
    IInputIconComponentProps,
    IInputListComponentProps,
    IInputOptionComponentProps,
    IInputOverlayComponentProps
} from './model';

// Components
import Box from '../Box/Box';

// import variables from '../_utils/globals/variables';

export const StyledInputContainer = styled(Box)<IInputContainerComponentProps>`
    position: relative;
    color: #2d2d2d;
    display: flex;
    flex: 1;
    align-items: center;
    opacity: ${(props) => props.disabled ? 0.7 : 1};
    cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointer'};
    border-radius: 3px;
    border: solid 1px #e2e2e2;
    background-color: #ffffff;
    padding: 7px 15px 7px;
`;

export const StyledInputBase = styled(Box)<IInputComponentProps>`
    font-family: Hind;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: left;
    flex: 1;
`;

export const StyledInputSolo = styled(StyledInputBase)<IInputComponentProps>`
    color: #2d2d2d;
    border-radius: 3px;
    border: solid 1px #e2e2e2;
    background-color: #ffffff;
    padding: 7px 15px 7px;
`;

export const StyledInputWrapped = styled(StyledInputBase)<IInputComponentProps>`
    color: inherit;
    border: none;
    background-color: #ffffff;
`;

// export const StyledInputOptionList = styled(Box)<IDivBoxComponentProps>`
//     position: absolute;
//     top: 35px;
//     left: 0;
//     right: 0;
//     border-bottom-left-radius: 3px;
//     border-bottom-right-radius: 3px;
//     border: solid 1px #e2e2e2;
//     border-top: none;
//     color: inherit;
//     background-color: #ffffff;
//     max-height: 160px;
//     overflow-y: auto;

//     /** Scrollbar */
//     ::-webkit-scrollbar {
//         width: 10px;
//         height: 10px;
//     }
//     ::-webkit-scrollbar-track {
//         background: #f1f1f1;
//     }
//     ::-webkit-scrollbar-thumb {
//         background: #888;
//     }
//     ::-webkit-scrollbar-thumb:hover {
//         background: #555;
//     }
// `;

export const StyledInputOverlay = styled(Box)<IInputOverlayComponentProps>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

// export const StyledInputOption = styled(Box)<IInputOptionComponentProps & React.HTMLProps<HTMLDivElement>>`
//     font-size: 12px;
//     padding: 10px 15px;
//     font-family: Hind;
//     display: flex;
//     justify-content: space-between;
//     color: inherit;
//     :first-child{
//         padding-top: 13px;
//     }
//     &:not(:last-child){
//         padding: 10px 15px 0;
//     }
//     &:last-child{
//         padding: 10px 15px;
//     }
// `;

export const StyledInputIcon = styled(Box)<IInputIconComponentProps>`
    font-family: 'Mooskin Icons';
    font-size: 20px;
    display: flex;
    align-items: center;
    color: inherit;
`;

export const StyledInputOptionList = styled(Box)<Partial<IInputListComponentProps>>`
    position: absolute;
    right: 0;
    height: auto;
    background: #fff;
    border-radius: 3px;
    z-index: 4;
    box-shadow: 0 1px 5px rgba(0,0,0,.32);
`;

export const StyledInputOptionListTitle = styled(Box)<IDivBoxComponentProps>`
    padding: 5px;
    color: #bebebe;
    border-bottom: 1px solid #f1f1f1;
    background-color: #f5f7f9;
    text-align: center;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;

export const StyledInputOption = styled(Box)<IInputOptionComponentProps>`
    padding: 3px 5px;
    :not(:last-child) {
        border-bottom: 1px solid #f1f1f1;
    }
`;
