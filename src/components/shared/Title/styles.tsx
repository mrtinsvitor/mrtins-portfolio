import styled from 'styled-components';

interface IProps {
	fontFamily?: string;
	fontWeight?: string;
	fontSize?: string;
	color?: string;
}

export const StyledTitle = styled.h2<IProps>`
	font-family: ${(props: IProps) => `${props.fontFamily || 'Raleway'}`};
	font-weight: ${(props: IProps) => `${props.fontWeight || 300}`};
	font-size: ${(props: IProps) => `${props.fontSize || '1.8rem'}`};
	color: ${(props: IProps) => `${props.color || '#fff'}`};
	margin: 0 auto;
`;
