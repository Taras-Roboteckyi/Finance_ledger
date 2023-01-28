import styled from 'styled-components';

export const GalleryPositionContainer = styled.div`
  display: grid;

  grid-template-rows: repeat(6, 1fr);

  gap: 8px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
  }
`;

export const ImgGallery = styled.picture`
  cursor: pointer;

  transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    opacity: 0.6;
  }
`;
