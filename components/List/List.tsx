import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import type { IBoxComponentProps } from '../Box/model';
import type { ILayoutComponentProps } from '../Layout/model';

// Components
import { Layout } from '../Layout/Layout';

// Styled Components
import { StyledListItem, StyledListItemBody, StyledListItemEnd, StyledListItemHead } from './styles';
import variables from '../_utils/globals/variables';
/**
 * List
 */
export const List: React.FC<ILayoutComponentProps> = withMooskinContext(({ className = '', spacing = 15, style = {}, ...props }) => (
	<Layout {...props} />
));

List.displayName = 'List';

/**
 * ListItem
 */
export const ListItem: React.FC<IBoxComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => (
	<StyledListItem
		d="flex"
		p="15px"
		bgColor={props.palette?.backgroundColors.white || variables.backgroundColors.white}
		fontColor={props.palette?.fontColors.text || variables.fontColors.text}
		boxShadow="xs"
		round="xs"
		{...props}
	/>
));

ListItem.displayName = 'ListItem';

/**
 * ListItemHead
 */
export const ListItemHead: React.FC<IBoxComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => (
	<StyledListItemHead {...props} />
));

ListItemHead.displayName = 'ListItemHead';

/**
 * ListItemBody
 */
export const ListItemBody: React.FC<IBoxComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => (
	<StyledListItemBody flex={1} direction="column" p="0 20px" {...props} />
));

ListItemBody.displayName = 'ListItemBody';

/**
 * ListItemEnd
 */
export const ListItemEnd: React.FC<IBoxComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => (
	<StyledListItemEnd align="center" {...props} />
));

ListItemEnd.displayName = 'ListItemEnd';
