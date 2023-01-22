import styled from 'styled-components';

export const ButtonStyled = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding-left: ${prop => prop.padding};
  padding-right: ${prop => prop.padding};
  padding-top: 16px;
  padding-bottom: 16px;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: ${prop => prop.fontSize};
  line-height: 1.37;
  background-color: ${props => props.theme.colors.$styleColor};
  border: ${prop => prop.border};
  border-radius: 5px;
  cursor: pointer;
  color: ${prop => prop.color};
  transition: background-color 500ms linear, 300ms, 500ms;

  &:hover,
  &:focus {
    background-color: ${prop => prop.bgColor};
    color: ${prop => prop.hoverColor};
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${prop => prop.changeFontSize};
  }
`;
export const Img = styled.img`
  margin-right: 8px;
`;
/* & > img {
    display: inline-block;
    margin-right: 8px;
  } */
