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
    onClick: (page: number) => void;
}

interface IPaginationButtonProps {
    active: boolean;
    label: string;
    item: number;
    onClick: (item: number) => (e: React.MouseEvent<HTMLElement>) => void;
}

export default class Pagination extends React.Component<IPaginationProps, {}>{

    public static defaultProps: Partial<IPaginationProps> = {
        currentItem: 1,
        firstBtn: false,
        lastBtn: false,
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
                {this.renderButtons()}
            </div>
        );
    }

    private onClick = (item: number) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            this.props.onClick(item);
        };
    }

    private renderButtons(){
        return [...Array(this.props.items).keys()].map((index) => {

            const item = index + 1;

            return (
                <PaginationButton
                    key={item}
                    active={item === this.props.currentItem}
                    label={item.toString()}
                    item={item}
                    onClick={this.onClick}
                />
            );
        });
    }
}

const PaginationButton: React.StatelessComponent<IPaginationButtonProps> = (props) => {

    const activeClass = props.active ? styles.activeButton : '';

    return (
        <div
            className={`${styles.paginationButton} ${activeClass}`}
            onClick={props.onClick(props.item)}
        >
            {props.label}
        </div>
    );
};
