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

    /** adds track labels to the Slider */
    trackLabels?: boolean;

    /** adds current value tooltip to the Slider on sliding */
    tooltip?: boolean;

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

export interface ISliderState {
    dragging: boolean;
    pos: number;
    oldPos: number;
}

export default class Slider extends React.Component<ISliderProps, ISliderState>{

    slider: any;

    constructor(props: ISliderProps){
        super(props);

        this.state = {
            dragging: false,
            oldPos: 0,
            pos: 0
        };
    }

    render(){

        const {label, tooltip, trackLabels} = this.props;

        const slider = this.renderSlider();

        return (
            <div className={styles.sliderContainer}>
                {label && <label className={styles.sliderLabel} >{label}</label>}
                {slider}
                {trackLabels && this.renderTrackLabels()}
                {tooltip && this.renderTooltip()}
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
                ref={(slider) => this.slider = slider}
                id={this.props.id}
                style={this.props.style}
                className={`${styles.slider} ${disabled} ${this.props.className}`}
                value={this.props.value}
                min={min}
                max={max}
                type="range"
                onChange={this.onSliderChange}
                disabled={this.props.disabled}
                onMouseDown={this.onMouseDown}
                onMouseUp={this.onMouseUp}
                onMouseMove={this.onMouseMove}
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

    renderTrackLabels = () => {

        const {range, values} = this.props;
        let type: any[] = [];

        if (range){
            type = range;
        } else if (values){
            type = values;
        } else {
            return '';
        }

        const labels = type.map((label, i) => {
            return <span key={i} className={styles.trackLabel}>{label}</span>;
        });

        return (
            <div className={styles.trackLabels}>
                {labels}
            </div>
        );
    }

    renderTooltip = () => {
        const display = this.state.dragging ? {} : {display: 'none'};
        return (
            <div
                style={{...display, left: this.state.pos}}
                className={styles.tooltip}
            >
                {this.props.value}
            </div>
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

    onMouseMove = (e: React.MouseEvent<HTMLInputElement>) => {
        // const mouseStart = window.innerWidth - e.pageX;
        const {dragging} = this.state;
        if (dragging) {
            // console.log(e.nativeEvent.offsetX);
            const pos = this.getPosition(e);
            this.setState({pos});
        }
    }

    getPosition = (e: React.MouseEvent<HTMLInputElement>) => {
        // let pos = e.nativeEvent.offsetX;
        const sliderWidth = this.slider.offsetWidth - 25;
        if (e.nativeEvent.offsetX < 0){
            return 0;
        } else if (e.nativeEvent.offsetX > sliderWidth){
            return sliderWidth;
        } else {
            return e.nativeEvent.offsetX;
        }
    }

    onMouseDown = (e: React.MouseEvent<HTMLInputElement>) => {
        const pos = this.getPosition(e);
        this.setState({dragging: true, pos});
    }

    onMouseUp = (e: React.MouseEvent<HTMLInputElement>) => {
        this.setState({dragging: false});
    }

}
