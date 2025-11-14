
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white mt-12">
      <div className="container mx-auto px-4 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} ProNet Services (Fayollelpbort@gmail.com).</p>
        <p className="text-sm text-slate-400 mt-1">
          Ce site est un support pédagogique pour l'épreuve E33 du Bac Pro Métiers du commerce et de la vente.
        </p>
      </div>
    </footer>
  );
};

export default Footer;