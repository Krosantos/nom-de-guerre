import { withProps } from 'recompose';
import Box from './Box';

const overwriteProps = withProps(({ fontSize }) => ({
	letterSpacing: fontSize,
	lineHeight: fontSize,
}));

const Text = overwriteProps(Box);

Text.defaultProps = {
	fontFamily: 'default',
	fontSize: 3,
};

export default Text;
