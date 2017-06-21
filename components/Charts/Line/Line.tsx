import * as React from 'react';
import {Line} from 'react-chartjs-2';

import {getData, getLabels, getTitle} from '../common';
import {ILineProps} from '../props';

class BarChart extends React.Component<ILineProps, {}>{

    public static defaultProps = {
        borderWidth: 2,
        boxWidth: 0,
        fill: false,
        legendPos: 'top',
        legendStyle: 'italic',
        noLegend: true,
        titlePos: 'top',
        titleSize: 15,
        titleStyle: 'bold'
    };

    public render() {

        const {
            id,
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
            height,
            width,
            maintainAspectRatio,
            gridLinesY,
            gridLinesX,
            label,
            size,
            minValue,
            borderWidth,
            borderColor,
            fill,
            pointRadius,
            lineTension,
            borderDash,
            pointStyle,
            noLine,
            steppedLine,
            backgroundColor
        } = this.props;

        const position = legendPos;

        const chartData = getData(this.props.data);

        const chartTitle = getTitle(title, titleColor, titleFont, titleSize, titleStyle, titlePos);

        const labels = getLabels(boxWidth, legendColor, legendFont, legendSize, legendStyle);

        const scales = {
            xAxes: [{
                gridLines: {
                    display: gridLinesX
                }
            }],
            yAxes: [{
                gridLines: {
                    display: gridLinesY
                },
                ticks: {
                    min: minValue
                }
            }],
        };

        const legend = {
            display: label ? this.props.noLegend : !this.props.noLegend,
            labels,
            position
        };

        const options = {
            legend,
            maintainAspectRatio,
            scales,
            title: chartTitle
        };

        const data = {
            datasets: [
                {
                    backgroundColor,
                    borderColor,
                    borderDash,
                    borderWidth,
                    data: chartData.values,
                    fill,
                    label,
                    lineTension,
                    pointHoverRadius: pointRadius ? pointRadius + 2 : 5,
                    pointRadius,
                    pointStyle,
                    showLine: !noLine,
                    steppedLine
                }
            ],
            labels: chartData.labels
        };

        // const mock = {
        //     datasets: [
        //         {
        //             backgroundColor: 'rgba(75,192,192,0.4)',
        //             borderColor: 'rgba(75,192,192,1)',
        //             borderDash: [],
        //             data: [65, 59, 80, 81, 56, 55, 40],
        //             fill: false,
        //             label: 'My First dataset',
        //             lineTension: 0.1,
        //             pointBackgroundColor: '#fff',
        //             pointBorderColor: 'rgba(75,192,192,1)',
        //             pointBorderWidth: 1,
        //             pointHitRadius: 10,
        //             pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        //             pointHoverBorderColor: 'rgba(220,220,220,1)',
        //             pointHoverBorderWidth: 2,
        //             pointHoverRadius: 5,
        //             pointRadius: 1
        //         },
        //         {
        //             backgroundColor: 'rgba(75,192,192,0.4)',
        //             borderColor: 'rgba(75,192,192,1)',
        //             borderDash: [],
        //             data: [35, 49, 20, 61, 96, 55, 80],
        //             fill: false,
        //             label: 'My First dataset',
        //             lineTension: 0.1,
        //             pointBackgroundColor: '#fff',
        //             pointBorderColor: 'rgba(75,192,192,1)',
        //             pointBorderWidth: 1,
        //             pointHitRadius: 10,
        //             pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        //             pointHoverBorderColor: 'rgba(220,220,220,1)',
        //             pointHoverBorderWidth: 2,
        //             pointHoverRadius: 5,
        //             pointRadius: 1
        //         }
        //     ],
        //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
        // };

        return(
            <div id={id}>
                <Line
                    data={data}
                    width={width || size}
                    height={height || size}
                    options={options}
                />
            </div>
        );
    }
}

export default BarChart;
