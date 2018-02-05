import * as React from 'react';

import Button from '../Button';

import styles from './TopNotification.css';

export interface ITopNotificationProps {

    /** override input id */
    id?: string;

    /** override input type */
    type?: 'error' | 'success' | 'custom';

    /** override input value */
    text?: string;

     /** override input value */
    okButtonLabel?: string;

     /** override input value */
    cancelButtonLabel?: string;

     /** indicates if there should be an ok button */
    okButton?: boolean;

     /** indicates if there should be an cancel button */
    cancelButton?: boolean;

    /** override input styles */
    style?: React.CSSProperties;

    /** override input class */
    className?: string;

    /** callback called when ok button is clicked */
    onClickOk?: () => void;

    /** callback called when cancel button is clicked */
    onClickCancel?: () => void;

    /** indicates if notification is shown or not */
    visible?: boolean;
}

export default class TopNotification extends React.Component<ITopNotificationProps, {}>{

    static defaultProps: Partial<ITopNotificationProps> = {
        cancelButton: false,
        cancelButtonLabel: 'Cancel',
        okButton: false,
        okButtonLabel: 'Ok',
        type: 'success',
        visible: true,
    };

    render(){

        const {className, style, text, visible} = this.props;

        const height = visible ? styles.active : styles.inactive;

        const typeClass = this.resolveTypeClass();

        return (
            <div
                className={`top-notification-component ${styles.container} ${typeClass} ${height} ${className}`}
                style={style}
            >
                <div className={styles.content}>
                    <div className={styles.message}>
                        <div className={styles.iconDiv}/>
                        <span className={styles.text}>{text}</span>
                    </div>
                    {this.renderButtons()}
                </div>
                <div className={`close-notification ${styles.close}`}>
                    <div onClick={this.onClickCancel}/>
                </div>
            </div>
        );
    }

    onClickCancel = () => {
        this.props.onClickCancel && this.props.onClickCancel();
    }

    onClickOk = () => {
        this.props.onClickOk && this.props.onClickOk();
    }

    resolveTypeClass(){
        if (this.props.type === 'success'){
            return styles.successNotification;
        }else if (this.props.type === 'error'){
            return styles.errorNotification;
        }else{
            return styles.customNotification;
        }
    }

    renderButtons = () => {

        const {okButton, cancelButton, okButtonLabel, cancelButtonLabel} = this.props;

        return okButton || cancelButton ? (
            <div className={styles.buttonContainer}>
                {okButton && <Button onClick={this.onClickOk}>{okButtonLabel}</Button>}
                {cancelButton && <Button onClick={this.onClickCancel}>{cancelButtonLabel}</Button>}
            </div>
        ) : null;
    }

}
