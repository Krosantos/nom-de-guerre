import React from 'react';
import styles from './UnitCard.scss';

const UnitCard = ({
	name,
	color,
	cost,
}) => (
	<div
		className={styles.unitCard}
	>
		{name}
		{color}
		{cost}
	</div>
);

export default UnitCard;
