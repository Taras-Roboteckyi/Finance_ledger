import PropTypes from 'prop-types';
import { BsFacebook, BsTwitter, BsYoutube } from 'react-icons/bs';
import { GrLinkedinOption } from 'react-icons/gr';
import { IconsList, Link, LinkYoutube, IconsItem } from './IconContainer.styled';

export const IconContainer = ({ iconHoverColor, opacity }) => {
  return (
    <IconsList>
      <IconsItem tabIndex="0">
        <Link
          aria-label="Facebook"
          role="link"
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
          title="Sign in to Facebook"
          opacity={opacity}
          iconHoverColor={iconHoverColor}
        >
          <BsFacebook size="35px" />
        </Link>
      </IconsItem>
      <IconsItem tabIndex="0">
        <Link
          aria-label="Twitter"
          role="link"
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
          title="Sign in to Twitter"
          opacity={opacity}
          iconHoverColor={iconHoverColor}
        >
          <BsTwitter size="35px" />
        </Link>
      </IconsItem>
      <IconsItem tabIndex="0">
        <LinkYoutube
          aria-label="Youtube"
          role="link"
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer"
          title="Sign in to Youtube"
          opacity={opacity}
          iconHoverColor={iconHoverColor}
        >
          <BsYoutube size="42px" />
        </LinkYoutube>
      </IconsItem>
      <IconsItem tabIndex="0">
        <Link
          aria-label="Linkedin"
          role="link"
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          title="Sign in to Linkedin"
          opacity={opacity}
          iconHoverColor={iconHoverColor}
        >
          <GrLinkedinOption size="35px" />
        </Link>
      </IconsItem>
    </IconsList>
  );
};

IconContainer.propTypes = {
  iconHoverColor: PropTypes.string,
  opacity: PropTypes.string,
};
