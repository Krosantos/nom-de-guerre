import React from 'react';
import { pick } from 'lodash';
import validHtmlAttributes from './validHtmlAttributes';

const BaseComponent = (component = 'div') => {
	const Cleaned = ({
		as = component,
		innerRef,
		children,
		className,
		...props
	}) => {
		const cleanProps = pick(props, validHtmlAttributes);
		cleanProps.className = className;
		return React.createElement(
			as,
			{
				ref: innerRef,
				...cleanProps,
			},
			children
		);
	};
	return Cleaned;
};

export default BaseComponent;
