import styled from 'styled-components';

export const Div = styled.div`
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 768px) {
    width: ${props => props.theme.breakpoints.tablet};
  }
  @media screen and (min-width: 1360px) {
    width: ${props => props.theme.breakpoints.desktop};
  }
`;
