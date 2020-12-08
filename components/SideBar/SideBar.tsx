import * as React from 'react';
import { IInputCallbackData } from '../index/index';
import { getBoxProps } from '../_utils/helper';

import { ISidebarComponentProps, ISidebarItemComponentProps } from './model';

import {
    StyledSidebar,
    StyledSidebarItem
} from './styles';

export const Sidebar: React.FC<ISidebarComponentProps> = (props) => {

    // const batchClickHandler = (
    //     e: React.MouseEvent<HTMLElement>,
    //     data: IInputCallbackData,
    //     callback?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void
    // ) => {
    //     props.onClickItem && props.onClickItem(e, data);
    //     callback && callback(e, data);
    // };

    const batchClickHandler = (
        e: React.MouseEvent<HTMLElement>,
        data: IInputCallbackData,
        callback?: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => void
    ) => {
        props.onClickItem && props.onClickItem(e, data);
        callback && callback(e, data);
    };

    const recurseChildren = (children: any): any => {
        return React.Children.map(children, (child, i) => {
            if (React.isValidElement<ISidebarItemComponentProps>(child) && child.type === SidebarItem){
                return React.cloneElement(child, {
                    active: child.props.value === props.activeItem,
                    children: recurseChildren((child.props as any).children),
                    key: i,
                    onClick: (e) => batchClickHandler(e, {dataLabel: child.props.dataLabel, value: child.props.value}, child.props.onClick)
                } as ISidebarItemComponentProps);
            }

            if (React.isValidElement(child) && (child.props as any).children){
                return React.cloneElement(child, {children: recurseChildren((child.props as any).children)} as any);
            }

            return child;
        });
    };

    return (
        <StyledSidebar {...getBoxProps(props)}>
            {props.children && recurseChildren(props.children)}
        </StyledSidebar>
    );
};

Sidebar.defaultProps = {
    className: '',
    style: {}
};

/**
 * SidebarItem
 */
export const SidebarItem: React.FC<ISidebarItemComponentProps> = (props) => {
    return (
        <StyledSidebarItem {...props}>
            {props.children}
        </StyledSidebarItem>
    );
};

SidebarItem.defaultProps = {
    className: '',
    style: {}
};

export default Sidebar;
