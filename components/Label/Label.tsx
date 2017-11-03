import * as React from 'react';

import styles from './Label.css';

export interface ILabelProps {

    /** abbreviate numerical values */
    abbreviate?: boolean;

    /** override label styles */
    style?: React.CSSProperties;

    /** override label class */
    className?: string;

    /** children types */
    children: number | string;

}

export default class Label extends React.Component<ILabelProps, {}> {

    render() {

        const { className, style } = this.props;

        const content = this.getContent();

        return (
            <div
                style={style}
                className={`label-component ${styles.label} ${className}`}
            >
                {content}
            </div>
        );
    }

    getContent = () => {
        const { children, abbreviate } = this.props;
        if (abbreviate && !isNaN(children as any)){
            return this.prettifyNumber(children as any);
        }
        return children;
    }

    prettifyNumber = (value: number) => {
        const thousand = 1000;
        const million = 1000000;
        const billion = 1000000000;
        const trillion = 1000000000000;
        if (value < thousand) {
            return String(value);
        }

        if (value >= thousand && value <= 1000000) {
            return Math.round(value / thousand) + 'K';
        }

        if (value >= million && value <= billion) {
            return Math.round(value / million) + 'M';
        }

        if (value >= billion && value <= trillion) {
            return Math.round(value / billion) + 'B';
        } else {
            return Math.round(value / trillion) + 'T';
        }
    }

}
