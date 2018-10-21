import React from 'react';
import { Box, Text } from '@styled';
import MainButton from '@components/MainButton';

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
			Nom de Guerre
		</Text>
		<MainButton mt="2rem">
			Find Match
		</MainButton>
		<MainButton mt="2rem">
			Edit Armies
		</MainButton>
		<MainButton mt="2rem">
			Settings
		</MainButton>
	</Box>
);

export default MainMenu;
