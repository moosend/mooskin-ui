import * as React from 'react';
import BreadcrumbsGroup, {Breadcrumb} from './Breadcrumbs';

import { shallow } from 'enzyme';

describe('Breadcrumbs', () => {

    test('renders correctly', () => {
        const tree = shallow(
            <BreadcrumbsGroup>
                <Breadcrumb title="Breadcrumb 1" active>
                    Content 1
                </Breadcrumb>
                <Breadcrumb title="Breadcrumb 2">
                    Content 2
                </Breadcrumb>
                <Breadcrumb title="Breadcrumb 3">
                    Content 3
                </Breadcrumb>
            </BreadcrumbsGroup>
        );
        expect(tree).toMatchSnapshot();
    });
});
