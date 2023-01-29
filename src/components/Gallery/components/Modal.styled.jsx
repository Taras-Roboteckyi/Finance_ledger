import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(27, 27, 27, 0.541);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgContainer = styled.div`
  position: relative;
  padding: 0px 20px;
`;

export const ImgItem = styled.img`
  border: 2px solid white;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: calc(100vw - 40px);
    height: calc(100vh - 100px);
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: calc(100vw - 150px);
    height: calc(100vh - 150px);
  }
`;

export const ImgClose = styled.img`
  position: absolute;

  bottom: -25px;
  right: 20px;
  width: 20px;

  cursor: pointer;
  transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    opacity: 0.6;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 30px;
    bottom: -40px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: 40px;
  }
`;
/////////Arrow styled//////////////////

export const ArrowsLeftContainer = styled.div`
  position: absolute;
  z-index: 999;
  top: calc(50% - 10px);
  left: 20px;
  width: 30px;
  height: 50px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    opacity: 1;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    left: 40px;
    width: 60px;
    height: 80px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    left: 120px;
    width: 80px;
    height: 100px;
  }
`;

export const ImgArrow = styled.img`
  width: 30px;
  
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 60px;
    
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: 80px;
    
  }
`;

export const ArrowsRightContainer = styled.div`
  position: absolute;
  z-index: 999;
  top: calc(50% - 10px);
  left: calc(100% - 50px);
  width: 30px;
  height: 50px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    opacity: 1;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    left: calc(100% - 100px);
    width: 60px;
    height: 80px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    left: calc(100% - 200px);
    width: 80px;
    height: 100px;
  }
`;
