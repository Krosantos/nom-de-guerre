import { defaultProps } from 'recompose';
import Box from './Box';

const asImage = defaultProps({ as: 'img' });
const Image = asImage(Box);

export default Image;
