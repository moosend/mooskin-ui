import * as React from 'react';

import EmojiPicker from 'emojione-picker';
import 'emojione-picker/css/picker.css';

import styles from './Input.css';

import ClipboardButton from '../ClipboardButton';

import emojiIcon from '../../assets/images/editor/emoji.png';
import hashtag from '../../assets/images/editor/hashtag.png';

import {IInputCallbackData, IValidationCallbackData} from '../_utils/types/commonTypes';

export interface IProps {

    /** override input id */
    id?: string;

    /** provide to make the input field disabled */
    disabled?: boolean;

    /** provide to make the input field required */
    required?: boolean;

    /** override input type */
    type?: string;

    /** override input name */
    name?: string;

    /** override input value */
    value: string | number;

    /** min and max values for number values */
    minmax?: number[];

    /** override input placeholder */
    placeholder?: string;

    /** override input minlength */
    minlength?: number;

    /** override input maxlength */
    maxlength?: number;

    /** input label */
    label?: string;

    /** sets emoji dropdown to the input for adding emojis */
    emoji?: boolean;

    /** add personalization tags dropdown */
    personalizationTags?: Array<{value: string, label: string}>;

    /** close personalization tags dropdown when a tag is added */
    closeOnTagAdd?: boolean;

    /** spacing between label and input */
    labelWidth?: number;

    /** place label on top of Input */
    labelTop?: boolean;

    /** toggle autocomplete specified input */
    autocomplete?: boolean;

    /** autofocus specified input */
    autofocus?: boolean;

    /** icon to be placed near input */
    icon?: string;

    /** position of the icon */
    iconPosition?: string;

    /** override icon styles */
    iconStyle?: React.CSSProperties;

    /** override icon class */
    iconClass?: string;

    /** override input styles */
    style?: React.CSSProperties;

    /** override input class */
    className?: string;

    /** extra html attributes */
    extraHtmlAttr?: {[key: string]: any};

    /** type of input should be a div instead of input */
    divType?: boolean;

    /** input description (small italic bottom) */
    description?: string;

    /** status of the input, error or success */
    status?: 'error' | 'success';

    /** adds clipboardButton to the input component and assigns a label */
    clipboardButton?: string;

    /** clipboardButton callback function when clicked */
    onClipboardButtonClick?: (e: React.MouseEvent<HTMLButtonElement>, data: IInputCallbackData) => void;

    /** validate function */
    validate?: (data: IValidationCallbackData) => boolean;

    /** what data is being used, helps whn extracting user input, you know on what field changes are made */
    dataLabel?: string;

    /** callback that is called when the input changes */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>, data: IInputCallbackData) => void;

}

export interface IInputState{
    activeDropDown: number;
}

class Input extends React.Component<IProps, IInputState> {

    static defaultProps = {
        className: '',
        closeOnTagAdd: true,
        iconPosition: 'right',
        style: {}
    };

    id: string;
    input: any;

    constructor(props: IProps){
        super(props);

        this.id = this.props.id || this.generateId();

        this.state = {
            activeDropDown: -1
        };

    }

    render(){

        const {
            style,
            className,
            label,
            clipboardButton,
            labelTop,
        } = this.props;

        const spacing = !this.props.labelWidth ? {} : {flexBasis: `${this.props.labelWidth}px`};

        const labelPos = labelTop ? styles.column : '';
        const topLabel = labelTop ? styles.topLabel : '';
        const inputClasses = `${styles.inputLabel} ${topLabel}`;

        return (
            <div className={`input-component ${styles.inputContainer} ${labelPos} ${className}`} style={style}>
                {label && <label className={inputClasses} style={spacing} htmlFor={this.id}>{label}</label>}
                {this.renderInput()}
                {clipboardButton && this.getClipboardButton()}
                {this.state.activeDropDown !== -1 && <div onClick={this.removeDropDown} className={styles.overlay} />}
            </div>
        );
    }

