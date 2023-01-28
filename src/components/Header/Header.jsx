import { Logo } from './Logo/Logo';
import { Heading, HeaderContainer } from './Header.styled';

import { Navigation } from './Navigation/Navigation';
import { useScrollPosition } from '../../hooks/useScrollPosition';

export const Header = () => {
  const { scrollY } = useScrollPosition();

  return (
    <Heading role="banner" scrolledMobile={scrollY >= 120} scrolledTablet={scrollY >= 70}>
      <HeaderContainer>
        <Logo />
        <Navigation />
      </HeaderContainer>
    </Heading>
  );
};
