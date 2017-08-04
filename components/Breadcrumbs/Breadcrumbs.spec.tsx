import * as React from 'react';
import BreadcrumbsGroup, {Breadcrumb} from './Breadcrumbs';

import { render, shallow} from 'enzyme';

describe('Breadcrumbs', () => {

    test('renders correctly', () => {
        const tree = shallow(
            <BreadcrumbsGroup>
                <Breadcrumb id="1" title="Breadcrumb 1" active>
                    Content 1
                </Breadcrumb>
                <Breadcrumb id="2" title="Breadcrumb 2">
                    Content 2
                </Breadcrumb>
                <Breadcrumb id="3" title="Breadcrumb 3">
                    Content 3
                </Breadcrumb>
            </BreadcrumbsGroup>
        );
        expect(tree).toMatchSnapshot();
    });

    test('renders correctly with only the active one being visible', () => {
        const tree = render(
            <BreadcrumbsGroup>
                <Breadcrumb id="1" title="Breadcrumb 1" active>
                    Content 1
                </Breadcrumb>
                <Breadcrumb id="2" title="Breadcrumb 2">
                    Content 2
                </Breadcrumb>
                <Breadcrumb id="3" title="Breadcrumb 3">
                    Content 3
                </Breadcrumb>
            </BreadcrumbsGroup>
        );

        expect(tree.find('.activeBreadcrumb').length).toBe(1);
    });

    test('renders the body correctly with each content', () => {
        const tree = render(
            <BreadcrumbsGroup>
                <Breadcrumb id="1" title="Breadcrumb 1" active>
                    Content 1
                </Breadcrumb>
                <Breadcrumb id="2" title="Breadcrumb 2">
                    Content 2
                </Breadcrumb>
                <Breadcrumb id="3" title="Breadcrumb 3">
                    Content 3
                </Breadcrumb>
            </BreadcrumbsGroup>
        );

        expect(tree.find('.breadcrumbBody').length).toBe(3);
        expect(tree.find('.breadcrumbBody').first().text()).toContain('Content 1');
        expect(tree.find('.breadcrumbBody').eq(1).text()).toContain('Content 2');
        expect(tree.find('.breadcrumbBody').last().text()).toContain('Content 3');
    });

    test('onClick is called correctly when one of the breadcrumbs is clicked', () => {

        const fn = jest.fn();

        const tree = shallow(
            <BreadcrumbsGroup>
                <Breadcrumb id="1" title="Breadcrumb 1" active>
                    Content 1
                </Breadcrumb>
                <Breadcrumb id="2" title="Breadcrumb 2" onClick={fn}>
                    Content 2
                </Breadcrumb>
                <Breadcrumb id="3" title="Breadcrumb 3">
                    Content 3
                </Breadcrumb>
            </BreadcrumbsGroup>
        );

        tree.find(Breadcrumb)
            .findWhere((bc) => bc.prop('id') === '2')
            .dive()
            .find('#2')
            .simulate('click');

        expect(fn).toHaveBeenCalledWith('2');
    });
});
