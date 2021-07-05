export interface IThemeFontColors {
	primary1: string;
	primary2: string;
	primary3: string;
	primary4: string;
	secondary1: string;
	secondary2: string;
	secondary3: string;
	secondary4: string;
	secondary5: string;
	secondary6: string;
	white: string;
	background: string;
	gray1: string;
	gray2: string;
	medgray1: string;
	medgray2: string;
	darkgray1: string;
	darkgray2: string;
	text: string;
	black: string;
}

export interface IThemeBackgroundColors {
	primary1: string;
	primary2: string;
	primary3: string;
	primary4: string;
	secondary1: string;
	secondary2: string;
	secondary3: string;
	secondary4: string;
	secondary5: string;
	secondary6: string;
	white: string;
	background: string;
	gray1: string;
	gray2: string;
	medgray1: string;
	medgray2: string;
	darkgray1: string;
	darkgray2: string;
	text: string;
	black: string;
}

export interface IThemeBorderColors {
	primary1: string;
	primary2: string;
	primary3: string;
	primary4: string;
	secondary1: string;
	secondary2: string;
	secondary3: string;
	secondary4: string;
	secondary5: string;
	secondary6: string;
	white: string;
	background: string;
	gray1: string;
	gray2: string;
	medgray1: string;
	medgray2: string;
	darkgray1: string;
	darkgray2: string;
	text: string;
	black: string;
}

export interface IStyledTheme {
	fontColors: IThemeFontColors;
	backgroundColors: IThemeBackgroundColors;
	borderColors: IThemeBorderColors;
}

export interface IMooskinContext {
	palette?: IStyledTheme;
}
