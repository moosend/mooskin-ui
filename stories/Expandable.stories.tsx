import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import {
    Expandable,
    ExpandableItem,
    ExpandableItemButton,
    ExpandableItemContainer,
    ExpandableItemContent,
    ExpandableItemText
} from '../components/Expandable/Expandable';
import { IExpandableComponentProps } from '../components/Expandable/model';

import GlobalStyle from '../components/Styled/GlobalStyles';

export default ({
    component: Expandable,
    title: 'Example/Expandable'
} as any) as Meta;

const Template: Story<IExpandableComponentProps> = (args) => {
    return (
        <>
            <GlobalStyle />
            <Expandable {...args} />
        </>
    );
};

export const Normal = Template.bind({});
Normal.args = {
    activeItem: 4,
    children: [...Array(9)].map((item, i) => {
        return (
            <ExpandableItem key={i} activeId={i}>
                <ExpandableItemContainer>
                    <ExpandableItemText>{`Title for item with index: ${i}`}</ExpandableItemText>
                    <ExpandableItemButton />
                </ExpandableItemContainer>
                <ExpandableItemContent p={15}>
                    <div>{`Content for item with index: ${i}`}</div>
                </ExpandableItemContent>
            </ExpandableItem>
        );
    }),
    onClickItem: (e: React.MouseEvent<HTMLElement>, value: number) => console.log(e, value)
} as IExpandableComponentProps;
