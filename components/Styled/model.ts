export interface IStyledTheme {
    primary: string;
    secondary: string;
    disabledBackground: string;
    disabledfont: string;
    inputBackground: string;
    inputBorder: string;
    inputFont: string;
    label: string;
}

export interface IMooskinContext {
    theme?: IStyledTheme;
}
