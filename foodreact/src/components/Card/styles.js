import styled from "styled-components";

export const CardStyled = styled.div`
  width: 230px;
  height: 290px;
  background-color: hotpink;
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardResult = styled.div`
  width: 200px;
  height: 100px;
  background-color: rgb(208, 231, 252);
  color: black;

  box-shadow: 2px 1px 1px 1px black;
`;
