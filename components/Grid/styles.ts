import styled from 'styled-components';

import screens from '../_utils/globals/screens';

import { ColWidth, IColProps, IColWidths, IGridProps, IRowProps } from './model';

const colWidths = {
    1: 8.33333333,
    2: 16.66666667,
    3: 25,
    4: 33.33333333,
    5: 41.66666667,
    6: 50,
    7: 58.33333333,
    8: 66.66666667,
    9: 75,
    10: 83.33333333,
    11: 91.66666667,
    12: 100
};

const generateMediaQuery = (media: string, colWidth?: ColWidth) => {
    if (colWidth) {
        return `
            @media ${media} {
                flex-grow: ${colWidth};
                flex-shrink: 1;
                width: ${colWidths[colWidth]}%;
                max-width: ${colWidths[colWidth]}%;
            }
        `;
    }
    return `
        @media ${media} {
            flex-grow: 1;
            flex-shrink: 1;
        }
    `;
};

const generateHiddenMediaQuery = (media: string) => {
    return `
        @media ${media} {
            display: none;
        }
    `;
};

const assembleAvengers = (data: IColWidths) => {
    const { lg, md, sm, xs } = data;

    if (lg || md || sm || xs) {
        const large = lg === 'hidden' ? generateHiddenMediaQuery(screens.large) : generateMediaQuery(screens.large, lg);
        const medium = md === 'hidden' ? generateHiddenMediaQuery(screens.medium) : generateMediaQuery(screens.medium, md);
        const small = sm === 'hidden' ? generateHiddenMediaQuery(screens.small) : generateMediaQuery(screens.small, sm);
        const extraSmall = xs === 'hidden' ? generateHiddenMediaQuery(screens.xSmall) : generateMediaQuery(screens.xSmall, xs);
        return `${large} ${medium} ${small} ${extraSmall}`;
    }
    return `
        flex-grow: 1;
        flex-shrink: 1;
    `;
};

export const StyledGrid = styled.div<IGridProps>`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 1;
    box-sizing: border-box;
`;

export const StyledRow = styled.div<IRowProps>`
    display: flex;
    flex-flow: row wrap;
    box-sizing: border-box;
    min-width: 0px;
`;

export const StyledCol = styled.div<IColProps>`
    box-sizing: border-box;
    min-width: 0px;
    ${(props) => assembleAvengers({ lg: props.lg, md: props.md, sm: props.sm, xs: props.xs })}
`;
