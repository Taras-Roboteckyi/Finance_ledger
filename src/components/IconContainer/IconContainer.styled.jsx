import styled from 'styled-components';

export const IconsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconsItem = styled.li`
  :not(:last-child) {
    margin-right: 25px;
  }
`;

export const Link = styled.a`
  color: ${props => props.theme.colors.$white};

  :hover,
  :focus {
    opacity: ${prop => prop.opacity};
    color: ${prop => prop.iconHoverColor};
  }
`;

export const LinkYoutube = styled.a`
  color: ${props => props.theme.colors.$white};
  :hover,
  :focus {
    opacity: ${prop => prop.opacity};
    color: ${prop => prop.iconHoverColor};
  }
`;
