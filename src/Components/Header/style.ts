import styled from "styled-components";

export const HeaderContainer = styled.header`
display:grid;
align-items:center;
grid-template-columns: 300px auto;

@media (max-width:1000px) {
  grid-template-columns: auto;
}
`;

export const MonthsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap:1rem;
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;
  h2 {
    font-size: 1.75rem;
    font-weight: 700;
    color: #214889;
  }
`;
