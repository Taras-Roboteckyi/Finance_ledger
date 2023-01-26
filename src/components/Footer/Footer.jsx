import { IconContainer } from '../IconContainer/IconContainer';
import { FooterStyled, FooterText } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterStyled>
      {/*  <FooterContainer> */}
      <IconContainer iconHoverColor={'#28A745'} />
      <FooterText>Copyright © 2023 - FinanceLedger</FooterText>
      {/* </FooterContainer> */}
    </FooterStyled>
  );
};
