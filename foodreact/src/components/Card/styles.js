import styled from "styled-components";

export const StyledCard = styled.a`
  width: 200px;
  height: 300px;
  border-radius: 3px;
  background-color: aliceblue;
  color: black;
  margin: 10px;
  text-decoration: none;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: left;
  padding: 15px 10px;
`;

export const StyledImage = styled.img`
  width: 100%;
  min-height: 150px;
  display: block;
  object-fit: cover;
  border-radius: 3px;
`;
