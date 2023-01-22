import styled from 'styled-components';
import HeroImg1x from '../../images/home/showcase.jpg';
import HeroImg2x from '../../images/home/showcase@2x.jpg';

export const Section = styled.section`
  /* max-width: 480px;
  min-height: 533px; */
  margin-left: auto;
  margin-right: auto;
  /* text-align: center; */
  color: ${props => props.theme.colors.$white};
  background-color: #00000040; // 40 - aльфа канал який додає прозорість
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${HeroImg1x});
  background-position: center;
  background-size: cover;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${HeroImg2x});
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    /* max-width: 768px;
    min-height: 1024px; */
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    /* max-width: 1360px;
    min-height: 768px; */
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleHero = styled.h1`
  font-weight: 600;
  font-size: 40px;
  line-height: 1.35;
  padding-top: 160px;
  padding-left: 40px;
  padding-right: 40px;
  margin-bottom: 16px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 55px;
    line-height: 75px;
    padding-top: 378px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding-top: 272px;
  }
`;

export const TextHero = styled.p`
  font-size: 26px;
  line-height: 32px;
  margin-bottom: 24px;
  text-align: center;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 40px;
    line-height: 48px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    line-height: 54px;
  }
`;
