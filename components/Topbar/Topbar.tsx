import * as React from 'react';

import styles from './Topbar.css';

export interface ITopbarProps{

    /** id of the component */
    id?: string;

    /** override topbar classes */
    className?: string;

    /** override topbar styles */
    style?: React.CSSProperties;

    children?: any;

}

export interface ITopbarState {
    show: boolean;
}

export default class Topbar extends React.Component<ITopbarProps, ITopbarState> {

    prev: any;

    constructor(props: ITopbarProps){
        super(props);

        this.state = {
            show: true
        };
    }

    componentDidMount(){
        if (window.outerWidth <= 991){
            window.addEventListener('scroll', this.hideBar);
        }
    }

    componentWillUnmount(){
         window.removeEventListener('scroll', this.hideBar);
    }

    render(){

        const display = this.state.show ? styles.show : styles.hide;

        return (
            <div
                className={`topbar-component ${styles.topbar} ${display} ${this.props.className}`}
                style={this.props.style}
            >
                {this.props.children}
            </div>
        );
    }

    hideBar = () => {
        const {show} = this.state;
        window.scrollY > this.prev ? show && this.setState({show: false})
        :
        !show && this.setState({show: true});

        this.prev = window.scrollY;
     }

}
