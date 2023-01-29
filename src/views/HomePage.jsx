import { Route, Routes } from 'react-router-dom';

import { AboutHeroSection } from '../components/AboutHero/AboutHeroSection';
import { Header } from '../components/Header/Header';
import { HeroSection } from '../components/Hero/HeroSection';
import { BusinessCasesSection } from '../components/BusinessCases/BusinessCasesSection';
import { BlogSection } from '../components/Blog/BlogSection';
import { ProfessionalTeamSection } from '../components/ProfesionalTeam/ProfessionalTeamSection';
import { ContactSection } from '../components/Contact/ContactSection';
import { Footer } from '../components/Footer/Footer';
import { ThanksMessage } from '../components/ThanksMessage/ThanksMessage';
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
        <Routes>
          <Route path="/thanks" element={<ThanksMessage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
