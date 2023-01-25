import styled from 'styled-components';

export const Section = styled.section`
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
  }
`;

export const ImgContact = styled.img`
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 354px;
    min-width: 368px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    height: 454px;
    min-width: 670px;
  }
`;

export const ContactsContainer = styled.div`
  background-color: #f4f4f4;
  color: ${props => props.theme.colors.$white};

  padding: 50px 20px 25px 20px;
  /* font-size: 16px;
  line-height: 22px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 62px 32px;
    font-size: 18px;
    line-height: 25px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 80px 28px 86px 20px;
  } */
`;

export const Title = styled.h6`
  font-size: 32px;
  line-height: 48px;
  color: ${props => props.theme.colors.$textColor};
  text-align: center;
  margin-bottom: 70px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-bottom: 31px;
  }
`;
