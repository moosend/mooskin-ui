import * as React from 'react';

import styles from './Label.css';

export interface ILabelProps {

    /** id of the component */
    id?: string;

    /** abbreviate numerical value */
    abbreviate?: boolean;

    /** abbreviation accurancy */
    abbrAccuracy?: number;

    /** round numerical value */
    round?: boolean;

    /** rounding accuracy */
    roundAccuracy?: 'high' | 'low';

    /** override label styles */
    style?: React.CSSProperties;

    /** override label class */
    className?: string;

    /** children types */
    children: number | string;

}

export default class Label extends React.Component<ILabelProps, {}> {

    static defaultProps = {
        abbrAccuracy: 1,
        className: '',
        style: {},
        type: 'string'
    };

    static displayName = 'Label';

    render() {

        const { className, style } = this.props;

        const content = this.getContent();

        return (
            <span
                style={style}
                className={`label-component ${styles.label} ${className}`}
            >
                {content}
            </span>
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

        const digits = {
            billion: 1000000000,
            million: 1000000,
            thousand: 1000,
            trillion: 1000000000000
        };

        // const thousand = 1000;
        // const million = 1000000;
        // const billion = 1000000000;
        // const trillion = 1000000000000;

        if (value < digits.thousand) {
            if (round && value >= 500){
                newValue = Number(this.roundValue(newValue.toString(), this.props.roundAccuracy || 'high', digits));
            }
            if (abbreviate && newValue >= 1000){
                newValue = newValue / digits.thousand + 'K';
            }
            return String(newValue);
        }

        if (value >= digits.thousand && value <= 999999) {
            if (round){
                newValue = Number(this.roundValue(newValue.toString(), this.props.roundAccuracy || 'high', digits));
                // newValue = Math.round(newValue / thousand) * thousand;
            }
            if (abbreviate){
                const decimal = this.getDecimalValue(newValue.toString(), 'thousand');
                newValue = Math.trunc(newValue / digits.thousand) + `.${decimal}K`;
                newValue = this.removeZeros(newValue);
            }
            return String(newValue);
        }

        if (value >= digits.million && value <= digits.billion) {
            if (round){
                newValue = Number(this.roundValue(newValue.toString(), this.props.roundAccuracy || 'high', digits));
                // newValue = Math.round(newValue / million) * million;
            }
            if (abbreviate){
                const decimal = this.getDecimalValue(newValue.toString(), 'million');
                newValue = Math.trunc(newValue / digits.million) + `.${decimal}M`;
                newValue = this.removeZeros(newValue);
            }
            return String(newValue);
        }

        if (value >= digits.billion && value <= digits.trillion) {
            if (round){
                newValue = Number(this.roundValue(newValue.toString(), this.props.roundAccuracy || 'high', digits));
                // newValue = Math.round(newValue / billion) * billion;
            }
            if (abbreviate){
                const decimal = this.getDecimalValue(newValue.toString(), 'billion');
                newValue = Math.trunc(newValue / digits.billion) + `.${decimal}B`;
                newValue = this.removeZeros(newValue);
            }
            return newValue;
        } else {
            if (round){
                newValue = Number(this.roundValue(newValue.toString(), this.props.roundAccuracy || 'high', digits));
                // newValue = Math.round(newValue / trillion) * trillion;
            }
            if (abbreviate){
                const decimal = this.getDecimalValue(newValue.toString(), 'trillion');
                newValue = Math.trunc(newValue / digits.trillion) + `.${decimal}T`;
                newValue = this.removeZeros(newValue);
            }
            return newValue;
        }
    }

    roundValue = (value: string, acc: string, digits: {[key: string]: number}) => {
        const array = value.split('');
        if (value.length < 4){
            if (acc === 'high'){
                return Math.round(Number(value) / 10) * 10;
            } else if (acc === 'low'){
                return Math.round(Number(value) / 100) * 100;
            }
            return value;
        } else if (value.length < 7){
            if (acc === 'high'){
                const rounded = Math.round(Number(array.slice(array.length - 3).join('')) / 100) * 100;
                array.splice(array.length - 3, 3);
                return array.join('') + rounded;
            } else if (acc === 'low'){
                return Math.round(Number(value) / digits.thousand) * digits.thousand;
            }
            // newValue = Number(array.slice(array.length - 3, 3).join(''));
            // newValue = Math.round(newValue / digits.thousand - 900) * digits.thousand - 900;
            // return array.slice(0, 2).join('') + newValue;
            // return Math.round(value / digits.thousand) * digits.thousand;
        } else if (value.length < 10){
            if (acc === 'high'){
                const rounded = Math.round(Number(array.slice(array.length - 6, 4).join('')) / 100) * 100;
                array.splice(array.length - 6, 6);
                return array.join('') + rounded * digits.thousand;
            } else if (acc === 'low'){
                return Math.round(Number(value) / digits.million) * digits.million;
            }
            //     newValue = Number(array.slice(array.length - 6, 3).join(''));
            //     newValue = Math.round(newValue / digits.million) * digits.million;
            //     return newValue;
            //     return Math.round(value / digits.million) * digits.million;
        } else if (value.length < 13){
            if (acc === 'high'){
                const rounded = Math.round(Number(array.slice(array.length - 9, 4).join('')) / 100) * 100;
                array.splice(array.length - 9, 9);
                return array.join('') + rounded * digits.million;
            } else if (acc === 'low'){
                return Math.round(Number(value) / digits.billion) * digits.billion;
            }
            //     newValue = Number(array.slice(array.length - 9, 3).join(''));
            //     newValue = Math.round(newValue / digits.billion) * digits.billion;
            //     return newValue;
            //     // return Math.round(value / digits.billion) * digits.billion;
        } else if (value.length < 16){
            if (acc === 'high'){
                const rounded = Math.round(Number(array.slice(array.length - 12, 4).join('')) / 100) * 100;
                array.splice(array.length - 12, 12);
                return array.join('') + rounded * digits.billion;
            } else if (acc === 'low'){
                return Math.round(Number(value) / digits.trillion) * digits.trillion;
            }
            //     newValue = Number(array.slice(array.length - 12, 3).join(''));
            //     newValue = Math.round(newValue / digits.trillion) * digits.trillion;
            //     return newValue;
            //     // return Math.round(value / digits.trillion) * digits.trillion;
        }
        return value;
    }

    getDecimalValue = (value: string, abbr: string) => {
        const accuracy = this.props.abbrAccuracy;
        const array = (value.split(''));
        if (abbr === 'thousand'){
            return accuracy ? array.splice(array.length - 3, accuracy).join('') : 0;
        } else if (abbr === 'million'){
            return accuracy ? array.splice(array.length - 6, accuracy).join('') : 0;
        } else if (abbr === 'billion'){
            return accuracy ? array.splice(array.length - 9, accuracy).join('') : 0;
        } else if (abbr === 'trillion'){
            return accuracy ? array.splice(array.length - 12, accuracy).join('') : 0;
        }
    }

    removeZeros = (value: string) => {
        const zero = '0';
        const accuracy = this.props.abbrAccuracy;
        if (accuracy === 0){
            return value.replace('.0', '');
        }
        if (accuracy && accuracy > 0) {
            return value.replace('.' + zero.repeat(accuracy), '');
        }
        return value;
    }

}
