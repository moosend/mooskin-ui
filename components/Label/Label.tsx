import * as React from 'react';

import styles from './Label.css';

export interface ILabelProps {

    /** id of the component */
    id?: string;

    /** abbreviate numerical values */
    abbreviate?: boolean;

    /** override label styles */
    style?: React.CSSProperties;

    /** override label class */
    className?: string;

    /** children types */
    children: number | string;

}

export default class Label extends React.Component<ILabelProps, {}> {

    static defaultProps = {
        className: '',
        style: {}
    };

    render() {

        const { className, style } = this.props;

        const content = this.getContent();

        return (
            <div
                style={style}
                className={`label-component ${styles.label} ${className}`}
            >
                {content}
            </div>
        );
    }

    getContent = () => {
        const { children, abbreviate } = this.props;
        if (abbreviate && !isNaN(children as any)){
            return this.prettifyNumber(children as any);
        }
        return children;
    }

    prettifyNumber = (value: number) => {
        const thousand = 1000;
        const million = 1000000;
        const billion = 1000000000;
        const trillion = 1000000000000;
        if (value < thousand) {
            return String(value);
        }

        if (value >= thousand && value <= 999999) {
            const decimal = this.getDecimalValue(value.toString(), 'thousand');
            return Math.trunc(value / thousand) + `.${decimal}K`;
        }

        if (value >= million && value <= billion) {
            const decimal = this.getDecimalValue(value.toString(), 'million');
            return Math.trunc(value / million) + `.${decimal}M`;
        }

        if (value >= billion && value <= trillion) {
            const decimal = this.getDecimalValue(value.toString(), 'billion');
            return Math.trunc(value / billion) + `.${decimal}B`;
        } else {
            const decimal = this.getDecimalValue(value.toString(), 'trillion');
            return Math.trunc(value / trillion) + `.${decimal}T`;
        }
    }

    getDecimalValue = (value: string, abbr: string) => {
        const array = (value.split(''));
        if (abbr === 'thousand'){
            return array[array.length - 3];
        } else if (abbr === 'million'){
            return array[array.length - 6];
        } else if (abbr === 'billion'){
            return array[array.length - 9];
        } else if (abbr === 'trillion'){
            return array[array.length - 12];
        }
    }

}
