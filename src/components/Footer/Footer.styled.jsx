import styled from 'styled-components';

export const FooterStyled = styled.footer`
  /*   width: 100%; */
  background-color: ${props => props.theme.colors.$textColor};
  padding: 20px 30px;
  /* bottom: 0;
  left: 0; */
`;
/* export const FooterContainer = styled.div`
  padding-top: 29px;
  padding-bottom: 29px;
  display: grid;
  align-items: center;
  justify-items: center;
`; */
export const FooterText = styled.p`
  color: ${props => props.theme.colors.$white};
  /* padding-top: 29px;
  padding-bottom: 29px; */
  /*  display: grid;
  align-items: center;
  justify-items: center; */
  text-align: center;
  font-size: 16px;
  line-height: 22px;
  margin-top: 10px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 18px;
    line-height: 25px;
  }
`;
