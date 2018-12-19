import * as React from 'react';

// import loaderImage from '../../assets/images/loader/loader.png';

import styles from './Loader.css';

export interface ILoaderProps {

    /** id of the loader */
    id?: string;

    /** wether the loader is active or not */
    active: boolean;

    /** custom loader */
    loader?: string;

    /** custom animation */
    animation?: string | React.CSSProperties;

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

    static displayName = 'Loader';

    render() {

        const display = this.props.active ? '' : styles.hidden;

        // const loader = this.props.loader ? this.props.loader : loaderImage;
        const loader = this.props.loader ? this.props.loader : 'https://image.ibb.co/cMfEhU/loader.png';

        const animation = this.props.animation ? this.props.animation :
                        styles.animation;

        return (
            <div
                style={this.props.style}
                id={this.props.id}
                className={`loader-component ${styles.loader} ${display} ${this.props.className}`}
            >
                <img
                    src={loader}
                    className={`${styles.image} ${animation}`}
                />
            </div>
        );
    }
}
