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

    static displayName = 'HorizontalRangeBar';

    render(){

        const {className, range, progress, id} = this.props;
        let currentPercentage;

        if (range && progress > range[1]){
            console.error('progress can not be greater that the max range');
            currentPercentage = 100;
        }else{
            currentPercentage = range && ((progress - range[0]) * 100) /  (range[1] - range[0]);
        }

        const containerStyle = {
            height: this.props.height,
            width: currentPercentage + '%'
        };

        const barStyle = {
            // background: this.props.progress > 0 ? this.props.background : 'initial',
            background: this.props.background,
            borderRadius: 3,
            height: this.props.height
        };

        return (
            <div className={`loader-component ${styles.loaderContainer} ${className}`} id={id}>
                <div
                    className={`loader-bar ${styles.loader}`}
                    style={containerStyle}
                >
                    <div className={`loader-text ${styles.label} ${styles.number}`}>{progress}</div>
                    <div style={barStyle}/>
                    {this.renderAdditionalBars()}
                </div>
            </div>
        );
    }

    renderAdditionalBars = () => {
        const {additionalBars} = this.props;
        const bars: JSX.Element[] = [];
        let right = 0;

        const style = {
            borderBottomRightRadius: 3,
            borderTopRightRadius: 3,
            bottom: 0,
            color: '#414141',
            padding: 5,
            right: `${right}%`,
            top: 0
        };

        additionalBars && additionalBars.forEach((bar, i) => {
            const width = bar.value * 100 / this.props.progress;
            if ((right + width) > 100){
                throw new Error('Values are larger than expected!');
            }
            bars.push(
                <div
                    className={`loader-text ${styles.label}`}
                    key={i}
                    style={{position: 'absolute', width: `${width}%`, background: bar.background, ...style}}
                >
                    {bar.value}
                </div>
            );
            right = right + width;
        });
        return bars;
    }
}
