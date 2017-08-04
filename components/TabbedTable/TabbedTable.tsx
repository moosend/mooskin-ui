import * as React from 'react';

import styles from './TabbedTable.css';

export interface ITabbedTableProps {

    /** override id */
    id?: string;

    /** container class */
    className?: string;

    /** override styles */
    style?: React.CSSProperties;

    /** children here can only be Tab elements */
    children?: Array<React.ReactElement<ITabProps>> | React.ReactElement<ITabProps>;
}

export interface ITabProps {

    /** container class */
    className?: string;

    /** title */
    title: string;

    /** if active */
    active?: boolean;

    /** icon name, for material icons only */
    materialIcon?: string;

    /** class name representing an icon font, for example a font awesome class */
    iconClass?: string;

    /** override styles */
    style?: React.CSSProperties;

}

export interface ITabbedTableState {
    activeTable?: number;
}

export default class TabbedTable extends React.Component<ITabbedTableProps, ITabbedTableState>{

    public static defaultProps = {
        activeTab: 0,
        className: '',
        style: {}
    };

    // public static Table: React.StatelessComponent<ITabProps>;

    constructor(props: any){
        super(props);

        this.state = {
            activeTable: this.getActiveTable()
        };
    }

    public render(){

        const {headers, table} = this.makeContent();

        return(
            <div className={`tabbed-table-component`}>
                <div className={styles.heading}>
                    {headers}
                </div>
                <div className={styles.tables}>
                    {table}
                </div>
            </div>
        );
    }

    private makeContent(){

        const headers: Array<React.ReactElement<IHeaderProps>> = [];
        const bodies: Array<React.ReactElement<ITabProps>> = [];

        React.Children.forEach(this.props.children, (child, index) => {
            if (React.isValidElement<ITabProps>(child)){

                headers.push(
                    <Header
                        key={index}
                        title={child.props.title}
                        active={this.state.activeTab === index}
                        iconClass={child.props.iconClass}
                        materialIcon={child.props.materialIcon}
                        onClick={this.onClickHeader(index)}
                    />
                );

                const extraProps: Partial<ITabProps & {key: number}> = {
                    active: this.state.activeTab === index,
                    key: index
                };

                bodies.push(React.cloneElement(child, extraProps));

            }else{
                throw new Error('<TabbedContent> element only accepts Tab elements as children');
            }
        });

        return {headers, bodies};
    }

    private getActiveTable(): number {
        let activeTable = 0;
        const childrenArray = React.Children.toArray(this.props.children);

        for (const [index, value] of childrenArray.entries()){
            if (React.isValidElement<ITabProps>(value) && value.props.active){
                activeTable = index;
            }
        }

        return activeTable;
    }
}
