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
    onClickOverlay?: (e: React.MouseEvent<HTMLDivElement>) => void;

    /** callback func called when modal is opened */
    onOpen?: () => void;

    /** callback func called when modal is closed */
    onClose?: () => void;

}

export default class Modal extends React.Component<IModalProps, {}>{

    componentWillReceiveProps(nextProps: IModalProps){
        if (nextProps.active){
            this.props.onOpen && this.props.onOpen();
        } else {
            this.props.onClose && this.props.onClose();
        }
    }

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
                {this.getOverlay()}
            </div>
        );
    }

    getOverlay = () => {
        const covStyles = this.props.active ? styles.coverOn : styles.coverOff;
        return <div className={`${styles.cover} ${covStyles}`} onClick={this.props.onClickOverlay} />;
    }

}
