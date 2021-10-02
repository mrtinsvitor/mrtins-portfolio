import React from 'react';
import { StyledHorizontalDivider, StyledVerticalDivider } from './styles';

interface IProps {
	width?: number;
	height?: number;
	vertical?: boolean;
}

const Divider: React.FC<IProps> = ({ vertical, ...props }) =>
	vertical ? (
		<StyledVerticalDivider {...props} />
	) : (
		<StyledHorizontalDivider {...props} />
	);

export default Divider;
