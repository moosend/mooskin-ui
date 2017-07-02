
export interface IChartData {
    label: string;
    value: number | string;
    background: string;
}

export interface ILineData {
    dataLabel: string;
    dataset: ILineDataSet[];
}

export interface ILineDataSet {
    label: string;
    value: number | string;
}

export interface ISortedData {
    label: string;
    labels: string[];
    values: number[];
}
