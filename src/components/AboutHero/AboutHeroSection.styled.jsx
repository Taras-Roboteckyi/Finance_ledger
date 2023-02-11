import styled from 'styled-components';

export const Section = styled.section`
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
  }
`;

export const ImgPeople = styled.img`
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 590px;
    min-width: 368px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    height: 460px;
    min-width: 670px;
  }
`;

export const AboutContainer = styled.div`
  background-color: ${props => props.theme.colors.$styleColor};
  color: ${props => props.theme.colors.$white};

  padding: 80px 20px;
  font-size: 16px;
  line-height: 22px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 62px 32px;
    font-size: 18px;
    line-height: 25px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 80px 28px 86px 20px;
  }
`;

export const TextProposition = styled.p`
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  font-size: 31px;
  font-weight: 400;
  line-height: 43px;
  margin-bottom: 24px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 40px;
    line-height: 48px;
  }
`;

export const Text = styled.p`
  margin-bottom: 24px;
`;
