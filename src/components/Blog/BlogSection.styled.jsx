import styled from 'styled-components';

export const Section = styled.section`
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

export const ImgBlog = styled.img`
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 493px;
    min-width: 368px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    height: 460px;
    min-width: 670px;
  }
`;

export const BlogContainer = styled.div`
  background-color: ${props => props.theme.colors.$bgColor};
  color: ${props => props.theme.colors.$white};

  padding: 48px 20px 58px 20px;
  font-size: 16px;
  line-height: 22px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 59px 32px;
    font-size: 18px;
    line-height: 25px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 80px 20px 80px 28px;
  }
`;

export const DataText = styled.p`
  margin-bottom: 16px;
`;

export const Title = styled.h4`
  font-size: 32px;
  font-weight: 400;
  line-height: 44px;
  margin-bottom: 24px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 40px;
    line-height: 55px;
  }
`;

export const Text = styled.p`
  margin-bottom: 24px;
`;
