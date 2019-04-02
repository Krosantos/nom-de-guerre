import React from 'react';
import HexGrid from '@components/HexGrid';
import styles from './styles.scss';

const Army = () => (
	<div
		className={styles.army}
		id="I AM THE COHORT AND AUXILIARY"
	>

		<HexGrid size={100} x={4} y={8} />
	</div>
);

export default Army;
