import styled, { css } from 'styled-components';
import {
	active,
	borderColor,
	borderRadius,
	borderWidth,
	boxShadow,
	color,
	disabled,
	focus,
	fontSize,
	fontWeight,
	hover,
	space,
	width,
} from 'styled-system';
import cssProps from './cssProps';

const commonStyles = css`
	${hover};
	${active};
	${borderRadius};
	${borderWidth};
	${borderColor};
	${color};
	${disabled};
	${focus};
	${fontSize};
	${boxShadow};
	${space};
	${fontWeight};
	${width};
	${Object.keys(cssProps).map((key) => cssProps[key])};
`;

export const Box = styled.div`
    ${commonStyles};
`;
Box.displayName = 'Box';

export const Text = styled.span`
	${commonStyles};
`;
Text.displayName = 'Text';

export const Button = styled.button`
	${commonStyles};
`;
Button.displayName = 'Button';

export const Image = styled.img`
	${commonStyles};
`;
Image.displayName = 'Image';

export const Svg = styled.svg`
	${commonStyles};
`;
Svg.displayName = 'Svg';
