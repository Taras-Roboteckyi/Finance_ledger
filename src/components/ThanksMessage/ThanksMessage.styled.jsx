import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';

export const BackgroundContainer = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: #2d3b41;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.$textColor};
`;
export const MessageContainer = styled.div`
  width: 200px;
  height: 100px;
  background: white;
  border-radius: 10px;
  padding: 30px 20px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 400px;
    height: 120px;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 10px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 40px;
    line-height: 48px;
  }
`;

export const LinkContainer = styled.div`
  margin-top: 10px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-top: 20px;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  color: #00a797;

  cursor: pointer;
  opacity: 1;
  transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    opacity: 0.6;
  }
`;

export const ArrowLeft = styled(HiArrowNarrowLeft)`
  padding-right: 5px;
`;
