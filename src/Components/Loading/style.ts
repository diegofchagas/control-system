import styled, { keyframes } from 'styled-components';


export const Running = keyframes`
  to{
    transform: rotate(360deg);
  }
`

export const LoadingBox = styled.div`
  border: 2px solid black;
  border-right-color:blue;
  width: 2rem;
  height: 2rem;
  border-radius:50px;
  animation: ${Running} 1s infinite,
`;
