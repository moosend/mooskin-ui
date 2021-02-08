import * as React from 'react';
import {Footer, FooterBody, FooterEnd, FooterHead} from './Footer';

import { mount } from 'enzyme';
import { Button, ButtonIcon } from '../Button/Button';

describe('Alert', () => {

    test('renders correctly', () => {
        const tree = mount(
            <Footer>
                <FooterHead fontSize={12} fontWeight={800}>SAVE AS DRAFT</FooterHead>
                <FooterBody>
                    <Button mr={10} minW="unset">
                        <ButtonIcon>
                            chevron_left
                        </ButtonIcon>
                        BACK
                    </Button>
                    <Button minW="unset">
                        NEXT
                        <ButtonIcon>
                            chevron_right
                        </ButtonIcon>
                    </Button>
                </FooterBody>
                <FooterEnd>
                    <Button inverseStyle borderColor="#37a037" color="#37a037">
                        DESIGN & DELIVERY TEST
                    </Button>
                </FooterEnd>
            </Footer>
        );
        expect(tree).toMatchSnapshot();
    });

});
