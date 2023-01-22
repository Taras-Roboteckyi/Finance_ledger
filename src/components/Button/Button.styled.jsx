import styled from 'styled-components';

export const ButtonStyled = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding-left: ${prop => prop.padding};
  padding-right: ${prop => prop.padding};
  padding-top: 16px;
  padding-bottom: 16px;
  font-size: ${prop => prop.fontSize};
  line-height: 1.37;
  background-color: ${props => props.theme.colors.$styleColor};
  border: ${prop => prop.border};
  border-radius: 5px;
  cursor: pointer;
  color: ${prop => prop.color};
  transition: background-color 500ms linear, 300ms, 500ms;

  &:hover {
    background-color: ${prop => prop.bgColor};
  }
`;
export const Img = styled.img`
  margin-right: 8px;
`;
/* & > img {
    display: inline-block;
    margin-right: 8px;
  } */
