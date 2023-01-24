import styled from 'styled-components';

export const ContainerIcons = styled.div`
  /*  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: rgba(0, 0, 0, 0.6); */
  /*   opacity: 0; */
  /*  filter: brightness(60%); */

  a {
    color: ${props => props.theme.colors.$white};
    /* width: 35px;
    height: 35px; */
    :hover {
      opacity: 0.8;
      color: ${props => props.theme.colors.$styleColor};
    }
  }
  a:not(:last-child) {
    margin-right: 25px;
  }
`;
