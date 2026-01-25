import React from 'react';
import PageLayout from './components/Layout/PageLayout';
import HomePage from './components/pages/HomePage';
import { ScrollToTop } from './components/utils/ScrollToTop';

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <PageLayout>
        <HomePage />
      </PageLayout>
    </>
  );
};

export default App;