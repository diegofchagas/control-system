import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap:wrap;
  gap: 1rem;

  @media (max-width: 700px) {
    width:100%;
    flex-direction: column;
  }
`;
