export interface IThemeFontColors {
	primary1: string;
	primary2: string;
	primary3: string;
	primary4: string;
	primary5: string;
	secondary1: string;
	secondary2: string;
	secondary3: string;
	secondary4: string;
	secondary5: string;
	secondary6: string;
	white: string;
	altWhite: string;
	background: string;
	grayAlpha: string;
	grayAlpha100: string;
	grayAlpha400: string;
	gray100: string;
	gray1: string;
	gray2: string;
	medgray1: string;
	medgray2: string;
	darkgray1: string;
	darkgray2: string;
	darkgray3: string;
	text: string;
	inverseText: string;
	black: string;
	checkboxUnselected: string;
	dropdown: string;
}

export interface IThemeBackgroundColors {
	primary1: string;
	primary2: string;
	primary3: string;
	primary4: string;
	primary5: string;
	secondary1: string;
	secondary2: string;
	secondary3: string;
	secondary4: string;
	secondary5: string;
	secondary6: string;
	white: string;
	altWhite: string;
	background: string;
	grayAlpha: string;
	grayAlpha100: string;
	grayAlpha400: string;
	gray100: string;
	gray1: string;
	gray2: string;
	medgray1: string;
	medgray2: string;
	darkgray1: string;
	darkgray2: string;
	darkgray3: string;
	text: string;
	inverseText: string;
	black: string;
	checkboxUnselected: string;
	dropdown: string;
}

export interface IThemeBorderColors {
	primary1: string;
	primary2: string;
	primary3: string;
	primary4: string;
	primary5: string;
	secondary1: string;
	secondary2: string;
	secondary3: string;
	secondary4: string;
	secondary5: string;
	secondary6: string;
	white: string;
	altWhite: string;
	background: string;
	grayAlpha: string;
	grayAlpha100: string;
	grayAlpha400: string;
	gray100: string;
	gray1: string;
	gray2: string;
	medgray1: string;
	medgray2: string;
	darkgray1: string;
	darkgray2: string;
	darkgray3: string;
	text: string;
	inverseText: string;
	black: string;
	checkboxUnselected: string;
	dropdown: string;
}

export interface IThemeChartColors {
	primaryblue: string;
	primaryteal: string;
	secondarygreen: string;
	primaryred: string;
	primaryyellow: string;
	medgray1: string;
}

export interface IStyledTheme {
	fontColors: IThemeFontColors;
	backgroundColors: IThemeBackgroundColors;
	borderColors: IThemeBorderColors;
	chartColors: IThemeChartColors;
}

export interface IMooskinContext {
	palette?: IStyledTheme;
}
