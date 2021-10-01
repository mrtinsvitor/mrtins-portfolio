import styled, { css } from 'styled-components';

interface IProps {
  type?: string;
  outlined?: boolean;
  hoverColor?: string;
  backgroundColor?: string;
  fontFamily?: string;
  fontSize?: string;
  color?: string;
  width?: string;
}

export const StyledOutlinedButton = styled.button`
  background-color: transparent;
`;

export const StyledButton = styled.button<IProps>`
  background-color: ${(props) =>
    props.backgroundColor ? `${props.backgroundColor}` : '#3282B8'};
  font-family: ${(props) => (props.fontFamily ? `${props.fontFamily}` : 'Roboto')};
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}` : '.9rem')};
  color: ${(props) => (props.color ? `${props.color}` : '#fff')};
  border: 0;
  margin: 5px 10px;
  padding: 5px 30px;

  &:hover {
    background-color: ${(props) => (props.hoverColor ? `${props.hoverColor}` : '#007BFF')};
    transition: 0.5s;
  }

  &:focus {
    outline: none;
  }

  /* Outlined buttons */
  ${(props) =>
    props.outlined &&
    css`
      background-color: transparent;
      border: 1px solid;
      border-color: ${(props: IProps) =>
        props.backgroundColor ? `${props.backgroundColor}` : '#3282B8'};
    `}

  /* Button types */
  ${(props: IProps) =>
    props.type === 'pill'
      ? `border-radius: 50px;`
      : props.type === 'round'
      ? `border-radius: 3px;`
      : `border-radius: 0;`}
`;
