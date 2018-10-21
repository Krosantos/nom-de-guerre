import { Button } from '@styled';

const MainButton = Button.extend.attrs({
	bg: 'wine',
	borderColor: 'smoke',
	borderWidth: '1px',
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

export default MainButton;
