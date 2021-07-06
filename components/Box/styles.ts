import styled from 'styled-components';

// Screen sizes
import screens from '../_utils/globals/screens';

// Models
import { IStyledTheme } from '../Styled/model';
import { BoxShadowIntensityType, IBoxComponentProps, IntensityType, NestedThemeType } from './model';

export const getNumberOrStringValue = (value?: number | string) => {
	if (typeof value !== 'undefined') {
		return typeof value === 'number' ? `${value}px` : value;
	}
	return '';
};

export const getNestedValue = (value?: number | string | NestedThemeType, pallete?: IStyledTheme) => {
	if (typeof value === 'string' && value.includes('.') && pallete) {
		const valueAsArray = value.split('.');
		return (pallete as any)[valueAsArray[0]] ? (pallete as any)[valueAsArray[0]][valueAsArray[1]] : value;
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

const getMediaQueryString = (media: string, property: string, value?: number | string) => {
	return `
        @media ${media} {
            ${property}: ${value};
        }
    `;
};

const generateStyles = (data: {
	property: string;
	value?: number | string | any[];
	processedValue?: boolean;
	nestedValue?: boolean;
	pallete?: IStyledTheme;
}) => {
	const { property, nestedValue, processedValue, value, pallete } = data;

	if (typeof value === 'undefined') {
		return;
	}

	let media = '';
	let largeValue;
	let mediumValue;
	let smallValue;
	let xSmallValue;

	if (Array.isArray(value)) {
		if (value[0]) {
			largeValue = processedValue ? getNumberOrStringValue(value[0]) : nestedValue ? getNestedValue(value[0], pallete) : value[0];
			// media = `${media} ${getMediaQueryString(screens.large)}`;
		}
		if (value[1]) {
			mediumValue = processedValue ? getNumberOrStringValue(value[1]) : nestedValue ? getNestedValue(value[1], pallete) : value[1];
			media = `${media} ${getMediaQueryString(screens.medium, property, mediumValue)}`;
		}
		if (value[2]) {
			smallValue = processedValue ? getNumberOrStringValue(value[2]) : nestedValue ? getNestedValue(value[2], pallete) : value[2];
			media = `${media} ${getMediaQueryString(screens.small, property, smallValue)}`;
		}
		if (value[3]) {
			xSmallValue = processedValue ? getNumberOrStringValue(value[3]) : nestedValue ? getNestedValue(value[3], pallete) : value[3];
			media = `${media} ${getMediaQueryString(screens.xSmall, property, xSmallValue)}`;
		}
	} else {
		largeValue = processedValue ? getNumberOrStringValue(value) : nestedValue ? getNestedValue(value, pallete) : value;
	}

	return `
		${property}: ${largeValue};
		${media}
	`;
};

export const StyledBox = styled.div<IBoxComponentProps>`
	&&& {

		${(props) => generateStyles({ property: 'margin', value: props.m, processedValue: true })}
		${(props) => generateStyles({ property: 'margin-top', value: props.mt || props.my, processedValue: true })}
		${(props) => generateStyles({ property: 'margin-right', value: props.mr || props.mx, processedValue: true })}
		${(props) => generateStyles({ property: 'margin-bottom', value: props.mb || props.my, processedValue: true })}
		${(props) => generateStyles({ property: 'margin-left', value: props.ml || props.mx, processedValue: true })}

		${(props) => generateStyles({ property: 'padding', value: props.p, processedValue: true })}
		${(props) => generateStyles({ property: 'padding-top', value: props.pt || props.py, processedValue: true })}
		${(props) => generateStyles({ property: 'padding-right', value: props.pr || props.px, processedValue: true })}
		${(props) => generateStyles({ property: 'padding-bottom', value: props.pb || props.py, processedValue: true })}
		${(props) => generateStyles({ property: 'padding-left', value: props.pl || props.px, processedValue: true })}

		${(props) => generateStyles({ property: 'color', value: props.fontColor, nestedValue: true, pallete: props.palette })}
		${(props) => generateStyles({ property: 'font-family', value: props.fontFamily })}
		${(props) => generateStyles({ property: 'font-size', value: props.fontSize, processedValue: true })}
		${(props) => generateStyles({ property: 'font-weight', value: props.fontWeight })}
		${(props) => generateStyles({ property: 'line-height', value: props.lineHeight })}
		${(props) => generateStyles({ property: 'text-align', value: props.textAlign })}
		${(props) => generateStyles({ property: 'font-style', value: props.fontStyle })}
		${(props) => generateStyles({ property: 'text-transform', value: props.textTransform })}
		${(props) => generateStyles({ property: 'text-decoration', value: props.textDecoration })}
		${(props) => generateStyles({ property: 'white-space', value: props.whiteSpace })}

		${(props) => generateStyles({ property: 'width', value: props.w, processedValue: true })}
		${(props) => generateStyles({ property: 'height', value: props.h, processedValue: true })}
		${(props) => generateStyles({ property: 'min-width', value: props.minW, processedValue: true })}
		${(props) => generateStyles({ property: 'max-width', value: props.maxW, processedValue: true })}
		${(props) => generateStyles({ property: 'min-height', value: props.minH, processedValue: true })}
		${(props) => generateStyles({ property: 'max-height', value: props.maxH, processedValue: true })}

		${(props) => generateStyles({ property: 'display', value: props.d })}

		${(props) => generateStyles({ property: 'overflow', value: props.overflow })}
		${(props) => generateStyles({ property: 'overflow-y', value: props.overflowY })}
		${(props) => generateStyles({ property: 'overflow-x', value: props.overflowX })}

		${(props) => generateStyles({ property: 'align-items', value: props.align })}
		${(props) => generateStyles({ property: 'align-content', value: props.alignContent })}
		${(props) => generateStyles({ property: 'align-self', value: props.alignSelf })}
		${(props) => generateStyles({ property: 'justify-content', value: props.justify })}
		${(props) => generateStyles({ property: 'justify-items', value: props.justifySelf })}
		${(props) => generateStyles({ property: 'justify-self', value: props.justifySelf })}
		${(props) => generateStyles({ property: 'flex-wrap', value: props.flexWrap })}
		${(props) => generateStyles({ property: 'overflow-y', value: props.overflowY })}
		${(props) => generateStyles({ property: 'flex-direction', value: props.direction })}
		${(props) => generateStyles({ property: 'flex', value: props.flex })}
		${(props) => generateStyles({ property: 'flex-grow', value: props.flexGrow })}
		${(props) => generateStyles({ property: 'flex-shrink', value: props.flexShrink })}
		${(props) => generateStyles({ property: 'flex-basis', value: props.flexBasis, processedValue: true })}
		${(props) => generateStyles({ property: 'order', value: props.order })}

		${(props) => generateStyles({ property: 'background', value: props.bg })}
		${(props) => generateStyles({ property: 'background-image', value: props.bgImage })}
		${(props) => generateStyles({ property: 'background-color', value: props.bgColor, nestedValue: true, pallete: props.palette })}
		${(props) => generateStyles({ property: 'background-size', value: props.bgSize })}
		${(props) => generateStyles({ property: 'background-position', value: props.bgPosition })}
		${(props) => generateStyles({ property: 'background-repeat', value: props.bgRepeat })}

		${(props) => generateStyles({ property: 'border', value: props.border })}
		${(props) => generateStyles({ property: 'border-style', value: props.borderStyle })}
		${(props) => generateStyles({ property: 'border-color', value: props.borderColor, nestedValue: true, pallete: props.palette })}
		${(props) => generateStyles({ property: 'border-width', value: props.borderWidth, processedValue: true })}

		${(props) => generateStyles({ property: 'border-top', value: props.borderTop })}
		${(props) => generateStyles({ property: 'border-top-style', value: props.borderTopStyle })}
		${(props) => generateStyles({ property: 'border-top-color', value: props.borderTopColor })}
		${(props) => generateStyles({ property: 'border-top-width', value: props.borderTopWidth, processedValue: true })}

		${(props) => generateStyles({ property: 'border-right', value: props.borderRight })}
		${(props) => generateStyles({ property: 'border-right-style', value: props.borderRightStyle })}
		${(props) => generateStyles({ property: 'border-right-color', value: props.borderRightColor })}
		${(props) => generateStyles({ property: 'border-right-width', value: props.borderRightWidth, processedValue: true })}

		${(props) => generateStyles({ property: 'border-bottom', value: props.borderBottom })}
		${(props) => generateStyles({ property: 'border-bottom-style', value: props.borderBottomStyle })}
		${(props) => generateStyles({ property: 'border-bottom-color', value: props.borderBottomColor })}
		${(props) => generateStyles({ property: 'border-bottom-width', value: props.borderBottomWidth, processedValue: true })}

		${(props) => generateStyles({ property: 'border-left', value: props.borderLeft })}
		${(props) => generateStyles({ property: 'border-left-style', value: props.borderLeftStyle })}
		${(props) => generateStyles({ property: 'border-left-color', value: props.borderLeftColor })}
		${(props) => generateStyles({ property: 'border-left-width', value: props.borderLeftWidth, processedValue: true })}

		${(props) =>
			props.borderRadius
				? generateStyles({ property: 'border-radius', value: props.borderRadius, processedValue: true })
				: `border-radius: ${getRoundness(props.round)};`}
		${(props) => generateStyles({ property: 'border-top-left-radius', value: props.borderTopLeftRadius, processedValue: true })}
		${(props) => generateStyles({ property: 'border-top-right-radius', value: props.borderTopRightRadius, processedValue: true })}
		${(props) => generateStyles({ property: 'border-bottom-right-radius', value: props.borderBottomRightRadius, processedValue: true })}
		${(props) => generateStyles({ property: 'border-bottom-left-radius', value: props.borderBottomLeftRadius, processedValue: true })}

		${(props) => generateStyles({ property: 'position', value: props.position })}
		${(props) => generateStyles({ property: 'z-index', value: props.zIndex })}
		${(props) => generateStyles({ property: 'top', value: props.top, processedValue: true })}
		${(props) => generateStyles({ property: 'right', value: props.right, processedValue: true })}
		${(props) => generateStyles({ property: 'bottom', value: props.bottom, processedValue: true })}
		${(props) => generateStyles({ property: 'left', value: props.left, processedValue: true })}

		box-shadow: ${(props) => getBoxShadow(props.boxShadow)};

		${(props) => generateStyles({ property: 'animation', value: props.animation })}
		${(props) => generateStyles({ property: 'visibility', value: props.visibility })}
		${(props) => generateStyles({ property: 'opacity', value: props.opacity })}
		${(props) => generateStyles({ property: 'cursor', value: props.cursor })}
		${(props) => generateStyles({ property: 'all', value: props.all })}
		${(props) => generateStyles({ property: 'transition', value: props.transition })}
		${(props) => generateStyles({ property: 'text-overflow', value: props.textOverflow })}
		${(props) => generateStyles({ property: 'grid-template-columns', value: props.gridTemplateColumns })}
		${(props) => generateStyles({ property: 'word-break', value: props.wordBreak })}

		:hover {
			${(props) => props._hover}
		}
	}
`;

StyledBox.displayName = 'StyledBox';
