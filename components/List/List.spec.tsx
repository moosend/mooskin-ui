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
                className="myClass"
                style={{color: 'blue'}}
            >
                <ItemContent>
                    test
                </ItemContent>
                <ExpandedSection expanded>
                    expanded test
                </ExpandedSection>
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
                    className="myClass"
                    style={{color: 'blue'}}
                >
                    <ItemContent>
                        test
                    </ItemContent>
                    <ExpandedSection expanded>
                        expanded test
                    </ExpandedSection>
                </ListItem>
                <ListItem
                    className="myClass"
                    style={{color: 'blue'}}
                >
                    <ItemContent>
                        test
                    </ItemContent>
                    <ExpandedSection expanded={false}>
                        expanded test
                    </ExpandedSection>
                </ListItem>
            </List>
        );

        expect(component).toMatchSnapshot();
    });

    // test('renders ListItems correctly depending on props', () => {

    //     const component = mount(
    //         <List
    //             className="myClass"
    //             style={{color: 'blue'}}
    //             id={'button1'}
    //         >
    //             <ListItem
    //                 description="desc"
    //                 title="title"
    //                 className="myClass"
    //                 style={{color: 'blue'}}
    //             />
    //         </List>
    //     );

    //     expect(component.find('.detailsContainer').length).toBe(2);

    //     expect(component.find('img').length).toBe(0);
    //     expect(component.find('.content').length).toBe(1);

    //     expect(component.find('.title').length).toBe(2);
    //     expect(component.find('.description').length).toBe(2);

    // });

    // test('renders ListItems correctly with different props', () => {

    //     const component = mount(
    //         <List
    //             className="myClass"
    //             style={{color: 'blue'}}
    //             id={'button1'}
    //         >
    //             <ListItem
    //                 image="imageURL"
    //                 className="myClass"
    //                 style={{color: 'blue'}}
    //             >
    //                 <ItemContent>
    //                     Some Content
    //                 </ItemContent>
    //             </ListItem>
    //         </List>
    //     );

    //     expect(component.find('.detailsContainer').length).toBe(1);

    //     expect(component.find('img').length).toBe(1);
    //     expect(component.find('.content').length).toBe(1);

    //     expect(component.find('.title').length).toBe(0);
    //     expect(component.find('.description').length).toBe(0);

    // });

    test('applies the correct classes depending on ListItem content', () => {

        const component = mount(
            <List
                className="myClass"
                style={{color: 'blue'}}
                id={'button1'}
            >
                <ListItem
                    className="myClass"
                    style={{color: 'blue'}}
                >
                    <ItemContent>
                        Some Content
                    </ItemContent>
                </ListItem>
            </List>
        );

        expect(component.find('.listitem-component').hasClass('myClass')).toBe(true);
        expect(component.find('.listitem-component').prop('style')).toEqual({color: 'blue'});

    });

    test('create expanded section content correctly', () => {

        const component = mount(
            <List
                className="myClass"
                style={{color: 'blue'}}
                id={'button1'}
            >
                <ListItem
                    className="myClass"
                    style={{color: 'blue'}}
                >
                    <ItemContent>
                        Some Content
                    </ItemContent>
                    <ExpandedSection expanded>
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
                <ListItem>
                    <ItemContent>
                        Some Content
                    </ItemContent>
                    <ExpandedSection expanded>
                        Some ExpandedSection Content
                    </ExpandedSection>
                </ListItem>
                <ListItem>
                    <ItemContent>
                        Some Content
                    </ItemContent>
                    <ExpandedSection expanded={false}>
                        ExpandedSection content the second
                    </ExpandedSection>
                </ListItem>
            </List>
        );

        expect(component.find('.expanded-section-component').length).toBe(2);
        expect(component.find('.expanded-section-component').first().prop('style')).toEqual({display: 'block'});
        expect(component.find('.expanded-section-component').last().prop('style')).toEqual({display: 'none'});

    });

    // test('render multiple expanded section items and multi items can be active', () => {

    //     const component = mount(
    //         <List
    //             className="myClass"
    //             style={{color: 'blue'}}
    //             id={'button1'}
    //         >
    //             <ListItem>
    //                 <ItemContent>
    //                     Some Content
    //                 </ItemContent>
    //                 <ExpandedSection>
    //                     Some ExpandedSection Content
    //                 </ExpandedSection>
    //             </ListItem>
    //             <ListItem>
    //                 <ItemContent>
    //                     Some Content
    //                 </ItemContent>
    //                 <ExpandedSection>
    //                     ExpandedSection content the second
    //                 </ExpandedSection>
    //             </ListItem>
    //         </List>
    //     );

    //     expect(component.find('.expanded-section-component').length).toBe(2);
    //     expect(component.find('.expanded-section-component').first().prop('style')).toEqual({display: 'none'});
    //     expect(component.find('.expanded-section-component').last().prop('style')).toEqual({display: 'none'});
    //     expect(component.state('activeLists')).toEqual([]);

    //     component.find('.listitem-component').first().simulate('click');

    //     expect(component.find('.expanded-section-component').first().prop('style')).toEqual({display: 'block'});
    //     expect(component.find('.expanded-section-component').last().prop('style')).toEqual({display: 'none'});
    //     expect(component.state('activeLists')).toEqual([0]);

    //     component.find('.listitem-component').last().simulate('click');

    //     expect(component.find('.expanded-section-component').first().prop('style')).toEqual({display: 'block'});
    //     expect(component.find('.expanded-section-component').last().prop('style')).toEqual({display: 'block'});
    //     expect(component.state('activeLists')).toEqual([0, 1]);

    //     component.find('.listitem-component').first().simulate('click');

    //     expect(component.find('.expanded-section-component').first().prop('style')).toEqual({display: 'none'});
    //     expect(component.find('.expanded-section-component').last().prop('style')).toEqual({display: 'block'});
    //     expect(component.state('activeLists')).toEqual([1]);

    //     component.find('.listitem-component').last().simulate('click');

    //     expect(component.find('.expanded-section-component').first().prop('style')).toEqual({display: 'none'});
    //     expect(component.find('.expanded-section-component').last().prop('style')).toEqual({display: 'none'});
    //     expect(component.state('activeLists')).toEqual([]);

    // });

});
