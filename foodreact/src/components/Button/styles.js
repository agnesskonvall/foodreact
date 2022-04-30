import styled, { css } from "styled-components";

export const ButtonStyled = styled.button`
  padding: 10px 20px;
  color: white;
  font-weight: bold;
  border: 0;
  font-size: 15px;
  font-family: monospace;
  border-radius: 3px;
  display: inline-block;
  margin-bottom: 10px;
  background-color: black;
  margin: 10px;
  cursor: pointer;

  &:hover {
    background-color: goldenrod;
  }

  &:active {
    transform: scale(0.98);
    box-shadow: inset 0px 3px 4px rgba(0, 0, 0, 0.5);
  }

  ${(props) =>
    props.primary &&
    css`
      background: hotpink;
      color: white;
      font-size: 20px;
      padding: 10px 20px;

      &:hover {
        background-color: tomato;
      }
    `}
`;
