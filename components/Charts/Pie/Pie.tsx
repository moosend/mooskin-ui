import * as React from 'react';
import {ChartData, Pie} from 'react-chartjs-2';

import styles from './Pie.css';

import {getData, getLabels, getTitle} from '../common';
import {IPieProps} from '../props';

class PieChart extends React.Component<IPieProps, {}>{

    static defaultProps = {
        borderWidth: 0,
        boxWidth: 30,
        legendPos: 'bottom',
        titlePos: 'top',
        titleStyle: 'bold'
    };

    render(){

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
            borderWidth,
            size,
            maintainAspectRatio
            // height,
            // width
        } = this.props;

        const position = legendPos;

        const pieData = getData(this.props.data);

        const chartTitle = getTitle(title, titleColor, titleFont, titleSize, titleStyle, titlePos);

        const labels = getLabels(boxWidth, legendColor, legendFont, legendSize, legendStyle);

        const legend = {
            display: !this.props.noLegend,
            labels,
            position
        };

        const options: ChartData<any> = {
            legend,
            maintainAspectRatio,
            responsive: true,
            title: chartTitle
        };

        const data = {
            datasets: [{
                backgroundColor: pieData.backgroundColors,
                borderWidth,
                data: pieData.values
            }],
            labels: pieData.labels
        };

        return(
            <div id={id} className={styles.chart}>
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

export default PieChart;
