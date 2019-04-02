import React from 'react';
import styles from './styles.scss';

const MainMenuButton = ({
	children,
	handleClick,
}) => (
	<button
		className={styles.mainMenuButton}
		onClick={handleClick}
		type="button"
	>
		{children}
	</button>
);

export default MainMenuButton;
