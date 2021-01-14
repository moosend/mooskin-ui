import * as React from 'react';

// Models
import { IDivBoxComponentProps } from '../Box/model';

// Styled Components
import {
    StyledFooter,
    StyledFooterBody,
    StyledFooterEnd,
    StyledFooterHead
} from './styles';

/**
 * Footer
 */
export const Footer: React.FC<IDivBoxComponentProps> = (props) => {
    return <StyledFooter boxShadow="inner" {...props} />;
};

Footer.defaultProps = {
    className: '',
    style: {}
};

Footer.displayName = 'Footer';

/**
 * FooterHead
 */
export const FooterHead: React.FC<IDivBoxComponentProps> = (props) => {
    return <StyledFooterHead {...props} />;
};

FooterHead.defaultProps = {
    className: '',
    style: {}
};

FooterHead.displayName = 'FooterHead';

/**
 * FooterBody
 */
export const FooterBody: React.FC<IDivBoxComponentProps> = (props) => {
    return <StyledFooterBody {...props} />;
};

FooterBody.defaultProps = {
    className: '',
    style: {}
};

FooterBody.displayName = 'FooterBody';

/**
 * FooterEnd
 */
export const FooterEnd: React.FC<IDivBoxComponentProps> = (props) => {
    return <StyledFooterEnd {...props} />;
};

FooterEnd .defaultProps = {
    className: '',
    style: {}
};

FooterEnd.displayName = 'FooterEnd';

export default Footer;
