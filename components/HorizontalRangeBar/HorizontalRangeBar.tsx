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

export interface IHorizontalRangeBarState{
    width: number;
}

export default class HorizontalRangeBar extends React.Component<IHorizontalRangeBarProps, IHorizontalRangeBarState>{

    static defaultProps: Partial<IHorizontalRangeBarProps> = {
        background: '#53cadc',
        className: '',
        height: 28,
        range: [0, 100],
    };

    static getWidth = (props: IHorizontalRangeBarProps) => {
        const {range, progress} = props;
        let percentage = 0;
        if (range && progress > range[1]){
            console.error('progress can not be greater that the max range');
            percentage = 100;
        }else{
            percentage = range && ((progress - range[0]) * 100) /  (range[1] - range[0]) || 0;
        }
        return percentage;
    }

    static getDerivedStateFromProps(nextProps: IHorizontalRangeBarProps, prevState: IHorizontalRangeBarState){
        const width = HorizontalRangeBar.getWidth(nextProps);
        return {
            width
        };
    }

    constructor(props: IHorizontalRangeBarProps){
        super(props);

        this.state = {
            width: 0
        };
    }

    componentDidMount(){
        this.setState({width: HorizontalRangeBar.getWidth(this.props)});
    }

    render(){

        const {className, progress, id} = this.props;

        const containerStyle = {
            height: this.props.height,
            width: this.state.width + '%'
        };

        const barStyle = {
            background: this.props.background,
            borderRadius: 4
        };

        return (
            <div className={`loader-component ${styles.loaderContainer} ${className}`} id={id}>
                <div
                    className={`loader-bar ${styles.loader}`}
                    style={containerStyle}
                >
                    <div className={`loader-text ${styles.label}`} style={barStyle}>{progress}</div>
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
