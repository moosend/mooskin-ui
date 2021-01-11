import * as React from 'react';

// Helpers
import {getBoxProps} from '../_utils/helper';

// Models
import { IInputCallbackData } from '../_utils/types/commonTypes';
import { IBoxComponentProps } from '../Box/model';
import { IDescriptionComponentProps } from '../Description/model';
import { ILabelComponentProps } from '../Label/model';
import { ISelectComponentProps, ISelectFilterComponentProps, ISelectOptionComponentProps } from './model';

// Components
import Description from '../Description/Description';
import Label from '../Label/Label';

// Styled Components
import {
    StyledSelect,
    StyledSelectContainer,
    StyledSelectFilter,
    StyledSelectIcon,
    StyledSelectLoader,
    StyledSelectOption,
    StyledSelectOptionList,
    StyledSelectOverlay,
    StyledSelectPlaceholder
} from './styles';

/**
 * Select
 */
export const Select: React.FC<ISelectComponentProps> = (props) => {

    const [showList, setShowList] = React.useState(props.showList);
    const [filterValue, setFilterValue] = React.useState('');

    const batchClickHandler = (
        e: React.MouseEvent<HTMLElement>,
        value: string,
        callback?: (e: React.MouseEvent<HTMLElement>, value: string) => void,
    ) => {

        let returnValue;
        const selectedAsArray = Array.isArray(props.selected);
        const selected = props.selected as any;

        if (selectedAsArray){
            if (!value) {
                returnValue = [];
            } else if (selected.includes(value)){
                returnValue = selected.filter((item: any) => item !== value);
            } else {
                returnValue = [...selected];
                returnValue.push(value);
            }
        } else {
            returnValue = value;
        }

        !props.disabled &&
        props.onChange && props.onChange(e, {dataLabel: props.dataLabel, value: returnValue});
        callback && callback(e, value);
        !selectedAsArray && toggleList();
    };

    const batchFilterHandler = (
        e: React.ChangeEvent<HTMLInputElement>,
        callback?: (e: React.ChangeEvent<HTMLInputElement>, data: IInputCallbackData) => void
    ) => {
        setFilterValue(e.target.value);
        callback && callback(e, {dataLabel: props.dataLabel, value: e.target.value});
    };

    const toggleList = () => {
        setShowList(!showList);
        setFilterValue('');
    };

    React.useEffect(() => {
        setShowList(props.showList);
    }, [props.showList]);

    const recurseChildren = (children: any): any => {
        if (!children){
            return null;
        }

        return React.Children.map(children, (child, i) => {
            if (React.isValidElement<ISelectOptionComponentProps>(child) && child.type === SelectOption){

                const active = Array.isArray(props.selected) && props.selected.includes(child.props.value);

                const option = React.cloneElement(child, {
                    children: (
                        <>
                            {recurseChildren(child.props.children)}
                            {active && <SelectIcon children="check" p="0" fontSize={15} />}
                        </>
                    ),
                    key: i,
                    onClick: !child.props.disabled ? (e, value) => batchClickHandler(e, value, child.props.onClick) : undefined,
                    value: child.props.value
                } as ISelectOptionComponentProps);

                if (filterValue){
                    if (child.props.searchLabel){
                        return child.props.searchLabel.toLowerCase().includes(filterValue.toLowerCase()) ? option : null;
                    }
                    if (typeof child.props.children === 'string'){
                        return child.props.children.toLowerCase().includes(filterValue.toLowerCase()) ? option : null;
                    }
                }
                return option;
            }

            if (React.isValidElement<ISelectFilterComponentProps>(child) && child.type === SelectFilter){
                if (showList){
                    return React.cloneElement(child, {
                        key: i,
                        onChange: (e) => batchFilterHandler(e, child.props.onChange),
                        onClick: (e: React.MouseEvent<HTMLElement>) => e.stopPropagation()
                    } as ISelectFilterComponentProps);
                }
                return null;
            }

            if (React.isValidElement<IBoxComponentProps>(child) && child.type === SelectOptionList){
                if (showList){
                    return React.cloneElement(child, {
                        children: recurseChildren(child.props.children),
                        key: i
                    } as IBoxComponentProps);
                }
                return null;
            }

            if (React.isValidElement<IBoxComponentProps>(child) && child.type === SelectPlaceholder){
                if (!showList){
                    return React.cloneElement(child, {
                        key: i,
                    } as IBoxComponentProps);
                }
                return null;
            }

            if (React.isValidElement<IBoxComponentProps>(child) && child.type === SelectContainer){
                return React.cloneElement(child, {
                    children: recurseChildren(child.props.children),
                    key: i,
                    onClick: toggleList
                } as IBoxComponentProps);
            }

            if (React.isValidElement<IBoxComponentProps>(child) && child.type === SelectIcon){
                return React.cloneElement(child, {
                    children: !showList ? 'keyboard_arrow_down' : 'keyboard_arrow_up',
                    key: i,
                    onClick: toggleList
                } as IBoxComponentProps);
            }

            if (React.isValidElement<IBoxComponentProps>(child) && child.type === SelectOverlay){
                if (showList){
                    return React.cloneElement(child, {
                        key: i,
                        onClick: toggleList
                    } as IBoxComponentProps);
                }
            }

            if (React.isValidElement(child) && (child.props as any).children){
                return React.cloneElement(child, {children: recurseChildren((child.props as any).children)} as any);
            }

            return child;
        });
    };

    return <StyledSelect {...getBoxProps(props)} children={recurseChildren(props.children)} />;
};

