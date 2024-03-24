import styled from 'styled-components';

export const Button = styled.button`
  background-color:#214889;
  border:none;
  border-radius:6px;
  font-family: "Inter", sans-serif;
  font-size:.875rem;
  font-weight:700;
  padding: .656rem 1rem;
  line-height:1rem;
  color: #fff;
  cursor: pointer;
  transition:background-color 1s;

  &:hover{
    background-color:#19A6EF;
  }
`;