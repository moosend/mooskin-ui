import * as React from 'react';

import styles from './HorizontalRangeBar.css';

export interface IHorizontalRangeBarProps{
    /** current progress, has to be a number between min and max range */
    progress: number;

    /** optional background color, default is cyan */
    background?: string;

    additionalBars?: Array<{value: number, background: string}>;

    /** number range is an array tuple [min, max] */
    range?: [number, number];

    /** height of the loader, 20px by default */
    height?: number | string;

    /** id for the main element */
    id?: string;

    /** className for the main element */
    className?: string;
}

export default class HorizontalRangeBar extends React.Component<IHorizontalRangeBarProps, {}>{

    static defaultProps: Partial<IHorizontalRangeBarProps> = {
        background: '#53cadc',
        className: '',
        height: 28,
        range: [0, 100],
    };

    render(){

        const {className, range, progress, id} = this.props;
        let currentPercentage;

        if (range && progress > range[1]){
            console.error('progress can not be greater that the max range');
            currentPercentage = 100;
        }else{
            currentPercentage = range && ((progress - range[0]) * 100) /  (range[1] - range[0]);
        }

        const style = {
            background: this.props.background,
            height: this.props.height,
            width: currentPercentage + '%',
        };

        return (
            <div className={`loader-component ${styles.loaderContainer} ${className}`} id={id}>
                <div
                    className={`loader-bar ${styles.loader}`}
                    style={style}
                >
                    <div className={`loader-text ${styles.label}`}>{progress}</div>
                    {this.renderAdditionalBars()}
                </div>
            </div>
        );
    }

    renderAdditionalBars = () => {
        const {additionalBars} = this.props;
        const bars: JSX.Element[] = [];
        let right = 0;
        additionalBars && additionalBars.forEach((bar, i) => {
            const width = bar.value * 100 / this.props.progress;
            if ((right + width) > 100){
                throw new Error('Values are larger than expected!');
            }
            bars.push(
                <div
                    key={i}
                    style={{position: 'absolute', top: 0, bottom: 0, right: `${right}%`, width: `${width}%`, background: bar.background}}
                />
            );
            right = right + width;
        });
        return bars;
    }
}
