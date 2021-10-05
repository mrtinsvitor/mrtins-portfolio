import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { StyledCircle } from './styles';

interface IProps {
	icon?: any;
	containerStyle?: Record<string, unknown>;
	iconStyle?: Record<string, unknown>;
	color?: string;
	hover?: boolean;
	children?: React.ReactNode;
	href: string;
	target?: string;
}

const CircleIcon: React.FC<IProps> = ({
	icon,
	iconStyle,
	containerStyle,
	color,
	hover = true,
	href,
	target,
}) => (
	<StyledCircle
		href={href}
		target={target}
		style={containerStyle}
		hover={hover}
	>
		<FontAwesomeIcon icon={icon} style={iconStyle} color={color} />
	</StyledCircle>
);

export default CircleIcon;
