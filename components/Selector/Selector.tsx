import * as React from 'react';

// Helpers
import { getBoxProps } from '../_utils/helper';

// Models
import { IInputCallbackData } from '../_utils/types/commonTypes';
import { ISelectorComponentProps, ISelectorItemComponentProps } from './model';

// Styled Components
import {
    StyledSelector,
    StyledSelectorItem
} from './styles';

/**
 * Selector
 */
export const Selector: React.FC<ISelectorComponentProps> = (props) => {

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
            if (React.isValidElement<ISelectorItemComponentProps>(child) && child.type === SelectorItem){
                return React.cloneElement(child, {
                    active: child.props.value === props.activeItem,
                    children: recurseChildren((child.props as any).children),
                    key: i,
                    onClick: (e) => batchClickHandler(e, {dataLabel: child.props.dataLabel, value: child.props.value}, child.props.onClick)
                } as ISelectorItemComponentProps);
            }

            if (React.isValidElement(child) && (child.props as any).children){
                return React.cloneElement(child, {children: recurseChildren((child.props as any).children)} as any);
            }

            return child;
        });
    };

    return <StyledSelector {...getBoxProps(props)} children={recurseChildren(props.children)} />;
};

Selector.defaultProps = {
    className: '',
    style: {}
};

/**
 * SelectorItem
 */
export const SelectorItem: React.FC<ISelectorItemComponentProps> = (props) => {
    return <StyledSelectorItem {...props} />;
};

SelectorItem.defaultProps = {
    className: '',
    style: {}
};

export default Selector;
