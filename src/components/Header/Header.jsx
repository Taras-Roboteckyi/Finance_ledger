import { Logo } from './Logo/Logo';
import { Heading, HeaderContainer } from './Header.styled';
import { Container } from '../Сontainer';
import { Navigation } from './Navigation/Navigation';
/* import { useWindowScrollPositions } from '../../hooks/useWindowScrollPosition'; */

export const Header = () => {
  /* const { scrollY } = useWindowScrollPositions();
   */
  return (
    <Heading role="banner" /* scrolled={scrollY >= 100} */>
      <Container>
        <HeaderContainer>
          <Logo />
          <Navigation />
        </HeaderContainer>
      </Container>
    </Heading>
  );
};
