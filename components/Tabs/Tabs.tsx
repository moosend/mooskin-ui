import * as React from 'react';

// Models
import { IDivBoxComponentProps } from '../Box/model';
import { ITabCommonComponentProps, ITabComponentProps, ITabsComponentProps } from './model';

// Components
import { Box } from '../Box/Box';

// Styled Components
import {
    StyledTab,
    StyledTabContent,
    StyledTabHeader,
    StyledTabs
} from './styles';

/**
 * Tabs
 */
export const Tabs: React.FC<ITabsComponentProps> = (props) => {

    const getActiveItem = (activeId?: string | number) => {
        if (props.activeItem && Array.isArray(props.activeItem)){
            return (props.activeItem as any).includes(activeId);
        }
        return props.activeItem === activeId;
    };

    const riteOfRakshir = (
        children: any,
        activeId?: string | number,
        active?: boolean
    ) => {

        let header: React.ReactElement<ITabCommonComponentProps> | undefined;
        let content: React.ReactElement<ITabCommonComponentProps> | undefined;

        React.Children.forEach(children, (child, i) => {
            if (React.isValidElement<ITabCommonComponentProps>(child) && child.type === TabHeader){
                header = (
                    React.cloneElement(child, {
                        active,
                        onClick: (e) => props.onClickTab && props.onClickTab(e, activeId)
                    } as IDivBoxComponentProps)
                );
            }

            if (React.isValidElement<ITabCommonComponentProps>(child) && child.type === TabContent){
                content = React.cloneElement(child, {active} as ITabCommonComponentProps);
            }
        });

        return {header, content};
    };

    const recurseChildren = (children: any): any => {
        if (!children){
            return null;
        }

        const headers: Array<React.ReactElement<ITabCommonComponentProps> | null> = [];
        const contents: Array<React.ReactElement<ITabCommonComponentProps> | null> = [];

        React.Children.forEach(children, (child, i) => {

            if (React.isValidElement<ITabComponentProps>(child) && child.type === Tab){
                const active = child.props.active ? child.props.active : getActiveItem(child.props.activeId);
                const {content, header} = riteOfRakshir(child.props.children, child.props.activeId, active);
                header && headers.push(React.cloneElement(header, {key: i}));
                content && contents.push(React.cloneElement(content, {key: i}));
            }
        });

        return (
            <>
                <Box d="flex">{headers}</Box>
                {contents}
            </>
        );
    };

    return <StyledTabs {...props} children={recurseChildren(props.children)} />;
};

Tabs.defaultProps = {
    className: '',
    style: {}
};

Tabs.displayName = 'Tabs';

/**
 * Tab
 */
export const Tab: React.FC<ITabComponentProps> = (props) => {
    return <StyledTab {...props} />;
};

Tab.defaultProps = {
    className: '',
    style: {}
};

Tab.displayName = 'Tab';

/**
 * TabHeader
 */
export const TabHeader: React.FC<ITabCommonComponentProps> = (props) => {
    return <StyledTabHeader {...props} />;
};

TabHeader.defaultProps = {
    className: '',
    style: {}
};

TabHeader.displayName = 'TabHeader';

/**
 * TabContent
 */
export const TabContent: React.FC<ITabCommonComponentProps> = (props) => {
    return <StyledTabContent {...props} />;
};

TabContent.defaultProps = {
    className: '',
    style: {}
};

TabContent.displayName = 'TabContent';

export default Tabs;
