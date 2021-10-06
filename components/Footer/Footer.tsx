import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { IBoxComponentProps } from '../Box/model';

// Styled Components
import { StyledFooter, StyledFooterBody, StyledFooterEnd, StyledFooterHead } from './styles';

/**
 * Footer
 */
export const Footer: React.FC<IBoxComponentProps> = withMooskinContext((props) => {
	return <StyledFooter {...props} />;
});

Footer.defaultProps = {
	className: '',
	style: {},
};

Footer.displayName = 'Footer';

/**
 * FooterHead
 */
export const FooterHead: React.FC<IBoxComponentProps> = withMooskinContext((props) => {
	return <StyledFooterHead {...props} />;
});

FooterHead.defaultProps = {
	className: '',
	style: {},
};

FooterHead.displayName = 'FooterHead';

/**
 * FooterBody
 */
export const FooterBody: React.FC<IBoxComponentProps> = withMooskinContext((props) => {
	return <StyledFooterBody {...props} />;
});

FooterBody.defaultProps = {
	className: '',
	style: {},
};

FooterBody.displayName = 'FooterBody';

/**
 * FooterEnd
 */
export const FooterEnd: React.FC<IBoxComponentProps> = withMooskinContext((props) => {
	return <StyledFooterEnd {...props} />;
});

FooterEnd.defaultProps = {
	className: '',
	style: {},
};

FooterEnd.displayName = 'FooterEnd';
