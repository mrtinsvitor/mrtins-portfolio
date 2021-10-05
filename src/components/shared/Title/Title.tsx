import React from 'react';
import { StyledTitle } from './styles';

interface IProps {
	style?: Record<string, unknown>;
	fontFamily?: string;
	fontWeight?: string;
	fontSize?: string;
	color?: string;
}

const Title: React.FC<IProps> = (props) => (
	<StyledTitle style={props.style} {...props} />
);

export default Title;
