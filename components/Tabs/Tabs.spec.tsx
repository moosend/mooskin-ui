import * as React from 'react';
import { Tab, TabContent, TabHeader, Tabs } from './Tabs';

import { mount, shallow } from 'enzyme';

describe('Pagination', () => {
    test('renders correctly', () => {
        const func = jest.fn();

        const tree = mount(
            <Tabs activeItem={3} onClickTab={func}>
                <Tab activeId={1}>
                    <TabHeader>{`Item: 1`}</TabHeader>
                    <TabContent>
                        <div>{`Content for item with index: 1`}</div>
                    </TabContent>
                </Tab>
                <Tab activeId={2}>
                    <TabHeader>{`Item: 2`}</TabHeader>
                    <TabContent>
                        <div>{`Content for item with index: 2`}</div>
                    </TabContent>
                </Tab>
                <Tab activeId={3}>
                    <TabHeader>{`Item: 3`}</TabHeader>
                    <TabContent>
                        <div>{`Content for item with index: 3`}</div>
                    </TabContent>
                </Tab>
                <Tab activeId={4}>
                    <TabHeader>{`Item: 4`}</TabHeader>
                    <TabContent>
                        <div>{`Content for item with index: 4`}</div>
                    </TabContent>
                </Tab>
                <Tab activeId={5}>
                    <TabHeader>{`Item: 5`}</TabHeader>
                    <TabContent>
                        <div>{`Content for item with index: 5`}</div>
                    </TabContent>
                </Tab>
                <Tab activeId={6}>
                    <TabHeader>{`Item: 6`}</TabHeader>
                    <TabContent>
                        <div>{`Content for item with index: 6`}</div>
                    </TabContent>
                </Tab>
            </Tabs>
        );

        expect(tree).toMatchSnapshot();
    });

    test('renders active tab content correctly', () => {
        const func = jest.fn();

        const tree = mount(
            <Tabs activeItem={3} onClickTab={func}>
                <Tab activeId={1}>
                    <TabHeader>{`Item: 1`}</TabHeader>
                    <TabContent>
                        <div>{`Content for item with index: 1`}</div>
                    </TabContent>
                </Tab>
                <Tab activeId={2}>
                    <TabHeader>{`Item: 2`}</TabHeader>
                    <TabContent>
                        <div>{`Content for item with index: 2`}</div>
                    </TabContent>
                </Tab>
                <Tab activeId={3}>
                    <TabHeader>{`Item: 3`}</TabHeader>
                    <TabContent>
                        <div>{`Content for item with index: 3`}</div>
                    </TabContent>
                </Tab>
                <Tab activeId={4}>
                    <TabHeader>{`Item: 4`}</TabHeader>
                    <TabContent>
                        <div>{`Content for item with index: 4`}</div>
                    </TabContent>
                </Tab>
                <Tab activeId={5}>
                    <TabHeader>{`Item: 5`}</TabHeader>
                    <TabContent>
                        <div>{`Content for item with index: 5`}</div>
                    </TabContent>
                </Tab>
                <Tab activeId={6}>
                    <TabHeader>{`Item: 6`}</TabHeader>
                    <TabContent>
                        <div>{`Content for item with index: 6`}</div>
                    </TabContent>
                </Tab>
            </Tabs>
        );

        expect(tree.find('StyledTabContent').length).toEqual(1);
        expect(tree.find('StyledTabContent').text()).toEqual('Content for item with index: 3');
    });

    test('renders active tab content correctly', () => {
        const func = jest.fn();

        const tree = mount(
            <Tabs activeItem={3} onClickTab={func}>
                <Tab activeId={1}>
                    <TabHeader>{`Item: 1`}</TabHeader>
                    <TabContent>
                        <div>{`Content for item with index: 1`}</div>
                    </TabContent>
                </Tab>
                <Tab activeId={2}>
                    <TabHeader>{`Item: 2`}</TabHeader>
                    <TabContent>
                        <div>{`Content for item with index: 2`}</div>
                    </TabContent>
                </Tab>
                <Tab activeId={3}>
                    <TabHeader>{`Item: 3`}</TabHeader>
                    <TabContent>
                        <div>{`Content for item with index: 3`}</div>
                    </TabContent>
                </Tab>
            </Tabs>
        );

        tree.find(TabHeader).first().simulate('click');
        expect(func).toHaveBeenCalled();
    });
});
