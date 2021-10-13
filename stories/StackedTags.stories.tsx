import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import { ITagsComponentProps } from '../components/Tags/model';
import { Tag, Tags } from '../components/Tags/Tags';

// import { IInputCallbackData } from '../components/_utils/types/commonTypes';
import { ActionsDropdown, ActionsDropdownItem } from '../components/ActionsDropdown/ActionsDropdown';
import { Box } from '../components/Box/Box';
import GlobalStyle from '../components/Styled/GlobalStyles';

export default ({
	component: Tags,
	title: 'Example/StackedTabs'
} as any) as Meta;

const Template: Story<ITagsComponentProps> = (args) => {
	const [show, setShow] = React.useState(false);
	return (
		<>
			<GlobalStyle />
			<Tags {...args}>
				<Tag>Tag 1</Tag>
				<Tag>Tag 2</Tag>
				<Tag>Tag 3</Tag>
				<Tag>Tag 4</Tag>
				<Tag>Tag 5</Tag>
				<Box position="relative">
					<Tag removeIcon={false} onClick={() => setShow(!show)}>
						3
					</Tag>
					{show && (
						<ActionsDropdown position="absolute" top={25} right={-11}>
							<ActionsDropdownItem>Tag 6</ActionsDropdownItem>
							<ActionsDropdownItem>Tag 6</ActionsDropdownItem>
							<ActionsDropdownItem>Tag 6</ActionsDropdownItem>
						</ActionsDropdown>
					)}
				</Box>
			</Tags>
		</>
	);
};

export const Normal = Template.bind({});
Normal.args = {} as ITagsComponentProps;
