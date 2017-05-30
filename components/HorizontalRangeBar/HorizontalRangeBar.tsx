import * as React from 'react';

import styles from './HorizontalRangeBar.css';

export interface IHorizontalRangeBarProps{
    /** current progress, has to be a number between min and max range */
    progress: number;

    /** optional background color, default is cyan */
    background?: string;

    /** number range is an array tuple [min, max] */
    range?: [number, number];

    /** height of the loader, 20px by default */
    height?: number|string;

    /** id for the main element */
    id?: string;

    /** className for the main element */
    className?: string;
}

export default class HorizontalRangeBar extends React.Component<IHorizontalRangeBarProps, void>{

    public static defaultProps: Partial<IHorizontalRangeBarProps> = {
        background: '#53cadc',
        className: '',
        height: 28,
        range: [0, 100],
    };

    public render(){

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
                </div>
            </div>
        );
    }
}
