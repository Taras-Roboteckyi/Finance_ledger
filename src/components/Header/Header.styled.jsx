import styled from 'styled-components';

export const Heading = styled.header`
  position: fixed;
  z-index: 100;
  padding-top: 22px;
  padding-bottom: 12px;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  /* animation: animateY 1000ms; */
  transition: transform 2000ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: ${prop => (prop.scrolled ? 'rgba(0, 0, 0, 0.6)' : 'unset')};
  /* @media (max-width: 480px) {
    width: 480px;
  } */

  /*   @keyframes animateY {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(110px);
    }

    100% {
      transform: translateY(0);
    }
  } */
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding-bottom: 0px;
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding-top: 35px;
  }
`;

export const HeaderContainer = styled.div`
  /* padding-left: 20px;
  padding-right: 20px; */
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 32px;
    padding-right: 32px;
  }

  /* ul {
    display: flex;
    justify-content: center;
    font-size: 16px;
    line-height: 22px;
    color: ${props => props.theme.colors.$white};
    a {
      padding-top: 6px;
      padding-bottom: 6px;
    }
    li:not(:last-child) {
      margin-right: 12px;
    }
    li :hover {
      border-bottom: 4px solid ${props => props.theme.colors.$styleColor};
    }
  }
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    ul {
      font-size: 18px;
      line-height: 25px;
      margin-left: auto;
      li:not(:last-child) {
        margin-right: 20px;
      }
    }
  }
  @media (min-width: 1360px) {
    ul > li:not(:last-child) {
      margin-right: 43px;
    }
  } ; */
`;
