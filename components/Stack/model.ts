export interface IStackComponentProps {
    /** Classname applied to the stack */
    className?: string;

    /** Styles applied to the stack */
    style?: React.CSSProperties;

    /** Divider element added between children */
    divider?: React.ReactElement;

    /** The space between each stack item */
    spacing?: number | string;

    /** Shorthand for `alignItems` style prop */
    align?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'initial' | 'inherit';

    /** Shorthand for `justifyContent` style prop */
    justify?: 'space-between' | 'space-around' | 'flex-start' | 'flex-end' | 'center' | 'initial' | 'inherit' | 'space-evenly';

    /** Shorthand for `flexWrap` style prop */
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | 'initial' | 'inherit';

    /** Shorthand for `flexDirection` style prop */
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | 'initial' | 'inherit';

    /** Stack children */
    // children: JSX.Element | React.ReactElement<any> | JSX.Element[] | React.ReactElement[];
    children: any;
}
