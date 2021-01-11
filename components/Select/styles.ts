import styled, {keyframes} from 'styled-components';

// Models
import { IDivBoxComponentProps, IInputBoxComponentProps } from '../Box/model';
import { ISelectOptionComponentProps } from './model';

// Components
import Box from '../Box/Box';

// import variables from '../_utils/globals/variables';

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const StyledSelectFilter = styled(Box)<IInputBoxComponentProps>`
    padding: 7px 15px 7px;
    font-family: Hind;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: left;
    color: #2d2d2d;
    border: none;
    flex: 1;
`;

export const StyledSelect = styled(Box)<IDivBoxComponentProps>`
    position: relative;
`;

export const StyledSelectContainer = styled(Box)<IDivBoxComponentProps>`
    display: flex;
    border-radius: 3px;
    border: solid 1px #e2e2e2;
    background-color: #ffffff;
    cursor: pointer;
`;

export const StyledSelectPlaceholder = styled(Box)<IDivBoxComponentProps>`
    padding: 7px 15px 7px;
    font-family: Hind;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: left;
    color: #2d2d2d;
    flex: 1;
`;

export const StyledSelectOptionList = styled(Box)<IDivBoxComponentProps>`
    position: absolute;
    top: 35px;
    left: 0;
    right: 0;
    border-radius: 3px;
    border: solid 1px #e2e2e2;
    border-top: none;
`;

export const StyledSelectOverlay = styled(Box)<IDivBoxComponentProps>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
`;

export const StyledSelectOption = styled(Box)<ISelectOptionComponentProps & React.HTMLProps<HTMLDivElement>>`
    cursor: pointer;
    font-size: 12px;
    padding: 10px 15px;
    font-family: Hind;
    display: flex;
    justify-content: space-between;
    :first-child{
        padding-top: 13px;
    }
    :not(:last-child){
        padding: 10px 15px 0;
    }
    :last-child{
        padding: 10px 15px;
    }
`;

export const StyledSelectIcon = styled(Box)<IDivBoxComponentProps>`
    font-family: 'Mooskin Icons';
    font-size: 20px;
    display: flex;
    align-items: center;
    padding: 0 15px;
`;

export const StyledSelectLoader = styled(Box)<IDivBoxComponentProps>`
    border: 16px solid #f3f3f3;
    border-top: 16px solid #5ccdde;
    border-top: 16px solid #5ccdde;
    border-top: 16px solid #5ccdde;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: ${spin} 2s linear infinite;
`;
