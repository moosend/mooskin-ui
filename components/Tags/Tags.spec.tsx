import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Tag, TagInput, Tags } from './Tags';

describe('Tags', () => {
	test('renders Tags correctly', () => {
		const onAddTag = jest.fn();
		const onRemoveTag = jest.fn();
		const { container } = render(
			<Tags className="myClass" dataLabel="SomeForm" style={{ width: '50px' }} onAddTag={onAddTag} onRemoveTag={onRemoveTag}>
				<Tag className="tagClasses" style={{ width: '50px' }}>
					Prishtina
				</Tag>
				<Tag>Athens</Tag>
				<TagInput placeholder="olala" delimiters={[',', ' ', 'Enter', 13]} />
			</Tags>
		);

		expect(container.firstChild).toMatchSnapshot();
	});

	test('renders children correctly', () => {
		const tags = ['Prishtina', 'Athens', 'London', 'New York', 'Beijing'];

		render(
			<Tags>
				{tags.map((tag) => (
					<Tag key={tag}>{tag}</Tag>
				))}
			</Tags>
		);

		tags.forEach((tag) => {
			expect(screen.getByText(tag)).toBeInTheDocument();
		});
	});

	test('adds a tag on enter and removes the last tag on backspace', () => {
		const onAddTag = jest.fn();
		const onRemoveTag = jest.fn();

		render(
			<Tags onAddTag={onAddTag}>
				<Tag>Prishtina</Tag>
				<Tag>Athens</Tag>
				<TagInput onRemoveTag={onRemoveTag} />
			</Tags>
		);

		const input = screen.getByRole('textbox');
		expect(input).toHaveValue('');

		fireEvent.change(input, { target: { value: 'Tokyo' } });
		expect(input).toHaveValue('Tokyo');

		fireEvent.keyDown(input, { keyCode: 13, key: 'Enter' });
		expect(onAddTag).toHaveBeenCalledWith(expect.objectContaining({ value: 'Tokyo' }));

		fireEvent.change(input, { target: { value: '' } });
		fireEvent.keyDown(input, { keyCode: 8, key: 'Backspace' });
		expect(onRemoveTag).toHaveBeenCalledWith(expect.anything(), -1);
	});

	test('deletes tag on close click', () => {
		const onRemoveTag = jest.fn();
		const tags = ['Prishtina', 'Athens', 'London'];

		render(
			<Tags onRemoveTag={onRemoveTag} dataLabel="cities">
				{tags.map((tag) => (
					<Tag key={tag} removeIcon>
						{tag}
					</Tag>
				))}
			</Tags>
		);

		fireEvent.click(screen.getAllByText('close')[2]);
		expect(onRemoveTag).toHaveBeenCalledWith(expect.anything(), expect.objectContaining({ dataLabel: 'cities', value: 2 }));
	});

	test('adds tags on keypress of custom delimiters', () => {
		const onAddTag = jest.fn();

		render(
			<Tags onAddTag={onAddTag}>
				<Tag>Prishtina</Tag>
				<TagInput delimiters={['space', 32, 'enter', 188]} />
			</Tags>
		);

		const input = screen.getByRole('textbox');
		fireEvent.change(input, { target: { value: 'Tokyo' } });
		fireEvent.keyDown(input, { keyCode: 32, key: ' ' });
		expect(onAddTag).toHaveBeenCalledWith(expect.objectContaining({ value: 'Tokyo' }));

		fireEvent.change(input, { target: { value: 'Berlin' } });
		fireEvent.keyDown(input, { keyCode: 188, key: ',' });
		expect(onAddTag).toHaveBeenCalledWith(expect.objectContaining({ value: 'Berlin' }));
	});

	test('splits a delimited value into tags', () => {
		const onAddTag = jest.fn();

		render(
			<Tags onAddTag={onAddTag}>
				<TagInput delimiters={[',', ' ']} />
			</Tags>
		);

		const input = screen.getByRole('textbox');
		fireEvent.change(input, { target: { value: 'seed' } });
		fireEvent.change(input, { target: { value: 'Doni wow' } });

		expect(onAddTag).toHaveBeenCalledWith(expect.objectContaining({ value: ['Doni', 'wow'] }));
	});

	test('does not split a value when no delimiter is present', () => {
		const onAddTag = jest.fn();

		render(
			<Tags onAddTag={onAddTag}>
				<TagInput delimiters={[',']} />
			</Tags>
		);

		const input = screen.getByRole('textbox');
		fireEvent.change(input, { target: { value: 'seed' } });
		fireEvent.change(input, { target: { value: 'Hope of deliverance' } });

		expect(onAddTag).not.toHaveBeenCalled();
		expect(input).toHaveValue('Hope of deliverance');
	});

	test('refuses a tag when validateTag returns false', () => {
		const onAddTag = jest.fn();
		const validateTag = (tag: string) => tag.includes('@');

		render(
			<Tags onAddTag={onAddTag} validateTag={validateTag}>
				<Tag>doni</Tag>
				<TagInput />
			</Tags>
		);

		const input = screen.getByRole('textbox');
		fireEvent.change(input, { target: { value: 'text' } });
		fireEvent.keyDown(input, { keyCode: 13, key: 'Enter' });
		expect(onAddTag).not.toHaveBeenCalled();

		fireEvent.change(input, { target: { value: 'doni@moosend.com' } });
		fireEvent.keyDown(input, { keyCode: 13, key: 'Enter' });
		expect(onAddTag).toHaveBeenCalledWith(expect.objectContaining({ value: 'doni@moosend.com' }));
	});

	test('calls onClickTag when a tag is clicked', () => {
		const onClickTag = jest.fn();

		render(
			<Tags onClickTag={onClickTag} dataLabel="people">
				<Tag>doni</Tag>
				<Tag>gent</Tag>
				<Tag>shkumbin</Tag>
			</Tags>
		);

		fireEvent.click(screen.getByText('doni'));
		expect(onClickTag).toHaveBeenCalledWith(expect.anything(), expect.objectContaining({ dataLabel: 'people', value: 0 }));
	});
});
