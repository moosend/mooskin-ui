import { IMooskinContext, IStyledTheme, IThemeBackgroundColors, IThemeBorderColors, IThemeFontColors } from '../Styled/model';
// import { IMooskinContext } from '../Styled/model';

export type IntensityType = 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl';
export type BoxShadowIntensityType = IntensityType | 'inner' | 'outline';
export type NestedThemeType = `${keyof IStyledTheme}.${keyof IThemeFontColors | keyof IThemeBorderColors | keyof IThemeBackgroundColors}`;
// export type NestedThemeType = [string, string];

export const boxComponentProps = [
	'id',
	'className',
	'style',
	'm',
	'mt',
	'mr',
	'mb',
	'ml',
	'mx',
	'my',
	'boxShadow',
	'color',
	'round',
	'p',
	'pt',
	'pr',
	'pb',
	'pl',
	'px',
	'py',
	'opacity',
	'fontFamily',
	'fontSize',
	'fontWeight',
	'lineHeight',
	'textAlign',
	'fontStyle',
	'textTransform',
	'textDecoration',
	'w',
	'h',
	'minW',
	'maxW',
	'minH',
	'maxH',
	'd',
	'overflow',
	'overflowX',
	'overflowY',
	'align',
	'alignContent',
	'alignSelf',
	'justifyItems',
	'justify',
	'justifySelf',
	'wrap',
	'direction',
	'flex',
	'flexGrow',
	'flexShrink',
	'flexBasis',
	'order',
	'bg',
	'bgImage',
	'bgColor',
	'bgSize',
	'bgPosition',
	'bgRepeat',
	'border',
	'borderWidth',
	'borderStyle',
	'borderColor',
	'borderTop',
	'borderTopWidth',
	'borderTopStyle',
	'borderTopColor',
	'borderRight',
	'borderRightWidth',
	'borderRightStyle',
	'borderRightColor',
	'borderBottom',
	'borderBottomWidth',
	'borderBottomStyle',
	'borderBottomColor',
	'borderLeft',
	'borderLeftWidth',
	'borderLeftStyle',
	'borderLeftColor',
	'borderRadius',
	'borderTopLeftRadius',
	'borderTopRightRadius',
	'borderBottomRightRadius',
	'borderBottomLeftRadius',
	'position',
	'zIndex',
	'top',
	'right',
	'bottom',
	'left',
	'animation',
	'visibility',
	'cursor',
	'boxAs',
	'children',
	'theme',
];

