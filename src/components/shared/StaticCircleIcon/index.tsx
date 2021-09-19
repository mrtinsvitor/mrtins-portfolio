import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { StyledCircle } from './styles';

interface IProps {
  icon?: any;
  containerStyle?: Record<string, unknown>;
  iconStyle?: Record<string, unknown>;
  color?: string;
  children?: React.ReactNode;
}

const StaticCircleIcon: React.FC<IProps> = ({ icon, iconStyle, containerStyle, color }) => (
  <StyledCircle containerStyle={containerStyle}>
    <FontAwesomeIcon icon={icon} style={iconStyle} color={color} />
  </StyledCircle>
);

export default StaticCircleIcon;
