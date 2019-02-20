import React from 'react';
import styled from 'styled-components';
import { Button } from '@styled';
import { themeGet } from 'styled-system';

const StyledButton = styled(Button).attrs({
	bg: 'wine',
	border: 'none',
	color: 'pale',
	cursor: 'pointer',
	display: 'block',
	fontFamily: 'Cinzel',
	fontSize: '2rem',
	transition: 'background-color 350ms',
})`
	:hover {
		background-color: ${themeGet('colors.blood')};
	}
	:active {
		background-color: ${themeGet('colors.wood')};
	}
`;
const MainMenuButton = ({
	children,
	className,
	handleClick,
}) => (
	<StyledButton
		className={className}
		onClick={handleClick}
	>
		{children}
	</StyledButton>
);

export default Button.withComponent(MainMenuButton);
