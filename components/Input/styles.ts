import styled from 'styled-components';

// Models
import { IBoxComponentProps } from '../Box/model';
import {
    IInputComponentProps,
    IInputContainerComponentProps,
    IInputListComponentProps,
    IInputOptionComponentProps
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

export const StyledInputOverlay = styled(Box)<IBoxComponentProps>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
`;

export const StyledInputIcon = styled(Box)<IBoxComponentProps>`
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

export const StyledInputOptionListTitle = styled(Box)<IBoxComponentProps>`
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
