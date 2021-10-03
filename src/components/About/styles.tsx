import styled from 'styled-components';
import Image from 'next/image';

export const StyledSkillsContainer = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
`;

export const StyledSkillImage = styled.div`
	margin: 0 15px;

	&:hover {
		cursor: pointer;
	}
`;
