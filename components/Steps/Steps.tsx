import * as React from 'react';

// Models
import { IDivBoxComponentProps } from '../Box/model';
import { IStepCommonComponentProps, IStepComponentProps, IStepsComponentProps } from './model';

// Components
import { Box } from '../Box/Box';

// Styled Components
import {
    StyledStep,
    StyledStepArrow,
    StyledStepContent,
    StyledStepHeader,
    StyledSteps
} from './styles';

/**
 * Steps
 */
export const Steps: React.FC<IStepsComponentProps> = (props) => {

    const getActiveItem = (activeId?: string | number) => {
        if (props.activeItem && Array.isArray(props.activeItem)){
            return (props.activeItem as any).includes(activeId);
        }
        return props.activeItem === activeId;
    };

    const assignChildren = (
        tabIndex: number,
        tabsLength: number,
        children?: Array<React.ReactElement<IStepCommonComponentProps>>,
        activeId?: string | number,
        active?: boolean
    ) => {

        let header: React.ReactElement<IStepCommonComponentProps> | undefined;
        let content: React.ReactElement<IStepCommonComponentProps> | undefined;

        const hasArrow = tabIndex < tabsLength - 1;

        React.Children.forEach(children, (child: any) => {
            if (React.isValidElement<IStepCommonComponentProps>(child) && child.type === StepHeader){
                header = (
                    React.cloneElement(child, {
                        active,
                        children: (
                            <>
                                {child.props.children}
                                {hasArrow && <StepArrow children="keyboard_arrow_right" />}
                            </>
                        ),
                        onClick: (e) => props.onClickStep && props.onClickStep(e, activeId)
                    } as IDivBoxComponentProps)
                );
            }

            if (React.isValidElement<IStepCommonComponentProps>(child) && child.type === StepContent){
                content = active ? React.cloneElement(child, {active} as IStepCommonComponentProps) : undefined;
            }
        });

        return {header, content};
    };

    const recurseChildren = (children: any): any => {
        if (!children){
            return null;
        }

        const headers: Array<React.ReactElement<IStepCommonComponentProps> | null> = [];
        const contents: Array<React.ReactElement<IStepCommonComponentProps> | null> = [];

        React.Children.forEach(children, (child, i) => {
            if (React.isValidElement<IStepComponentProps>(child) && child.type === Step){
                const active = child.props.active ? child.props.active : getActiveItem(child.props.activeId);
                const {content, header} = assignChildren(i, children.length, child.props.children, child.props.activeId, active);
                header && headers.push(React.cloneElement(header, {key: i}));
                content && contents.push(React.cloneElement(content, {key: i}));
            }
        });

        return (
            <>
                <Box d="flex">{headers}</Box>
                {contents}
            </>
        );
    };

    return <StyledSteps {...props} children={recurseChildren(props.children)} />;
};

Steps.defaultProps = {
    className: '',
    style: {}
};

Steps.displayName = 'Steps';

/**
 * Step
 */
export const Step: React.FC<IStepComponentProps> = (props) => {
    return <StyledStep {...props} />;
};

Step.defaultProps = {
    className: '',
    style: {}
};

Step.displayName = 'Step';

/**
 * StepHeader
 */
export const StepHeader: React.FC<IStepCommonComponentProps> = (props) => {
    return <StyledStepHeader {...props} />;
};

StepHeader.defaultProps = {
    className: '',
    style: {}
};

StepHeader.displayName = 'StepHeader';

/**
 * StepContent
 */
export const StepContent: React.FC<IStepCommonComponentProps> = (props) => {
    return <StyledStepContent {...props} />;
};

StepContent.defaultProps = {
    className: '',
    style: {}
};

StepContent.displayName = 'StepContent';

/**
 * StepArrow
 */
export const StepArrow: React.FC<IStepCommonComponentProps> = (props) => {
    return <StyledStepArrow {...props} />;
};

StepArrow.defaultProps = {
    className: '',
    style: {}
};

StepArrow.displayName = 'StepArrow';

export default Steps;
