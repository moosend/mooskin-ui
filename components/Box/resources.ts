interface ISupportedStyleProps {
	[key: string]: {
		property: string;
		processedValue?: boolean;
		usePallete?: boolean;
	};
}

export const SupportedStyleProps: ISupportedStyleProps = {
	m: {
		processedValue: true,
		property: 'margin'
	},
	mt: {
		processedValue: true,
		property: 'margin-top'
	},
	mr: {
		processedValue: true,
		property: 'margin-right'
	},
	mb: {
		processedValue: true,
		property: 'margin-bottom'
	},
	ml: {
		processedValue: true,
		property: 'margin-left'
	},
	p: {
		processedValue: true,
		property: 'padding'
	},
	pt: {
		processedValue: true,
		property: 'padding-top'
	},
	pr: {
		processedValue: true,
		property: 'padding-right'
	},
	pb: {
		processedValue: true,
		property: 'padding-bottom'
	},
	pl: {
		processedValue: true,
		property: 'padding-left'
	},
	fontColor: {
		property: 'color',
		usePallete: true
	},
	fontFamily: {
		property: 'font-family'
	},
	fontSize: {
		property: 'font-size'
	},
	fontWeight: {
		property: 'font-weight'
	},
	lineHeight: {
		property: 'line-height'
	},
	textAlign: {
		property: 'text-align'
	},
	fontStyle: {
		property: 'font-style'
	},
	textTransform: {
		property: 'text-transform'
	},
	textDecoration: {
		property: 'text-decoration'
	},
	whiteSpace: {
		property: 'white-space'
	},
	w: {
		processedValue: true,
		property: 'width'
	},
	h: {
		processedValue: true,
		property: 'height'
	},
	minW: {
		processedValue: true,
		property: 'min-width'
	},
	maxW: {
		processedValue: true,
		property: 'max-width'
	},
	minH: {
		processedValue: true,
		property: 'min-height'
	},
	maxH: {
		processedValue: true,
		property: 'max-height'
	},
	d: {
		property: 'display'
	},
	overflow: {
		property: 'overflow'
	},
	overflowY: {
		property: 'overflow-y'
	},
	overflowX: {
		property: 'overflow-x'
	},
	align: {
		property: 'align-items'
	},
	alignContent: {
		property: 'align-content'
	},
	alignSelf: {
		property: 'align-self'
	},
	justify: {
		property: 'justify-content'
	},
	justifyItems: {
		property: 'justify-items'
	},
	justifySelf: {
		property: 'justify-self'
	},
	flexWrap: {
		property: 'flex-wrap'
	},
	direction: {
		property: 'flex-direction'
	},
	flex: {
		property: 'flex'
	},
	flexGrow: {
		property: 'flex-grow'
	},
	flexShrink: {
		property: 'flex-shrink'
	},
	flexBasis: {
		processedValue: true,
		property: 'flex-basis'
	},
	order: {
		property: 'order'
	},
	bg: {
		property: 'background'
	},
	bgImage: {
		property: 'background-image'
	},
	bgColor: {
		property: 'background-color',
		usePallete: true
	},
	bgSize: {
		property: 'background-size'
	},
	bgPosition: {
		property: 'background-position'
	},
	bgRepeat: {
		property: 'background-repeat'
	},
	border: {
		property: 'border'
	},
	borderStyle: {
		property: 'border-style'
	},
	borderColor: {
		property: 'border-color',
		usePallete: true
	},
	borderWidth: {
		processedValue: true,
		property: 'border-width'
	},
	borderTop: {
		property: 'border-top'
	},
	borderTopStyle: {
		property: 'border-top-style'
	},
	borderTopColor: {
		property: 'border-top-color',
		usePallete: true
	},
	borderTopWidth: {
		processedValue: true,
		property: 'border-top-width'
	},
	borderRight: {
		property: 'border-right'
	},
	borderRightStyle: {
		property: 'border-right-style'
	},
	borderRightColor: {
		property: 'border-right-color',
		usePallete: true
	},
	borderRightWidth: {
		processedValue: true,
		property: 'border-right-width'
	},
	borderBottom: {
		property: 'border-bottom'
	},
	borderBottomStyle: {
		property: 'border-bottom-style'
	},
	borderBottomColor: {
		property: 'border-bottom-color',
		usePallete: true
	},
	borderBottomWidth: {
		processedValue: true,
		property: 'border-bottom-width'
	},
	borderLeft: {
		property: 'border-left'
	},
	borderLeftStyle: {
		property: 'border-left-style'
	},
	borderLeftColor: {
		property: 'border-left-color',
		usePallete: true
	},
	borderLeftWidth: {
		processedValue: true,
		property: 'border-left-width'
	},
	borderRadius: {
		processedValue: true,
		property: 'border-radius'
	},
	borderTopLeftRadius: {
		processedValue: true,
		property: 'border-top-left-radius'
	},
	borderTopRightRadius: {
		processedValue: true,
		property: 'border-top-right-radius'
	},
	borderBottomRightRadius: {
		processedValue: true,
		property: 'border-bottom-right-radius'
	},
	borderBottomLeftRadius: {
		processedValue: true,
		property: 'border-bottom-left-radius'
	},
	position: {
		property: 'position'
	},
	zIndex: {
		property: 'z-index'
	},
	top: {
		processedValue: true,
		property: 'top'
	},
	right: {
		processedValue: true,
		property: 'right'
	},
	bottom: {
		processedValue: true,
		property: 'bottom'
	},
	left: {
		processedValue: true,
		property: 'left'
	},
	boxShadow: {
		property: 'box-shadow'
	},
	animation: {
		property: 'animation'
	},
	visibility: {
		property: 'visibility'
	},
	opacity: {
		property: 'opacity'
	},
	cursor: {
		property: 'cursor'
	},
	all: {
		property: 'all'
	},
	transition: {
		property: 'transition'
	},
	textOverflow: {
		property: 'text-overflow'
	},
	gridTemplateColumns: {
		property: 'grid-template-columns'
	},
	wordBreak: {
		property: 'word-break'
	}
};
