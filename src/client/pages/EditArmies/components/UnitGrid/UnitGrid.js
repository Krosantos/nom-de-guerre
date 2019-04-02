import React from 'react';
import { map } from 'lodash';
import UnitCard from './UnitCard';
import styles from './styles.scss';

const UnitGrid = ({ unitIds }) => (
	<div
		className={styles.unitGrid}
	>
		{
			map(unitIds, (unitId) => (<UnitCard key={unitId} unitId={unitId} />))
		}
	</div>
);

export default UnitGrid;
