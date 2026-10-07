import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { TextEditor } from './TextEditor';

jest.mock('@tinymce/tinymce-react', () => ({
	Editor: ({
		disabled,
		inline,
		init,
		value
	}: {
		disabled?: boolean;
		inline?: boolean;
		init?: { menubar?: boolean };
		value?: string;
	}) => (
		<textarea
			disabled={disabled}
			data-inline={inline ? 'true' : 'false'}
			data-menubar={init?.menubar ? 'true' : 'false'}
			defaultValue={value}
		/>
	)
}));

const fn = jest.fn();

describe('TextEditor', () => {
	test('renders correctly', () => {
		render(<TextEditor value="<p>TextEditor</p>" onEditorChange={fn} />);

		const editor = screen.getByRole('textbox');
		expect(editor).toHaveValue('<p>TextEditor</p>');
		expect(editor).not.toBeDisabled();
		expect(editor).toHaveAttribute('data-inline', 'false');
		expect(editor).toHaveAttribute('data-menubar', 'false');
	});

	test('renders inline correctly', () => {
		render(<TextEditor inline value="<p>TextEditor</p>" onEditorChange={fn} />);

		expect(screen.getByRole('textbox')).toHaveAttribute('data-inline', 'true');
	});

	test('renders disabled correctly', () => {
		render(<TextEditor disabled value="<p>TextEditor</p>" onEditorChange={fn} />);

		expect(screen.getByRole('textbox')).toBeDisabled();
	});

	test('renders with menubar correctly', () => {
		render(<TextEditor menubar value="<p>TextEditor</p>" onEditorChange={fn} />);

		expect(screen.getByRole('textbox')).toHaveAttribute('data-menubar', 'true');
	});
});
