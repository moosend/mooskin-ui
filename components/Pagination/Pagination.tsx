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

    const batchClickHandler = (e: React.MouseEvent<HTMLElement>, page: number, callback?: (e: React.MouseEvent<HTMLElement>) => void) => {
        props.onClickButton && props.onClickButton(e, page);
        callback && callback(e);
    };

    const recurseChildren = (children: any): any => {
        if (!children){
            return null;
        }

        return React.Children.map(children, (child, i) => {

            if (React.isValidElement<IPaginationButtonComponentProps>(child) && child.type === PaginationButton){

                const page = i + 1;

                const condition = props.activePage >= 4 ?
                    (page - 2 <= props.activePage && page + 2 >= props.activePage) :
                    page <= 5;

                if (showAll || condition){
                    return React.cloneElement(child, {
                        active: page === props.activePage,
                        children: page,
                        key: i,
                        onClick: (e) => batchClickHandler(e, page, child.props.onClick)
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
    return <StyledPaginationButton {...props} />;
};

PaginationButton.defaultProps = {
    className: '',
    style: {}
};

PaginationButton.displayName = 'PaginationButton';

export default Pagination;
