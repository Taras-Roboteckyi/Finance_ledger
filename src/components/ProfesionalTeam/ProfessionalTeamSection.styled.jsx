import styled from 'styled-components';

export const Section = styled.section`
  padding: 72px 20px 50px 20px;
  font-size: 16px;
  line-height: 22px;
  color: ${props => props.theme.colors.$textColor};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 50px 32px 40px 32px;
    font-size: 18px;
    line-height: 25px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 80px 28px 88px 28px;
  }
`;

export const Paragraph = styled.p`
  text-align: center;
  margin-bottom: 16px;
`;

export const Title = styled.h5`
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
  margin-bottom: 63px;
  text-align: center;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 24px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-bottom: 36px;
  }
`;

export const TeamList = styled.ul``;

export const TeamListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 30px;
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    &:not(:last-child) {
      margin-bottom: 0px;
    }
  }
  /* transition: border-bottom 500ms;
  padding-top: 5px;
  padding-bottom: 5px;

  &:not(:last-child) {
    margin-right: 12px;
  }
  &:hover,
  &:focus {
    border-bottom: 1px solid ${props => props.theme.colors.$styleColor};
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    &:not(:last-child) {
      margin-right: 40px;
    }
  } */
`;
export const Wrapper = styled.div`
  position: relative;
  transition: scale 500ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    scale: 1.02;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  }
`;

/* export const Picture = styled.picture``; */

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: grid;
  /* place-items: center; */
  justify-items: center;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;

  ${Wrapper}:hover & {
    opacity: 1;
  }
`;

export const Name = styled.h6`
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  margin-bottom: 8px;
  margin-top: 16px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 32px;
    line-height: 32px;
  }
`;

export const Professional = styled.p`
  text-align: center;
`;