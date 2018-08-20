import * as React from 'react';

import {IInputCallbackData} from '../_utils/types/commonTypes';

import H2 from '../Headings/H2/H2';
import SmallIconButton from '../SmallIconButton/SmallIconButton';
import styles from './CheckListItem.css';

export interface ICheckListItemProps {

    /** check list item id attribute */
    id?: string;

    /** item status */
    status?: boolean;

    /** item title */
    title?: string;

    /** item content */
    content?: string | JSX.Element | Element;

    /** button icon */
    buttonIcon?: string;

    /** check list item class */
    className?: string;

    /** override check list item styles */
    style?: React.CSSProperties;

    /** what data is being used, you know on what field changes are made */
    dataLabel?: string;

    /** callback that is called when the button is clicked */
    onClick?: (e?: React.MouseEvent<HTMLInputElement>, data?: IInputCallbackData) => void;

}

export default class CheckListItem extends React.Component<ICheckListItemProps, {}> {

    static defaultProps = {
        className: '',
        status: false,
        style: {}
    };

    render(){

        const {status, id, content, title, className, style} = this.props;
        const {checkitem, iconStyle} = styles;
        const icon = status ? 'check' : 'close';

        return (
            <div
                className={`checkitem-component ${className}`}
                style={style}
            >
                {title && <H2 style={{marginLeft: '5px'}}>{title}</H2>}
                <div className={checkitem} id={id}>
                    <i className={`material-icons ${iconStyle}`} >{icon}</i>
                    <div className={styles.content}>
                        {content}
                    </div>
                    {this.renderButton()}
                </div>
            </div>
        );
    }

    renderButton = () => {
        const icon = this.props.buttonIcon ? this.props.buttonIcon : 'create';
        if (this.props.onClick){
            return (
                <SmallIconButton
                    className={styles.button}
                    icon={icon}
                    onClick={this.onClick}
                />
            );
        }
    }

    onClick = (e: React.MouseEvent<HTMLInputElement>, data?: IInputCallbackData) => {
        this.props.onClick && this.props.onClick(e, {value: !this.props.status, dataLabel: this.props.dataLabel});
    }

}
