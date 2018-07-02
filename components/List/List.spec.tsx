import * as React from 'react';
import List, {ExpandedSection, ItemContent, ListItem} from './List';

import { mount, shallow } from 'enzyme';

describe('Button', () => {

    test('renders List correctly', () => {
        const func = jest.fn();

        const tree = shallow(
            <List
                className="myClass"
                style={{color: 'blue'}}
                id={'button1'}
            />
        );
        expect(tree).toMatchSnapshot();
    });

    test('renders ListItem correctly', () => {
        const func = jest.fn();

        const tree = shallow(
            <ListItem
                description="desc"
                title="title"
                className="myClass"
                style={{color: 'blue'}}
                image="imageUrl"
            >
                <ItemContent>
                    test
                </ItemContent>
            </ListItem>
        );
        expect(tree).toMatchSnapshot();
    });

    test('renders with multiple children', () => {

        const component = mount(
            <List
                className="myClass"
                style={{color: 'blue'}}
                id={'button1'}
            >
                <ListItem
                    description="desc"
                    title="title"
                    className="myClass"
                    style={{color: 'blue'}}
                >
                    <ItemContent>
                        test
                    </ItemContent>
                </ListItem>
                <ListItem
                    className="myClass"
                    style={{color: 'blue'}}
                    image="imageUrl"
                >
                    <ItemContent>
                        test
                    </ItemContent>
                </ListItem>
            </List>
        );

        expect(component).toMatchSnapshot();
    });

    test('renders ListItems correctly depending on props', () => {

        const component = mount(
            <List
                className="myClass"
                style={{color: 'blue'}}
                id={'button1'}
            >
                <ListItem
                    description="desc"
                    title="title"
                    className="myClass"
                    style={{color: 'blue'}}
                />
            </List>
        );

        expect(component.find('.detailsContainer').length).toBe(1);

        expect(component.find('img').length).toBe(0);
        expect(component.find('.content').length).toBe(0);

        expect(component.find('.title').length).toBe(1);
        expect(component.find('.description').length).toBe(1);

    });

    test('renders ListItems correctly with different props', () => {

        const component = mount(
            <List
                className="myClass"
                style={{color: 'blue'}}
                id={'button1'}
            >
                <ListItem
                    image="imageURL"
                    className="myClass"
                    style={{color: 'blue'}}
                >
                    <ItemContent>
                        Some Content
                    </ItemContent>
                </ListItem>
            </List>
        );

        expect(component.find('.detailsContainer').length).toBe(1);

        expect(component.find('img').length).toBe(1);
        expect(component.find('.content').length).toBe(1);

        expect(component.find('.title').length).toBe(0);
        expect(component.find('.description').length).toBe(0);

    });

    test('applies the correct classes depending on ListItem content', () => {

        const component = mount(
            <List
                className="myClass"
                style={{color: 'blue'}}
                id={'button1'}
            >
                <ListItem
                    image="imageURL"
                    className="myClass"
                    style={{color: 'blue'}}
                >
                    <ItemContent>
                        Some Content
                    </ItemContent>
                </ListItem>
            </List>
        );

        expect(component.find('.detailsContainer').hasClass('loneImage')).toBe(true);
        expect(component.find('.content').hasClass('lone')).toBe(true);

    });

    test('create expanded section content correctly', () => {

        const component = mount(
            <List
                className="myClass"
                style={{color: 'blue'}}
                id={'button1'}
            >
                <ListItem
                    image="imageURL"
                    className="myClass"
                    style={{color: 'blue'}}
                >
                    <ItemContent>
                        Some Content
                    </ItemContent>
                    <ExpandedSection>
                        Some ExpandedSection Content
                    </ExpandedSection>
                </ListItem>
            </List>
        );

        expect(component).toMatchSnapshot();
    });

    test('create expanded section content when proper child is assigned', () => {

        const component = mount(
            <List
                className="myClass"
                style={{color: 'blue'}}
                id={'button1'}
            >
                <ListItem
                    image="imageURL"
                    className="myClass"
                    style={{color: 'blue'}}
                >
                    <ItemContent>
                        Some Content
                    </ItemContent>
                    <ExpandedSection>
                        Some ExpandedSection Content
                    </ExpandedSection>
                </ListItem>
            </List>
        );

        expect(component.find('.expanded-section-component').length).toBe(1);
        expect(component.find('.expanded-section-component').prop('style')).toEqual({display: 'none'});
        expect(component.state('activeLists')).toEqual([]);

        component.find('.listitem-component').simulate('click');

        expect(component.find('.expanded-section-component').prop('style')).toEqual({display: 'block'});
        expect(component.state('activeLists')).toEqual([0]);

    });

    test('render multiple expanded section items and multi items can be active', () => {

        const component = mount(
            <List
                className="myClass"
                style={{color: 'blue'}}
                id={'button1'}
            >
                <ListItem>
                    <ItemContent>
                        Some Content
                    </ItemContent>
                    <ExpandedSection>
                        Some ExpandedSection Content
                    </ExpandedSection>
                </ListItem>
                <ListItem>
                    <ItemContent>
                        Some Content
                    </ItemContent>
                    <ExpandedSection>
                        ExpandedSection content the second
                    </ExpandedSection>
                </ListItem>
            </List>
        );

        expect(component.find('.expanded-section-component').length).toBe(2);
        expect(component.find('.expanded-section-component').first().prop('style')).toEqual({display: 'none'});
        expect(component.find('.expanded-section-component').last().prop('style')).toEqual({display: 'none'});
        expect(component.state('activeLists')).toEqual([]);

        component.find('.listitem-component').first().simulate('click');

        expect(component.find('.expanded-section-component').first().prop('style')).toEqual({display: 'block'});
        expect(component.find('.expanded-section-component').last().prop('style')).toEqual({display: 'none'});
        expect(component.state('activeLists')).toEqual([0]);

        component.find('.listitem-component').last().simulate('click');

        expect(component.find('.expanded-section-component').first().prop('style')).toEqual({display: 'block'});
        expect(component.find('.expanded-section-component').last().prop('style')).toEqual({display: 'block'});
        expect(component.state('activeLists')).toEqual([0, 1]);

        component.find('.listitem-component').first().simulate('click');

        expect(component.find('.expanded-section-component').first().prop('style')).toEqual({display: 'none'});
        expect(component.find('.expanded-section-component').last().prop('style')).toEqual({display: 'block'});
        expect(component.state('activeLists')).toEqual([1]);

        component.find('.listitem-component').last().simulate('click');

        expect(component.find('.expanded-section-component').first().prop('style')).toEqual({display: 'none'});
        expect(component.find('.expanded-section-component').last().prop('style')).toEqual({display: 'none'});
        expect(component.state('activeLists')).toEqual([]);

    });

});
