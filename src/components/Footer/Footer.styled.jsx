import styled from 'styled-components';

export const FooterStyled = styled.footer`
  background-color: ${props => props.theme.colors.$textColor};
  padding: 20px 30px;
`;

export const FooterText = styled.p`
  color: ${props => props.theme.colors.$white};

  text-align: center;
  font-size: 16px;
  line-height: 22px;
  margin-top: 10px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 18px;
    line-height: 25px;
  }
`;
