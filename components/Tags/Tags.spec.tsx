import * as React from 'react';
import {Tags} from '../index';

import {mount, render, shallow} from 'enzyme';

describe('Tags', () => {

    test('renders Tags correctly', () => {
        const func1 = jest.fn();
        const func2 = jest.fn();

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
                onAdd={func1}
                onRemove={func2}
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
            <Tags tags={tags} />,
        );

        expect(component.find('Tag').length).toEqual(tags.length);

    });

    test('deletes tag on backspace when deletable prop is passed, and adds tag on enter click', () => {

        let tags = [
            'Prishtina',
            'Athens',
            'London',
            'New York',
            'Beijing'
        ];

        const onAdd = (e, data) => {
            tags = tags.concat(data.value);
        };

        const onRemove = (e, data, index) => {
            tags.splice(index, 1);
        };

        const onChange = (e, data) => {
            tags = data.value;
        };

        const component = shallow(
            <Tags tags={tags} deletable onAdd={onAdd} onRemove={onRemove} />
        );

        expect(component.state('value')).toBe('');

        expect(component.find('Tag').length).toBe(5);
        expect(component.find('Tag').last().prop('tag')).toEqual('Beijing');

        component.find('input').simulate('keyDown',
            { keyCode: 8, key: 'Backspace', preventDefault: () => undefined }
        );

        component.setProps({tags});

        expect(component.find('Tag').length).toBe(4);
        expect(component.find('Tag').last().prop('tag')).toEqual('New York');

        component.find('input').simulate('change', { target: { value: 'Tokyo' }});

        expect(component.state('value')).toBe('Tokyo');

        component.find('input').simulate('keyDown',
            { keyCode: 13, key: 'Enter', preventDefault: () => undefined }
        );

        component.setProps({tags});

        expect(component.find('Tag').length).toBe(5);
        expect(component.find('Tag').last().prop('tag')).toEqual('Tokyo');

    });

    test('deletes tag on X click', () => {

        let tags = [
            'Prishtina',
            'Athens',
            'London',
            'New York',
            'Beijing'
        ];

        const onAdd = (e, data) => {
            tags = tags.concat(data.value);
        };

        const onRemove = (e, data, index) => {
            tags.splice(index, 1);
        };

        const component = mount(
            <Tags tags={tags} onAdd={onAdd} onRemove={onRemove}  />
        );

        expect(component.find('i').length).toEqual(tags.length);

        expect(component.find('Tag').at(2).prop('tag')).toEqual('London');

        component.find('i').at(2).simulate('click');

        component.setProps({tags});

        expect(component.find('Tag').at(2).prop('tag')).toEqual('New York');

    });

    test('adds tags on keypress one of custom delimiters', () => {

        let tags = [
            'Prishtina',
            'Athens',
            'London',
            'New York',
            'Beijing'
        ];

        const onAdd = (e, data) => {
            tags = tags.concat(data.value);
        };

        const onRemove = (e, data, index) => {
            tags.splice(index, 1);
        };

        const component = shallow(
            <Tags tags={tags} deletable delimiters={['space', 32, 'enter', 188]} onAdd={onAdd} onRemove={onRemove} />
        );

        expect(component.state('value')).toBe('');
        expect(component.find('Tag').first().prop('tag')).toEqual('Prishtina');
        expect(component.find('Tag').at(2).prop('tag')).toEqual('London');
        expect(component.find('Tag').last().prop('tag')).toEqual('Beijing');

        component.find('input').simulate('change', { target: { value: 'Tokyo' }});
        expect(component.state('value')).toBe('Tokyo');

        component.find('input').simulate('keyDown', { keyCode: 32, key: 'Space', preventDefault: () => undefined });
        component.setProps({tags});
        expect(component.find('Tag').length).toEqual(6);
        expect(component.find('Tag').last().prop('tag')).toEqual('Tokyo');

        component.find('input').simulate('change', { target: { value: 'Berlin' }});
        expect(component.state('value')).toBe('Berlin');

        component.find('input').simulate('keyDown', { keyCode: 188, key: ',', preventDefault: () => undefined });
        component.setProps({tags});
        expect(component.find('Tag').length).toEqual(7);
        expect(component.find('Tag').last().prop('tag')).toEqual('Berlin');

    });

    test('creates selectable source list when source prop is passed, and a value is given', () => {

        let tags = [
            'Prishtina',
            'Athens',
            'London',
            'New York',
            'Beijing'
        ];

        const onAdd = (e, data) => {
            tags = tags.concat(data.value);
        };

        const onRemove = (e, data, index) => {
            tags.splice(index, 1);
        };

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
            <Tags source={countries} tags={tags} onAdd={onAdd} onRemove={onRemove} />
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

        component.setProps({tags});
        expect(component.find('Tag').length).toEqual(6);
        expect(component.find('Tag').last().prop('tag')).toEqual('Algeria');

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

        component.setProps({tags});
        expect(component.find('Tag').length).toEqual(7);
        expect(component.find('Tag').last().prop('tag')).toEqual('United Kingdom');

        component.find('input').simulate('change', { target: { value: 'Doni' }});

        expect(component.find('.sourceItem').length).toEqual(0);

        component.find('input').simulate('keyDown', { keyCode: 13, key: 'Enter', preventDefault: () => undefined });

        component.setProps({tags});
        expect(component.find('Tag').length).toEqual(8);
        expect(component.find('Tag').last().prop('tag')).toEqual('Doni');

    });

    test('searchable source is limited by props, and callback function is called on Tags change', () => {

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

        const onRemove = jest.fn();
        const onAdd = jest.fn();

        const component = mount(
            <Tags tags={tags} sourceLimit={5} source={countries} onAdd={onAdd} onRemove={onRemove} deletable />
        );

        expect(component.find('.sourceList').length).toEqual(0);
        expect(component.find('.sourceItem').length).toEqual(0);

        component.find('input').simulate('change', { target: { value: 'a' }});

        expect(component.state('value')).toBe('a');

        expect(component.find('.sourceList').length).toEqual(1);
        expect(component.find('.sourceItem').length).toEqual(5);

        component.find('input').simulate('keyDown', { keyCode: 13, key: 'Enter', preventDefault: () => undefined });

        expect(onAdd).toHaveBeenCalled();

        component.find('input').simulate('keyDown', { keyCode: 8, key: 'Backspace', preventDefault: () => undefined });

        expect(onRemove).toHaveBeenCalled();

        component.find('i').first().simulate('click');

        expect(onRemove).toHaveBeenCalled();

    });

    test('seperates pasted string into tags depending on the passed delimiters', () => {

        let tags = [];

        const onAdd = (e, data) => {
            tags = tags.concat(data.value);
        };

        const onRemove = (e, data, index) => {
            tags.splice(index, 1);
        };

        const component = shallow(
            <Tags
                tags={tags}
                deletable
                delimiters={[188, 32, 13, ',', '.', 'Enter', ' ', 190]}
                onAdd={onAdd}
                onRemove={onRemove}
            />
        );

        expect(component.find('Tag').length).toBe(0);

        component.find('input').simulate('paste', {clipboardData: {getData: () => 'Doni wow'}});
        component.setProps({tags});
        expect(component.find('Tag').length).toBe(2);

        tags = [];
        component.setProps({tags});

        component.find('input').simulate('paste', {clipboardData: {getData: () => ',Doni..Genti , Shkumba'}});
        component.setProps({tags});
        expect(component.find('Tag').length).toBe(3);

        tags = [];
        component.setProps({tags});

        component.find('input').simulate('paste', {clipboardData: {
            getData: () => '  D, o. n ,i.,. Gen,,ti.Sh . k ,um. .ba , . '
        }});
        component.setProps({tags});
        expect(component.find('Tag').length).toBe(10);

        tags = [];
        component.setProps({tags});

        component.find('input').simulate('paste', {clipboardData: {
            getData: () => ', Doni .G.E,N T , i .      doni@moosend.com       '
        }});
        component.setProps({tags});
        expect(component.find('Tag').length).toBe(8);

    });

    test('seperates pasted string into tags depending on the different passed delimiters', () => {

        let tags = [];

        const onAdd = (e, data) => {
            tags = tags.concat(data.value);
        };

        const onRemove = (e, data, index) => {
            tags.splice(index, 1);
        };

        const component = shallow(
            <Tags
                tags={tags}
                deletable
                delimiters={[65, 71, 76, 'a', 'g', 'l']}
                onAdd={onAdd}
                onRemove={onRemove}
            />
        );

        expect(component.find('Tag').length).toBe(0);

        component.find('input').simulate('paste', {clipboardData: {getData: () => 'hey, its me again'}});
        component.setProps({tags});
        expect(component.find('Tag').length).toBe(2);

        tags = [];
        component.setProps({tags});

        component.find('input').simulate('paste', {clipboardData: {getData: () => 'Hope of deliverance'}});
        component.setProps({tags});
        expect(component.find('Tag').length).toBe(3);

        tags = [];
        component.setProps({tags});

        component.find('input').simulate('paste', {clipboardData: {
            getData: () => 'here I go again on my own, with a bucket full of gold'
        }});
        component.setProps({tags});
        expect(component.find('Tag').length).toBe(7);

        tags = [];
        component.setProps({tags});

        component.find('input').simulate('paste', {clipboardData: {
            getData: () => 'weird seperators are garanteed to be weird, seriously'
        }});
        component.setProps({tags});
        expect(component.find('Tag').length).toBe(6);

    });

    test('paste event doesnt trigger when no delimiter is present on the string', () => {

        let tags = [];

        const onAdd = (e, data) => {
            tags = tags.concat(data.value);
        };

        const onRemove = (e, data, index) => {
            tags.splice(index, 1);
        };

        const component = shallow(
            <Tags
                tags={tags}
                deletable
                delimiters={[188, ',']}
                onAdd={onAdd}
                onRemove={onRemove}
            />
        );

        expect(component.find('Tag').length).toBe(0);

        component.find('input').simulate('paste', {clipboardData: {getData: () => 'Hope of deliverance'}});
        component.setProps({tags});
        expect(component.find('Tag').length).toBe(0);

    });

});