Select.defaultProps = {
    className: '',
    style: {}
};

Select.displayName = 'Checkbox';

/**
 * SelectContainer
 */
export const SelectContainer: React.FC<IBoxComponentProps> = (props) => {
    return <StyledSelectContainer {...props} />;
};

SelectContainer.defaultProps = {
    className: '',
    style: {}
};

SelectContainer.displayName = 'SelectContainer';

/**
 * SelectPlaceholder
 */
export const SelectPlaceholder: React.FC<IBoxComponentProps> = (props) => {
    return <StyledSelectPlaceholder {...props} />;
};

SelectPlaceholder.defaultProps = {
    className: '',
    style: {}
};

SelectPlaceholder.displayName = 'SelectPlaceholder';

/**
 * SelectOptionList
 */
export const SelectOptionList: React.FC<IBoxComponentProps> = (props) => {
    return <StyledSelectOptionList {...props} />;
};

SelectOptionList.defaultProps = {
    className: '',
    style: {}
};

SelectOptionList.displayName = 'SelectOptionList';

/**
 * SelectOption
 */
export const SelectOption: React.FC<ISelectOptionComponentProps> = (props) => {
    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        props.onClick && props.onClick(e, props.value);
    };
    return <StyledSelectOption {...props} onClick={onClick} />;
};

SelectOption.defaultProps = {
    className: '',
    style: {}
};

SelectOption.displayName = 'SelectOption';

/**
 * SelectFilter
 */
export const SelectFilter: React.FC<ISelectFilterComponentProps> = (props) => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange && props.onChange(e);
    };
    return <StyledSelectFilter {...props} boxAs="input" autoFocus onChange={onChange}/>;
};

SelectFilter.defaultProps = {
    className: '',
    style: {}
};

SelectFilter.displayName = 'SelectFilter';

/**
 * SelectLoader
 */
export const SelectLoader: React.FC<IBoxComponentProps> = (props) => {
    return <StyledSelectLoader {...props} />;
};

SelectLoader.defaultProps = {
    className: '',
    style: {}
};

SelectLoader.displayName = 'SelectLoader';

/**
 * SelectLabel
 */
export const SelectLabel: React.FC<ILabelComponentProps> = (props) => {
    return <Label disabled={props.disabled} {...props} />;
};

SelectLabel.defaultProps = {
    className: '',
    style: {}
};

SelectLabel.displayName = 'SelectLabel';

/**
 * SelectDescription
 */
export const SelectDescription: React.FC<IDescriptionComponentProps> = (props) => {
    return <Description {...props} />;
};

SelectDescription.defaultProps = {
    className: '',
    style: {}
};

SelectDescription.displayName = 'SelectDescription';

/**
 * SelectIcon
 */
export const SelectIcon: React.FC<IBoxComponentProps> = (props) => {
    return <StyledSelectIcon {...props} />;
};

SelectIcon.defaultProps = {
    className: '',
    style: {}
};

SelectIcon.displayName = 'SelectIcon';

/**
 * SelectOverlay
 */
export const SelectOverlay: React.FC<IBoxComponentProps> = (props) => {
    return <StyledSelectOverlay {...props} />;
};

SelectOverlay.defaultProps = {
    className: '',
    style: {}
};

SelectOverlay.displayName = 'SelectOverlay';

export default Select;
