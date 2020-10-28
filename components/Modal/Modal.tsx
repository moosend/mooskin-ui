import * as React from 'react';

import styles from './Modal.css';

import { H2 } from '../Headings';
import SmallIconButton from '../SmallIconButton';

export interface IModalProps {
    /** id of the modal */
    id?: string;

    /** modal title */
    title?: string;

    /** override modal styles */
    style?: React.CSSProperties;

    /** override modal class */
    className?: string;

    /** onClick callback function when the background cover is clicked */
    onClickOverlay?: (e: React.MouseEvent<HTMLDivElement>) => void;

    /** onClick callback function when the cloes icon is clicked */
    onClickClose?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default class Modal extends React.Component<IModalProps, {}> {
    static defaultProps = {
        className: '',
        style: {},
    };

    static displayName = 'Modal';

    render() {
        return (
            <div className={`modal-component ${styles.container} ${this.props.className}`} id={this.props.id}>
                <div className={styles.modal} style={this.props.style}>
                    {this.getHeader()}
                    {this.props.children}
                </div>
                {this.getOverlay()}
            </div>
        );
    }

    getHeader = () => {
        const closeIcon = <SmallIconButton transparent icon="close" onClick={this.props.onClickClose} />;

        if (this.props.title) {
            return (
                <div className={styles.header}>
                    <H2 style={{ margin: 'auto' }}>{this.props.title}</H2>
                    <div className={styles.iconWrapper}>{closeIcon}</div>
                </div>
            );
        }

        return <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>{closeIcon}</div>;
    };

    getOverlay = () => {
        return <div className={styles.cover} onClick={this.props.onClickOverlay} />;
    };
}
