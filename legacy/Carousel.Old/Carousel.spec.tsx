import * as React from 'react';
import Carousel from './Carousel';

import { mount, shallow } from 'enzyme';

describe('Carousel', () => {

    test('renders correctly', () => {
        const func = jest.fn();

        const tree = shallow(
            <Carousel
                onChange={func}
                className="myClass"
                // style={{color: 'blue'}}
                id={'Carousel1'}
                autoplay
                containerClassName="className"
                containerStyle={{color: 'red'}}
                slidesToShow={2}
                slidesToScroll={2}
            >
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <img
                        src="https://orig00.deviantart.net/1d75/f/2009/220/b/0/spongebob_4_150x150_png_by_somemilk.png"
                    />
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <img
                        src="https://orig00.deviantart.net/92ae/f/2009/230/4/1/spongebob_9_150x150_png_by_somemilk.png"
                    />
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <img
                        src="http://www.blindfiveyearold.com/wp-content/uploads/2011/01/homer-simpson-150x150.jpg"
                    />
              </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <img
                        src="http://www.fakesteve.net/wp-content/uploads/2009/12/drooling_homer-712749.gif2-150x150.png"
                    />
                </div>
            </Carousel>
        );

        expect(tree).toMatchSnapshot();
    });

    test('renders Carousel with correct props & default props', () => {
        const func = jest.fn();

        const component = mount(
            <Carousel
                onChange={func}
                className="myClass"
                style={{color: 'blue'}}
                id={'Carousel1'}
                autoplay
                containerClassName="className"
                containerStyle={{color: 'red'}}
                slidesToShow={2}
                slidesToScroll={2}
            >
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <img
                        src="https://orig00.deviantart.net/1d75/f/2009/220/b/0/spongebob_4_150x150_png_by_somemilk.png"
                    />
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <img
                        src="https://orig00.deviantart.net/92ae/f/2009/230/4/1/spongebob_9_150x150_png_by_somemilk.png"
                    />
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <img
                        src="http://www.blindfiveyearold.com/wp-content/uploads/2011/01/homer-simpson-150x150.jpg"
                    />
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <img
                        src="http://www.fakesteve.net/wp-content/uploads/2009/12/drooling_homer-712749.gif2-150x150.png"
                    />
                </div>
            </Carousel>
        );

        expect(component.find('Carousel')).toBeTruthy();
        expect(component.find('Carousel').prop('slidesToShow')).toEqual(2);
        expect(component.find('Carousel').prop('slidesToScroll')).toEqual(2);
        expect(component.find('Carousel').prop('autoplay')).toEqual(true);
        expect(component.find('div').first().prop('className')).toContain('className');
        expect(component.find('div').first().prop('style')).toEqual({color: 'red', width: null});
        expect(component.find('Carousel').prop('autoplay')).toEqual(true);
        expect(component.find('div').first().prop('id')).toEqual('Carousel1');
        // expect(component.find('CarouselComponent').prop('swipeToSlide')).toBeTruthy();

    });

});