export type IBoxComponentProps = IBaseBoxComponentProps & React.HTMLAttributes<HTMLElement>;
export type IBoxImageComponentProps = IBaseBoxComponentProps & React.ImgHTMLAttributes<HTMLImageElement>;
export type IBoxLabelComponentProps = IBaseBoxComponentProps & React.LabelHTMLAttributes<HTMLLabelElement>;
export type IButtonBoxComponentProps = IBoxComponentProps & React.ButtonHTMLAttributes<HTMLButtonElement>;
export type IInputBoxComponentProps = IBoxComponentProps & React.InputHTMLAttributes<HTMLInputElement>;
export type IAnchorBoxComponentProps = IBoxComponentProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;
export type ITextAreaBoxComponentProps = IBoxComponentProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export interface IBaseBoxComponentProps extends IMooskinContext {
	ref?: any;

	setRef?: (ref: React.RefObject<HTMLElement>) => void;
	/** render Box as a different html element */
	boxAs?: any;

	/** margin */
	m?: React.CSSProperties['margin'] | Array<React.CSSProperties['margin']>;

	/** margin top */
	mt?: React.CSSProperties['marginTop'] | Array<React.CSSProperties['marginTop']>;

	/** margin right */
	mr?: React.CSSProperties['marginRight'] | Array<React.CSSProperties['marginRight']>;

	/** margin bottom */
	mb?: React.CSSProperties['marginBottom'] | Array<React.CSSProperties['marginBottom']>;

	/** margin left */
	ml?: React.CSSProperties['marginLeft'] | Array<React.CSSProperties['marginLeft']>;

	/** margin left & margin right */
	mx?: number | string | Array<number | string>;

	/** margin top & margin-bottom */
	my?: number | string | Array<number | string>;

	/** padding */
	p?: React.CSSProperties['padding'] | Array<React.CSSProperties['padding']>;

	/** padding top */
	pt?: React.CSSProperties['paddingTop'] | Array<React.CSSProperties['paddingTop']>;

	/** padding right */
	pr?: React.CSSProperties['paddingRight'] | Array<React.CSSProperties['paddingRight']>;

	/** padding bottom */
	pb?: React.CSSProperties['paddingBottom'] | Array<React.CSSProperties['paddingBottom']>;

	/** padding left */
	pl?: React.CSSProperties['paddingLeft'] | Array<React.CSSProperties['paddingLeft']>;

	/** padding left & padding right */
	px?: number | string | Array<number | string>;

	/** padding top & padding-bottom */
	py?: number | string | Array<number | string>;

	/** font color */
	fontColor?: React.CSSProperties['color'] | NestedThemeType | Array<React.CSSProperties['color']>;

	/** opacity */
	opacity?: React.CSSProperties['opacity'] | Array<React.CSSProperties['opacity']>;

	/** font family */
	fontFamily?: React.CSSProperties['fontFamily'] | Array<React.CSSProperties['fontFamily']>;

	/** font size */
	fontSize?: React.CSSProperties['fontSize'] | Array<React.CSSProperties['fontSize']>;

	/** font weight */
	fontWeight?: React.CSSProperties['fontWeight'] | Array<React.CSSProperties['fontWeight']>;

	/** line height */
	lineHeight?: React.CSSProperties['lineHeight'] | Array<React.CSSProperties['lineHeight']>;

	/** text align */
	textAlign?: React.CSSProperties['textAlign'] | Array<React.CSSProperties['textAlign']>;

	/** font style */
	fontStyle?: React.CSSProperties['fontStyle'] | Array<React.CSSProperties['fontStyle']>;

	/** text transform */
	textTransform?: React.CSSProperties['textTransform'] | Array<React.CSSProperties['textTransform']>;

	/** text decoration */
	textDecoration?: React.CSSProperties['textDecoration'] | Array<React.CSSProperties['textDecoration']>;

	/** width */
	w?: React.CSSProperties['width'] | Array<React.CSSProperties['width']>;

	/** height */
	h?: React.CSSProperties['height'] | Array<React.CSSProperties['height']>;

	/** max width */
	maxW?: React.CSSProperties['maxWidth'] | Array<React.CSSProperties['maxWidth']>;

	/** min width */
	minW?: React.CSSProperties['minWidth'] | Array<React.CSSProperties['minWidth']>;

	/** max height */
	maxH?: React.CSSProperties['maxHeight'] | Array<React.CSSProperties['maxHeight']>;

	/** min height */
	minH?: React.CSSProperties['minHeight'] | Array<React.CSSProperties['minHeight']>;

	/** display */
	d?: React.CSSProperties['display'] | Array<React.CSSProperties['display']>;

	/** overflow */
	overflow?: React.CSSProperties['overflow'] | Array<React.CSSProperties['overflow']>;

	/** overflow X */
	overflowX?: React.CSSProperties['overflowX'] | Array<React.CSSProperties['overflowX']>;

	/** overflow Y */
	overflowY?: React.CSSProperties['overflowY'] | Array<React.CSSProperties['overflowY']>;

	/** align items */
	align?: React.CSSProperties['alignItems'] | Array<React.CSSProperties['alignItems']>;

	/** align content */
	alignContent?: React.CSSProperties['alignContent'] | Array<React.CSSProperties['alignContent']>;

	/** align self */
	alignSelf?: React.CSSProperties['alignSelf'] | Array<React.CSSProperties['alignSelf']>;

	/** justify items */
	justifyItems?: React.CSSProperties['justifyItems'] | Array<React.CSSProperties['justifyItems']>;

	/** justify content */
	justify?: React.CSSProperties['justifyContent'] | Array<React.CSSProperties['justifyContent']>;

	/** justify self */
	justifySelf?: React.CSSProperties['justifySelf'] | Array<React.CSSProperties['justifySelf']>;

	/** flex wrap */
	flexWrap?: React.CSSProperties['flexWrap'] | Array<React.CSSProperties['flexWrap']>;

	/** flex direction */
	direction?: React.CSSProperties['flexDirection'] | Array<React.CSSProperties['flexDirection']>;

	/** flex */
	flex?: React.CSSProperties['flex'] | Array<React.CSSProperties['flex']>;

	/** flex grow */
	flexGrow?: React.CSSProperties['flexGrow'] | Array<React.CSSProperties['flexGrow']>;

	/** flex shrink */
	flexShrink?: React.CSSProperties['flexShrink'] | Array<React.CSSProperties['flexShrink']>;

	/** flex basis */
	flexBasis?: React.CSSProperties['flexBasis'] | Array<React.CSSProperties['flexBasis']>;

	/** order */
	order?: React.CSSProperties['order'] | Array<React.CSSProperties['order']>;

	/** background */
	bg?: React.CSSProperties['background'] | Array<React.CSSProperties['background']>;

	/** background image */
	bgImage?: React.CSSProperties['backgroundImage'] | Array<React.CSSProperties['backgroundImage']>;

	/** background color */
	bgColor?: React.CSSProperties['backgroundColor'] | NestedThemeType | Array<React.CSSProperties['backgroundColor']>;

	/** background size */
	bgSize?: React.CSSProperties['backgroundSize'] | Array<React.CSSProperties['backgroundSize']>;

	/** background position */
	bgPosition?: React.CSSProperties['backgroundPosition'] | Array<React.CSSProperties['backgroundPosition']>;

	/** background repeat */
	bgRepeat?: React.CSSProperties['backgroundRepeat'] | Array<React.CSSProperties['backgroundRepeat']>;

	/** border */
	border?: React.CSSProperties['border'] | Array<React.CSSProperties['border']>;

	/** border width */
	borderWidth?: React.CSSProperties['borderWidth'] | Array<React.CSSProperties['borderWidth']>;

	/** border style */
	borderStyle?: React.CSSProperties['borderStyle'] | Array<React.CSSProperties['borderStyle']>;

	/** border color */
	borderColor?: React.CSSProperties['borderColor'] | NestedThemeType | Array<React.CSSProperties['borderColor']>;

	/** border top */
	borderTop?: React.CSSProperties['borderTop'] | Array<React.CSSProperties['borderTop']>;

	/** border top width */
	borderTopWidth?: React.CSSProperties['borderTopWidth'] | Array<React.CSSProperties['borderTopWidth']>;

	/** border top style */
	borderTopStyle?: React.CSSProperties['borderTopStyle'] | Array<React.CSSProperties['borderTopStyle']>;

	/** border top color */
	borderTopColor?: React.CSSProperties['borderTopColor'] | Array<React.CSSProperties['borderTopColor']>;

	/** border right */
	borderRight?: React.CSSProperties['borderRight'] | Array<React.CSSProperties['borderRight']>;

	/** border right width */
	borderRightWidth?: React.CSSProperties['borderRightWidth'] | Array<React.CSSProperties['borderRightWidth']>;

	/** border right style */
	borderRightStyle?: React.CSSProperties['borderRightStyle'] | Array<React.CSSProperties['borderRightStyle']>;

	/** border right color */
	borderRightColor?: React.CSSProperties['borderRightColor'] | Array<React.CSSProperties['borderRightColor']>;

	/** border bottom */
	borderBottom?: React.CSSProperties['borderBottom'] | Array<React.CSSProperties['borderBottom']>;

	/** border bottom width */
	borderBottomWidth?: React.CSSProperties['borderBottomWidth'] | Array<React.CSSProperties['borderBottomWidth']>;

	/** border bottom style */
	borderBottomStyle?: React.CSSProperties['borderBottomStyle'] | Array<React.CSSProperties['borderBottomStyle']>;

	/** border bottom color */
	borderBottomColor?: React.CSSProperties['borderBottomColor'] | Array<React.CSSProperties['borderBottomColor']>;

	/** border left */
	borderLeft?: React.CSSProperties['borderLeft'] | Array<React.CSSProperties['borderLeft']>;

	/** border left width */
	borderLeftWidth?: React.CSSProperties['borderLeftWidth'] | Array<React.CSSProperties['borderLeftWidth']>;

	/** border left style */
	borderLeftStyle?: React.CSSProperties['borderLeftStyle'] | Array<React.CSSProperties['borderLeftStyle']>;

	/** border left color */
	borderLeftColor?: React.CSSProperties['borderLeftColor'] | Array<React.CSSProperties['borderLeftColor']>;

	/** border radius */
	borderRadius?: React.CSSProperties['borderRadius'] | Array<React.CSSProperties['borderRadius']>;

	/** border radius top left */
	borderTopLeftRadius?: React.CSSProperties['borderTopLeftRadius'] | Array<React.CSSProperties['borderTopLeftRadius']>;

	/** border radius top right */
	borderTopRightRadius?: React.CSSProperties['borderTopRightRadius'] | Array<React.CSSProperties['borderTopRightRadius']>;

	/** border radius bottom right */
	borderBottomRightRadius?: React.CSSProperties['borderBottomRightRadius'] | Array<React.CSSProperties['borderBottomRightRadius']>;

	/** border radius bottom left */
	borderBottomLeftRadius?: React.CSSProperties['borderBottomLeftRadius'] | Array<React.CSSProperties['borderBottomLeftRadius']>;

	/** position */
	position?: React.CSSProperties['position'] | Array<React.CSSProperties['position']>;

	/** z index */
	zIndex?: React.CSSProperties['zIndex'] | Array<React.CSSProperties['zIndex']>;

	/** top */
	top?: React.CSSProperties['top'] | Array<React.CSSProperties['top']>;

	/** right */
	right?: React.CSSProperties['right'] | Array<React.CSSProperties['right']>;

	/** bottom */
	bottom?: React.CSSProperties['bottom'] | Array<React.CSSProperties['bottom']>;

	/** left */
	left?: React.CSSProperties['left'] | Array<React.CSSProperties['left']>;

	/** box shadow */
	// boxShadow?: React.CSSProperties['boxShadow'] | BoxShadowIntensityType | Array<React.CSSProperties['boxShadow']>;
	boxShadow?: React.CSSProperties['boxShadow'] | BoxShadowIntensityType;

	/** animation */
	animation?: React.CSSProperties['animation'] | Array<React.CSSProperties['animation']>;

	/** visibility */
	visibility?: React.CSSProperties['visibility'] | Array<React.CSSProperties['visibility']>;

	/** cursor */
	cursor?: React.CSSProperties['cursor'] | Array<React.CSSProperties['cursor']>;

	/** rounds the element */
	// round?: IntensityType | IntensityType[];
	round?: IntensityType;

	/** white space */
	whiteSpace?: React.CSSProperties['whiteSpace'] | Array<React.CSSProperties['whiteSpace']>;

	/** word break */
	wordBreak?: React.CSSProperties['wordBreak'] | Array<React.CSSProperties['wordBreak']>;

	/** grid template columns */
	gridTemplateColumns?: React.CSSProperties['gridTemplateColumns'] | Array<React.CSSProperties['gridTemplateColumns']>;

	/** hover */
	_hover?: string;

	/** all */
	all?: React.CSSProperties['all'] | Array<React.CSSProperties['all']>;

	/** transition */
	transition?: React.CSSProperties['transition'] | Array<React.CSSProperties['transition']>;

	/** transition */
	transform?: React.CSSProperties['transform'] | Array<React.CSSProperties['transform']>;

	/** text overflow */
	textOverflow?: React.CSSProperties['textOverflow'] | Array<React.CSSProperties['textOverflow']>;

	/** outline */
	outline?: React.CSSProperties['outline'] | Array<React.CSSProperties['outline']>;

	/** outline width */
	outlineWidth?: React.CSSProperties['outlineWidth'] | Array<React.CSSProperties['outlineWidth']>;

	/** outline style */
	outlineStyle?: React.CSSProperties['outlineStyle'] | Array<React.CSSProperties['outlineStyle']>;

	/** outline color */
	outlineColor?: React.CSSProperties['outlineColor'] | NestedThemeType | Array<React.CSSProperties['outlineColor']>;
}
