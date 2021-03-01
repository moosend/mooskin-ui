import React from 'react';

import { Meta, Story } from '@storybook/react/dist/client/preview/types-6-0';

import { List, ListItem, ListItemBody, ListItemEnd, ListItemHead } from '../components/List/List';

import { Box } from '../components/Box/Box';
import { IBoxComponentProps } from '../components/Box/model';
import { Button } from '../components/Button/Button';
import GlobalStyle from '../components/Styled/GlobalStyles';

export default ({
	component: List,
	title: 'Example/List',
} as any) as Meta;

const Template: Story<IBoxComponentProps> = (args) => {
	return (
		<>
			<GlobalStyle />
			<List {...args} />
		</>
	);
};

export const Normal = Template.bind({});
Normal.args = {
	children: [
		<ListItem key="0">
			<ListItemHead>
				<img
					src="https://camo.githubusercontent.com/059ab65a22f6b1b2bb76765633cb4a4cd9eefd5b7745277fb016c081a6ab4be4/68747470733a2f2f63646e2e737461742d747261636b2e636f6d2f32303137303830332d323031372d303830332d323031372d3038303332303137303830332f63613561643932343964323834343335393535623735653161323261613135636d6f6f736b696e4c6f676f2e706e67"
					style={{ display: 'block' }}
					width={50}
				/>
			</ListItemHead>
			<ListItemBody>
				<Box fontWeight="600" fontSize={16}>
					Some Bold Text
				</Box>
				<Box fontSize={12}>
					Test test test test test, Test test test test test, Test test test test test, Test test test test test, Test test test test test,
					Test test test test test.
				</Box>
			</ListItemBody>
			<ListItemEnd>
				<Button>Button</Button>
			</ListItemEnd>
		</ListItem>,
		<ListItem key="1">
			<ListItemHead>
				<img
					src="https://camo.githubusercontent.com/059ab65a22f6b1b2bb76765633cb4a4cd9eefd5b7745277fb016c081a6ab4be4/68747470733a2f2f63646e2e737461742d747261636b2e636f6d2f32303137303830332d323031372d303830332d323031372d3038303332303137303830332f63613561643932343964323834343335393535623735653161323261613135636d6f6f736b696e4c6f676f2e706e67"
					style={{ display: 'block' }}
					width={50}
				/>
			</ListItemHead>
			<ListItemBody>
				<Box fontWeight="600" fontSize={16}>
					Some Bold Text
				</Box>
				<Box fontSize={12}>
					Test test test test test, Test test test test test, Test test test test test, Test test test test test, Test test test test test,
					Test test test test test.
				</Box>
			</ListItemBody>
			<ListItemEnd>
				<Button>Button</Button>
			</ListItemEnd>
		</ListItem>,
		<ListItem key="2">
			<ListItemHead>
				<img
					src="https://camo.githubusercontent.com/059ab65a22f6b1b2bb76765633cb4a4cd9eefd5b7745277fb016c081a6ab4be4/68747470733a2f2f63646e2e737461742d747261636b2e636f6d2f32303137303830332d323031372d303830332d323031372d3038303332303137303830332f63613561643932343964323834343335393535623735653161323261613135636d6f6f736b696e4c6f676f2e706e67"
					style={{ display: 'block' }}
					width={50}
				/>
			</ListItemHead>
			<ListItemBody>
				<Box fontWeight="600" fontSize={16}>
					Some Bold Text
				</Box>
				<Box fontSize={12}>
					Test test test test test, Test test test test test, Test test test test test, Test test test test test, Test test test test test,
					Test test test test test.
				</Box>
			</ListItemBody>
			<ListItemEnd>
				<Button>Button</Button>
			</ListItemEnd>
		</ListItem>,
	],
} as IBoxComponentProps;

