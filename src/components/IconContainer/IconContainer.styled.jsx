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
  :hover,
  :focus {
    opacity: ${prop => prop.opacity};
    color: ${prop => prop.iconHoverColor};
  }

  :not(:last-child) {
    margin-right: 25px;
  }
`;

export const LinkYoutube = styled.a`
  color: ${props => props.theme.colors.$white};
  :hover,
  :focus {
    opacity: ${prop => prop.opacity};
    color: ${prop => prop.iconHoverColor};
  }

  margin-right: 25px;

  padding-top: 5px;
`;
