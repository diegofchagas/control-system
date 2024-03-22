import styled from 'styled-components';

export const ContainerSide = styled.div`
  background-color:#214889;
  padding:.625rem;
  border-radius:16px;

  h1{
    font-size:1.5rem;
    color:#fff;
    text-align:center;
    font-weight:700;
  }
`;

export const Nav = styled.nav`
margin-top:1rem;

ul{
  list-style-type:none;
}

li{
  display:flex;
  align-items:center;
  gap:.225rem;
  border-radius:6px;
  
}

li span{
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  padding:0 0.5rem;
}

li:not(.active-link):hover{
  font-weight:600;
  background-color:#7A91B8;
}

li a{
  flex: 1;
  text-decoration: none;
  color: #fff;
  padding: .625rem 0;
}

.active-link{
  background-color:#19A6EF;
}

li a.active{
  font-weight:700;
}

`;
