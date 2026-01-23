import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLayout from './components/Layout/PageLayout';
import { ScrollToTop } from './components/utils/ScrollToTop';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./components/pages/HomePage'));
const AboutPage = lazy(() => import('./components/pages/AboutPage'));
const CareerPage = lazy(() => import('./components/pages/CareerPage'));
const ProjectsPage = lazy(() => import('./components/pages/ProjectsPage'));
const PhotographyPage = lazy(() => import('./components/pages/PhotographyPage'));
const ContactPage = lazy(() => import('./components/pages/ContactPage'));

// Individual project pages
const VisaTrackerPage = lazy(() => import('./components/pages/projects/VisaTrackerPage'));
const BillingEnginePage = lazy(() => import('./components/pages/projects/BillingEnginePage'));
const PortfolioWebsitePage = lazy(() => import('./components/pages/projects/PortfolioWebsitePage'));
const RiseOfChinaPage = lazy(() => import('./components/pages/projects/RiseOfChinaPage'));

// Individual photography pages
const AntarcticaPage = lazy(() => import('./components/pages/photography/AntarcticaPage'));
const TekapoPage = lazy(() => import('./components/pages/photography/TekapoPage'));
const CanterburyPage = lazy(() => import('./components/pages/photography/CanterburyPage'));
const CoromandelPage = lazy(() => import('./components/pages/photography/CoromandelPage'));

// Loading fallback
const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
  </div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Projects */}
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/visa-tracker" element={<VisaTrackerPage />} />
            <Route path="/projects/billing-engine" element={<BillingEnginePage />} />
            <Route path="/projects/portfolio-website" element={<PortfolioWebsitePage />} />
            <Route path="/projects/rise-of-china" element={<RiseOfChinaPage />} />

            {/* Photography */}
            <Route path="/photography" element={<PhotographyPage />} />
            <Route path="/photography/antarctica" element={<AntarcticaPage />} />
            <Route path="/photography/tekapo" element={<TekapoPage />} />
            <Route path="/photography/canterbury" element={<CanterburyPage />} />
            <Route path="/photography/coromandel" element={<CoromandelPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;