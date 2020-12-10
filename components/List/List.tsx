import * as React from 'react';

import { IBoxComponentProps } from '../Box/model';
import { ILayoutComponentProps } from '../Layout/model';

import { Layout } from '../Layout/Layout';

import {
    StyledListItem,
    StyledListItemBody,
    StyledListItemEnd,
    StyledListItemHead
} from './styles';

/**
 * List
 */
export const List: React.FC<ILayoutComponentProps> = (props) => {
    return (
        <Layout {...props} />
    );
};

List.defaultProps = {
    className: '',
    spacing: 15,
    style: {}
};

List.displayName = 'List';

/**
 * ListItem
 */
export const ListItem: React.FC<IBoxComponentProps> = (props) => {
    return (
        <StyledListItem boxShadow="xs" round="xs" {...props} />
    );
};

ListItem.defaultProps = {
    className: '',
    style: {}
};

ListItem.displayName = 'ListItem';

/**
 * ListItemHead
 */
export const ListItemHead: React.FC<IBoxComponentProps> = (props) => {
    return (
        <StyledListItemHead {...props} />
    );
};

ListItemHead.defaultProps = {
    className: '',
    style: {}
};

ListItemHead.displayName = 'ListItemHead';

/**
 * ListItemBody
 */
export const ListItemBody: React.FC<IBoxComponentProps> = (props) => {
    return (
        <StyledListItemBody {...props} />
    );
};

ListItemBody.defaultProps = {
    className: '',
    style: {}
};

ListItemBody.displayName = 'ListItemBody';

/**
 * ListItemEnd
 */
export const ListItemEnd: React.FC<IBoxComponentProps> = (props) => {
    return (
        <StyledListItemEnd {...props} />
    );
};

ListItemEnd.defaultProps = {
    className: '',
    style: {}
};

ListItemEnd.displayName = 'ListItemEnd';

export default List;
