import * as React from 'react';

import styles from './Pagination.css';

export interface IPaginationProps {

    /** custom classes for Pagination */
    className?: string;

    /** custom id for Pagination */
    id?: string;

    /** custom styles for Pagination top element */
    style?: React.CSSProperties;

    /** total number of items */
    items: number;

    /** the number of the current page */
    currentItem?: number;

    /** the max number of buttons to be displayed */
    maxButtons?: number;

    /** boolean to specify whether to show the next item button */
    nextBtn?: boolean;

    /** boolean to specify whether to show the previous item button */
    prevBtn?: boolean;

    /** boolean to specify whether to show the very last item button */
    lastBtn?: boolean;

    /** boolean to specify whether to show the very first item button */
    firstBtn?: boolean;

    /** inverse stying for pagination */
    inverseStyle?: boolean;

    /** callback that is called when a button is clicked */
    onClick: (item: number) => void;
}

export interface IPaginationButtonProps {
    active: boolean;
    disabled?: boolean;
    label: string; // could be an icon
    inverseStyle?: boolean;
    item: number;
    className?: string;
    onClick: (item: number) => (e: React.MouseEvent<HTMLElement>) => void;
}

export enum RendereableItemTypes {
    right,
    left,
    current,
    none
}

export default class Pagination extends React.Component<IPaginationProps, {}>{

    static defaultProps: Partial<IPaginationProps> = {
        currentItem: 1,
        firstBtn: false,
        lastBtn: false,
        maxButtons: 5,
        nextBtn: false,
        prevBtn: false,
    };

    render() {

        const {className, style, id} = this.props;

        return (
            <div
                className={`${styles.pagination} ${className}`}
                style={style}
                id={id}
            >
                <div className={styles.paginationInner}>
                    {this.renderAllButtons()}
                </div>
            </div>
        );
    }

    onClick = (item: number) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            this.props.onClick(item);
        };
    }

    renderAllButtons(){
        const {currentItem, items, firstBtn, lastBtn, nextBtn, prevBtn} = this.props;

        // render back and prev buttons as well as ellipsis as needed
        return currentItem && [
            firstBtn && currentItem > 2 &&
            (
                <PaginationButton
                    key={'asd1'}
                    active={false}
                    label={this.props.inverseStyle ? '<< First' : '<<'}
                    item={1}
                    inverseStyle={this.props.inverseStyle}
                    onClick={this.onClick}
                    className="pagination-first-btn"
                />
            ),
            prevBtn && currentItem > 1 &&
            (
                <PaginationButton
                    key={'asd2'}
                    active={false}
                    label={this.props.inverseStyle ? '< Prev' : '<'}
                    item={currentItem && currentItem - 1 || 1}
                    inverseStyle={this.props.inverseStyle}
                    onClick={this.onClick}
                    className="pagination-prev-btn"
                />
            ),
            this.needsLeftEllipsis() &&
            (
                <PaginationButton
                    key={'asdd2'}
                    active={false}
                    label={'...'}
                    item={currentItem}
                    onClick={(this.onClick)}
                    inverseStyle={this.props.inverseStyle}
                    disabled
                    className="pagination-ellipsis"
                />
            ),
            this.renderNormalButtons(),
            this.needsRightEllipsis() &&
            (
                <PaginationButton
                    key={'asdd3'}
                    active={false}
                    label={'...'}
                    item={currentItem}
                    onClick={(this.onClick)}
                    inverseStyle={this.props.inverseStyle}
                    disabled
                    className="pagination-ellipsis"
                />
            ),
            nextBtn && currentItem <= items - 1 &&
            (
                <PaginationButton
                    key={'asd3'}
                    active={false}
                    label={this.props.inverseStyle ? 'Next >' : '>'}
                    item={currentItem && currentItem + 1 || items}
                    inverseStyle={this.props.inverseStyle}
                    onClick={this.onClick}
                    className="pagination-next-btn"
                />
            ),
            lastBtn && currentItem < items - 1 &&
            (
                <PaginationButton
                    key={'asd4'}
                    active={false}
                    label={this.props.inverseStyle ? 'Last >>' : '>>'}
                    item={items}
                    inverseStyle={this.props.inverseStyle}
                    onClick={this.onClick}
                    className="pagination-last-btn"
                />
            ),
        ];
    }

    renderNormalButtons(){

        const buttonCounts: [number, number] = this.getLeftRightButtonCounts();

        return [...Array(this.props.items).keys()].map((index) => {

            const item = index + 1;

            const itemType = this.getItemType(item, buttonCounts[0], buttonCounts[1]);

            return itemType !== RendereableItemTypes.none && (
                <PaginationButton
                    key={item}
                    active={itemType === RendereableItemTypes.current}
                    label={item.toString()}
                    item={item}
                    onClick={this.onClick}
                    inverseStyle={this.props.inverseStyle}
                    className={`pagination-normal-btn ${styles.itemButton}`}
                />
            );
        });
    }

    getItemType(item: number, leftButtonsCount: number, rightButtonsCount: number){

        const {currentItem} = this.props;

        let itemType: RendereableItemTypes = RendereableItemTypes.none;

        // using some minor math with button counts derived from maxButtons check if item should be rendered
        if (currentItem && item < currentItem && item + leftButtonsCount >= currentItem){
            itemType = RendereableItemTypes.left;
        }else if (currentItem && item > currentItem && item - rightButtonsCount <= currentItem){
            itemType = RendereableItemTypes.right;
        }else if (currentItem && item === currentItem){
            itemType = RendereableItemTypes.current;
        }

        return itemType;
    }

    getLeftRightButtonCounts(): [number, number]{

        const {maxButtons} = this.props;

        let leftButtonsCount: number = 0;
        let rightButtonsCount: number = 0;

        // determine button counts to the left and right of the active item, based on if the number is even or odd
        if (maxButtons){
            leftButtonsCount = maxButtons % 2 !== 0 ? (maxButtons - 1) / 2 : maxButtons / 2;
            rightButtonsCount = maxButtons % 2 !== 0 ? (maxButtons - 1) / 2 : leftButtonsCount - 1;
        }

        return [leftButtonsCount, rightButtonsCount];
    }

    needsLeftEllipsis(){
        const {currentItem} = this.props;
        const leftButtonCount = this.getLeftRightButtonCounts()[0];
        return currentItem && currentItem - leftButtonCount > 1;
    }

    needsRightEllipsis(){
        const {currentItem, items} = this.props;
        const rightButtonCount = this.getLeftRightButtonCounts()[1];
        return currentItem && currentItem + rightButtonCount < items;
    }
}

export const PaginationButton: React.StatelessComponent<IPaginationButtonProps> = (props) => {

    const activeClass = props.inverseStyle ? styles.inverseActive : styles.activeButton;
    const activeStyle = props.active ? activeClass : '';
    const disabledClass = props.disabled ? styles.disabledButton : '';
    const inverseStyle = props.inverseStyle ? styles.inverseButton : '';

    return (
        <div
            className={`${styles.paginationButton} ${activeStyle} ${disabledClass} ${inverseStyle} ${props.className}`}
            onClick={props.onClick(props.item)}
        >
            {props.label}
        </div>
    );
};

PaginationButton.defaultProps = {
    className: ''
};
