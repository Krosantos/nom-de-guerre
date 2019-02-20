import styled, { css } from 'styled-components';
import {
	borderColor,
	borderRadius,
	borders,
	boxShadow,
	color,
	fontSize,
	fontWeight,
	space,
	width,
} from 'styled-system';
import BaseComponent from './BaseComponent';
import cssProps from './cssProps';

const commonStyles = css`
	${borderRadius};
	${borders};
	${borderColor};
	${color};
	${fontSize};
	${boxShadow};
	${space};
	${fontWeight};
	${width};
	${Object.keys(cssProps).map((key) => cssProps[key])};
`;

export const Box = styled(BaseComponent('div'))`
    ${commonStyles};
`;
Box.displayName = 'Box';
export const Text = styled(BaseComponent('span'))`
	${commonStyles};
`;
Text.displayName = 'Text';
export const Button = styled(BaseComponent('button'))`
	${commonStyles};
`;
Button.defaultProps = { outline: '0px' };
Button.displayName = 'Button';
export const Image = styled(BaseComponent('img'))`
	${commonStyles};
`;
Image.defaultProps = { alt: '' };
Image.displayName = 'Image';
export const StyledSvg = styled(BaseComponent('svg'))`
${commonStyles};
`;
StyledSvg.defaultProps = { alt: '' };
StyledSvg.displayName = 'Svg';
export const Path = styled(BaseComponent('path'))`
${commonStyles};
`;
Path.displayName = 'Path';
