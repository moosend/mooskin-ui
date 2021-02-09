export interface IBaseThemeInterface {
    backgroundColor: string;
    fontColor: string;
}

export interface ICommonElementInterface extends IBaseThemeInterface {
    borderColor: string;
}

export interface ILayoutInterface extends IBaseThemeInterface {
    borderColor: string;
}

export interface IUiElementInterface extends IBaseThemeInterface {
    secondaryBackgroundColor: string;
    secondaryFontColor: string;
    borderColor: string;
}

export interface IAnchorInterface {
    disabledFontColor: string;
    fontColor: string;
}

export interface IButtonInterface extends IBaseThemeInterface {
    disabledBackgroundColor: string;
}

export interface IStyledTheme {
    main: { backgroundColor: string };
    layout: ILayoutInterface;
    actionsDropdown: IBaseThemeInterface;
    button: IButtonInterface;
    anchor: IAnchorInterface;
    label: { fontColor: string };
    description: { fontColor: string };
    commonElement: ICommonElementInterface;
    toggleElement: IUiElementInterface;
}

export interface IMooskinContext {
    palette?: IStyledTheme;
}
