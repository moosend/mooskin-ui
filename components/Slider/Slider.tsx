import * as React from 'react';

import styles from './Slider.css';

import {IInputCallbackData} from '../_utils/types/commonTypes';

export interface ISliderProps{

    /** id of the component */
    id?: string;

    /** override Slider classes */
    className?: string;

    /** override Slider styles */
    style?: React.CSSProperties;

    /** wether the Slider is disabled */
    disabled?: boolean;

    /** Slider label */
    label?: string;

    /** value of the Slider */
    value: string | number;

    /** range of the Slider */
    range?: number[];

    /** custom values for the Slider */
    values?: Array<number | string>;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** callback that is called when the Slider changes */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>, data: IInputCallbackData) => void;
}

export default class Slider extends React.Component<ISliderProps>{

    render(){

        const {label} = this.props;

        const slider = this.renderSlider();

        return (
            <div className={styles.sliderContainer}>
                {label && <label className={styles.sliderLabel} >{label}</label>}
                {slider}
            </div>
        );
    }

    renderSlider = () => {
        if (this.props.range){
            return this.rangeSlider();
        } else if (this.props.values) {
            return this.valuesSlider();
        }
    }

    rangeSlider = () => {

        const min = this.props.range ? this.props.range[0] : 1;
        const max = this.props.range ? this.props.range[1] : 100;

        const disabled = this.props.disabled ? styles.disabled : '';

        return (
            <input
                id={this.props.id}
                style={this.props.style}
                className={`${styles.slider} ${disabled} ${this.props.className}`}
                value={this.props.value}
                min={min}
                max={max}
                type="range"
                onChange={this.onSliderChange}
                disabled={this.props.disabled}
            />
        );

    }

    valuesSlider = () => {

        const min = 0;
        const max = this.props.values ? this.props.values.length - 1 : 100;

        const disabled = this.props.disabled ? styles.disabled : '';
        const value = this.props.values && this.props.values.indexOf(this.props.value);

        return (
            <input
                id={this.props.id}
                style={this.props.style}
                className={`${styles.slider} ${disabled} ${this.props.className}`}
                value={value}
                min={min}
                max={max}
                type="range"
                onChange={this.onValuesSliderChange}
                disabled={this.props.disabled}
            />
        );
    }

    onSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.onChange &&
        this.props.onChange(e, {value: e.target.value, dataLabel: this.props.dataLabel});
    }

    onValuesSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = this.props.values && this.props.values[e.target.value as any];
        this.props.onChange &&
        this.props.onChange(e, {value, dataLabel: this.props.dataLabel});
    }

}
