import styled from 'styled-components';

// Screen sizes
import screens from '../_utils/globals/screens';

// Models
import { IStyledTheme } from '../Styled/model';
import { BoxShadowIntensityType, IBoxComponentProps, IntensityType, NestedThemeType } from './model';

export const StyledBox = styled.div<IBoxComponentProps>`
	&&& {
		margin: ${(props) => getNumberOrStringValue(props.m)};
		margin-top: ${(props) => getNumberOrStringValue(props.mt || props.my)};
		margin-right: ${(props) => getNumberOrStringValue(props.mr || props.mx)};
		margin-bottom: ${(props) => getNumberOrStringValue(props.mb || props.my)};
		margin-left: ${(props) => getNumberOrStringValue(props.ml || props.mx)};

		padding: ${(props) => getNumberOrStringValue(props.p)};
		padding-top: ${(props) => getNumberOrStringValue(props.pt || props.py)};
		padding-right: ${(props) => getNumberOrStringValue(props.pr || props.px)};
		padding-bottom: ${(props) => getNumberOrStringValue(props.pb || props.py)};
		padding-left: ${(props) => getNumberOrStringValue(props.pl || props.px)};

		color: ${(props) => getNestedValue(props.color, props.palette)};
		font-family: ${(props) => props.fontFamily};
		font-size: ${(props) => getNumberOrStringValue(props.fontSize)};
		font-weight: ${(props) => props.fontWeight};
		line-height: ${(props) => props.lineHeight};
		text-align: ${(props) => props.textAlign};
		font-style: ${(props) => props.fontStyle};
		text-transform: ${(props) => props.textTransform};
		text-decoration: ${(props) => props.textDecoration};
		white-space: ${(props) => props.whiteSpace};

		width: ${(props) => getNumberOrStringValue(props.w)};
		height: ${(props) => getNumberOrStringValue(props.h)};
		min-width: ${(props) => getNumberOrStringValue(props.minW)};
		max-width: ${(props) => getNumberOrStringValue(props.maxW)};
		min-height: ${(props) => getNumberOrStringValue(props.minH)};
		max-height: ${(props) => getNumberOrStringValue(props.maxH)};

		display: ${(props) => props.d};

		overflow: ${(props) => props.overflow};
		overflow-y: ${(props) => props.overflowY};
		overflow-x: ${(props) => props.overflowX};

		align-items: ${(props) => props.align};
		align-content: ${(props) => props.alignContent};
		align-self: ${(props) => props.alignSelf};
		justify-content: ${(props) => props.justify};
		justify-items: ${(props) => props.justifyItems};
		justify-self: ${(props) => props.justifySelf};
		flex-wrap: ${(props) => props.flexWrap};
		flex-direction: ${(props) => props.direction};
		flex: ${(props) => props.flex};
		flex-grow: ${(props) => props.flexGrow};
		flex-shrink: ${(props) => props.flexShrink};
		flex-basis: ${(props) => getNumberOrStringValue(props.flexBasis)};
		order: ${(props) => props.order};

		background: ${(props) => props.bg};
		background-image: ${(props) => props.bgImage};
		background-color: ${(props) => getNestedValue(props.bgColor, props.palette)};
		background-size: ${(props) => props.bgSize};
		background-position: ${(props) => props.bgPosition};
		background-repeat: ${(props) => props.bgRepeat};

		border: ${(props) => props.border};
		border-style: ${(props) => props.borderStyle};
		border-color: ${(props) => getNestedValue(props.borderColor, props.palette)};
		border-width: ${(props) => getNumberOrStringValue(props.borderWidth)};

		border-top: ${(props) => props.borderTop};
		border-top-style: ${(props) => props.borderTopStyle};
		border-top-color: ${(props) => props.borderTopColor};
		border-top-width: ${(props) => getNumberOrStringValue(props.borderTopWidth)};

		border-right: ${(props) => props.borderRight};
		border-right-style: ${(props) => props.borderRightStyle};
		border-right-color: ${(props) => props.borderRightColor};
		border-right-width: ${(props) => getNumberOrStringValue(props.borderRightWidth)};

		border-bottom: ${(props) => props.borderBottom};
		border-bottom-style: ${(props) => props.borderBottomStyle};
		border-bottom-color: ${(props) => props.borderBottomColor};
		border-bottom-width: ${(props) => getNumberOrStringValue(props.borderBottomWidth)};

		border-left: ${(props) => props.borderLeft};
		border-left-style: ${(props) => props.borderLeftStyle};
		border-left-color: ${(props) => props.borderLeftColor};
		border-left-width: ${(props) => getNumberOrStringValue(props.borderLeftWidth)};

		border-radius: ${(props) => (props.borderRadius ? getNumberOrStringValue(props.borderRadius) : getRoundness(props.round))};
		border-top-left-radius: ${(props) => getNumberOrStringValue(props.borderTopLeftRadius)};
		border-top-right-radius: ${(props) => getNumberOrStringValue(props.borderTopRightRadius)};
		border-bottom-right-radius: ${(props) => getNumberOrStringValue(props.borderBottomRightRadius)};
		border-bottom-left-radius: ${(props) => getNumberOrStringValue(props.borderBottomLeftRadius)};

		position: ${(props) => props.position};
		z-index: ${(props) => props.zIndex};
		top: ${(props) => getNumberOrStringValue(props.top)};
		right: ${(props) => getNumberOrStringValue(props.right)};
		bottom: ${(props) => getNumberOrStringValue(props.bottom)};
		left: ${(props) => getNumberOrStringValue(props.left)};

		box-shadow: ${(props) => getBoxShadow(props.boxShadow)};

		animation: ${(props) => props.animation};

		visibility: ${(props) => props.visibility};

		opacity: ${(props) => props.opacity};

		cursor: ${(props) => props.cursor};

		:hover {
			${(props) => props._hover}
		}

		${(props) => generateHiddenMediaQuery(props)}
	}
`;

