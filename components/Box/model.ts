import { IMooskinContext } from '../Styled/model';

export type DefaultOptionsType = 'inherit' | 'initial' | 'unset';
export type BorderStyleType = 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset';
export type OverflowOptionsType = 'visible' | 'hidden' | 'scroll' | 'auto' | 'initial' | 'inherit';
export type FlexAlignOptionsType = 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'initial' | 'inherit';
export type FlexJustifyOptionsType = 'space-between' | 'space-around' | 'flex-start' | 'flex-end' | 'center' | 'initial' | 'inherit' | 'space-evenly';
export type IntensityType = 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | '2xl';
export type BoxShadowIntensityType = IntensityType | 'inner' | 'outline';

export const boxComponentProps = [
    'id', 'className', 'style', 'm', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'boxShadow', 'color', 'round', 'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py',
    'opacity', 'fontFamily', 'fontSize', 'fontWeight', 'lineHeight', 'textAlign', 'fontStyle', 'textTransform', 'textDecoration', 'w', 'h',
    'minW', 'maxW', 'minH', 'maxH', 'd', 'overflow', 'overflowX', 'overflowY', 'align', 'alignContent', 'alignSelf', 'justifyItems', 'justify',
    'justifySelf', 'wrap', 'direction', 'flex', 'flexGrow', 'flexShrink', 'flexBasis', 'order', 'bg', 'bgImage', 'bgColor', 'bgSize', 'bgPosition',
    'bgRepeat', 'border', 'borderWidth', 'borderStyle', 'borderColor', 'borderTop', 'borderTopWidth', 'borderTopStyle', 'borderTopColor',
    'borderRight', 'borderRightWidth', 'borderRightStyle', 'borderRightColor', 'borderBottom', 'borderBottomWidth', 'borderBottomStyle',
    'borderBottomColor', 'borderLeft', 'borderLeftWidth', 'borderLeftStyle', 'borderLeftColor', 'borderRadius', 'borderTopLeftRadius',
    'borderTopRightRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius', 'position', 'zIndex', 'top', 'right', 'bottom', 'left',
    'animation', 'visibility', 'cursor', 'boxAs', 'children', 'theme'
];

export type IDivBoxComponentProps = IBoxComponentProps & React.HTMLProps<HTMLDivElement>;
export type IInputBoxComponentProps = IBoxComponentProps & React.HTMLProps<HTMLInputElement>;
export type IAnchorBoxComponentProps = IBoxComponentProps & React.HTMLProps<HTMLAnchorElement>;
export type ITextAreaBoxComponentProps = IBoxComponentProps & React.HTMLProps<HTMLTextAreaElement>;

export interface IBoxComponentProps extends IMooskinContext {

    /** onClick event handler */
    // onClick?: (e: React.MouseEvent<HTMLElement>) => void;

    /** Box children */
    children?: any;

    /** render Box as a different html element */
    boxAs?: any;

    /** Id of the element */
    id?: string;

    /** Box class */
    className?: string;

    /** override Box styles */
    style?: React.CSSProperties;

    /** margin */
    m?: number | string;

    /** margin top */
    mt?: number | string;

    /** margin right */
    mr?: number | string;

    /** margin bottom */
    mb?: number | string;

    /** margin left */
    ml?: number | string;

    /** margin left & margin right */
    mx?: number | string;

    /** margin top & margin-bottom */
    my?: number | string;

    /** padding */
    p?: number | string;

    /** padding top */
    pt?: number | string;

    /** padding right */
    pr?: number | string;

    /** padding bottom */
    pb?: number | string;

    /** padding left */
    pl?: number | string;

    /** padding left & padding right */
    px?: number | string;

    /** padding top & padding-bottom */
    py?: number | string;

    /** color */
    color?: string;

    /** opacity */
    opacity?: number;

    /** font family */
    fontFamily?: string;

    /** font size */
    fontSize?: number | string;

    /** font weight */
    fontWeight?: number | string;

    /** line height */
    lineHeight?: number;

    /** text align */
    textAlign?: DefaultOptionsType | 'center' | 'left' | 'right';

    /** font style */
    fontStyle?: DefaultOptionsType | 'italic' | 'normal' | 'oblique' | 'revert';

