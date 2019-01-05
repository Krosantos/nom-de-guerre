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
Button.defaultProps = { outline: '0px' };
Button.displayName = 'Button';
export const Image = styled.img`
	${commonStyles};
`;
Image.defaultProps = { alt: '' };
Image.displayName = 'Image';
export const StyledSvg = styled.svg`
${commonStyles};
`;
StyledSvg.defaultProps = { alt: '' };
StyledSvg.displayName = 'Svg';
export const Path = styled.path`
${commonStyles};
`;
Path.displayName = 'Path';
