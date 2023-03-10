import { Section, HeroContainer, TitleHero, TextHero } from './HeroSection.styled';

import { Button } from '../Button/Button';

export const HeroSection = () => {
  return (
    <Section id="home" role="region" aria-labelledby="We provide world class financial assistance">
      <HeroContainer>
        <TitleHero>The Sky Is The Limit</TitleHero>
        <TextHero>We provide world class financial assistance</TextHero>
        <Button icon content={'Read more'} />
      </HeroContainer>
    </Section>
  );
};
