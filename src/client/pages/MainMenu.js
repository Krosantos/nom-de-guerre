import React from 'react';
import { Box, Text } from '@styled';
import MainMenuButton from '@components/MainMenuButton';
import constants from 'constants';
const MainMenu = () => (
	<Box height="100%" display="flex" flexDirection="column">
		<Text
			fontFamily="Cinzel"
			color="smoke"
			fontSize={['4rem', '5rem']}
			display="block"
			textAlign="center"
			mx="auto"
			my="5rem"
		>
			{'Nom de Guerre'}
		</Text>
		<MainMenuButton mt="2rem">
			{'Find Match'}
		</MainMenuButton>
		<MainMenuButton mt="2rem" pageType={constants.EDIT_ARMY_PAGE}>
			{'Edit Armies'}
		</MainMenuButton>
		<MainMenuButton mt="2rem">
			{'Settings'}
		</MainMenuButton>
	</Box>
);
export default MainMenu;
