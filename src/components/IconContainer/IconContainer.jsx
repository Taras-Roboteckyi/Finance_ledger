import { BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs';
import { GrLinkedinOption } from 'react-icons/gr';
import { ContainerIcons, Link, LinkYoutube } from './IconContainer.styled';

export const IconContainer = ({ iconHoverColor, opacity }) => {
  return (
    <ContainerIcons>
      <Link
        href="https://www.facebook.com/"
        target="_blank"
        rel="noreferrer"
        title="Sign in to Facebook"
        opacity={opacity}
        iconHoverColor={iconHoverColor}
      >
        <BsFacebook size="35px" />
      </Link>
      <Link
        href="https://twitter.com/"
        target="_blank"
        rel="noreferrer"
        title="Sign in to Twitter"
        opacity={opacity}
        iconHoverColor={iconHoverColor}
      >
        <BsTwitter size="35px" />
      </Link>
      <LinkYoutube
        href="https://www.youtube.com/"
        target="_blank"
        rel="noreferrer"
        title="Sign in to Youtube"
        opacity={opacity}
        iconHoverColor={iconHoverColor}
      >
        <BsYoutube size="40px" />
      </LinkYoutube>
      <Link
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noreferrer"
        title="Sign in to Linkedin"
        opacity={opacity}
        iconHoverColor={iconHoverColor}
      >
        <GrLinkedinOption size="35px" />
      </Link>
    </ContainerIcons>
  );
};
