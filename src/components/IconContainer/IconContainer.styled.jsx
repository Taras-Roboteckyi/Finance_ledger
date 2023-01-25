import styled from 'styled-components';

export const ContainerIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Link = styled.a`
  color: ${props => props.theme.colors.$white};
  /* width: 35px;
    height: 35px; */
  :hover {
    opacity: 0.8;
    color: ${prop => prop.iconhovercolor};
  }

  :not(:last-child) {
    margin-right: 25px;
  }
`;
