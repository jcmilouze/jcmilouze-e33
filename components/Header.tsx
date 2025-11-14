import React from 'react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const navLinkClasses = "px-4 py-2 rounded-md text-sm font-medium transition-colors";
  const activeLinkClasses = "bg-sky-600 text-white";
  const inactiveLinkClasses = "text-slate-600 hover:bg-sky-100 hover:text-sky-700";

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="p-2 bg-sky-600 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-sky-700">ProNet Services</h1>
              <p className="text-slate-500 text-sm mt-0.5">L'excellence au service de votre entreprise.</p>
            </div>
          </div>
          <nav className="flex flex-wrap items-center space-x-1 md:space-x-2">
            <button 
              onClick={() => setCurrentPage('home')}
              className={`${navLinkClasses} ${currentPage === 'home' ? activeLinkClasses : inactiveLinkClasses}`}
            >
              Accueil
            </button>
            <button 
              onClick={() => setCurrentPage('about')}
              className={`${navLinkClasses} ${currentPage === 'about' ? activeLinkClasses : inactiveLinkClasses}`}
            >
              L'entreprise
            </button>
            <button 
              onClick={() => setCurrentPage('services')}
              className={`${navLinkClasses} ${currentPage === 'services' ? activeLinkClasses : inactiveLinkClasses}`}
            >
              Nos Offres
            </button>
            <button 
              onClick={() => setCurrentPage('clients')}
              className={`${navLinkClasses} ${currentPage === 'clients' ? activeLinkClasses : inactiveLinkClasses}`}
            >
              Nos Clients
            </button>
            <button 
              onClick={() => setCurrentPage('crm')}
              className={`${navLinkClasses} ${currentPage === 'crm' ? activeLinkClasses : inactiveLinkClasses}`}
            >
              Relation Client
            </button>
            <button 
              onClick={() => setCurrentPage('results')}
              className={`${navLinkClasses} ${currentPage === 'results' ? activeLinkClasses : inactiveLinkClasses}`}
            >
              Résultats
            </button>
             <button 
              onClick={() => setCurrentPage('reviews')}
              className={`${navLinkClasses} ${currentPage === 'reviews' ? activeLinkClasses : inactiveLinkClasses}`}
            >
              Avis Clients
            </button>
            <button 
              onClick={() => setCurrentPage('team')}
              className={`${navLinkClasses} ${currentPage === 'team' ? activeLinkClasses : inactiveLinkClasses}`}
            >
              Équipe & Stagiaires
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;