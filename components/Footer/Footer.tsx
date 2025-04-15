import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { IBoxComponentProps } from '../Box/model';

// Styled Components
import { StyledFooter, StyledFooterBody, StyledFooterEnd, StyledFooterHead } from './styles';
import variables from '../_utils/globals/variables';
/**
 * Footer
 */
export const Footer: React.FC<IBoxComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	return (
		<StyledFooter
			position="fixed"
			bottom="0px"
			left="0px"
			right="0px"
			p="15px 0"
			d="flex"
			bgColor={props.palette?.backgroundColors.white || variables.backgroundColors.white}
			boxShadow="0 -3px 6px 0 rgb(0 0 0 / 16%)"
			{...props}
		/>
	);
});

Footer.displayName = 'Footer';

/**
 * FooterHead
 */
export const FooterHead: React.FC<IBoxComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	return <StyledFooterHead d="flex" align="center" fontColor="inherit" justify="center" flex={3} {...props} />;
});

FooterHead.displayName = 'FooterHead';

/**
 * FooterBody
 */
export const FooterBody: React.FC<IBoxComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	return <StyledFooterBody d="flex" align="center" fontColor="inherit" flex={7} {...props} />;
});

FooterBody.displayName = 'FooterBody';

/**
 * FooterEnd
 */
export const FooterEnd: React.FC<IBoxComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
	return <StyledFooterEnd d="flex" align="center" fontColor="inherit" flex={2} {...props} />;
});

FooterEnd.displayName = 'FooterEnd';
