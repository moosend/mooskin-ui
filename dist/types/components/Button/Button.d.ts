/// <reference types="react" />
import * as React from 'react';
export interface Props {
    color: string;
    label: string;
}
declare class Button extends React.Component<Props, {}> {
    render(): JSX.Element;
}
export default Button;
