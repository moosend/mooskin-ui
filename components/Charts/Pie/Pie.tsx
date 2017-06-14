import * as React from 'react';
import {Pie} from 'react-chartjs-2';

// import styles from './PieChart.css';

import {IChartData, IChartProps} from '../props';

class PieChart extends React.Component<IChartProps, {}>{

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
            legend,
            title: chartTitle
        };

        const data = {
            datasets: [{
                backgroundColor: chartData[2],
                borderWidth: spacing,
                data: chartData[1]
            }],
            labels: chartData[0]
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

        console.log(data);

        data.map((chartData) => {

            for (const key in chartData) {

                if (!chartData.hasOwnProperty(key)) {
                    continue;
                }

                const value = parseFloat(chartData[key].toString());

                if (typeof key === 'string' && key === 'label'){
                    labels.push(key);
                }

                if (!isNaN(value)){
                    values.push(value);
                }

                if (typeof key === 'string' && key === 'backgroundColor'){
                    backgroundColors.push(chartData[key].toString());
                }

                console.log(key);
            }

        });
        
        console.log(labels, values, backgroundColors);
        return [labels, values, backgroundColors];
    }

}

export default PieChart;
