import * as React from 'react';
import { enUS } from 'date-fns/locale';

import variables from '../_utils/globals/variables';
import { LocaleBySupportedLanguage, ISupportedLanguage } from '../_utils/globals/locales';

import { IMooskinContext } from './model';

export const useMooskinContext = () => React.useContext(MooskinContext);

export const MooskinContext = React.createContext<IMooskinContext>({
	palette: variables,
	locale: enUS,
	setLocale: (_: ISupportedLanguage) => {},
});

export const MooskinContextProvider: React.FC<React.PropsWithChildren<any>> = ({ children }) => {
	const [locale, setLocale] = React.useState(enUS);

	const handleSetLocale = (language: ISupportedLanguage) => {
		const mappedLocale = LocaleBySupportedLanguage[language] || enUS;
		setLocale(mappedLocale);
	};

	return (
		<MooskinContext.Provider
			value={{
				palette: variables,
				locale,
				setLocale: handleSetLocale,
			}}
		>
			{children}
		</MooskinContext.Provider>
	);
};

export const withMooskinContext = <P extends object>(Component: React.FC<P & IMooskinContext>): React.FC<P & IMooskinContext> => {
	return function WithMooskinContext(props: P) {
		const context = useMooskinContext();
		return (
			<Component {...props}
				palette={context.palette}
				locale={context.locale}
				setLocale={context.setLocale}
			/>
		);
	};
};