    renderInput = () => {
        const {
            autofocus,
            disabled,
            divType,
            maxlength,
            minlength,
            placeholder,
            required,
            iconPosition,
            description,
            icon,
            type
        } = this.props;

        const autocomplete = !this.props.autocomplete ? 'off' : 'on';
        const disabledInput = disabled ? styles.disabledInput : '';

        const value = type === 'number' ? this.getNumberValue(this.props.value as number) : this.props.value;

        if (divType){
            return (
                <div
                    ref={(input) => this.input = input}
                    // onChange={this.onChange}
                    id={this.id}
                    // value={this.props.value}
                    className={`input ${styles.input} ${disabledInput}`}
                    onBlur={this.validateOnBlur}
                    {...this.props.extraHtmlAttr}
                />
            );
        } else {
            const status = this.getStatus();
            const descStatus = this.getDescStatus();
            const reverse = iconPosition === 'left' && styles.reverse;
            return (
                <div style={{flex: 1}}>
                    <div className={`${styles.innerDiv} ${status} ${reverse} ${disabledInput}`}>
                        <input
                            ref={(input) => this.input = input}
                            onChange={this.onChange}
                            id={this.id}
                            type={type}
                            name={this.props.name}
                            value={value}
                            placeholder={placeholder}
                            minLength={minlength}
                            maxLength={maxlength}
                            required={required}
                            disabled={disabled}
                            className={styles.input}
                            autoFocus={autofocus}
                            autoComplete={autocomplete}
                            onBlur={this.validateOnBlur}
                            {...this.props.extraHtmlAttr}
                        />
                        <div className={styles.iconContainer}>
                            {this.getDropDown()}
                            {icon && this.getIcon()}
                        </div>
                    </div>
                    {description && <i className={`${styles.description} ${descStatus}`}>{description}</i>}
                </div>
            );
        }
    }

    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const returnValue = this.props.type === 'number' ? this.getNumberValue(e.target.valueAsNumber) : e.target.value;
        !this.props.disabled &&
        this.props.onChange &&
        this.props.onChange(e, {value: returnValue, dataLabel: this.props.dataLabel});
        if (this.props.status){
            this.props.validate &&
            this.props.validate(
                {value: returnValue, dataLabel: this.props.dataLabel, required: this.props.required}
            );
        }
    }

    validateOnBlur = () => {
        this.props.validate &&
        this.props.validate({value: this.props.value, dataLabel: this.props.dataLabel, required: this.props.required});
    }

    getStatus = () => {
        const inputStatus = this.props.status && this.props.status;
        if (inputStatus){
            if (inputStatus === 'error'){
                return styles.error;
            } else if (inputStatus === 'success'){
                return styles.success;
            }
        }
    }

    getDescStatus = () => {
        const inputStatus = this.props.status && this.props.status;
        if (inputStatus){
            if (inputStatus === 'error'){
                return styles.descError;
            } else if (inputStatus === 'success'){
                return styles.descSuccess;
            }
        }
    }

    getNumberValue = (value: number) => {
        if (isNaN(value)){
            return 0;
        }
        if (this.props.minmax){
            let min;
            let max;
            if (this.props.minmax.length > 2) {
                throw new Error(`Prop 'minmax' has more values than expected!`);
            } else if (this.props.minmax.length === 0) {
                throw new Error(`Prop 'minmax' has no values!`);
            } else if (this.props.minmax.length === 1) {
                max = this.props.minmax && this.props.minmax[0];
            } else if (this.props.minmax.length === 2){
                min = this.props.minmax && this.props.minmax[0];
                max = this.props.minmax && this.props.minmax[1];
            }
            if (min && value < min){
                return min;
            } else if (max && value > max) {
                return max;
            } else {
                return value;
            }
        }
        return value;
    }

    generateId = () => {
        return Math.random().toString(36).substr(2, 10);
    }

    getIcon = () => {
        const iconFont = this.props.icon && this.getIconContent();
        const iconStatus = this.getIconStatus();
        const iconPadding = this.props.iconPosition === 'right' ? {paddingLeft: 10} : {paddingRight: 10};
        return (
            <div
                onClick={this.onIconClick}
                className={`${styles.icon} ${iconStatus} ${this.props.iconClass}`}
                style={{...iconPadding, ...this.props.iconStyle}}
            >
                {iconFont}
            </div>
        );
    }

    getIconStatus = () => {
        const inputStatus = this.props.status && this.props.status;
        if (inputStatus){
            if (inputStatus === 'error'){
                return styles.iconError;
            } else if (inputStatus === 'success'){
                return styles.iconSuccess;
            }
        }
    }

    getIconContent = () => {
        return this.props.icon ? this.props.icon.replace(/\s/g, '_') : '';
    }

    onIconClick = () => {
        this.input.focus();
    }

    getClipboardButton = () => {
        return (
            <ClipboardButton
                label={this.props.clipboardButton}
                value={this.props.value}
                className={styles.copyButton}
                onClick={this.onClipboardButtonClick}
            />
        );
    }

    onClipboardButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        this.props.onClipboardButtonClick &&
        this.props.onClipboardButtonClick(e, {value: this.props.value, dataLabel: this.props.dataLabel});
    }

    getDropDown = () => {
        const dropdowns = [];
        let i = 0;
        this.props.personalizationTags &&
        dropdowns.push(this.getDropDownIcon(hashtag, i, 'personalization')) && (i = i + 1);
        this.props.emoji && dropdowns.push(this.getDropDownIcon(emojiIcon, i, 'emoji'));
        return dropdowns;
    }

    getDropDownIcon = (icon: string, i: number, type: string) => {
        const display = this.state.activeDropDown === i ? {display: 'block'} : {display: 'none'};
        return (
            <div
                className="dropdown-icon"
                key={i}
                style={{position: 'relative', display: 'flex', alignItems: 'center'}}
                onClick={() => this.onDropDownIconClick(i)}
            >
                <img className={styles.dropDownIcon} src={icon}/>
                {this.renderDropDown(display, type)}
            </div>
        );
    }

    onDropDownIconClick = (i: number) => {
        this.setState({activeDropDown: i});
    }

    removeDropDown = () => {
        this.setState({activeDropDown: -1});
    }

    renderDropDown = (display: React.CSSProperties, type: string) => {
        return (
            <div style={display} className={styles.dropDown}>
                <div className={styles.dropDownArrow} />
                {type === 'personalization' && this.getPersDropDown()}
                {type === 'emoji' && this.getEmojis()}
            </div>
        );
    }

    getPersDropDown = () => {
        return (
            <>
                <div className={styles.dropDownLabel}>Personalization Tags</div>
                <div className={styles.dropDownContent}>
                    {this.getPersonalizationTags()}
                </div>
            </>
        );
    }

    getPersonalizationTags = () => {
        return this.props.personalizationTags && this.props.personalizationTags.map((tag, i) => {
            return (
                <div key={i} onClick={(e) => this.addTag(e, tag.value)} className={styles.tag}>
                    {tag.label}
                </div>
            );
        });
    }

    addTag = (e: any, value: string) => {
        const finalValue = this.props.value ? this.props.value + value : value;
        this.props.onChange &&
        this.props.onChange(e, {value: finalValue, dataLabel: this.props.dataLabel});
        if (this.props.status){
            this.props.validate &&
            this.props.validate(
                {value: finalValue, dataLabel: this.props.dataLabel, required: this.props.required}
            );
        }
        setTimeout(() => {
            this.props.closeOnTagAdd && this.removeDropDown();
        }, 1);
    }

    getEmojis = () => {
        return <EmojiPicker onChange={this.onEmojiChange} />;
    }

    onEmojiChange = (data: any) => {
        const emoji = String.fromCodePoint(parseInt('0x' + data.unicode, 16));
        const finalValue = this.props.value ? this.props.value + emoji :  emoji;
        this.props.onChange &&
        this.props.onChange({} as any, {value: finalValue, dataLabel: this.props.dataLabel});
        if (this.props.status){
            this.props.validate &&
            this.props.validate(
                {value: finalValue, dataLabel: this.props.dataLabel, required: this.props.required}
            );
        }
    }

}

export default Input;
