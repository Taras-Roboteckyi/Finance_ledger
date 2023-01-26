/* import { Container } from './HomePage.styled'; */
import { AboutHeroSection } from '../components/AboutHero/AboutHeroSection';
import { Header } from '../components/Header/Header';
import { HeroSection } from '../components/Hero/HeroSection';
import { BusinessCasesSection } from '../components/BusinessCases/BusinessCasesSection';
import { BlogSection } from '../components/Blog/BlogSection';
import { ProfessionalTeamSection } from '../components/ProfesionalTeam/ProfessionalTeamSection';
import { ContactSection } from '../components/Contact/ContactSection';
import { Footer } from '../components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutHeroSection />
        <BusinessCasesSection />
        <BlogSection />
        <ProfessionalTeamSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
