import React from 'react';
import styled from 'styled-components';
import { Button } from '@styled';
const StyledButton = styled(Button).attrs({
	bg: 'wine',
	border: 'none',
	color: 'pale',
	cursor: 'pointer',
	display: 'block',
	fontFamily: 'Cinzel',
	fontSize: '2rem',
	active: {
		backgroundColor: 'wood',
	},
	hover: {
		backgroundColor: 'blood',
	},
})`
    transition: background-color 350ms;
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
