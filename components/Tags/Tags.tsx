import * as React from 'react';

// Mooskin Context HoC that passes context to component props
import { withMooskinContext } from '../Styled/MooskinContextProvider';

// Models
import { IInputCallbackData } from '../_utils/types/commonTypes';
import { IBoxComponentProps } from '../Box/model';
import { ITagComponentProps, ITagsComponentProps, ITagsInputComponentProps } from './model';

// Styled Components
import { StyledTag, StyledTagClose, StyledTagInput, StyledTags, StyledTagText } from './styles';

/**
 * Tags
 */
export const Tags: React.FC<ITagsComponentProps> = withMooskinContext((props) => {
	const [tagClose, setTagClose] = React.useState(false);

	const batchClickHandler = (
		e: React.MouseEvent<HTMLElement>,
		data: IInputCallbackData,
		callback?: (e: React.MouseEvent<HTMLElement>) => void
	) => {
		props.onClickTag && props.onClickTag(e, data);
		callback && callback(e);
	};

	const onRemoveTag = (e: React.MouseEvent<HTMLElement>, i: number) => {
		e.stopPropagation();
		props.onRemoveTag && props.onRemoveTag(e, { dataLabel: props.dataLabel, value: i });
	};

	const onAddTag = (value: string) => {
		let validated = true;
		if (props.validateTag) {
			validated = props.validateTag(value);
		}
		validated && props.onAddTag && props.onAddTag({ dataLabel: props.dataLabel, value });
	};

	const recurseChildren = (children: any, tagIndex?: number): any => {
		if (!children) {
			return null;
		}

		return React.Children.map(children, (child, i) => {
			if (React.isValidElement<ITagComponentProps>(child) && child.type === Tag) {
				return React.cloneElement(child, {
					children: (
						<>
							{recurseChildren(child.props.children, i)}
							{/* <StyledTagText>{recurseChildren((child.props as any).children)}</StyledTagText>} */}
							{child.props.removeIcon && props.onRemoveTag && !tagClose && (
								<TagClose onClick={(e) => onRemoveTag(e, i)}>highlight_off</TagClose>
							)}
						</>
					),
					key: i,
					onClick: (e: React.MouseEvent<HTMLElement>) =>
						batchClickHandler(e, { dataLabel: props.dataLabel, value: i }, child.props.onClick),
				} as ITagComponentProps);
			}

			if (React.isValidElement<IBoxComponentProps>(child) && child.type === TagClose) {
				!tagClose && setTagClose(true);
				return React.cloneElement(child, {
					children: child.props.children ? child.props.children : 'highlight_off',
					key: i,
					onClick: child.props.onClick ? child.props.onClick : (e) => onRemoveTag(e, tagIndex ?? 0),
				} as IBoxComponentProps);
			}

			if (React.isValidElement<ITagsInputComponentProps>(child) && child.type === TagInput) {
				return React.cloneElement(child, {
					key: i,
					onAddTag,
				} as ITagsInputComponentProps);
			}

			if (React.isValidElement(child) && (child.props as any).children) {
				return React.cloneElement(child, { key: i, children: recurseChildren((child.props as any).children, tagIndex) } as any);
			}

			return child;
		});
	};

	return <StyledTags {...props} children={recurseChildren(props.children)} />;
});

Tags.defaultProps = {
	className: '',
	style: {},
};

Tags.displayName = 'Tags';

/**
 * Tag
 */
export const Tag: React.FC<ITagComponentProps> = withMooskinContext((props) => {
	return <StyledTag {...props} />;
});

Tag.defaultProps = {
	className: '',
	removeIcon: true,
	style: {},
};

Tag.displayName = 'Tag';

/**
 * TagInput
 */
