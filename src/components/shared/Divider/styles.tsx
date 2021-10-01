import styled from 'styled-components';

type IProps = {
	width?: number;
	height?: number;
	vertical?: boolean;
};

export const StyledHorizontalDivider = styled.hr<IProps>`
	width: ${(props) => `${props.width}vw`};
	border-top: 1px solid #3282b8;
	margin: 10px auto;
`;

export const StyledVerticalDivider = styled.div<IProps>`
	height: ${(props) => (props.height ? `${props.height}vw` : 'auto')};
	border-left: 1px solid #3282b8;
`;
