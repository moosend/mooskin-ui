import * as React from 'react';

import { IconButton } from '../IconButton/IconButton';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { IPaginationButtonComponentProps, IPaginationComponentProps } from './model';

// Styled Components
import { StyledPagination, StyledPaginationButton, StyledPaginationShowAll } from './styles';
import variables from '../_utils/globals/variables';

/**
 * Pagination
 */
export const Pagination: React.FC<IPaginationComponentProps> = withMooskinContext(({ className = '', style = {}, ...props }) => {
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

	const childrenLength = props.children && Array.isArray(props.children) && props.children.length;

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

				const condition =
					childrenLength && props.activePage >= childrenLength - 1
						? page >= childrenLength - 4
						: props.activePage >= 4
						? page - 2 <= props.activePage && page + 2 >= props.activePage
						: page <= 5;

				if (children[props.activePage - 2] && !showPrevious) {
					setShowPrevious(true);
				} else if (!children[props.activePage - 2] && showPrevious) {
					setShowPrevious(false);
				}

				if (children[props.activePage - 2] && !showFirst) {
					setShowFirst(true);
				} else if (!children[props.activePage - 2] && showFirst) {
					setShowFirst(false);
				}

				if (children[props.activePage] && !showNext) {
					setShowNext(true);
				} else if (!children[props.activePage] && showNext) {
					setShowNext(false);
				}

				if (children[props.activePage] && !showLast) {
					setShowLast(true);
				} else if (!children[props.activePage] && showLast) {
					setShowLast(false);
				}

				if (props.singleItem) {
					return page === props.activePage
						? React.cloneElement(child, {
								active: true,
								children: page,
								key: i
								// onClick: (e) => batchClickHandler(e, page, child.props.onClick),
						  } as IPaginationButtonComponentProps)
						: null;
				}

				if (showAll || condition) {
					return React.cloneElement(child, {
						active: page === props.activePage,
						children: page,
						key: i,
						onClick: (e) => batchClickHandler(e, page, child.props.onClick)
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

	return (
		<StyledPagination d="flex" align="center" className={className} style={style} {...props}>
			{!showAll && !props.singleItem && (
				<IconButton
					cursor={showFirst ? 'pointer' : 'not-allowed'}
					onClick={showFirst ? () => onArrowClick(1) : undefined}
					fontColor={showFirst ? 'fontColors.text' : 'fontColors.medgray2'}
					opacity={showFirst ? 1 : 0.6}
				>
					first_page
				</IconButton>
			)}
			{!showAll && (
				<IconButton
					cursor={showPrevious ? 'pointer' : 'not-allowed'}
					mr={10}
					onClick={showPrevious ? () => onArrowClick(props.activePage - 1) : undefined}
					fontColor={showPrevious ? 'fontColors.text' : 'fontColors.medgray2'}
					opacity={showPrevious ? 1 : 0.6}
				>
					chevron_left
				</IconButton>
			)}
			{recurseChildren(props.children)}
			{!showAll && (
				<IconButton
					cursor={showNext ? 'pointer' : 'not-allowed'}
					onClick={showNext ? () => onArrowClick(props.activePage + 1) : undefined}
					fontColor={showNext ? 'fontColors.text' : 'fontColors.medgray2'}
					opacity={showNext ? 1 : 0.6}
				>
					chevron_right
				</IconButton>
			)}
			{!showAll && !props.singleItem && (
				<IconButton
					cursor={showLast ? 'pointer' : 'not-allowed'}
					onClick={showLast ? () => childrenLength && onArrowClick(childrenLength) : undefined}
					mr={10}
					fontColor={showLast ? 'fontColors.text' : 'fontColors.medgray2'}
					opacity={showLast ? 1 : 0.6}
				>
					last_page
				</IconButton>
			)}
			{!props.hideShowAll && childrenLength && childrenLength > 5 && (
				<StyledPaginationShowAll
					fontSize="14px"
					fontWeight={500}
					fontStyle="normal"
					textAlign="left"
					color={props.palette?.fontColors.primary1 || variables.fontColors.primary1}
					cursor="pointer"
					palette={props.palette}
					onClick={() => setShowAll(!showAll)}
				>
					{showAll ? 'Hide' : 'Show all'}
				</StyledPaginationShowAll>
			)}
		</StyledPagination>
	);
});

Pagination.displayName = 'Pagination';

/**
 * PaginationButton
 */
export const PaginationButton: React.FC<IPaginationButtonComponentProps> = withMooskinContext(
	({ className = '', style = {}, ...props }) => {
		return (
			<StyledPaginationButton
				borderRadius="2px"
				fontSize={16}
				fontWeight={500}
				fontStyle="normal"
				textAlign="center"
				cursor="pointer"
				p={props.active ? '9px 12px' : '8px 11px'}
				color={
					props.active
						? props.palette?.fontColors.white || variables.fontColors.white
						: props.palette?.fontColors.medgray1 || variables.fontColors.medgray1
				}
				bgColor={
					props.active
						? props.palette?.backgroundColors.primary2 || variables.backgroundColors.primary2
						: props.palette?.backgroundColors.white || variables.backgroundColors.white
				}
				border={props.active ? 'none' : `solid 1px ${props.palette?.borderColors.medgray1 || variables.borderColors.medgray1}`}
				{...props}
			/>
		);
	}
);

PaginationButton.displayName = 'PaginationButton';
