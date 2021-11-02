import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { IBoxComponentProps } from '../Box/model';
import { ILayoutComponentProps } from '../Layout/model';

// Components
import { Layout } from '../Layout/Layout';

// Styled Components
import { StyledListItem, StyledListItemBody, StyledListItemEnd, StyledListItemHead } from './styles';

/**
 * List
 */
export const List: React.FC<ILayoutComponentProps> = withMooskinContext((props) => {
	return <Layout {...props} />;
});

List.defaultProps = {
	className: '',
	spacing: 15,
	style: {}
};

List.displayName = 'List';

/**
 * ListItem
 */
export const ListItem: React.FC<IBoxComponentProps> = withMooskinContext((props) => {
	return <StyledListItem boxShadow="xs" round="xs" {...props} />;
});

ListItem.defaultProps = {
	className: '',
	style: {}
};

ListItem.displayName = 'ListItem';

/**
 * ListItemHead
 */
export const ListItemHead: React.FC<IBoxComponentProps> = withMooskinContext((props) => {
	return <StyledListItemHead {...props} />;
});

ListItemHead.defaultProps = {
	className: '',
	style: {}
};

ListItemHead.displayName = 'ListItemHead';

/**
 * ListItemBody
 */
export const ListItemBody: React.FC<IBoxComponentProps> = withMooskinContext((props) => {
	return <StyledListItemBody {...props} />;
});

ListItemBody.defaultProps = {
	className: '',
	style: {}
};

ListItemBody.displayName = 'ListItemBody';

/**
 * ListItemEnd
 */
export const ListItemEnd: React.FC<IBoxComponentProps> = withMooskinContext((props) => {
	return <StyledListItemEnd {...props} />;
});

ListItemEnd.defaultProps = {
	className: '',
	style: {}
};

ListItemEnd.displayName = 'ListItemEnd';
