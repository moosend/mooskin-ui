import * as React from 'react';

import styles from './Pagination.css';

export interface IPaginationProps {

    /** custom classes for Pagination */
    className?: string;

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

interface IPaginationButtonProps {
    active: boolean;
    disabled?: boolean;
    label: string; // could be an icon
    item: number;
    onClick: (item: number) => (e: React.MouseEvent<HTMLElement>) => void;
}

enum RendereableItemTypes {
    right,
    left,
    current,
    none
}

export default class Pagination extends React.Component<IPaginationProps, {}>{

    public static defaultProps: Partial<IPaginationProps> = {
        currentItem: 1,
        firstBtn: false,
        lastBtn: false,
        maxButtons: 7,
        nextBtn: false,
        prevBtn: false,
    };

    public render() {

        const {className, style} = this.props;

        return (
            <div
                className={`${styles.pagination} ${className}`}
                style={style}
            >
                {this.renderAllButtons()}
            </div>
        );
    }

    private onClick = (item: number) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            this.props.onClick(item);
        };
    }

    private renderAllButtons(){
        const {currentItem, items, firstBtn, lastBtn, nextBtn, prevBtn} = this.props;

        // render back and prev buttons as well as ellipsis as needed
        return currentItem && [
            firstBtn &&
            !this.isFirstItem() &&
            (
                <PaginationButton
                    key={'asd1'}
                    active={false}
                    label={'<<'}
                    item={1}
                    onClick={this.onClick}
                />
            ),
            prevBtn &&
            !this.isFirstItem() &&
            (
                <PaginationButton
                    key={'asd2'}
                    active={false}
                    label={'<'}
                    item={currentItem && currentItem - 1 || 1}
                    onClick={this.onClick}
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
                />
            ),
            nextBtn &&
            !this.isLastItem() &&
            (
                <PaginationButton
                    key={'asd3'}
                    active={false}
                    label={'>'}
                    item={currentItem && currentItem + 1 || items}
                    onClick={this.onClick}
                />
            ),
            lastBtn &&
            !this.isLastItem() &&
            (
                <PaginationButton
                    key={'asd4'}
                    active={false}
                    label={'>>'}
                    item={items}
                    onClick={this.onClick}
                />
            ),
        ];
    }

    private renderNormalButtons(){

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
                />
            );
        });
    }

    // returns a function here because we do not want to do the maxButtons calculations more than once
    private getItemType(item: number, leftButtonsCount: number, rightButtonsCount: number){

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

    private getLeftRightButtonCounts(): [number, number]{

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

    private needsLeftEllipsis(){
        const {currentItem} = this.props;
        const leftButtonCount = this.getLeftRightButtonCounts()[0];
        return currentItem && currentItem - leftButtonCount > 1;
    }

    private needsRightEllipsis(){
        const {currentItem, items} = this.props;
        const rightButtonCount = this.getLeftRightButtonCounts()[1];
        return currentItem && currentItem + rightButtonCount < items;
    }

    private isFirstItem(){
        return this.props.currentItem === 1;
    }

    private isLastItem(){
        return this.props.currentItem === this.props.items;
    }
}

const PaginationButton: React.StatelessComponent<IPaginationButtonProps> = (props) => {

    const activeClass = props.active ? styles.activeButton : '';
    const disabledClass = props.disabled ? styles.disabledButton : '';

    return (
        <div
            className={`${styles.paginationButton} ${activeClass} ${disabledClass}`}
            onClick={props.onClick(props.item)}
        >
            {props.label}
        </div>
    );
};
