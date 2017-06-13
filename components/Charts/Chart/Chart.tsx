import * as React from 'react';
import {Pie} from 'react-chartjs-2';

// import styles from './PieChart.css';

export interface IPieChartProps {

    /** chart id */
    id?: string;

    /** chart title */
    title?: string;

    /** chart title position */
    titlePos?: string;

    /** chart title size */
    titleSize?: number;

    /** chart title style */
    titleStyle?: string;

    /** chart title color */
    titleColor?: string;

    /** chart title font */
    titleFont?: string;

    /** legend display */
    noLegend?: boolean;

    /** legend position */
    legendPos?: string;

    /** legend box width */
    boxWidth?: number;

    /** legend font style */
    legendStyle?: string;

    /** legend font family */
    legendFont?: string;

    /** legend font size */
    legendSize?: number;

    /** legend color style */
    legendColor?: string;

    /** doughnut or pie */
    doughnut?: boolean | number;

    /** space between elements in the chart */
    spacing?: number;

    /** chart size */
    size?: number;

    /** chart data values */
    data: string[] | number[] | {};

    /** chart label values */
    labels: string[] | {};

    /** chart background Colors */
    backgroundColors?: string[] | {};

    // /** chart height */
    // height?: number;

    // /** chart width */
    // width?: number;
}

class Chart extends React.Component<IPieChartProps, {}>{

    public static defaultProps = {
        backgroundColors: [
            '#5CCDDF',
            '#F48770',
            '#F2C14A',
            '#3d0559',
            '#c1ff48'
        ],
        className: '',
        legendPos: 'bottom',
        spacing: 0,
        style: {},
        titlePos: 'top'
    };

    public render(){

        const {
            id,
            doughnut,
            title,
            titlePos,
            titleColor,
            titleFont,
            titleSize,
            titleStyle,
            legendPos,
            legendColor,
            legendSize,
            legendStyle,
            legendFont,
            boxWidth,
            spacing,
            size,
            backgroundColors
            // height,
            // width
        } = this.props;

        const chart = doughnut ? typeof doughnut === 'number' ? doughnut : 45 : 0;
        const position = legendPos;

        const chartTitle = {
            display: title ? true : false,
            fontColor: titleColor,
            fontFamily: titleFont,
            fontSize: titleSize,
            fontStyle: titleStyle,
            position: titlePos,
            text: title
        };

        const labels = {
            boxWidth: boxWidth || 30,
            fontColor: legendColor,
            fontFamily: legendFont,
            fontSize: legendSize,
            fontStyle: legendStyle
        };

        const legend = {
            display: !this.props.noLegend,
            labels,
            position
        };

        const options = {
            cutoutPercentage: chart,
            legend,
            title: chartTitle
        };

        const data = {
            datasets: [{
                backgroundColor: backgroundColors ,
                borderWidth: spacing,
                data: this.props.data,
            }],
            labels: this.props.labels
        };

        return(
            <div id={id}>
                <Pie
                    data={data}
                    width={size}
                    height={size}
                    options={options}
                />
            </div>
        );
    }
}

export default Chart;
