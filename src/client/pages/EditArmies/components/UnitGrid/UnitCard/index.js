import { withProps } from 'recompose';
import { get } from 'lodash';
import UnitCard from './UnitCard';
import testData from '../testData.json';

const withUnit = withProps(({ unitId }) => get(testData, unitId, {}));

export default withUnit(UnitCard);
