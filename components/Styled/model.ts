export interface IFontColors {
	anchor: string;
	button: string;
	common: string;
	disabledAnchor: string;
	description: string;
	label: string;
	toggle: string;
	secondaryToggle: string;
}

export interface IBackgroundColors {
	button: string;
	common: string;
	disabledButton: string;
	main: string;
	toggle: string;
	secondaryToggle: string;
}

export interface IBorderColors {
	common: string;
}

export interface IStyledTheme {
	fontColors: IFontColors;
	backgroundColors: IBackgroundColors;
	borderColors: IBorderColors;
}

export interface IMooskinContext {
	palette?: IStyledTheme;
}
