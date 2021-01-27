import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import { ITagsComponentProps } from '../components/Tags/model';
import {
    Tag,
    TagInput,
    Tags,
} from '../components/Tags/Tags';

import { IInputCallbackData } from '../components/_utils/types/commonTypes';
import GlobalStyle from '../components/Styled/GlobalStyles';

export default ({
    component: Tags,
    title: 'Example/Tags',
} as any) as Meta;

const Template: Story<ITagsComponentProps> = (args) => {
    return (
        <>
            <GlobalStyle />
            <Tags {...args} />
        </>
    );
};

export const Normal = Template.bind({});
Normal.args = {
    children: [...Array(9)].map((item, i) => {
        return (
            <Tag key={i} bgColor={i === 3 ? '#5ccdee' : ''}>
                {`Tag ${i + 1}`}
            </Tag>
        );
    }),
    onClickTag: (e: React.MouseEvent<HTMLElement>, data: IInputCallbackData) => console.log(e, data),
    onRemoveTag: (e, data) => console.log(e, data)
} as ITagsComponentProps;

export const ReadOnly = Template.bind({});
ReadOnly.args = {
    bgColor: 'grey',
    borderRadius: 3,
    children: [...Array(9)].map((item, i) => {
        return (
            <Tag key={i} bgColor={'#5ccdee'} borderRadius={3} p="4px 12px">
                {`Tag ${i + 1}`}
            </Tag>
        );
    }),
    onRemoveTag: undefined,
    p: 10
} as ITagsComponentProps;

export const WithInput = Template.bind({});
WithInput.args = {
    border: '1px solid #5ccdde',
    borderRadius: 3,
    children: (
        <>
            {
                [...Array(4)].map((item, i) => {
                    return (
                        <Tag key={i} >
                            {`Tag ${i + 1}`}
                        </Tag>
                    );
                })
            }
            <TagInput placeholder="Add a label" delimiters={[',', ' ', 'Enter', 13]} pl={10} />
        </>
    ),
    onAddTag: (data) => console.log(data),
    onClickTag: (e, data) => console.log(e, data),
    onRemoveTag: (e, data) => console.log(e, data),
    p: 5
} as ITagsComponentProps;
