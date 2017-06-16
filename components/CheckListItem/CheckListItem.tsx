import * as React from 'react';

import {H2} from '../Headings/index';
import SmallIconButton from '../SmallIconButton/SmallIconButton';
import styles from './CheckListItem.css';

export interface ICheckListItemProps {

    /** check list item id attribute */
    id?: string;

    /** item status */
    status?: boolean;

    /** item title */
    title?: string;

    /** item text */
    text?: string;

    /** check list item class */
    className?: string;

    /** override check list item styles */
    style?: {[key: string]: string};

    /** callback that is called when the button is clicked */
    onClick?: (e?: React.MouseEvent<HTMLInputElement>) => void;

}

export default class CheckListItem extends React.Component<ICheckListItemProps, {}> {

    public static defaultProps = {
        className: '',
        status: false,
        style: {}
    };

    public render(){

        const {status, id, text, title} = this.props;
        const icon = status ? 'check' : 'times';

        return (
            <div>
                <H2>{title}</H2>
                <div className={styles.checkitem} id={id}>
                    <i className={`fa fa-${icon} fa-lg ${styles.icon}`} />
                    <div className={styles.content}>
                        {text}
                        <SmallIconButton
                            className={styles.button}
                            icon="create"
                            onClick={this.onClick}
                        />
                    </div>
                </div>
            </div>
        );
    }

    private onClick = (e: React.MouseEvent<HTMLInputElement>) => {
        this.props.onClick && this.props.onClick(e);
    }

}
