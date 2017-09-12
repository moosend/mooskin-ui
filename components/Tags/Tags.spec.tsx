import * as React from 'react';
import {Tags} from '../index';

import {mount, render, shallow} from 'enzyme';

describe('Tags', () => {

    test('renders Tags correctly', () => {
        const func = jest.fn();
        Math.random = jest.fn(() => 222333444555);

        const tags = [
            'Prishtina',
            'Athens'
        ];

        const source = [
            'Prishtina',
            'Athens',
            'London',
            'New York',
            'Beijing'
        ];

        const tree = shallow(
            <Tags
                onChange={func}
                tags={tags}
                className="myClass"
                dataLabel="SomeForm"
                style={{width: '50px'}}
                deletable
                delimiters={['space', 13]}
                tagStyles={{width: '50px'}}
                tagClasses="tagClasses"
                placeholder="olala"
                sourceLimit={15}
                label="label"
                source={source}
            />
        );

        expect(tree).toMatchSnapshot();
    });

    test('renders children correctly', () => {

        const tags = [
            'Prishtina',
            'Athens',
            'London',
            'New York',
            'Beijing'
        ];

        const component = shallow(
            <Tags tags={tags} />
        );

        expect(component.find('Tag').length).toEqual(tags.length);

    });

    test('deletes tag on backspace when deletable prop is passed, and adds tag on enter click', () => {

        const tags = [
            'Prishtina',
            'Athens',
            'London',
            'New York',
            'Beijing'
        ];

        const component = shallow(
            <Tags tags={tags} deletable />
        );

        expect(component.state('value')).toBe('');

        component.find('input').simulate('keyDown', { keyCode: 8, key: 'Backspace', preventDefault: () => undefined });

        expect(component.state('tags')).toEqual(['Prishtina', 'Athens', 'London', 'New York']);

        component.find('input').simulate('change', { target: { value: 'Tokyo' }});

        expect(component.state('value')).toBe('Tokyo');

        component.find('input').simulate('keyDown', { keyCode: 13, key: 'Enter', preventDefault: () => undefined });

        expect(component.state('tags')).toEqual(['Prishtina', 'Athens', 'London', 'New York', 'Tokyo']);

    });

    test('deletes tag on X click', () => {

        const tags = [
            'Prishtina',
            'Athens',
            'London',
            'New York',
            'Beijing'
        ];

        const component = mount(
            <Tags tags={tags} />
        );

        expect(component.find('i').length).toEqual(tags.length);

        expect(component.state('tags')).toEqual(['Prishtina', 'Athens', 'London', 'New York', 'Beijing']);

        component.find('i').at(2).simulate('click');

        expect(component.state('tags')).toEqual(['Prishtina', 'Athens', 'New York', 'Beijing']);

    });

    test('adds tags on keypress one of custom delimiters', () => {

        const tags = [
            'Prishtina',
            'Athens',
            'London',
            'New York',
            'Beijing'
        ];

        const component = shallow(
            <Tags tags={tags} deletable delimiters={['space', 32, 'enter', 188]}/>
        );

        expect(component.state('value')).toBe('');
        expect(component.state('tags')).toEqual(['Prishtina', 'Athens', 'London', 'New York', 'Beijing']);

        component.find('input').simulate('change', { target: { value: 'Tokyo' }});
        expect(component.state('value')).toBe('Tokyo');

        component.find('input').simulate('keyDown', { keyCode: 32, key: 'Space', preventDefault: () => undefined });
        expect(component.state('tags')).toEqual(['Prishtina', 'Athens', 'London', 'New York', 'Beijing', 'Tokyo']);

        component.find('input').simulate('change', { target: { value: 'Berlin' }});
        expect(component.state('value')).toBe('Berlin');

        component.find('input').simulate('keyDown', { keyCode: 188, key: ',', preventDefault: () => undefined });
        expect(component.state('tags')).toEqual(
            ['Prishtina', 'Athens', 'London', 'New York', 'Beijing', 'Tokyo', 'Berlin']
        );

    });

    test('creates selectable source list when source prop is passed, and a value is given', () => {

        const tags = [
            'Prishtina',
            'Athens',
            'London',
            'New York',
            'Beijing'
        ];

        const countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla',
        'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas'
        , 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia',
        'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands'
        , 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon',
        'Canada', 'Cape Verde', 'Cayman Islands'
        , 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica'
        , 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic',
        'Denmark', 'Djibouti', 'Dominica',
        'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea'
        , 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia',
        'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana'
        , 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau',
        'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India'
        , 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey',
        'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia'
        , 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia',
        'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania'
        , 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique',
        'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia'
        , 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama',
        'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal'
        , 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon',
        'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles'
        , 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain',
        'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan'
        , 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania'
        , 'Thailand', 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia'
        , 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates',
        'United Kingdom', 'United States', 'United States Minor Outlying Islands', 'Uruguay', 'Uzbekistan',
        'Venezuela', 'Vietnam', 'Virgin Islands (US)'
        , 'Yemen', 'Zambia', 'Zimbabwe'];

        const component = mount(
            <Tags source={countries} />
        );

        expect(component.find('.sourceList').length).toEqual(0);
        expect(component.find('.sourceItem').length).toEqual(0);

        component.find('input').simulate('change', { target: { value: 'a' }});

        expect(component.state('value')).toBe('a');

        expect(component.find('.sourceList').length).toEqual(1);
        expect(component.find('.sourceItem').length).toEqual(10);

        component.find('input').simulate('change', { target: { value: 'al' }});

        expect(component.state('value')).toBe('al');

        expect(component.state('sourceList')).toEqual(['Albania', 'Algeria']);

        expect(component.find('.sourceList').length).toEqual(1);
        expect(component.find('.sourceItem').length).toEqual(2);

        expect(component.state('activeItem')).toBe(0);
        expect(component.find('.sourceItem').first().hasClass('active')).toBeTruthy;

        component.find('input').simulate('keyDown', { keyCode: 40, key: 'ArrowDown', preventDefault: () => undefined });

        expect(component.state('activeItem')).toBe(1);
        expect(component.find('.sourceItem').last().hasClass('active')).toBeTruthy;

        component.find('input').simulate('keyDown', { keyCode: 13, key: 'Enter', preventDefault: () => undefined });

        expect(component.state('tags')).toEqual(['Algeria']);
        expect(component.find('Tag').length).toEqual(1);
        expect(component.find('Tag').first().prop('tag')).toEqual('Algeria');

        component.find('input').simulate('change', { target: { value: 'uni' }});

        expect(component.state('value')).toBe('uni');

        expect(component.state('activeItem')).toBe(0);
        expect(component.find('.sourceItem').first().hasClass('active')).toBeTruthy;

        component.find('input').simulate('keyDown', { keyCode: 40, key: 'ArrowDown', preventDefault: () => undefined });
        component.find('input').simulate('keyDown', { keyCode: 40, key: 'ArrowDown', preventDefault: () => undefined });

        expect(component.state('activeItem')).toBe(2);
        expect(component.find('.sourceItem').at(2).hasClass('active')).toBeTruthy;

        component.find('input').simulate('keyDown', { keyCode: 38, key: 'ArrowUp', preventDefault: () => undefined });

        expect(component.state('activeItem')).toBe(1);
        expect(component.find('.sourceItem').at(1).hasClass('active')).toBeTruthy;

        component.find('input').simulate('keyDown', { keyCode: 13, key: 'Enter', preventDefault: () => undefined });

        expect(component.state('tags')).toEqual(['Algeria', 'United Kingdom']);
        expect(component.find('Tag').length).toEqual(2);
        expect(component.find('Tag').last().prop('tag')).toEqual('United Kingdom');

        component.find('input').simulate('change', { target: { value: 'Doni' }});

        expect(component.find('.sourceItem').length).toEqual(0);

        component.find('input').simulate('keyDown', { keyCode: 13, key: 'Enter', preventDefault: () => undefined });

        expect(component.state('tags')).toEqual(['Algeria', 'United Kingdom', 'Doni']);
        expect(component.find('Tag').length).toEqual(3);
        expect(component.find('Tag').last().prop('tag')).toEqual('Doni');

    });

    test('searchable source is limited by props, and callback function is called on Tags change', () => {

        const func = jest.fn();

        const countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla',
        'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas'
        , 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia',
        'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands'
        , 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon',
        'Canada', 'Cape Verde', 'Cayman Islands'
        , 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica'
        , 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic',
        'Denmark', 'Djibouti', 'Dominica',
        'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea'
        , 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia',
        'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana'
        , 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau',
        'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India'
        , 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey',
        'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia'
        , 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia',
        'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania'
        , 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique',
        'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia'
        , 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama',
        'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal'
        , 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon',
        'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles'
        , 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain',
        'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan'
        , 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania'
        , 'Thailand', 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia'
        , 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates',
        'United Kingdom', 'United States', 'United States Minor Outlying Islands', 'Uruguay', 'Uzbekistan',
        'Venezuela', 'Vietnam', 'Virgin Islands (US)'
        , 'Yemen', 'Zambia', 'Zimbabwe'];

        const tags = [
            'Prishtina',
            'Athens',
            'London',
            'New York',
            'Beijing'
        ];

        const component = mount(
            <Tags tags={tags} sourceLimit={5} source={countries} onChange={func} />
        );

        expect(component.find('.sourceList').length).toEqual(0);
        expect(component.find('.sourceItem').length).toEqual(0);

        component.find('input').simulate('change', { target: { value: 'a' }});

        expect(component.state('value')).toBe('a');

        expect(component.find('.sourceList').length).toEqual(1);
        expect(component.find('.sourceItem').length).toEqual(5);

        component.find('input').simulate('keyDown', { keyCode: 13, key: 'Enter', preventDefault: () => undefined });

        expect(func).toHaveBeenCalled();

        component.find('input').simulate('keyDown', { keyCode: 8, key: 'Backspace', preventDefault: () => undefined });

        expect(func).toHaveBeenCalled();

        component.find('i').first().simulate('click');

        expect(func).toHaveBeenCalled();

    });

});
