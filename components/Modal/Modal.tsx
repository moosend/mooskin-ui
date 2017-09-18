import * as React from 'react';

import styles from './Modal.css';

export interface IModalProps{

    /** id of the modal */
    id?: string;

    /** wether the modal is active or not */
    active?: boolean;

    /** override modal styles */
    style?: React.CSSProperties;

    /** override modal class */
    className?: string;

    /** onClick callback function when the background cover is clicked */
    onCoverClick?: (e: React.MouseEvent<HTMLDivElement>) => void;

}

export default class Modal extends React.Component<IModalProps, {}>{

    render() {

        const display = this.props.active ? styles.modalOn : styles.modalOff;

        const classes = `${styles.modal} ${display} ${this.props.className}`;

        return(
            <div className={'modal-component'} id={this.props.id}>
                <div
                    className={classes}
                    style={this.props.style}
                >
                    {this.props.children}
                </div>
                {this.getCover()}
            </div>
        );
    }

    getCover = () => {
        const covStyles = this.props.active ? styles.coverOn : styles.coverOff;
        return <div className={`${styles.cover} ${covStyles}`} onClick={this.props.onCoverClick} />;
    }

}
