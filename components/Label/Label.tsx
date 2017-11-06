import * as React from 'react';

import styles from './Label.css';

export interface ILabelProps {

    /** id of the component */
    id?: string;

    /** expected final value of the label */
    type?: 'number' | 'round_number' | 'string';

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
        style: {},
        type: 'string'
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
        const { children, type } = this.props;
        if ((type === 'number' || type === 'round_number') && !isNaN(children as any)){
            return this.prettifyNumber(children as any);
        }
        return children;
    }

    // roundNumber = (value: number) => {
    //     const thousand = 1000;
    //     const million = 1000000;
    //     const billion = 1000000000;
    //     const trillion = 1000000000000;
    //     if (value < thousand) {
    //         return String(value);
    //     }
    // }

    prettifyNumber = (value: number) => {
        const {type} = this.props;
        const thousand = 1000;
        const million = 1000000;
        const billion = 1000000000;
        const trillion = 1000000000000;
        if (value < thousand) {
            if (type === 'round_number' && value >= 500){
                return Math.round(value / thousand) + 'K';
            }
            return String(value);
        }

        if (value >= thousand && value <= 999999) {
            if (type === 'round_number'){
                return Math.round(value / thousand) + 'K';
            }
            const decimal = this.getDecimalValue(value.toString(), 'thousand');
            return Math.trunc(value / thousand) + `.${decimal}K`.replace('.0', '');
        }

        if (value >= million && value <= billion) {
            if (type === 'round_number'){
                return Math.round(value / million) + 'M';
            }
            const decimal = this.getDecimalValue(value.toString(), 'million');
            return Math.trunc(value / million) + `.${decimal}M`.replace('.0', '');
        }

        if (value >= billion && value <= trillion) {
            if (type === 'round_number'){
                return Math.round(value / billion) + 'B';
            }
            const decimal = this.getDecimalValue(value.toString(), 'billion');
            return Math.trunc(value / billion) + `.${decimal}B`.replace('.0', '');
        } else {
            if (type === 'round_number'){
                return Math.round(value / trillion) + 'T';
            }
            const decimal = this.getDecimalValue(value.toString(), 'trillion');
            return Math.trunc(value / trillion) + `.${decimal}T`.replace('.0', '');
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