export const TagInput: React.FC<ITagsInputComponentProps> = withMooskinContext((props) => {
	const [value, setValue] = React.useState(props.value || '');

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const text = e.target.value;

		const delimiters = props.delimiters;

		if (value && delimiters && shouldSubmitPaste(text, props.delimiters)) {
			let newTag: string[] = [];
			const tags: string[] = [];

			const charArray = text.split('');

			for (let i = 0; i < charArray.length; i++) {
				delimiters &&
					delimiters.map((delimiter) => {
						if (charArray[i] === delimiter && newTag.join('') !== '') {
							tags.push(newTag.join('').trim());
							newTag = [];
						}
					});
				if (!delimiters.includes(charArray[i]) && !delimiters.includes(charArray[i].charCodeAt(0))) {
					newTag.push(charArray[i]);
				}
				if (i === charArray.length - 1 && newTag.join('') !== '' && !delimiters.includes(charArray[i])) {
					tags.push(newTag.join('').trim());
				}
			}

			props.onAddTag && props.onAddTag(tags);
			setValue('');
		} else {
			setValue(e.target.value);
		}

		props.onChange && props.onChange(e);
	};

	const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		const delimiters = props.delimiters && getConvertedDelimiters(props.delimiters);

		const key = e.key;
		const keyCode = e.keyCode;

		if (value && delimiters && (delimiters.includes(key) || delimiters.includes(keyCode))) {
			e.preventDefault();
			props.onAddTag && props.onAddTag(value.toString());
			setValue('');
		}

		props.onKeyDown && props.onKeyDown(e);
	};

	return (
		<StyledTagInput
			boxAs="input"
			value={value}
			onChange={onChange}
			// onPaste={onPaste}
			onKeyDown={onKeyDown}
			autoFocus
			{...props}
		/>
	);
});

TagInput.defaultProps = {
	className: '',
	delimiters: ['Enter', 13],
	style: {},
};

TagInput.displayName = 'TagInput';

/**
 * TagClose
 */
export const TagClose: React.FC<IBoxComponentProps> = withMooskinContext((props) => {
	return <StyledTagClose {...props} />;
});

TagClose.defaultProps = {
	className: '',
	style: {},
};

TagClose.displayName = 'TagClose';

/**
 * TagText
 */
export const TagText: React.FC<IBoxComponentProps> = withMooskinContext((props) => {
	return <StyledTagText {...props} />;
});

TagText.defaultProps = {
	className: '',
	style: {},
};

TagText.displayName = 'TagText';

/**
 * Helpers
 */
const shouldSubmitPaste = (value: string, delimiters?: Array<string | number>) => {
	if (delimiters) {
		const text = value.split('');

		for (const char of text) {
			for (const delimiter of delimiters) {
				if (typeof delimiter === 'string' && char === delimiter) {
					return true;
				} else if (typeof delimiter === 'number' && char.charCodeAt(0) === delimiter) {
					return true;
				}
			}
		}
	}

	return false;
};

const getConvertedDelimiters = (delimiters: any) => {
	const newDelimiters: Array<string | number> = delimiters.map((delimiter: any) => {
		if (delimiter === ' ') {
			return delimiter;
		} else if (!isNaN(delimiter)) {
			return parseInt(delimiter, 10);
		} else if (typeof delimiter === 'string') {
			return delimiter.toLocaleLowerCase();
		} else {
			return delimiter;
		}
	});

	if (newDelimiters.includes('space') || newDelimiters.includes('spacebar') || newDelimiters.includes(' ')) {
		!newDelimiters.includes(32) && newDelimiters.push(32);
	}
	if (newDelimiters.includes('enter')) {
		!newDelimiters.includes(13) && newDelimiters.push(13);
	}
	if (newDelimiters.includes(',')) {
		!newDelimiters.includes(188) && newDelimiters.push(188);
	}
	if (newDelimiters.includes('.')) {
		!newDelimiters.includes(190) && newDelimiters.push(190);
	}

	return newDelimiters;
};

// const checkValidity = (tag: string, validateTag?: 'email' | ((tag: string) => boolean)) => {
//     if (validateTag){
//         if (typeof validateTag === 'string' && validateTag === 'email'){
//             return checkIfEmail(tag);
//         } else if (typeof validateTag === 'function' && typeof validateTag !== 'string'){
//             return validateTag(tag);
//         }
//         return false;
//     }
//     return true;
// };

// const checkIfEmail = (tag: string) => {
//     // tslint:disable-next-line
//     const re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s
//      @\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
//     return re.test(tag);
// };
