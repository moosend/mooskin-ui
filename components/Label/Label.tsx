import * as React from 'react';

import styles from './Label.css';

export interface ILabelProps {

    /** id of the component */
    id?: string;

    /** abbreviate numerical value */
    abbreviate?: boolean;

    /** round numerical value */
    round?: boolean;

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
        const { children, abbreviate, round } = this.props;
        if ((abbreviate || round) && !isNaN(children as any)){
            return this.prettifyNumber(children as any);
        }
        return children;
    }

    prettifyNumber = (value: number) => {

        const {abbreviate, round} = this.props;
        let newValue: string | number = value;

        const thousand = 1000;
        const million = 1000000;
        const billion = 1000000000;
        const trillion = 1000000000000;

        if (value < thousand) {
            if (round && value >= 500){
                newValue = Math.round(newValue / thousand) * thousand;
            }
            if (abbreviate && newValue >= 1000){
                newValue = newValue / thousand + 'K';
            }
            return String(newValue);
        }

        if (value >= thousand && value <= 999999) {
            if (round){
                newValue = Math.round(newValue / thousand) * thousand;
            }
            if (abbreviate){
                const decimal = this.getDecimalValue(newValue.toString(), 'thousand');
                newValue = Math.trunc(newValue / thousand) + `.${decimal}K`.replace('.0', '');
            }
            return String(newValue);
        }

        if (value >= million && value <= billion) {
            if (round){
                newValue = Math.round(newValue / million) * million;
            }
            if (abbreviate){
                const decimal = this.getDecimalValue(newValue.toString(), 'million');
                newValue = Math.trunc(newValue / million) + `.${decimal}M`.replace('.0', '');
            }
            return String(newValue);
        }

        if (value >= billion && value <= trillion) {
            if (round){
                newValue = Math.round(newValue / billion) * billion;
            }
            if (abbreviate){
                const decimal = this.getDecimalValue(newValue.toString(), 'billion');
                newValue = Math.trunc(newValue / billion) + `.${decimal}B`.replace('.0', '');
            }
            return newValue;
        } else {
            if (round){
                newValue = Math.round(newValue / trillion) * trillion;
            }
            if (abbreviate){
                const decimal = this.getDecimalValue(newValue.toString(), 'trillion');
                newValue = Math.trunc(newValue / trillion) + `.${decimal}T`.replace('.0', '');
            }
            return newValue;
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
