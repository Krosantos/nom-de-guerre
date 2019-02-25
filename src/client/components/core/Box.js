import styled from 'styled-components';
import {
	space,
	color,
	display,
	width,
	height,
	flex,
	alignItems,
	justifyContent,
	flexWrap,
	flexDirection,
	alignContent,
	justifyItems,
	justifySelf,
	alignSelf,
	order,
	flexBasis,
	borderRadius,
	borderColor,
	fontFamily,
	fontWeight,
	lineHeight as lineHeightStyle,
	letterSpacing as letterSpacingStyle,
	fontSize as fontSizeStyle,
	background,
	backgroundImage,
	backgroundSize,
	backgroundPosition,
	backgroundRepeat,
	textAlign,
	boxShadow,
	overflow,
	maxHeight,
	maxWidth,
	position,
	top,
	left,
	right,
	bottom,
} from 'styled-system';
import {
	borderWidth,
	fill,
	overflowY,
	stroke,
	visibility,
} from './customStyles';

const Box = styled.div`    
    ${color}
    ${space}
    ${borderWidth}
    ${display}
    ${flex}
    ${width}
    ${height}
    ${alignItems}
    ${justifyContent}
    ${flexWrap}
    ${flexDirection}
    ${alignContent}
    ${justifyItems}
    ${justifySelf}
    ${alignSelf}
    ${order}
    ${overflowY}
    ${flexBasis}
    ${borderRadius}
    ${borderColor}
    ${fontFamily}
    ${fontWeight}
    ${lineHeightStyle}
    ${letterSpacingStyle}
    ${fontSizeStyle}
    ${background}
    ${backgroundImage}
    ${backgroundSize}
    ${backgroundPosition}
    ${backgroundRepeat}
    ${textAlign}
    ${boxShadow}
    ${overflow}
    ${maxHeight}
    ${maxWidth}
    ${visibility}
    ${position}
    ${top}
    ${left}
    ${bottom}
    ${right}
    ${fill}
    ${stroke}
`;

export default Box;
