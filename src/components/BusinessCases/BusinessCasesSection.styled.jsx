import styled from 'styled-components';

export const Section = styled.section`
  padding: 56px 20px 40px 20px;
  font-size: 16px;
  line-height: 22px;
  color: ${props => props.theme.colors.$textColor};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 48px 32px 40px 32px;
    font-size: 18px;
    line-height: 25px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding-top: 90px;
    padding-bottom: 80px;
  }
`;

export const Paragraph = styled.p`
  text-align: center;
  margin-bottom: 16px;
`;

export const Title = styled.h3`
  font-size: 32px;
  line-height: 44px;
  text-align: center;
  margin-bottom: 24px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 40px;
    line-height: 54px;
  }
`;

export const Text = styled.p`
  margin-bottom: 30px;
  text-align: center;
`;
