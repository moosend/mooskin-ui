// import { IMooskinContext, IStyledTheme, IThemeBackgroundColors, IThemeBorderColors, IThemeFontColors } from '../Styled/model';
import { IMooskinContext } from '../Styled/model';

export type IntensityType = 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl';
export type BoxShadowIntensityType = IntensityType | 'inner' | 'outline';
// export type NestedThemeType = [keyof IStyledTheme, keyof IThemeFontColors | keyof IThemeBorderColors | keyof IThemeBackgroundColors];
export type NestedThemeType = [string, string];

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

	/** render Box as a different html element */
	boxAs?: any;

	/** margin */
	m?: React.CSSProperties['margin'];

	/** margin top */
	mt?: React.CSSProperties['marginTop'];

	/** margin right */
	mr?: React.CSSProperties['marginRight'];

	/** margin bottom */
	mb?: React.CSSProperties['marginBottom'];

	/** margin left */
	ml?: React.CSSProperties['marginLeft'];

	/** margin left & margin right */
	mx?: number | string;

	/** margin top & margin-bottom */
	my?: number | string;

	/** padding */
	p?: React.CSSProperties['padding'];

	/** padding top */
	pt?: React.CSSProperties['paddingTop'];

	/** padding right */
	pr?: React.CSSProperties['paddingRight'];

	/** padding bottom */
	pb?: React.CSSProperties['paddingBottom'];

	/** padding left */
	pl?: React.CSSProperties['paddingLeft'];

	/** padding left & padding right */
	px?: number | string;

	/** padding top & padding-bottom */
	py?: number | string;

	/** color */
	color?: React.CSSProperties['color'] | NestedThemeType | any;

	/** opacity */
	opacity?: React.CSSProperties['opacity'];

	/** font family */
	fontFamily?: React.CSSProperties['fontFamily'];

	/** font size */
	fontSize?: React.CSSProperties['fontSize'];

	/** font weight */
	fontWeight?: React.CSSProperties['fontWeight'];

	/** line height */
	lineHeight?: React.CSSProperties['lineHeight'];

	/** text align */
	textAlign?: React.CSSProperties['textAlign'];

	/** font style */
	fontStyle?: React.CSSProperties['fontStyle'];

	/** text transform */
	textTransform?: React.CSSProperties['textTransform'];

	/** text decoration */
	textDecoration?: React.CSSProperties['textDecoration'];

	/** width */
	w?: React.CSSProperties['width'];

	/** height */
	h?: React.CSSProperties['height'];

	/** max width */
	maxW?: React.CSSProperties['maxWidth'];

	/** min width */
	minW?: React.CSSProperties['minWidth'];

	/** max height */
	maxH?: React.CSSProperties['maxHeight'];

	/** min height */
	minH?: React.CSSProperties['minHeight'];

	/** display */
	d?: React.CSSProperties['display'];

	/** overflow */
	overflow?: React.CSSProperties['overflow'];

	/** overflow X */
	overflowX?: React.CSSProperties['overflowX'];

	/** overflow Y */
	overflowY?: React.CSSProperties['overflowY'];

	/** align items */
	align?: React.CSSProperties['alignItems'];

	/** align content */
	alignContent?: React.CSSProperties['alignContent'];

	/** align self */
	alignSelf?: React.CSSProperties['alignSelf'];

	/** justify items */
	justifyItems?: React.CSSProperties['justifyItems'];

	/** justify content */
	justify?: React.CSSProperties['justifyContent'];

	/** justify self */
	justifySelf?: React.CSSProperties['justifySelf'];

	/** flex wrap */
	flexWrap?: React.CSSProperties['flexWrap'];

	/** flex direction */
	direction?: React.CSSProperties['flexDirection'];

	/** flex */
	flex?: React.CSSProperties['flex'];

	/** flex grow */
	flexGrow?: React.CSSProperties['flexGrow'];

	/** flex shrink */
	flexShrink?: React.CSSProperties['flexShrink'];

	/** flex basis */
	flexBasis?: React.CSSProperties['flexBasis'];

	/** order */
	order?: React.CSSProperties['order'];

	/** background */
	bg?: React.CSSProperties['background'];

	/** background image */
	bgImage?: React.CSSProperties['backgroundImage'];

	/** background color */
	bgColor?: React.CSSProperties['backgroundColor'] | NestedThemeType;

	/** background size */
	bgSize?: React.CSSProperties['backgroundSize'];

	/** background position */
	bgPosition?: React.CSSProperties['backgroundPosition'];

	/** background repeat */
	bgRepeat?: React.CSSProperties['backgroundRepeat'];

	/** border */
	border?: React.CSSProperties['border'];

	/** border width */
	borderWidth?: React.CSSProperties['borderWidth'];

	/** border style */
	borderStyle?: React.CSSProperties['borderStyle'];

	/** border color */
	borderColor?: React.CSSProperties['borderColor'] | NestedThemeType;

	/** border top */
	borderTop?: React.CSSProperties['borderTop'];

	/** border top width */
	borderTopWidth?: React.CSSProperties['borderTopWidth'];

	/** border top style */
	borderTopStyle?: React.CSSProperties['borderTopStyle'];

	/** border top color */
	borderTopColor?: React.CSSProperties['borderTopColor'];

	/** border right */
	borderRight?: React.CSSProperties['borderRight'];

	/** border right width */
	borderRightWidth?: React.CSSProperties['borderRightWidth'];

	/** border right style */
	borderRightStyle?: React.CSSProperties['borderRightStyle'];

	/** border right color */
	borderRightColor?: React.CSSProperties['borderRightColor'];

	/** border bottom */
	borderBottom?: React.CSSProperties['borderBottom'];

	/** border bottom width */
	borderBottomWidth?: React.CSSProperties['borderBottomWidth'];

	/** border bottom style */
	borderBottomStyle?: React.CSSProperties['borderBottomStyle'];

	/** border bottom color */
	borderBottomColor?: React.CSSProperties['borderBottomColor'];

	/** border left */
	borderLeft?: React.CSSProperties['borderLeft'];

	/** border left width */
	borderLeftWidth?: React.CSSProperties['borderLeftWidth'];

	/** border left style */
	borderLeftStyle?: React.CSSProperties['borderLeftStyle'];

	/** border left color */
	borderLeftColor?: React.CSSProperties['borderLeftColor'];

	/** border radius */
	borderRadius?: React.CSSProperties['borderRadius'];

	/** border radius top left */
	borderTopLeftRadius?: React.CSSProperties['borderTopLeftRadius'];

	/** border radius top right */
	borderTopRightRadius?: React.CSSProperties['borderTopRightRadius'];

	/** border radius bottom right */
	borderBottomRightRadius?: React.CSSProperties['borderBottomRightRadius'];

	/** border radius bottom left */
	borderBottomLeftRadius?: React.CSSProperties['borderBottomLeftRadius'];

	/** position */
	position?: React.CSSProperties['position'];

	/** z index */
	zIndex?: React.CSSProperties['zIndex'];

	/** top */
	top?: React.CSSProperties['top'];

	/** right */
	right?: React.CSSProperties['right'];

	/** bottom */
	bottom?: React.CSSProperties['bottom'];

	/** left */
	left?: React.CSSProperties['left'];

	/** box shadow */
	boxShadow?: React.CSSProperties['boxShadow'] | BoxShadowIntensityType;

	/** animation */
	animation?: React.CSSProperties['animation'];

	/** visibility */
	visibility?: React.CSSProperties['visibility'];

	/** cursor */
	cursor?: React.CSSProperties['cursor'];

	/** rounds the element */
	round?: IntensityType;

	/** white space */
	whiteSpace?: React.CSSProperties['whiteSpace'];

	/** hover */
	_hover?: string;

	/** all */
	all?: React.CSSProperties['all'];

	/** transition */
	transition?: React.CSSProperties['transition'];

	/** hide box based on device size */
	lgHide?: boolean;
	mdHide?: boolean;
	smHide?: boolean;
	xsHide?: boolean;
}
