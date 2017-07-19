import * as React from 'react';
import {Line} from 'react-chartjs-2';

import {getLabels, getLineData, getTitle} from '../common';
import {ILineProps} from '../props';
import {ISortedData} from '../types';

class LineChart extends React.Component<ILineProps, {}>{

    public static defaultProps = {
        backgroundColor: [
            'rgba(92,205,223,0.4)',
            'rgba(244,135,112,0.4)',
            'rgba(242,193,74,0.4)',
            'rgba(239,239,239,0.4)'
        ],
        borderWidth: 2,
        boxWidth: 15,
        fill: false,
        legendPos: 'top',
        legendStyle: 'italic',
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

        const chartData = getLineData(this.props.data);

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
            display: this.props.noLegend ? false : true,
            labels,
            position
        };

        const options = {
            legend,
            maintainAspectRatio,
            scales,
            title: chartTitle
        };

        const finalData = chartData.map((data: ISortedData, i: number) => {

            return {
                backgroundColor: backgroundColor ? backgroundColor[i] : `rgba(92,205,223,0.4)`,
                borderColor: borderColor ?
                    borderColor :
                    backgroundColor ?
                    backgroundColor[i].replace(',0', ',1') :
                    `rgba(92,205,223,0.4)`,
                borderDash,
                borderWidth,
                data: data.values,
                fill,
                label: data.label,
                lineTension,
                pointHoverRadius: pointRadius,
                pointRadius,
                pointStyle,
                showLine: !noLine,
                steppedLine
            };

        });
        const lineData = {
            datasets: finalData,
            labels: chartData[0].labels
        };

        return(
            <div id={id}>
                <Line
                    data={lineData}
                    width={width || size}
                    height={height || size}
                    options={options}
                />
            </div>
        );
    }
}

export default LineChart;
