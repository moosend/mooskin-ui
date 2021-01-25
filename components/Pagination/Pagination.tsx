import * as React from 'react';

// Models
import { IPaginationButtonComponentProps, IPaginationComponentProps } from './model';

// Styled Components
import { StyledPagination, StyledPaginationButton, StyledPaginationShowAll } from './styles';

/**
 * Pagination
 */
export const Pagination: React.FC<IPaginationComponentProps> = (props) => {

    const [showAll, setShowAll] = React.useState(false);

    const recurseChildren = (children: any): any => {
        if (!children){
            return null;
        }

        return React.Children.map(children, (child, i) => {

            if (React.isValidElement<IPaginationButtonComponentProps>(child) && child.type === PaginationButton){
                let condition = (child.props.value - 2 <= props.activePage && child.props.value + 2 >= props.activePage);

                if (props.activePage >= 4){
                    condition = (child.props.value - 2 <= props.activePage && child.props.value + 2 >= props.activePage);
                } else {
                    condition = child.props.value <= 5;
                }

                if (showAll || condition){
                    return React.cloneElement(child, {
                        active: child.props.value === props.activePage,
                        children: recurseChildren(child.props.children),
                        key: i,
                        onClickButton: (e, value) => props.onClickButton && props.onClickButton(e, value),
                        value: child.props.value
                    } as IPaginationButtonComponentProps);
                }
                return null;
            }

            if (React.isValidElement(child) && (child.props as any).children){
                return React.cloneElement(child, {key: i, children: recurseChildren((child.props as any).children)} as any);
            }

            return child;
        });
    };

    return (
        <StyledPagination {...props} >
            {recurseChildren(props.children)}
            {props.children && Array.isArray(props.children) && props.children.length > 5 && (
                <StyledPaginationShowAll onClick={() => setShowAll(!showAll)}>
                    {showAll ? 'Hide' : 'Show all'}
                </StyledPaginationShowAll>
            )}
        </StyledPagination>
    );
};

Pagination.defaultProps = {
    className: '',
    style: {}
};

Pagination.displayName = 'Pagination';

/**
 * PaginationButton
 */
export const PaginationButton: React.FC<IPaginationButtonComponentProps> = (props) => {
    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        props.onClickButton && props.onClickButton(e, props.value);
        props.onClick && props.onClick(e);
    };
    return (
        <StyledPaginationButton {...props} onClick={onClick} >
            {props.children || props.value}
        </StyledPaginationButton>
    );
};

PaginationButton.defaultProps = {
    className: '',
    style: {}
};

PaginationButton.displayName = 'PaginationButton';

export default Pagination;
