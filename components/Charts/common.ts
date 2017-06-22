import {IChartData, ILineData, ISortedData} from './types';

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

};

export const getLineData = (data: ILineData[]) => {

    const finishedData: ISortedData[] = [];

    data.forEach((arrayData) => {
        const label: string = arrayData.dataLabel;
        const labels: string[] = [];
        const values: number[] = [];

        arrayData.dataset.forEach((chartData: any) => {
            const value = parseFloat(chartData.value.toString());

            labels.push(chartData.label);
            values.push(value);
        });

        finishedData.push({label, labels, values});

    });

    return finishedData;

};

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