export const WithCols = Template.bind({});
WithCols.args = {
	children: [
		<ListItem key="0">
			<ListItemHead>
				<img
					src="https://camo.githubusercontent.com/059ab65a22f6b1b2bb76765633cb4a4cd9eefd5b7745277fb016c081a6ab4be4/68747470733a2f2f63646e2e737461742d747261636b2e636f6d2f32303137303830332d323031372d303830332d323031372d3038303332303137303830332f63613561643932343964323834343335393535623735653161323261613135636d6f6f736b696e4c6f676f2e706e67"
					style={{ display: 'block' }}
					width={50}
				/>
			</ListItemHead>
			<ListItemBody>
				<Box fontWeight="600" fontSize={16}>
					Some Bold Text
				</Box>
				<Box fontSize={12}>
					Test test test test test, Test test test test test, Test test test test test, Test test test test test, Test test test test test,
					Test test test test test.
				</Box>
			</ListItemBody>
			<ListItemEnd>
				<Button>Button</Button>
			</ListItemEnd>
		</ListItem>,
		<ListItem key="1">
			<ListItemHead>
				<img
					src="https://camo.githubusercontent.com/059ab65a22f6b1b2bb76765633cb4a4cd9eefd5b7745277fb016c081a6ab4be4/68747470733a2f2f63646e2e737461742d747261636b2e636f6d2f32303137303830332d323031372d303830332d323031372d3038303332303137303830332f63613561643932343964323834343335393535623735653161323261613135636d6f6f736b696e4c6f676f2e706e67"
					style={{ display: 'block' }}
					width={50}
				/>
			</ListItemHead>
			<ListItemBody>
				<Box fontWeight="600" fontSize={16}>
					Some Bold Text
				</Box>
				<Box fontSize={12}>
					Test test test test test, Test test test test test, Test test test test test, Test test test test test, Test test test test test,
					Test test test test test.
				</Box>
			</ListItemBody>
			<ListItemEnd>
				<Button>Button</Button>
			</ListItemEnd>
		</ListItem>,
		<ListItem key="2">
			<ListItemHead>
				<img
					src="https://camo.githubusercontent.com/059ab65a22f6b1b2bb76765633cb4a4cd9eefd5b7745277fb016c081a6ab4be4/68747470733a2f2f63646e2e737461742d747261636b2e636f6d2f32303137303830332d323031372d303830332d323031372d3038303332303137303830332f63613561643932343964323834343335393535623735653161323261613135636d6f6f736b696e4c6f676f2e706e67"
					style={{ display: 'block' }}
					width={50}
				/>
			</ListItemHead>
			<ListItemBody>
				<Box fontWeight="600" fontSize={16}>
					Some Bold Text
				</Box>
				<Box fontSize={12}>
					Test test test test test, Test test test test test, Test test test test test, Test test test test test, Test test test test test,
					Test test test test test.
				</Box>
			</ListItemBody>
			<ListItemEnd>
				<Button>Button</Button>
			</ListItemEnd>
		</ListItem>,
		<ListItem key="3">
			<ListItemHead>
				<img
					src="https://camo.githubusercontent.com/059ab65a22f6b1b2bb76765633cb4a4cd9eefd5b7745277fb016c081a6ab4be4/68747470733a2f2f63646e2e737461742d747261636b2e636f6d2f32303137303830332d323031372d303830332d323031372d3038303332303137303830332f63613561643932343964323834343335393535623735653161323261613135636d6f6f736b696e4c6f676f2e706e67"
					style={{ display: 'block' }}
					width={50}
				/>
			</ListItemHead>
			<ListItemBody>
				<Box fontWeight="600" fontSize={16}>
					Some Bold Text
				</Box>
				<Box fontSize={12}>
					Test test test test test, Test test test test test, Test test test test test, Test test test test test, Test test test test test,
					Test test test test test.
				</Box>
			</ListItemBody>
			<ListItemEnd>
				<Button>Button</Button>
			</ListItemEnd>
		</ListItem>,
		<ListItem key="4">
			<ListItemHead>
				<img
					src="https://camo.githubusercontent.com/059ab65a22f6b1b2bb76765633cb4a4cd9eefd5b7745277fb016c081a6ab4be4/68747470733a2f2f63646e2e737461742d747261636b2e636f6d2f32303137303830332d323031372d303830332d323031372d3038303332303137303830332f63613561643932343964323834343335393535623735653161323261613135636d6f6f736b696e4c6f676f2e706e67"
					style={{ display: 'block' }}
					width={50}
				/>
			</ListItemHead>
			<ListItemBody>
				<Box fontWeight="600" fontSize={16}>
					Some Bold Text
				</Box>
				<Box fontSize={12}>
					Test test test test test, Test test test test test, Test test test test test, Test test test test test, Test test test test test,
					Test test test test test.
				</Box>
			</ListItemBody>
			<ListItemEnd>
				<Button>Button</Button>
			</ListItemEnd>
		</ListItem>,
	],
	cols: 3,
} as IBoxComponentProps;
