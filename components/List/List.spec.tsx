import * as React from 'react';
import List, {ListItem} from './List';

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
                test
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
                    test
                </ListItem>
                <ListItem
                    className="myClass"
                    style={{color: 'blue'}}
                    image="imageUrl"
                >
                    test
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
                    Some Content
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
                    Some Content
                </ListItem>
            </List>
        );

        expect(component.find('.detailsContainer').hasClass('loneImage')).toBe(true);
        expect(component.find('.content').hasClass('lone')).toBe(true);

    });

});
