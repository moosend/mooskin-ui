import styled from 'styled-components';

// Models
import { IBoxComponentProps } from '../Box/model';
import { ITagsComponentProps, ITagsInputComponentProps } from './model';

// Components
import Box from '../Box/Box';

// "CSS" variables
import variables from '../_utils/globals/variables';

export const StyledTags = styled(Box)<ITagsComponentProps>`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

StyledTags.displayName = 'StyledTags';

export const StyledTag = styled(Box)<IBoxComponentProps>`
    display: flex;
    padding: 0 10px;
    border-radius: 13px;
    background-color: ${(props) => props.palette?.toggleElement.backgroundColor || variables.toggleElement.backgroundColor};
    font-family: Hind;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.83;
    letter-spacing: normal;
    color: ${(props) => props.palette?.toggleElement.fontColor || variables.toggleElement.fontColor};
    cursor: pointer;
    align-items: center;
    white-space: nowrap;
    :not(:last-child) {
        margin-right: 5px;
    }
`;

StyledTag.displayName = 'StyledTag';

export const StyledTagClose = styled(Box)<IBoxComponentProps>`
    opacity: 0.5;
    font-family: 'Mooskin Icons Round';
    font-size: 10px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: left;
    color: ${(props) => props.palette?.toggleElement.fontColor || variables.toggleElement.fontColor};
    padding-left: 10px;
`;

StyledTagClose.displayName = 'StyledTagClose';

export const StyledTagInput = styled(Box)<ITagsInputComponentProps>`
    color: ${(props) => props.palette?.commonElement.fontColor || variables.commonElement.fontColor};
    background-color: transparent;
    font-family: Hind;
    font-size: 14px;
    outline: none;
    border: none;
    flex: 1;
`;

StyledTagInput.displayName = 'StyledTagInput';
