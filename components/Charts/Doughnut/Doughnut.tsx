import * as React from 'react';
import {Pie} from 'react-chartjs-2';

// import styles from './PieChart.css';

import {IChartProps} from '../props';

export interface IDoughnutProps extends IChartProps {

    /** doughnut width */
    doughnutWidth?: number;

}

class Doughnut extends React.Component<IDoughnutProps, {}>{

    public static defaultProps = {
        backgroundColors: [
            '#5CCDDF',
            '#F48770',
            '#F2C14A',
            '#3d0559',
            '#c1ff48'
        ],
        className: '',
        doughnutWidth: 45,
        legendPos: 'bottom',
        spacing: 0,
        style: {},
        titlePos: 'top'
    };

    public render(){

        const {
            id,
            doughnutWidth,
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
            cutoutPercentage: doughnutWidth,
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

export default Doughnut;
