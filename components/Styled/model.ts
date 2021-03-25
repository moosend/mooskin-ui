export interface IThemeFontColors {
	anchor: string;
	button: string;
	common: string;
	disabledAnchor: string;
	description: string;
	label: string;
	toggle: string;
	text: string;
	tag: string;
	tableHeader: string;
	secondaryToggle: string;
}

export interface IThemeBackgroundColors {
	button: string;
	switchOff: string;
	switchOn: string;
	switchHandle: string;
	switchDisabled: string;
	common: string;
	buttonDisabled: string;
	main: string;
	toggle: string;
	tag: string;
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
