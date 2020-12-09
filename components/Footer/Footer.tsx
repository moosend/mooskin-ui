import * as React from 'react';
import { IBoxComponentProps } from '../Box/model';

import {
    StyledFooter,
    StyledFooterBody,
    StyledFooterEnd,
    StyledFooterHeader
} from './styles';

export const Footer: React.FC<IBoxComponentProps> = (props) => {
    return (
        <StyledFooter boxShadow="inner" {...props}>
            {props.children}
        </StyledFooter>
    );
};

Footer.defaultProps = {
    className: '',
    style: {}
};

Footer.displayName = 'Footer';

/**
 * FooterHeader
 */
export const FooterHeader: React.FC<IBoxComponentProps> = (props) => {
    return (
        <StyledFooterHeader {...props}>
            {props.children}
        </StyledFooterHeader>
    );
};

FooterHeader.defaultProps = {
    className: '',
    style: {}
};

FooterHeader.displayName = 'FooterHeader';

/**
 * FooterBody
 */
export const FooterBody: React.FC<IBoxComponentProps> = (props) => {
    return (
        <StyledFooterBody {...props}>
            {props.children}
        </StyledFooterBody>
    );
};

FooterBody.defaultProps = {
    className: '',
    style: {}
};

FooterBody.displayName = 'FooterBody';

/**
 * FooterEnd
 */
export const FooterEnd: React.FC<IBoxComponentProps> = (props) => {
    return (
        <StyledFooterEnd {...props}>
            {props.children}
        </StyledFooterEnd >
    );
};

FooterEnd .defaultProps = {
    className: '',
    style: {}
};

FooterEnd.displayName = 'FooterEnd';

export default Footer;
