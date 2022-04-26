import styled, { css } from "styled-components";

export const ButtonStyled = styled.button`
  padding: 15px 40px;
  color: white;
  font-weight: bold;
  border: 0;
  font-size: 20px;
  border-radius: 3px;
  display: inline-block;
  margin-bottom: 10px;
  background-color: black;
  margin: 10px;
  cursor: pointer;

  &:hover {
    background-color: goldenrod;
  }

  ${(props) =>
    props.primary &&
    css`
      background: hotpink;
      color: white;

      &:hover {
        background-color: tomato;
      }
    `}
`;
