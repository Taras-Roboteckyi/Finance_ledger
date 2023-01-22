import styled from 'styled-components';

export const LinkHome = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  /* justify-content: center; */
  margin-bottom: 16px;
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.04);
    /* --tw-shadow: 0px 4px 20px rgba(32, 188, 198, 0.6), 0px 4px 10px #20bcc6;
    --tw-shadow-colored: 0px 4px 20px var(--tw-shadow-color), 0px 4px 10px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
      var(--tw-shadow); */
    filter: brightness(150%); // Змінює прозорість Лого
  }
  img {
    margin-right: 8px;
    width: 40px;
    height: 31px;
  }
  p {
    font-size: 28px;
    line-height: 38px;
    color: ${props => props.theme.colors.$styleColor};
  }
  span {
    color: ${props => props.theme.colors.$white};
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 0;
    p {
      font-size: 35px;
      line-height: 48px;
    }
  }
`;
