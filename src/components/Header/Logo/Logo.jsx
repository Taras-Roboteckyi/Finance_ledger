import bookSvg from '../../../images/home/logo.png';
import { LinkHome } from './Logo.styled';

export const Logo = () => {
  return (
    <LinkHome role="logo" href="/">
      <img tabIndex="0" role="link" src={`${bookSvg}`} alt="Open book icon" />
      <p>
        Finance <span>Ledger</span>
      </p>
    </LinkHome>
  );
};
