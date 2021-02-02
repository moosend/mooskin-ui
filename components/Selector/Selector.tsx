import * as React from 'react';

// Models
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
        value?: string,
        callback?: (e: React.MouseEvent<HTMLElement>, value?: string) => void
    ) => {
        props.onClickItem && props.onClickItem(e, value);
        callback && callback(e, value);
    };

    const recurseChildren = (children: any): any => {
        return React.Children.map(children, (child, i) => {
            if (React.isValidElement<ISelectorItemComponentProps>(child) && child.type === SelectorItem){
                return React.cloneElement(child, {
                    active: child.props.value === props.activeItem,
                    children: recurseChildren((child.props as any).children),
                    key: i,
                    onClickItem: (e, value) => {
                        batchClickHandler(e, value, child.props.onClickItem);
                    }
                } as ISelectorItemComponentProps);
            }

            if (React.isValidElement(child) && (child.props as any).children){
                return React.cloneElement(child, {key: i, children: recurseChildren((child.props as any).children)} as any);
            }

            return child;
        });
    };

    return <StyledSelector {...props} children={recurseChildren(props.children)} />;
};

Selector.defaultProps = {
    className: '',
    style: {}
};

/**
 * SelectorItem
 */
export const SelectorItem: React.FC<ISelectorItemComponentProps> = (props) => {
    const onClick = (e: React.MouseEvent<HTMLElement>) => {
        props.onClickItem && props.onClickItem(e, props.value);
        props.onClick && props.onClick(e);
    };
    return <StyledSelectorItem {...props} onClick={onClick} />;
};

SelectorItem.defaultProps = {
    className: '',
    style: {}
};

export default Selector;
