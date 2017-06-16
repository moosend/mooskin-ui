import * as React from 'react';
import {Bar} from 'react-chartjs-2';

import {getData, getLabels, getTitle} from '../common';
import {IBarProps} from '../props';

class BarChart extends React.Component<IBarProps, {}>{

    public static defaultProps = {
        barPercentage: 0.6,
        borderWidth: 0,
        boxWidth: 0,
        legendPos: 'top',
        legendStyle: 'italic',
        minValue: 0,
        noLegend: true,
        titlePos: 'bottom',
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
            minValue,
            borderWidth,
            borderColor,
            barPercentage
        } = this.props;

        const position = legendPos;

        const chartData = getData(this.props.data);

        const chartTitle = getTitle(title, titleColor, titleFont, titleSize, titleStyle, titlePos);

        const labels = getLabels(boxWidth, legendColor, legendFont, legendSize, legendStyle);

        const scales = {
            xAxes: [{
                barPercentage: barPercentage ? this.getBarWidth(barPercentage) : barPercentage,
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
                    backgroundColor: chartData.backgroundColors,
                    borderColor,
                    borderWidth,
                    data: chartData.values,
                    label
                }
            ],
            labels: chartData.labels
        };

        return(
            <div id={id}>
                <Bar
                    data={data}
                    width={width}
                    height={height}
                    options={options}
                />
            </div>
        );
    }

    private getBarWidth = (barPercentage: number) => {
        if (barPercentage){
            if (barPercentage < 0){
            return 0;
            }else if (barPercentage > 1){
                return 1;
            }else {
                return barPercentage;
            }
        }
    }
}

export default BarChart;
