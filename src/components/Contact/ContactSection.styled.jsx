import styled from 'styled-components';

export const Section = styled.section`
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-flex;
    padding-bottom: 40px;
    min-height: 354px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding-bottom: 0px;
    min-height: 454px;
    /* Ф */
  }
`;
export const ImgWrapper = styled.div`
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    min-height: 354px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    min-height: 454px;
  }
`;

export const ImgContact = styled.img`
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    /*  min-width: 390px; */
    min-height: 354px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    min-height: 454px;
    /*  min-width: 670px; */
  }
`;

export const ContactsContainer = styled.div`
  background-color: #f4f4f4;
  color: ${props => props.theme.colors.$white};

  padding: 50px 20px 25px 20px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    min-width: 340px;
    padding: 32px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 56px 28px 77px 20px;
    min-width: 690px;
  }
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
