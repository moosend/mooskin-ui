import {IChartData} from './props';

export const getData = (data: IChartData[]) => {
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

    // for (const key in chartData) {

    //     if (!chartData.hasOwnProperty(key)) {
    //         continue;
    //     }

    //     const value = parseFloat(chartData[key].toString());

    //     if (typeof key === 'string' && key === 'label'){
    //         labels.push(key);
    //     }

    //     if (!isNaN(value)){
    //         values.push(value);
    //     }

    //     if (typeof key === 'string' && key === 'backgroundColor'){
    //         backgroundColors.push(chartData[key].toString());
    //     }

    //     console.log(key);
    // }
};

// export const {
//     id,
//     title,
//     titlePos,
//     titleColor,
//     titleFont,
//     titleSize,
//     titleStyle,
//     doughnutSpace,
//     legendPos,
//     legendColor,
//     legendSize,
//     legendStyle,
//     legendFont,
//     boxWidth,
//     spacing,
//     size,
//     // height,
//     // width
// } = this.props;

// export const position = legendPos;

export const getTitle = (
        title?: string,
        titleColor?: string,
        titleFont?: string,
        titleSize?: number,
        titleStyle?: string,
        titlePos?: string
    ) => {
    return {
        display: title ? true : false,
        fontColor: titleColor,
        fontFamily: titleFont,
        fontSize: titleSize,
        fontStyle: titleStyle,
        position: titlePos,
        text: title
    };
};

export const getLabels = (
        boxWidth?: number,
        legendColor?: string,
        legendFont?: string,
        legendSize?: number,
        legendStyle?: string,
    ) => {
    return {
        boxWidth,
        fontColor: legendColor,
        fontFamily: legendFont,
        fontSize: legendSize,
        fontStyle: legendStyle
    };
};

export const getLegend = (
        noLegend?: boolean,
        labels?: object,
        position?: string,
    ) => {
    return {
        display: !this.props.noLegend,
        labels,
        position
    };
};

// export const options = {
//     cutoutPercentage: doughnutSpace,
//     legend,
//     title: chartTitle
// };

// export const getDataOptions = (
//         chartData?: object,
//         borderWidth?: number,
//     ) => {
//     return {
//         datasets: [{
//             backgroundColor: chartData.backgroundColors,
//             borderWidth,
//             data: chartData.values
//         }],
//         labels: chartData.labels
//     };
// };

// export const data = {
//     datasets: [{
//         backgroundColor: chartData.backgroundColors,
//         borderWidth: spacing,
//         data: chartData.values
//     }],
//     labels: chartData.labels
// };
