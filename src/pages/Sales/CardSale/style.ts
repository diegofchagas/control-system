import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 1rem;
  border-radius: 16px;
  border: 1px solid #214889;
  display: grid;
  grid-template-columns: auto auto 1fr;
  gap: 1rem;
  margin-bottom: 0.625rem;
  color: #214889;
  font-weight: 600;

  > div {
    display: flex;
    gap: 1rem;
  }

  > div a {
    color: #214889;
  }
`;
