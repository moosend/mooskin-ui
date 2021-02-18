import * as React from 'react';
import {
    Expandable,
    ExpandableItem,
    ExpandableItemButton,
    ExpandableItemContainer,
    ExpandableItemContent,
    ExpandableItemText
} from './Expandable';

import { mount } from 'enzyme';

describe('Expandable', () => {
    test('renders correctly', () => {
        const func = jest.fn();

        const tree = mount(
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

        expect(tree).toMatchSnapshot();
    });

    test('shows expanded item 2 content', () => {
        const func = jest.fn();

        const tree = mount(
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

        expect(tree.find(ExpandableItemContent).length).toEqual(1);
        expect(tree.find(ExpandableItemContent).text()).toEqual('Content for item with index 2');
    });

    test('calls on click item function when clicking on the item container', () => {
        const func = jest.fn();

        const tree = mount(
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

        tree.find(ExpandableItemContainer).first().simulate('click');
        expect(func).toHaveBeenCalled();
    });
});
