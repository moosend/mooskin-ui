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

    /** callback that is called when a button is clicked */
    onClick: (item: number) => void;
}

export interface IPaginationButtonProps {
    active: boolean;
    disabled?: boolean;
    label: string; // could be an icon
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
            firstBtn &&
            (
                <PaginationButton
                    key={'asd1'}
                    active={false}
                    label={'<<'}
                    item={1}
                    onClick={this.onClick}
                    className="pagination-first-btn"
                />
            ),
            prevBtn &&
            (
                <PaginationButton
                    key={'asd2'}
                    active={false}
                    label={'<'}
                    item={currentItem && currentItem - 1 || 1}
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
                    disabled
                    className="pagination-ellipsis"
                />
            ),
            nextBtn &&
            (
                <PaginationButton
                    key={'asd3'}
                    active={false}
                    label={'>'}
                    item={currentItem && currentItem + 1 || items}
                    onClick={this.onClick}
                    className="pagination-next-btn"
                />
            ),
            lastBtn &&
            (
                <PaginationButton
                    key={'asd4'}
                    active={false}
                    label={'>>'}
                    item={items}
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
                    className="pagination-normal-btn"
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

    const activeClass = props.active ? styles.activeButton : '';
    const disabledClass = props.disabled ? styles.disabledButton : '';

    return (
        <div
            className={`${styles.paginationButton} ${activeClass} ${disabledClass} ${props.className || ''}`}
            onClick={props.onClick(props.item)}
        >
            {props.label}
        </div>
    );
};
