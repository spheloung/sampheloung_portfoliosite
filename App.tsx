import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLayout from './components/Layout/PageLayout';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./components/pages/HomePage'));
const AboutPage = lazy(() => import('./components/pages/AboutPage'));
const CareerPage = lazy(() => import('./components/pages/CareerPage'));
const ProjectsPage = lazy(() => import('./components/pages/ProjectsPage'));
const PhotographyPage = lazy(() => import('./components/pages/PhotographyPage'));
const ProjectDetail = lazy(() => import('./components/pages/projects/ProjectDetail'));
const LocationDetail = lazy(() => import('./components/pages/photography/LocationDetail'));

// Loading fallback
const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
  </div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/photography" element={<PhotographyPage />} />
            <Route path="/photography/:slug" element={<LocationDetail />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;