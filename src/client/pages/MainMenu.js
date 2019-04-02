import React from 'react';
import { Box, Text } from '@core';
import MainMenuButton from '@components/MainMenuButton';
import { EDIT_ARMY_PAGE } from '@constants';

const MAIN_TITLE = 'Nom de Guerre';
const FIND_MATCH = 'Find Match';
const EDIT = 'Edit Armies';
const SETTINGS = 'Settings';
const titleFontSize = [9, 10];

const MainMenu = () => (
	<Box display="flex" flexDirection="column" height="100%">
		<Text
			color="smoke"
			display="block"
			fontFamily="Cinzel"
			fontSize={titleFontSize}
			mx="auto"
			my="5rem"
			textAlign="center"
		>
			{MAIN_TITLE}
		</Text>
		<MainMenuButton>
			{FIND_MATCH}
		</MainMenuButton>
		<MainMenuButton pageType={EDIT_ARMY_PAGE}>
			{EDIT}
		</MainMenuButton>
		<MainMenuButton>
			{SETTINGS}
		</MainMenuButton>
	</Box>
);

export default MainMenu;
