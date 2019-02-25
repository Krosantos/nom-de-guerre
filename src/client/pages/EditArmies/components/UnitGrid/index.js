import { withProps } from 'recompose';
import { map } from 'lodash';
import UnitGrid from './UnitGrid';
import testData from './testData.json';

const withTestUnits = withProps({
	unitIds: map(testData, (unit) => unit.id),
});

export default withTestUnits(UnitGrid);
