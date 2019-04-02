import React from 'react';
import Army from './components/Army';
import UnitGrid from './components/UnitGrid';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import styles from './styles.scss';

const EditArmies = () => (
	<div className={styles.outer}>
		<Army />
		<div
			className={styles.inner}
			id="REST OF THE PAGE"
		>
			<TopBar />
			<UnitGrid />
			<BottomBar />
		</div>
	</div>
);

export default EditArmies;
