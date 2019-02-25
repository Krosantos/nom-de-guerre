import { defaultProps } from 'recompose';
import styled from 'styled-components';
import Box from './Box';

const NoDefaultStyling = styled(Box)`
    border-style: solid;
    outline: none;
`;

const asButton = defaultProps({ as: 'button', borderWidth: '0px' });
const Button = asButton(NoDefaultStyling);

export default Button;
