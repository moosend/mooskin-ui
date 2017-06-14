export interface IChartProps {

    /** chart id */
    id?: string;

    /** chart title */
    title?: string;

    /** chart title position */
    titlePos?: string;

    /** chart title size */
    titleSize?: number;

    /** chart title style */
    titleStyle?: string;

    /** chart title color */
    titleColor?: string;

    /** chart title font */
    titleFont?: string;

    /** legend display */
    noLegend?: boolean;

    /** legend position */
    legendPos?: string;

    /** legend box width */
    boxWidth?: number;

    /** legend font style */
    legendStyle?: string;

    /** legend font family */
    legendFont?: string;

    /** legend font size */
    legendSize?: number;

    /** legend color style */
    legendColor?: string;

    /** space between elements in the chart */
    spacing?: number;

    /** chart size */
    size?: number;

    /** chart data values */
    data: IChartData[];

    /** chart background Colors */
    backgroundColors?: string[] | {[key: string]: string|number};

    // /** chart height */
    // height?: number;

    // /** chart width */
    // width?: number;
}

export interface IChartData {
    label: string;
    value: number | string;
    background: string;
}
