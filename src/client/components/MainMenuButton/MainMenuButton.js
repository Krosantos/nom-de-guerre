import React from 'react';
import { Button } from '@styled';

const StyledButton = Button.extend.attrs({
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
