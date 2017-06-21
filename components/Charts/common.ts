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

export const getLineData = (data: any[]) => {

    const finishedData: any = [];

    // if (Array.isArray(data)){
    data.forEach((arrayData) => {
        const labels: string[] = [];
        const values: number[] = [];

        arrayData.forEach((chartData: any) => {
            const value = parseFloat(chartData.value.toString());

            labels.push(chartData.label);
            values.push(value);
        });

        finishedData.push({labels, values});

    });
    // } else {
    //     const labels: string[] = [];
    //     const values: number[] = [];

    //     data.forEach((chartData: any) => {
    //         const value = parseFloat(chartData.value.toString());

    //         labels.push(chartData.label);
    //         values.push(value);
    //     });

    //     finishedData.push({labels, values});
    // }

    console.log(finishedData);

    return finishedData;

};

// export const getFinalData = (
//             chartData: any,
//             borderColor: string,
//             borderDash: number[],
//             borderWidth: number,
//             fill: boolean,
//             label: string,
//             lineTension: number,
//             pointRadius: number,
//             pointStyle: string,
//             noLine: boolean,
//             steppedLine: boolean,
//             backgroundColor?: string | string[],
//         ) => {
//             if (Array.isArray(chartData)){
//                 chartData.map((data: any, i: any) => {
//                     return {
//                         backgroundColor: backgroundColor ? backgroundColor[i] : `rgba(92,205,223,0.4)`,
//                         borderColor: borderColor ?
//                             borderColor :
//                             backgroundColor ?
//                             backgroundColor[i].replace(',0.', ',1') :
//                             `rgba(92,205,223,0.4)`,
//                         borderDash,
//                         borderWidth,
//                         data: data.values,
//                         fill,
//                         label,
//                         lineTension,
//                         pointHoverRadius: pointRadius,
//                         pointRadius,
//                         pointStyle,
//                         showLine: !noLine,
//                         steppedLine
//                     };

//                 });
//             }else {
//                 return {
//                         backgroundColor: backgroundColor ? backgroundColor : `rgba(92,205,223,0.4)`,
//                         borderColor: borderColor ?
//                             borderColor :
//                             backgroundColor ?
//                             backgroundColor :
//                             `rgba(92,205,223,0.4)`,
//                         borderDash,
//                         borderWidth,
//                         data: chartData.values,
//                         fill,
//                         label,
//                         lineTension,
//                         pointHoverRadius: pointRadius,
//                         pointRadius,
//                         pointStyle,
//                         showLine: !noLine,
//                         steppedLine
//                     };
//             }
//     }

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
