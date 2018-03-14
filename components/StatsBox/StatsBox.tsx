import * as React from 'react';

import styles from './StatsBox.css';

export interface IStatsBoxProps {
    /** css class */
    className?: string;

    /** main element style */
    style?: React.CSSProperties;
}

export interface IStatsBoxChildProps {
    /** css class */
    className?: string;

    /** main element style */
    style?: React.CSSProperties;
}

export default class StatsBox extends React.Component<IStatsBoxProps, {}>{

    static defaultProps: Partial<IStatsBoxProps> = {
        className: '',
        style: {}
    };

    static StatsTitle: React.StatelessComponent<IStatsBoxChildProps>;
    static StatsNumber: React.StatelessComponent<IStatsBoxChildProps>;
    static StatsResult: React.StatelessComponent<IStatsBoxChildProps>;

    render(){

        const {className, style} = this.props;

        return (
            <div style={style} className={`${styles.statsBox} ${className}`}>
                {this.props.children}
            </div>
        );
    }
}

export const StatsTitle: React.StatelessComponent<IStatsBoxChildProps> = (props) => {
    return <div style={props.style} className={`${styles.statsTitle} ${props.className}`}>{props.children}</div>;
};

StatsTitle.defaultProps = {
    className: '',
    style: {}
};

export const StatsNumber: React.StatelessComponent<IStatsBoxChildProps> = (props) => {
    return <div style={props.style} className={`${styles.statsNumber} ${props.className}`}>{props.children}</div>;
};

StatsNumber.defaultProps = {
    className: '',
    style: {}
};

export const StatsResult: React.StatelessComponent<IStatsBoxChildProps> = (props) => {
    return <div style={props.style} className={`${styles.statsResult} ${props.className}`}>{props.children}</div>;
};

StatsResult.defaultProps = {
    className: '',
    style: {}
};
