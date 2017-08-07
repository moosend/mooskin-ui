import * as React from 'react';

import styles from './TabbedTable.css';

// import {Table} from '../index';
// import ITableProps from '../Table';

export interface ITabbedTableProps {

    /** override id */
    id?: string;

    /** container class */
    className?: string;

    /** override styles */
    style?: React.CSSProperties;

    /** children here can only be Tab elements */
    children?: Array<React.ReactElement<ITabTableProps>> | React.ReactElement<ITabTableProps>;
}

export interface ITabTableProps{

    /** override Table id */
    id?: string;

    /** title */
    title: string;

    /** further information to be displayed on the header */
    info?: string;

    /** value displayed on the tab header */
    headerValue?: number;

    /** image displayed within the tab header */
    image?: string;

    /** Table class */
    className?: string;

    /** override Table styles */
    style?: React.CSSProperties;

    /** wether this table is active or not */
    active?: boolean;

    /** onClick callback function when a tab header is clicked */
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface IHeaderProps {
    value?: number;
    info?: string;
    href?: string;
    image?: string;
    title: string;
    active: boolean;
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface ITabbedTableState {
    activeTable?: number;
}

export default class TabbedTable extends React.Component<ITabbedTableProps, ITabbedTableState>{

    public static defaultProps = {
        className: '',
        style: {}
    };

    public static TabTable: React.StatelessComponent<ITabbedTableProps>;

    constructor(props: any){
        super(props);

        this.state = {
            activeTable: this.getActiveTable()
        };
    }

    public render(){

        const {headers, tables} = this.makeContent();

        return(
            <div className={`tabbed-table-component ${styles.container}`}>
                <div className={styles.heading}>
                    {headers}
                </div>
                <div className={styles.tables}>
                    {tables}
                </div>
            </div>
        );
    }

    private makeContent(){

        const headers: Array<React.ReactElement<IHeaderProps>> = [];
        const tables: Array<React.ReactElement<ITabTableProps>> = [];

        React.Children.forEach(this.props.children, (child, index) => {
            if (React.isValidElement<ITabTableProps>(child)){

                headers.push(
                    <Header
                        key={index}
                        value={child.props.headerValue}
                        title={child.props.title}
                        info={child.props.info}
                        image={child.props.image}
                        active={this.state.activeTable === index}
                        onClick={this.onClickHeader(index, child)}
                    />
                );

                const extraProps: Partial<ITabTableProps & {key: number}> = {
                    active: this.state.activeTable === index,
                    key: index
                };

                tables.push(React.cloneElement(child, extraProps));

            }else{
                throw new Error('<TabbedTable> element only accepts <TabTable> elements as children');
            }
        });

        return {headers, tables};
    }

    private onClickHeader = (tabIndex: number, table: React.ReactElement<ITabTableProps>) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            this.setState({activeTable: tabIndex});
            table.props.onClick && table.props.onClick(e);
        };
    }

    private getActiveTable(): number {
        let activeTable = 0;
        const childrenArray = React.Children.toArray(this.props.children);

        for (const [index, value] of childrenArray.entries()){
            if (React.isValidElement<ITabTableProps>(value) && value.props.active){
                activeTable = index;
            }
        }

        return activeTable;
    }
}

export const TabTable: React.StatelessComponent<ITabTableProps> = (props) => {

    const displayClass = !props.active ? styles.invisible : styles.visible;

    return (
            <div className={`tab-table-component`}>
                <table {...this.props} className={`${styles.table} ${props.className} ${displayClass}`}>
                    {props.children}
                </table>
            </div>
        );
};

export const Header: React.StatelessComponent<IHeaderProps> = (props) => {

    const activeTab = props.active ? styles.activeHeader : styles.inactiveHeader;

    return (
        <div className={`tab-header ${styles.header} ${styles.anchor} ${activeTab}`} onClick={props.onClick}>
            <span className={styles.title}>{props.title}</span>
            <img src={props.image} className={styles.image}/>
            <span className={styles.value}>{props.value}</span>
            <span className={styles.info}>{props.info}</span>
        </div>
    );
};
