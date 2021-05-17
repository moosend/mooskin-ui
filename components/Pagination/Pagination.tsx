import * as React from 'react';

import { IconButton } from '../IconButton/IconButton';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { IPaginationButtonComponentProps, IPaginationComponentProps } from './model';

// Styled Components
import { StyledPagination, StyledPaginationButton, StyledPaginationShowAll } from './styles';

/**
 * Pagination
 */
export const Pagination: React.FC<IPaginationComponentProps> = withMooskinContext((props) => {
	const [showAll, setShowAll] = React.useState(false);
	const [showFirst, setShowFirst] = React.useState(false);
	const [showPrevious, setShowPrevious] = React.useState(false);
	const [showNext, setShowNext] = React.useState(false);
	const [showLast, setShowLast] = React.useState(false);

	React.useEffect(() => {
		setShowFirst(false);
		setShowPrevious(false);
		setShowNext(false);
		setShowLast(false);
	}, []);

	const batchClickHandler = (e: React.MouseEvent<HTMLElement>, page: number, callback?: (e: React.MouseEvent<HTMLElement>) => void) => {
		props.onClickButton && props.onClickButton(e, page);
		callback && callback(e);
	};

	const onArrowClick = (page: number) => {
		props.onClickButton && props.onClickButton({} as any, page);
	};

	const recurseChildren = (children: any): any => {
		if (!children) {
			return null;
		}

		return React.Children.map(children, (child, i) => {
			if (React.isValidElement<IPaginationButtonComponentProps>(child) && child.type === PaginationButton) {
				const page = i + 1;

				const condition = props.activePage >= 4 ? page - 2 <= props.activePage && page + 2 >= props.activePage : page <= 5;

				if (children[props.activePage - 4] && !showPrevious) {
					setShowPrevious(true);
				} else if (!children[props.activePage - 4] && showPrevious) {
					setShowPrevious(false);
				}

				if (children[props.activePage - 4] && !showFirst) {
					setShowFirst(true);
				} else if (!children[props.activePage - 4] && showFirst) {
					setShowFirst(false);
				}

				if (children[props.activePage + 2] && !showNext) {
					setShowNext(true);
				} else if (!children[props.activePage + 2] && showNext) {
					setShowNext(false);
				}

				if (children[props.activePage + 2] && !showLast) {
					setShowLast(true);
				} else if (!children[props.activePage + 2] && showLast) {
					setShowLast(false);
				}

				if (showAll || condition) {
					return React.cloneElement(child, {
						active: page === props.activePage,
						children: page,
						key: i,
						onClick: (e) => batchClickHandler(e, page, child.props.onClick),
					} as IPaginationButtonComponentProps);
				}
				return null;
			}

			if (React.isValidElement(child) && (child.props as any).children) {
				return React.cloneElement(child, { key: i, children: recurseChildren((child.props as any).children) } as any);
			}

			return child;
		});
	};

	const childrenLength = props.children && Array.isArray(props.children) && props.children.length;

	return (
		<StyledPagination {...props}>
			{!showAll && showFirst && (
				<IconButton onClick={() => onArrowClick(1)} color={['backgroundColors', 'toggle']}>
					first_page
				</IconButton>
			)}
			{!showAll && showPrevious && (
				<IconButton mr={10} onClick={() => onArrowClick(props.activePage - 1)} color={['backgroundColors', 'toggle']}>
					chevron_left
				</IconButton>
			)}
			{recurseChildren(props.children)}
			{!showAll && showNext && (
				<IconButton onClick={() => onArrowClick(props.activePage + 1)} color={['backgroundColors', 'toggle']}>
					chevron_right
				</IconButton>
			)}
			{!showAll && showLast && (
				<IconButton onClick={() => childrenLength && onArrowClick(childrenLength)} mr={10} color={['backgroundColors', 'toggle']}>
					last_page
				</IconButton>
			)}
			{childrenLength && childrenLength > 5 && (
				<StyledPaginationShowAll onClick={() => setShowAll(!showAll)}>{showAll ? 'Hide' : 'Show all'}</StyledPaginationShowAll>
			)}
		</StyledPagination>
	);
});

Pagination.defaultProps = {
	className: '',
	style: {},
};

Pagination.displayName = 'Pagination';

/**
 * PaginationButton
 */
export const PaginationButton: React.FC<IPaginationButtonComponentProps> = withMooskinContext((props) => {
	return <StyledPaginationButton {...props} />;
});

PaginationButton.defaultProps = {
	className: '',
	style: {},
};

PaginationButton.displayName = 'PaginationButton';
