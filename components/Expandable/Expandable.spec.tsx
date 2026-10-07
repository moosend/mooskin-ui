import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import {
	Expandable,
	ExpandableItem,
	ExpandableItemButton,
	ExpandableItemContainer,
	ExpandableItemContent,
	ExpandableItemText
} from './Expandable';

describe('Expandable', () => {
	test('renders correctly', () => {
		const func = jest.fn();

		const { container } = render(
			<Expandable onClickItem={func}>
				<ExpandableItem activeId={1}>
					<ExpandableItemContainer>
						<ExpandableItemText>{`Title for item with index 1`}</ExpandableItemText>
						<ExpandableItemButton />
					</ExpandableItemContainer>
					<ExpandableItemContent p={15}>
						<div>{`Content for item with index 1`}</div>
					</ExpandableItemContent>
				</ExpandableItem>
				<ExpandableItem activeId={2}>
					<ExpandableItemContainer>
						<ExpandableItemText>{`Title for item with index 2`}</ExpandableItemText>
						<ExpandableItemButton />
					</ExpandableItemContainer>
					<ExpandableItemContent p={15}>
						<div>{`Content for item with index 2`}</div>
					</ExpandableItemContent>
				</ExpandableItem>
				<ExpandableItem activeId={3}>
					<ExpandableItemContainer>
						<ExpandableItemText>{`Title for item with index 3`}</ExpandableItemText>
						<ExpandableItemButton />
					</ExpandableItemContainer>
					<ExpandableItemContent p={15}>
						<div>{`Content for item with index 3`}</div>
					</ExpandableItemContent>
				</ExpandableItem>
				<ExpandableItem activeId={4}>
					<ExpandableItemContainer>
						<ExpandableItemText>{`Title for item with index 4`}</ExpandableItemText>
						<ExpandableItemButton />
					</ExpandableItemContainer>
					<ExpandableItemContent p={15}>
						<div>{`Content for item with index 4`}</div>
					</ExpandableItemContent>
				</ExpandableItem>
			</Expandable>
		);

		expect(container.firstChild).toMatchSnapshot();
	});

	test('shows expanded item 2 content', () => {
		const func = jest.fn();

		render(
			<Expandable onClickItem={func} activeItem={2}>
				<ExpandableItem activeId={1}>
					<ExpandableItemContainer>
						<ExpandableItemText>{`Title for item with index 1`}</ExpandableItemText>
						<ExpandableItemButton />
					</ExpandableItemContainer>
					<ExpandableItemContent p={15}>{`Content for item with index 1`}</ExpandableItemContent>
				</ExpandableItem>
				<ExpandableItem activeId={2}>
					<ExpandableItemContainer>
						<ExpandableItemText>{`Title for item with index 2`}</ExpandableItemText>
						<ExpandableItemButton />
					</ExpandableItemContainer>
					<ExpandableItemContent p={15}>{`Content for item with index 2`}</ExpandableItemContent>
				</ExpandableItem>
			</Expandable>
		);

		expect(screen.getByText('Content for item with index 2')).toBeInTheDocument();
		expect(screen.queryByText('Content for item with index 1')).not.toBeInTheDocument();
	});

	test('calls on click item function when clicking on the item container', () => {
		const func = jest.fn();

		render(
			<Expandable onClickItem={func} activeItem={2}>
				<ExpandableItem activeId={1}>
					<ExpandableItemContainer>
						<ExpandableItemText>{`Title for item with index 1`}</ExpandableItemText>
						<ExpandableItemButton />
					</ExpandableItemContainer>
					<ExpandableItemContent p={15}>{`Content for item with index 1`}</ExpandableItemContent>
				</ExpandableItem>
				<ExpandableItem activeId={2}>
					<ExpandableItemContainer>
						<ExpandableItemText>{`Title for item with index 2`}</ExpandableItemText>
						<ExpandableItemButton />
					</ExpandableItemContainer>
					<ExpandableItemContent p={15}>{`Content for item with index 2`}</ExpandableItemContent>
				</ExpandableItem>
			</Expandable>
		);

		fireEvent.click(screen.getByText('Title for item with index 1'));
		expect(func).toHaveBeenCalled();
	});
});
