import { enUS, el, fr, ptBR, de, ja, es } from 'date-fns/locale';

export const SupportedLanguages = {
	English: 'en',
	Greek: 'el',
	French: 'fr',
	German: 'de',
	Japanese: 'ja',
	Brazilian: 'pt_BR',
	Spanish: 'es',
} as const;

export type ISupportedLanguage = (typeof SupportedLanguages)[keyof typeof SupportedLanguages];

export const SupportedLanguageValues = Object.values(SupportedLanguages);

export const LocaleBySupportedLanguage = {
	[SupportedLanguages.English]: enUS,
	[SupportedLanguages.Greek]: el,
	[SupportedLanguages.French]: fr,
	[SupportedLanguages.German]: de,
	[SupportedLanguages.Japanese]: ja,
	[SupportedLanguages.Brazilian]: ptBR,
	[SupportedLanguages.Spanish]: es,
} as const;
