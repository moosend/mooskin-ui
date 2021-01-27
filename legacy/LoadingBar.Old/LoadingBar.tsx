import * as React from 'react';

import styles from './LoadingBar.css';

export interface ILoadingBarProps {

    /** id of the component */
    id?: string;

    /** progress of the loadingBar */
    progress: number;

    /** direction of the loadingbar */
    direction?: string;

    /** wether an error occured */
    error?: boolean;

    /** override LoadingBar styles */
    style?: React.CSSProperties;

    /** override LoadingBar class */
    className?: string;

    /** callback function to be fired when progress is done */
    onProgressDone?: () => void;

    /** callback to be fired on error */
    onError?: () => void;

}

export interface ILoadingBarState {
    full: boolean;
    width: number;
    show: boolean;
    wait: boolean;
    error: boolean;
}

export default class LoadingBar extends React.Component<ILoadingBarProps, ILoadingBarState>{

    static defaultProps = {
        className: '',
        direction: 'right',
        progress: 0,
        style: {}
    };

    static displayName = 'LoadingBar';

    constructor(props: ILoadingBarProps) {
        super(props);

        this.state = {
            error: false,
            full: false,
            show: true,
            wait: false,
            width: 0
        };
    }

    componentDidMount(){
        this.setState({width: this.props.progress});
    }

    componentWillReceiveProps(nextProps: ILoadingBarProps) {

        if (nextProps.progress !== this.props.progress) {
            this.setState({ width: nextProps.progress }, this.isFull);
        }

        if (nextProps.error !== this.props.error) {
            if (nextProps.error) {
                this.setState({ width: 100, error: true }, this.isFull);
            }
        }
    }

    render() {

        const { className, id, style } = this.props;
        const { show, full, error } = this.state;

        const direction = this.getDirectionClasses();

        const errorClass = error ? styles.error : '';

        const fullClass = full ? styles.full : '';

        const classes = `loading-component ${styles.loadingBar} ${direction} ${errorClass} ${fullClass} ${className}`;

        if (show){
            return (
                <div
                    id={id}
                    className={classes}
                    style={{ ...style, ...this.styling()}}
                />
            );
        } else {
            return null;
        }

    }

    isFull = () => {
        const isFull = this.state.width >= 100;

        if (isFull) {
            this.setState({ wait: true });

            this.state.error && !this.state.full && this.props.onError && this.props.onError();

            setTimeout(() => {
                this.setState({
                    // error: false,
                    full: true
                });

                !this.state.error && this.props.onProgressDone && this.props.onProgressDone();

                setTimeout(() => {
                    this.setState({
                        show: false,
                        wait: false,
                        width: 0
                    });

                    setTimeout(() => {

                        this.setState({
                            error: false,
                            full: false,
                            show: true
                        });

                    });
                }, 250);
            }, 700);
        }
    }

    styling = () => {
        if (!this.state.wait) {
            return { width: `${this.state.width}%` };
        } else {
            return { width: `100%` };
        }
    }

    getDirectionClasses = () => {
        if (this.props.direction === 'right') {
            return styles.loadingRight;
        } else if (this.props.direction === 'left') {
            return styles.loadingLeft;
        }
    }

}
