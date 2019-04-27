import * as React from 'react';

import styles from './StatsBox.css';

export interface IStatsBoxProps {
    /** css class */
    className?: string;

    /** stast box side title */
    sideTitle: string;

    /** stast box side color */
    sideColor: string;

    /** stast box side text color */
    sideTextColor: string;

    /** main element style */
    style?: React.CSSProperties;
}

export default class StatsBox extends React.Component<IStatsBoxProps, {}>{

    static defaultProps: Partial<IStatsBoxProps> = {
        className: '',
        sideTextColor: '#fff',
        style: {}
    };

    static displayName = 'StatsBox';

    render(){

        const {className, style, sideColor, sideTextColor, sideTitle} = this.props;

        return (
            <div style={style} className={`${styles.statsBox} ${className}`}>
                <div className={styles.statsTitle} style={{background: sideColor, color: sideTextColor}}>
                    {sideTitle}
                </div>
                <div className={styles.statsContent}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
