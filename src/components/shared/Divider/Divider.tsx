import React from 'react';
import { StyledHorizontalDivider, StyledVerticalDivider } from './styles';

interface IProps {
	width?: number;
	height?: number;
	vertical?: boolean;
  style?: Record<string, unknown>;
}

const Divider: React.FC<IProps> = ({ vertical, ...props }) =>
	vertical ? (
		<StyledVerticalDivider {...props} />
	) : (
		<StyledHorizontalDivider {...props} />
	);

export default Divider;
