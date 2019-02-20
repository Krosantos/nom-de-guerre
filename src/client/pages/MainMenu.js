import React from 'react';
import { Box, Text } from '@styled';
import MainMenuButton from '@components/MainMenuButton';
import constants from 'constants';

const MAIN_TITLE = 'Nom de Guerre';
const FIND_MATCH = 'Find Match';
const EDIT = 'Edit Armies';
const SETTINGS = 'Settings';

const fontSize = ['4rem', '5rem'];

const MainMenu = () => (
	<Box display="flex" flexDirection="column" height="100%">
		<Text
			color="smoke"
			display="block"
			fontFamily="Cinzel"
			fontSize={fontSize}
			mx="auto"
			my="5rem"
			textAlign="center"
		>
			{MAIN_TITLE}
		</Text>
		<MainMenuButton mt="2rem">
			{FIND_MATCH}
		</MainMenuButton>
		<MainMenuButton mt="2rem" pageType={constants.EDIT_ARMY_PAGE}>
			{EDIT}
		</MainMenuButton>
		<MainMenuButton mt="2rem">
			{SETTINGS}
		</MainMenuButton>
	</Box>
);

export default MainMenu;
