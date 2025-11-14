import React, { useState } from 'react';
import Header from './components/Header';
import CompanyProfile from './components/CompanyProfile';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ClientsPage from './components/ClientsPage';
import CrmPage from './components/CrmPage';
import ResultsPage from './components/ResultsPage';
import ReviewsPage from './components/ReviewsPage';
import TeamPage from './components/TeamPage';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-slate-50">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        {currentPage === 'home' && <CompanyProfile />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'clients' && <ClientsPage />}
        {currentPage === 'crm' && <CrmPage />}
        {currentPage === 'results' && <ResultsPage />}
        {currentPage === 'reviews' && <ReviewsPage />}
        {currentPage === 'team' && <TeamPage />}
      </main>
      <Footer />
    </div>
  );
};

export default App;