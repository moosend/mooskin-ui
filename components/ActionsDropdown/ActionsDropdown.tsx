import * as React from 'react';

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

    const [hasArrow, setHasArrow] = React.useState(false);

    const batchClickHandler = (
        e: React.MouseEvent<HTMLDivElement>,
        data: IInputCallbackData,
        callback?: (e: React.MouseEvent<HTMLDivElement>, data: IInputCallbackData) => void
    ) => {
        props.onClickItem && props.onClickItem(e, data);
        callback && callback(e, data);
    };

    const recurseChildren = (children: any): any => {
        if (!children){
            return null;
        }

        return React.Children.map(children, (child, i) => {
            if (React.isValidElement<IActionsDropdownItemComponentProps>(child) && child.type === ActionsDropdownItem){
                return React.cloneElement(child, {
                    children: recurseChildren((child.props as any).children),
                    key: i,
                    onClickItem: (e) => batchClickHandler(e, {dataLabel: child.props.dataLabel, value: child.props.value}, child.props.onClickItem)
                } as IActionsDropdownItemComponentProps);
            }

            if (React.isValidElement<IActionsDropdownArrowComponentProps>(child) && child.type === ActionsDropdownArrow){
                !hasArrow && setHasArrow(true);
                return React.cloneElement(child, {
                    arrowColor: child.props.arrowColor ? child.props.arrowColor : props.bgColor,
                    children: recurseChildren((child.props as any).children),
                    key: i
                } as IActionsDropdownArrowComponentProps);
            }

            if (React.isValidElement(child) && (child.props as any).children){
                return React.cloneElement(child, {key: i, children: recurseChildren((child.props as any).children)} as any);
            }

            return child;
        });
    };

    return (
        <StyledActionsDropdown boxShadow="lg" {...props}>
            {!hasArrow && <ActionsDropdownArrow />}
            {recurseChildren(props.children)}
        </StyledActionsDropdown>
    );
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
    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        props.onClickItem && props.onClickItem(e, props.value);
        props.onClick && props.onClick(e);
    };
    return <StyledActionsDropdownItem {...props} onClick={onClick} />;
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
