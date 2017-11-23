import * as React from 'react';

import styles from './Loader.css';

export interface ILoaderProps {

    /** id of the loader */
    id?: string;

    /** wether the loader is active or not */
    active: boolean;

    /** override loader styles */
    style?: React.CSSProperties;

    /** override loader class */
    className?: string;

}

export default class Loader extends React.Component<ILoaderProps, {}> {

    static defaultProps = {
        className: '',
        style: {}
    };

    render() {

        const display = this.props.active ? '' : styles.hidden;

        return (
            <div
                style={this.props.style}
                id={this.props.id}
                className={`loader-component ${styles.loader} ${display} ${this.props.className}`}
            >
                Incoming Transmission
                <img
                    // tslint:disable-next-line
                    src="https://img00.deviantart.net/ae1e/i/2015/196/7/c/40k_imperial_aquila__transparent__by_fuguestock-d91enql.png"
                    className={styles.image}
                />
            </div>
        );
    }
}
