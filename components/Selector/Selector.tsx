import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { ISelectorComponentProps, ISelectorItemComponentProps } from './model';

// Styled Components
import { StyledSelector, StyledSelectorItem } from './styles';

/**
 * Selector
 */
export const Selector: React.FC<ISelectorComponentProps> = withMooskinContext((props) => {
    const batchClickHandler = (
        e: React.MouseEvent<HTMLElement>,
        value?: string | number,
        callback?: (e: React.MouseEvent<HTMLElement>) => void
    ) => {
        props.onClickItem && props.onClickItem(e, value);
        callback && callback(e);
    };

    const recurseChildren = (children: any): any => {
        return React.Children.map(children, (child, i) => {
            if (React.isValidElement<ISelectorItemComponentProps>(child) && child.type === SelectorItem) {
                return React.cloneElement(child, {
                    active: child.props.value === props.activeItem,
                    children: recurseChildren((child.props as any).children),
                    key: i,
                    onClick: (e) => batchClickHandler(e, child.props.value, child.props.onClick)
                } as ISelectorItemComponentProps);
            }

            if (React.isValidElement(child) && (child.props as any).children) {
                return React.cloneElement(child, { key: i, children: recurseChildren((child.props as any).children) } as any);
            }

            return child;
        });
    };

    return <StyledSelector {...props} children={recurseChildren(props.children)} />;
});

Selector.defaultProps = {
    className: '',
    style: {}
};

/**
 * SelectorItem
 */
export const SelectorItem: React.FC<ISelectorItemComponentProps> = withMooskinContext((props) => {
    return <StyledSelectorItem {...props} />;
});

SelectorItem.defaultProps = {
    className: '',
    style: {}
};
