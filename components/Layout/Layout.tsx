import * as React from 'react';

import { ILayoutComponentProps } from './model';

import { StyledLayout } from './styles';

/**
 * Layout
 */
export const Layout: React.FC<ILayoutComponentProps> = (props) => {
    return (
        <StyledLayout {...props} />
    );
};

Layout.defaultProps = {
    className: '',
    spacing: 15,
    style: {}
};

Layout.displayName = 'Layout';

export default Layout;
