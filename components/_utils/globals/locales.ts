import { enUS, el, fr, ptBR, de, ja, es } from 'date-fns/locale';

export const SupportedLocale = {
	English: 'en',
	Greek: 'el',
	French: 'fr',
	German: 'de',
	Japanese: 'ja',
	Brazilian: 'pt_BR',
	Spanish: 'es',
} as const;

export type SupportedLocales = (typeof SupportedLocale)[keyof typeof SupportedLocale];

export const SupportedLocaleValues = Object.values(SupportedLocale);

export const LocaleByLanguage = {
	[SupportedLocale.English]: enUS,
	[SupportedLocale.Greek]: el,
	[SupportedLocale.French]: fr,
	[SupportedLocale.German]: de,
	[SupportedLocale.Japanese]: ja,
	[SupportedLocale.Brazilian]: ptBR,
	[SupportedLocale.Spanish]: es,
} as const;
