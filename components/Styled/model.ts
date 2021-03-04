export interface IThemeFontColors {
	anchor: string;
	button: string;
	common: string;
	disabledAnchor: string;
	description: string;
	label: string;
	toggle: string;
	text: string;
	secondaryToggle: string;
}

export interface IThemeBackgroundColors {
	button: string;
	common: string;
	disabledButton: string;
	main: string;
	toggle: string;
	secondaryToggle: string;
}

export interface IThemeBorderColors {
	common: string;
}

export interface IStyledTheme {
	fontColors: IThemeFontColors;
	backgroundColors: IThemeBackgroundColors;
	borderColors: IThemeBorderColors;
}

export interface IMooskinContext {
	palette?: IStyledTheme;
}
