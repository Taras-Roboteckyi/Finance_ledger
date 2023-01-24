import { BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs';
import { GrLinkedinOption } from 'react-icons/gr';
import { ContainerIcons } from './IconContainer.styled';

export const IconContainer = () => {
  return (
    <ContainerIcons>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noreferrer"
        title="Sign in to Facebook"
      >
        <BsFacebook size="35px" />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noreferrer" title="Sign in to Twitter">
        <BsTwitter size="35px" />
      </a>
      <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noreferrer"
        title="Sign in to Youtube"
      >
        <BsYoutube size="40px" />
      </a>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noreferrer"
        title="Sign in to Linkedin"
      >
        <GrLinkedinOption size="35px" />
      </a>
    </ContainerIcons>
  );
};
