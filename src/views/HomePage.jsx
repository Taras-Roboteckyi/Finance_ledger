/* import { Container } from './HomePage.styled'; */
import { AboutHeroSection } from '../components/AboutHero/AboutHeroSection';
import { Header } from '../components/Header/Header';
import { HeroSection } from '../components/Hero/HeroSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutHeroSection />
      </main>
    </>
  );
}
