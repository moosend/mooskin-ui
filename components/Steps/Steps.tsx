import * as React from 'react';

import styles from './Steps.css';

export interface IStepsProps{
    /** steps class */
    className?: string;

    /** children here can only be Step elements */
    children?: Array<React.ReactElement<IStepProps>> | React.ReactElement<IStepProps>;
}

export interface IStepProps{
    /** Step class */
    className?: string;

    /** id of the step */
    id: string;

    /** step title */
    title: string;

    /** active or not */
    active?: boolean;

    /** children here can be any elements */
    children?: any;

    /** callback when clicking on a step */
    onClick?: (id: string) => void;
}

export interface IStepBodyProps{
    /** StepBody content */
    content: any;

    /** active or not */
    active?: boolean;
}

export default class Steps extends React.Component<IStepsProps, {}>{

    static defaultProps: Partial<IStepsProps> = {
        className: ''
    };

    static displayName = 'StatsBox';

    static Step: React.StatelessComponent<IStepProps>;

    render(){

        const {className} = this.props;

        return (
            <div className={`${styles.steps} ${className}`}>
                <div className={styles.stepsContainer}>{this.props.children}</div>
                <div>{this.renderBodies()}</div>
            </div>
        );
    }

    renderBodies = () =>
    {
        const steps: Array<React.ReactElement<IStepProps>> = [];

        React.Children.forEach(this.props.children, (child, index) => {
            if (React.isValidElement<IStepProps>(child)){
                if (child.props.active){
                    steps.push(<StepBody content={child.props.children} active={child.props.active}/>);
                }
            }else{
                throw new Error('<Steps> element only accepts Step elements as children');
            }
        });

        return steps;
    }
}

export const Step: React.StatelessComponent<IStepProps> = (props) => {

    const active = props.active ? styles.activeStep : '';

    const onClick = (e: React.MouseEvent<HTMLElement>) => {
        props.onClick && props.onClick(props.id);
    };

    return (
        <div id={props.id} className={`${styles.step} ${props.className} ${active}`} onClick={onClick}>
            <a href="javascript:void(0)">{props.title}</a>
        </div>
    );
};

Step.defaultProps = {
    className: ''
};

Step.displayName = 'Step';

export const StepBody: React.StatelessComponent<IStepBodyProps> = (props) => {
    return (
        <div className={styles.stepBody}>
            {props.content}
        </div>
    );
};

StepBody.displayName = 'StepBody';
