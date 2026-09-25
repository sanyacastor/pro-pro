import { Tooltip as ReactTooltip } from 'react-tooltip';
import styled from 'styled-components';

import 'react-tooltip/dist/react-tooltip.css';

const StyledTooltip = styled(ReactTooltip)`
  opacity: 1 !important;
  z-index: 30;
`;

export const Tooltip = ({ id, ...rest }) => (
  <StyledTooltip
    id={id}
    style={{
      'max-width': '300px',
      padding: '18px 25px',
      backgroundColor: '#f2ecec',
      'border-radius': '15px',
      'font-family': 'Piazzolla',
      'font-style': 'normal',
      'font-weight': 400,
      'font-size': '14px',
      'line-height': '131.5%',
      color: '#000',
      opacity: '1 !important',
    }}
    {...rest}
  />
);
