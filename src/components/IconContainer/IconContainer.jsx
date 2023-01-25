import { BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs';
import { GrLinkedinOption } from 'react-icons/gr';
import { ContainerIcons, Link } from './IconContainer.styled';

export const IconContainer = ({ iconHoverColor = false }) => {
  return (
    <ContainerIcons>
      <Link
        href="https://www.facebook.com/"
        target="_blank"
        rel="noreferrer"
        title="Sign in to Facebook"
        iconHoverColor={iconHoverColor}
      >
        <BsFacebook size="35px" />
      </Link>
      <Link
        href="https://twitter.com/"
        target="_blank"
        rel="noreferrer"
        title="Sign in to Twitter"
        iconHoverColor={iconHoverColor}
      >
        <BsTwitter size="35px" />
      </Link>
      <Link
        href="https://www.youtube.com/"
        target="_blank"
        rel="noreferrer"
        title="Sign in to Youtube"
        iconHoverColor={iconHoverColor}
      >
        <BsYoutube size="40px" />
      </Link>
      <Link
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noreferrer"
        title="Sign in to Linkedin"
        iconHoverColor={iconHoverColor}
      >
        <GrLinkedinOption size="35px" />
      </Link>
    </ContainerIcons>
  );
};
