import React from 'react';
import MainMenuButton from './MainMenuButton';
import { EDIT_ARMY_PAGE } from '@constants';
import styles from './styles.scss';

const MAIN_TITLE = 'Nom de Guerre';
const FIND_MATCH = 'Find Match';
const EDIT = 'Edit Armies';
const SETTINGS = 'Settings';

const MainMenu = () => (
	<div className={styles.mainMenu}>
		<span className={styles.title}>
			{MAIN_TITLE}
		</span>
		<MainMenuButton>
			{FIND_MATCH}
		</MainMenuButton>
		<MainMenuButton pageType={EDIT_ARMY_PAGE}>
			{EDIT}
		</MainMenuButton>
		<MainMenuButton>
			{SETTINGS}
		</MainMenuButton>
	</div>
);

export default MainMenu;
