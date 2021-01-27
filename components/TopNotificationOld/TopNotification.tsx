import * as React from 'react';

import Button from '../Button/Button';

import closeIcon from '../../assets/images/icons/notifications/icon-close.png';
import errorIcon from '../../assets/images/icons/notifications/icon-error.png';
import successIcon from '../../assets/images/icons/notifications/icon-success.png';

import styles from './TopNotification.css';

export interface ITopNotificationProps {

    /** override input id */
    id?: string;

    /** override input type */
    type?: 'error' | 'success' | 'warning' | 'custom';

    /** override input value */
    text?: string | JSX.Element;

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

    /** link on ok button click */
    okButtonLink?: string;

    /** link on cancel button click */
    cancelButtonLink?: string;

    /** callback called when ok button is clicked */
    onClickOk?: () => void;

    /** callback called when cancel button is clicked */
    onClickCancel?: () => void;

    /** callback called when X button is clicked */
    onClickX?: () => void;

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

    static displayName = 'TopNotification';

    render(){

        const {className, style, text, visible, type} = this.props;

        const height = visible ? styles.active : styles.inactive;

        const typeClass = this.resolveTypeClass();

        const icon = type === 'success' ? successIcon : type === 'error' || type === 'warning' ? errorIcon : '';

        const fontSize = type !== 'success' && type !== 'error' ? {fontSize:  16, marginTop: 2} : {};

        return (
            <div
                className={`top-notification-component ${styles.container} ${typeClass} ${height} ${className}`}
                style={style}
            >
                <div className={styles.content}>
                    <div className={styles.message}>
                        <img src={icon} alt="" style={{marginRight: 10}}/>
                        <div style={fontSize} className={styles.text}>{text}</div>
                    </div>
                    {this.renderButtons()}
                </div>
                <div className={`close-notification ${styles.close}`} onClick={this.props.onClickX}>
                    <img src={closeIcon} alt=""/>
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

        const {okButton, cancelButton, okButtonLabel, cancelButtonLabel, okButtonLink, cancelButtonLink} = this.props;

        const okButtonComponent = <Button style={{margin: 6}} onClick={this.onClickOk}>{okButtonLabel}</Button>;
        const cancelButtonComponent = <Button style={{margin: 6}} onClick={this.onClickCancel}>{cancelButtonLabel}</Button>;

        const okButtonAnchor = okButtonLink ? (
            <a
                href={okButtonLink}
                className={styles.titleAnchor}
                target={okButtonLink.includes('http:') || okButtonLink.includes('https:') ? '_blank' : ''}
            >
                {okButtonComponent}
            </a>
        ) : okButtonComponent;

        const cancelButtonAnchor = cancelButtonLink ? (
            <a
                href={cancelButtonLink}
                className={styles.titleAnchor}
                target={cancelButtonLink.includes('http:') || cancelButtonLink.includes('https:') ? '_blank' : ''}
            >
                {cancelButtonComponent}
            </a>
        ) : cancelButtonComponent;

        return okButton || cancelButton ? (
            <div className={styles.buttonContainer}>
                {okButton && okButtonAnchor}
                {cancelButton && cancelButtonAnchor}
            </div>
        ) : null;
    }

}
