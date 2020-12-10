import * as React from 'react';

// Helpers
import { getBoxProps } from '../_utils/helper';

// Models
import { IInputCallbackData } from '../_utils/types/commonTypes';
import { ISidemenuComponentProps, ISidemenuItemComponentProps } from './model';

// Styled Components
import {
    StyledSidemenu,
    StyledSidemenuItem
} from './styles';

/**
 * Sidemenu
 */
export const Sidemenu: React.FC<ISidemenuComponentProps> = (props) => {

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
            if (React.isValidElement<ISidemenuItemComponentProps>(child) && child.type === SidemenuItem){
                return React.cloneElement(child, {
                    active: child.props.value === props.activeItem,
                    children: recurseChildren((child.props as any).children),
                    key: i,
                    onClick: (e) => batchClickHandler(e, {dataLabel: child.props.dataLabel, value: child.props.value}, child.props.onClick)
                } as ISidemenuItemComponentProps);
            }

            if (React.isValidElement(child) && (child.props as any).children){
                return React.cloneElement(child, {children: recurseChildren((child.props as any).children)} as any);
            }

            return child;
        });
    };

    return <StyledSidemenu {...getBoxProps(props)} children={recurseChildren(props.children)} />;
};

Sidemenu.defaultProps = {
    className: '',
    style: {}
};

/**
 * SidemenuItem
 */
export const SidemenuItem: React.FC<ISidemenuItemComponentProps> = (props) => {
    return <StyledSidemenuItem {...props} />;
};

SidemenuItem.defaultProps = {
    className: '',
    style: {}
};

export default Sidemenu;
