
export interface IInputCallbackData {
    dataLabel: string|undefined|null;
    value: any;
}

export interface IHeadingProps {

    /** override h1 id */
    id?: string;

    /** h1 class */
    className?: string;

    /** override h1 styles */
    style?: {[key: string]: string};

    /** children can only be a string */
    children?: string;

}
