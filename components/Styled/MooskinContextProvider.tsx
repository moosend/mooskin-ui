import * as React from 'react';

import variables from '../_utils/globals/variables';

import { IMooskinContext } from './model';

export const useMooskinContext = () => React.useContext(MooskinContext);

export const MooskinContext = React.createContext<IMooskinContext>({ palette: variables });

export const MooskinContextProvider = MooskinContext.Provider;

export const withMooskinContext = <P extends object>(Component: React.FC<P>) => {
    return function WithMooskinContext(props: P) {
        const context = useMooskinContext();
        return <Component {...props} palette={context.palette} />;
    };
};
