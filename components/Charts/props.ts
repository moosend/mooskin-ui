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
    borderWidth?: number;

    /** chart size */
    size?: number;

    /** chart data values */
    data: IChartData[];

    /** maintains aspect ratio */
    maintainAspectRatio?: boolean;

    // /** chart height */
    // height?: number;

    // /** chart width */
    // width?: number;
}

export interface IDoughnutProps extends IChartProps {

    /** doughnut width */
    doughnutSpace?: number;

}

export interface IBarProps extends IChartProps{

    /** chart label */
    label?: string;

    /** toggles X gridlines */
    gridLinesX?: boolean;

    /** toggles Y gridlines */
    gridLinesY?: boolean;

    /** chart height */
    height?: number;

    /** chart width */
    width?: number;

    /** min chart Y value */
    minValue?: number;

    /** border color */
    borderColor?: string;

    /** bar width in relation with category width */
    barPercentage?: number;

}

export interface IChartData {
    label: string;
    value: number | string;
    background: string;
}
