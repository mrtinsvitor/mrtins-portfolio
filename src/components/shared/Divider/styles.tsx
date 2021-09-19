import styled from 'styled-components';

export const StyledHorizontalDivider = styled.hr`
  width: ${(props: { width: string }) => `${props.width}vw`};
  border-top: 1px solid #3282b8;
  margin: 10px auto;
`;

export const StyledVerticalDivider = styled.div`
  height: ${(props: { height: string }) => `${props.height}vw`};
  border-left: 1px solid #3282b8;
`;