StyledBox.displayName = 'StyledBox';

export const getNumberOrStringValue = (value?: number | string) => {
	if (typeof value !== 'undefined') {
		return typeof value === 'number' ? `${value}px` : value;
	}
};

export const getNestedValue = (value?: number | string | NestedThemeType, pallete?: IStyledTheme) => {
	if (Array.isArray(value) && pallete) {
		return (pallete as any)[value[0]][value[1]];
	}
	return value;
};

export const getRoundness = (round?: IntensityType) => {
	switch (round) {
		case 'xs':
			return '0.125rem';

		case 'sm':
			return '0.25rem';

		case 'base':
			return '0.375rem';

		case 'md':
			return '0.5rem';

		case 'lg':
			return '0.625rem';

		case 'xl':
			return '0.75rem';

		case '2xl':
			return '1rem';

		default:
			break;
	}
};

export const getBoxShadow = (boxShadow?: React.CSSProperties['boxShadow'] | BoxShadowIntensityType) => {
	switch (boxShadow) {
		case 'xs':
			return '0 0 0 1px rgba(0, 0, 0, 0.05)';

		case 'sm':
			return '0 1px 2px 0 rgba(0, 0, 0, 0.05)';

		case 'base':
			return '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';

		case 'md':
			return '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';

		case 'lg':
			return '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';

		case 'xl':
			return '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';

		case '2xl':
			return '0 25px 50px -12px rgba(0, 0, 0, 0.25)';

		case 'outline':
			return '0 0 0 3px rgba(66, 153, 225, 0.6)';

		case 'inner':
			return 'inset 0 2px 4px 0 rgba(0,0,0,0.06)';

		default:
			return boxShadow;
	}
};

const generateHiddenMediaQuery = (props: IBoxComponentProps) => {
	const { lgHide, mdHide, smHide, xsHide } = props;
	let media = '';

	if (lgHide) {
		media = `${media} ${getQueryString(screens.large)}`;
	}

	if (mdHide) {
		media = `${media} ${getQueryString(screens.medium)}`;
	}

	if (smHide) {
		media = `${media} ${getQueryString(screens.small)}`;
	}

	if (xsHide) {
		media = `${media} ${getQueryString(screens.xSmall)}`;
	}

	return media;
};

const getQueryString = (media: string) => {
	return `
        @media ${media} {
            display: none;
        }
    `;
};
