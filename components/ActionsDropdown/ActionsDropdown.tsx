import * as React from 'react';

// Helpers
import { getBoxProps } from '../_utils/helper';

// Models
import { IInputCallbackData } from '../_utils/types/commonTypes';
import { IActionsDropdownArrowComponentProps, IActionsDropdownComponentProps, IActionsDropdownItemComponentProps } from './model';

// Styled Components
import {
    StyledActionsDropdown,
    StyledActionsDropdownArrow,
    StyledActionsDropdownItem
} from './styles';

/**
 * ActionsDropdown
 */
export const ActionsDropdown: React.FC<IActionsDropdownComponentProps> = (props) => {

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
            if (React.isValidElement<IActionsDropdownItemComponentProps>(child) && child.type === ActionsDropdownItem){
                return React.cloneElement(child, {
                    children: recurseChildren((child.props as any).children),
                    key: i,
                    onClick: (e) => batchClickHandler(e, {dataLabel: child.props.dataLabel, value: child.props.value}, child.props.onClick)
                } as IActionsDropdownItemComponentProps);
            }

            if (React.isValidElement<IActionsDropdownArrowComponentProps>(child) && child.type === ActionsDropdownArrow){
                return React.cloneElement(child, {
                    arrowColor: child.props.arrowColor ? child.props.arrowColor : props.bgColor,
                    children: recurseChildren((child.props as any).children),
                    key: i
                } as IActionsDropdownArrowComponentProps);
            }

            if (React.isValidElement(child) && (child.props as any).children){
                return React.cloneElement(child, {children: recurseChildren((child.props as any).children)} as any);
            }

            return child;
        });
    };

    return <StyledActionsDropdown boxShadow="lg" {...getBoxProps(props)} children={recurseChildren(props.children)} />;
};

ActionsDropdown.defaultProps = {
    className: '',
    style: {}
};

ActionsDropdown.displayName = 'ActionsDropdown';

/**
 * ActionsDropdownItem
 */
export const ActionsDropdownItem: React.FC<IActionsDropdownItemComponentProps> = (props) => {
    return <StyledActionsDropdownItem {...props} />;
};

ActionsDropdownItem.defaultProps = {
    className: '',
    style: {}
};

ActionsDropdownItem.displayName = 'ActionsDropdownItem';

/**
 * ActionsDropdownArrow
 */
export const ActionsDropdownArrow: React.FC<IActionsDropdownArrowComponentProps> = (props) => {
    return <StyledActionsDropdownArrow {...props} />;
};

ActionsDropdownArrow.defaultProps = {
    arrowColor: '#3fbaca',
    arrowDirection: 'up',
    className: '',
    style: {}
};

ActionsDropdownArrow.displayName = 'ActionsDropdownArrow';

export default ActionsDropdown;
