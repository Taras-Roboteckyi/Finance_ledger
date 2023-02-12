import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { AboutHeroSection } from '../components/AboutHero/AboutHeroSection';
import { Header } from '../components/Header/Header';
import { HeroSection } from '../components/Hero/HeroSection';
import { BusinessCasesSection } from '../components/BusinessCases/BusinessCasesSection';
import { BlogSection } from '../components/Blog/BlogSection';
import { ProfessionalTeamSection } from '../components/ProfesionalTeam/ProfessionalTeamSection';
import { ContactSection } from '../components/Contact/ContactSection';
import { Footer } from '../components/Footer/Footer';
import AppLoader from '../components/Loader/Loader';
/* import { ThanksMessage } from '../components/ThanksMessage/ThanksMessage'; */

const ThanksMessage = lazy(() =>
  import('../components/ThanksMessage/ThanksMessage').then(module => ({
    default: module.ThanksMessage,
  })),
);

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
        <Suspense fallback={<AppLoader />}>
          {/* Лоадер працює лише при розподілу коду на чанки */}
          <Routes>
            <Route path="/thanks" element={<ThanksMessage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
