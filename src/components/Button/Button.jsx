import { ButtonStyled, Img } from './Button.styled';
import arrowRight from '../../images/home/fa-solid_angle-right.png';

export const Button = ({
  icon = false,
  content,
  padding = '32px',
  fontSize = '18px',
  border = 'none',
  color = 'inherit',
  hoverBgColor = '#2ebf4f',
  hoverColor = 'inherit',
  changeFontSize,
  buttonBgColor = '#28A745',
}) => {
  return (
    <ButtonStyled
      role="button"
      aria-haspopup="true"
      type="button"
      padding={padding}
      fontSize={fontSize}
      border={border}
      color={color}
      hoverBgColor={hoverBgColor}
      hoverColor={hoverColor}
      changeFontSize={changeFontSize}
      buttonBgColor={buttonBgColor}
    >
      {icon && <Img tabIndex="0" src={arrowRight} alt="arrow right on the button" />}
      <span>{content}</span>
    </ButtonStyled>
  );
};
