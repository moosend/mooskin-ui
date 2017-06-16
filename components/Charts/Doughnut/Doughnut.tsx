import * as React from 'react';
import {Pie} from 'react-chartjs-2';

// import styles from './PieChart.css';

import {getData, getLabels, getTitle} from '../common';
import {IDoughnutProps} from '../props';

class Doughnut extends React.Component<IDoughnutProps, {}>{

    public static defaultProps = {
        borderWidth: 0,
        boxWidth: 30,
        doughnutSpace: 50,
        legendPos: 'bottom',
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
            borderWidth,
            size,
            maintainAspectRatio,
            // height,
            // width
        } = this.props;

        const position = legendPos;

        const chartData = getData(this.props.data);

        const chartTitle = getTitle(title, titleColor, titleFont, titleSize, titleStyle, titlePos);

        const labels = getLabels(boxWidth, legendColor, legendFont, legendSize, legendStyle);

        const legend = {
            display: !this.props.noLegend,
            labels,
            position
        };

        const options = {
            cutoutPercentage: doughnutSpace,
            legend,
            maintainAspectRatio,
            title: chartTitle
        };

        const data = {
            datasets: [{
                backgroundColor: chartData.backgroundColors,
                borderWidth,
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

}

export default Doughnut;