    /** text transform */
    textTransform?: DefaultOptionsType | 'none' | 'capitalize' | 'math-auto' | 'lowercase' | 'uppercase';

    /** text decoration */
    textDecoration?: DefaultOptionsType | 'none' | 'underline' | 'overline' | 'line-through';

    /** width */
    w?: number | string;

    /** height */
    h?: number | string;

    /** min width */
    minW?: number | string;

    /** max width */
    maxW?: number | string;

    /** min height */
    minH?: number | string;

    /** max height */
    maxH?: number | string;

    /** display */
    d?: 'inline' | 'block' | 'contents' | 'flex' | 'grid' | 'inline-block' | 'inline-flex' | 'inline-grid' | 'inline-table' |
        'list-item' | 'run-in' | 'table' | 'table-caption' | 'table-column-group' | 'table-header-group' | 'table-footer-group' |
        'table-row-group' | 'table-cell' | 'table-column' | 'table-row' | 'none' | 'initial' | 'inherit';

    /** overflow */
    overflow?: OverflowOptionsType;

    /** overflow X */
    overflowX?: OverflowOptionsType;

    /** overflow Y */
    overflowY?: OverflowOptionsType;

    /** align items */
    align?: FlexAlignOptionsType;

    /** align content */
    alignContent?: 'stretch' | FlexJustifyOptionsType;

    /** align self */
    alignSelf?: FlexAlignOptionsType;

    /** justify items */
    justifyItems?: FlexAlignOptionsType;

    /** justify content */
    justify?: FlexJustifyOptionsType;

    /** justify self */
    justifySelf?: FlexJustifyOptionsType;

    /** flex wrap */
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | 'initial' | 'inherit';

    /** flex direction */
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'initial' | 'inherit';

    /** flex */
    flex?: number | string;

    /** flex grow */
    flexGrow?: number;

    /** flex shrink */
    flexShrink?: number;

    /** flex basis */
    flexBasis?: number | string;

    /** order */
    order?: number | string;

    /** background */
    bg?: string;

    /** background image */
    bgImage?: string;

    /** background color */
    bgColor?: string;

    /** background size */
    bgSize?: string;

    /** background position */
    bgPosition?: string;

    /** background repeat */
    bgRepeat?: string;

    /** border */
    border?: string;

    /** border width */
    borderWidth?: number | string;

    /** border style */
    borderStyle?: BorderStyleType;

    /** border color */
    borderColor?: string;

    /** border top */
    borderTop?: string;

    /** border top width */
    borderTopWidth?: number | string;

    /** border top style */
    borderTopStyle?: BorderStyleType;

    /** border top color */
    borderTopColor?: string;

    /** border right */
    borderRight?: string;

    /** border right width */
    borderRightWidth?: number | string;

    /** border right style */
    borderRightStyle?: BorderStyleType;

    /** border right color */
    borderRightColor?: string;

    /** border bottom */
    borderBottom?: string;

    /** border bottom width */
    borderBottomWidth?: number | string;

    /** border bottom style */
    borderBottomStyle?: BorderStyleType;

    /** border bottom color */
    borderBottomColor?: string;

    /** border left */
    borderLeft?: string;

    /** border left width */
    borderLeftWidth?: number | string;

    /** border left style */
    borderLeftStyle?: BorderStyleType;

    /** border left color */
    borderLeftColor?: string;

    /** border radius */
    borderRadius?: number | string;

    /** border radius top left */
    borderTopLeftRadius?: number | string;

    /** border radius top right */
    borderTopRightRadius?: number | string;

    /** border radius bottom right */
    borderBottomRightRadius?: number | string;

    /** border radius bottom left */
    borderBottomLeftRadius?: number | string;

    /** position */
    position?: 'static' | 'absolute' | 'fixed' | 'relative' | 'sticky' | 'initial' | 'inherit';

    /** z index */
    zIndex?: number;

    /** top */
    top?: number | string;

    /** right */
    right?: number | string;

    /** bottom */
    bottom?: number | string;

    /** left */
    left?: number | string;

    /** box shadow */
    boxShadow?: BoxShadowIntensityType;

    /** animation */
    animation?: string;

    /** visibility */
    visibility?: 'visible' | 'hidden' | 'collapse' | 'initial' | 'inherit';

    /** cursor */
    cursor?: string;

    /** rounds the element */
    round?: IntensityType;
}
