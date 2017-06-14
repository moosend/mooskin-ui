import * as React from 'react';
import {Pie} from 'react-chartjs-2';

// import styles from './PieChart.css';

import {IChartData, IChartProps} from '../props';

export interface IDoughnutProps extends IChartProps {

    /** doughnut width */
    doughnutSpace?: number;

}

class Doughnut extends React.Component<IDoughnutProps, {}>{

    public static defaultProps = {
        className: '',
        doughnutSpace: 50,
        legendPos: 'bottom',
        spacing: 0,
        style: {},
        titlePos: 'top'
    };

    public render(){

        const {
            id,
            title,
            titlePos,
            titleColor,
            titleFont,
            titleSize,
            titleStyle,
            doughnutSpace,
            legendPos,
            legendColor,
            legendSize,
            legendStyle,
            legendFont,
            boxWidth,
            spacing,
            size,
            // height,
            // width
        } = this.props;

        const chartData = this.getData(this.props.data);

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
            cutoutPercentage: doughnutSpace,
            legend,
            title: chartTitle
        };

        const data = {
            datasets: [{
                backgroundColor: chartData.backgroundColors,
                borderWidth: spacing,
                data: chartData.values
            }],
            labels: chartData.labels
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

    private getData = (data: IChartData[]) => {
        const labels: string[] = [];
        const values: number[] = [];
        const backgroundColors: string[] = [];

        data.forEach((chartData) => {

            const value = parseFloat(chartData.value.toString());
            const background = chartData.background.toString();

            labels.push(chartData.label);
            values.push(value);
            backgroundColors.push(background);

        });

        return {labels, values, backgroundColors};
    }
}

export default Doughnut;
