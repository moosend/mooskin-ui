import styled from 'styled-components';

// Models
import { IDivBoxComponentProps } from '../Box/model';
import { IExpandableCommonComponentProps, IExpandableComponentProps, IExpandableItemComponentProps } from './model';

// Components
import Box from '../Box/Box';

export const StyledExpandable = styled(Box)<IExpandableComponentProps>`
    display: flex;
    flex-direction: column;
`;

export const StyledExpandableItem = styled(Box)<IExpandableItemComponentProps>`
    border-radius: 3px;
    border: solid 1px #e2e2e2;
    background-color: #ffffff;
    :not(:last-child){
        margin-bottom: 15px;
    }
`;

export const StyledExpandableItemContainer = styled(Box)<IDivBoxComponentProps>`
    display: flex;
    padding: 17px;
    cursor: pointer;
`;

export const StyledExpandableItemButton = styled(Box)<IExpandableCommonComponentProps>`
    font-family: 'Mooskin Icons';
    font-size: 20px;
    transition: all ease 0.4s;
    transform: ${(props) => props.active ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

export const StyledExpandableItemText = styled(Box)<IDivBoxComponentProps>`
    flex: 1;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: #2d2d2d;
`;

export const StyledExpandableItemContent = styled(Box)<IExpandableCommonComponentProps>``;
