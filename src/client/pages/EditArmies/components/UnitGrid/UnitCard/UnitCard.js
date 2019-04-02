import React from 'react';
import styles from './UnitCard.scss';

const UnitCard = ({
	name,
	color,
	cost,
}) => (
	<div
		bg="wine"
		className={styles.unitCard}
		height="200px"
		m={2}
		width="150px"
	>
		{name}
		{color}
		{cost}
	</div>
);

export default UnitCard;
