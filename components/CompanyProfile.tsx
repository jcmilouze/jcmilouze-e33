import React from 'react';
import { BrandImageIcon, WellbeingIcon, ReactivityIcon, EnvironmentIcon } from './icons/IconComponents';

interface BenefitCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, icon, children }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 text-center h-full transition-transform transform hover:-translate-y-2">
    <div className="flex justify-center items-center mb-4">
        <div className="bg-sky-100 text-sky-700 rounded-full p-4">
            {icon}
        </div>
    </div>
    <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{children}</p>
  </div>
);


const CompanyProfile: React.FC = () => {
  return (
    <div className="space-y-16">

      {/* Image Banner */}
      <div className="rounded-lg shadow-xl overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" 
          alt="Bureau moderne et propre, ambiance professionnelle" 
          className="w-full h-64 md:h-80 object-cover"
        />
      </div>

      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-sky-700 mb-4 tracking-tight">
          ProNet Services : Votre espace de travail, notre expertise propreté.
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
          Depuis 2023, ProNet Services s'est imposée comme le partenaire propreté de référence pour les entreprises de la métropole lyonnaise. Nous comprenons qu'un environnement de travail impeccable est essentiel à votre image de marque, au bien-être de vos équipes et à la confiance de vos clients. C'est pourquoi nous nous engageons à fournir des prestations de nettoyage sur-mesure, fiables et respectueuses de l'environnement. Notre mission : vous libérer des contraintes de l'entretien pour que vous puissiez vous concentrer sur votre cœur de métier, en toute sérénité.
        </p>
      </section>

      {/* Benefits Section */}
      <section>
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800">Vos Bénéfices, Notre Priorité</h2>
            <p className="text-slate-500 mt-2 max-w-2xl mx-auto">Découvrez comment nous contribuons au succès de votre entreprise.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard title="Image de Marque Valorisée" icon={<BrandImageIcon />}>
                Des locaux toujours impeccables pour accueillir vos clients et partenaires dans les meilleures conditions.
            </BenefitCard>
            <BenefitCard title="Bien-être et Productivité" icon={<WellbeingIcon />}>
                Un environnement de travail sain et agréable qui favorise la concentration et le bien-être de vos collaborateurs.
            </BenefitCard>
            <BenefitCard title="Sérénité et Flexibilité" icon={<ReactivityIcon />}>
                Un service fiable et un interlocuteur unique qui s'adapte à vos horaires. Concentrez-vous sur votre activité, on s'occupe du reste.
            </BenefitCard>
            <BenefitCard title="Engagement Éco-responsable" icon={<EnvironmentIcon />}>
                Des méthodes et produits certifiés pour un nettoyage efficace qui respecte la planète et la santé de tous.
            </BenefitCard>
        </div>
      </section>
      
      {/* Secondary Image section */}
      <section className="bg-white p-8 rounded-lg shadow-xl flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Des équipes professionnelles à votre service</h3>
            <p className="text-slate-600 leading-relaxed">Nos agents sont formés, équipés et encadrés pour garantir une prestation de haute qualité, en toute discrétion. Nous investissons dans le matériel et les compétences pour assurer un résultat impeccable, à chaque intervention. Votre confiance est notre plus grande motivation.</p>
        </div>
        <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop"
              alt="Agent de nettoyage professionnel au travail dans des bureaux"
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
        </div>
      </section>

      {/* Area & Clients Section */}
       <section className="bg-sky-700 text-white p-8 rounded-lg shadow-lg text-center">
        <p className="text-xl font-medium">
          Actifs à <strong className="font-bold">Lyon et sa périphérie</strong>, nous sommes fiers de servir une clientèle variée allant des <strong className="font-bold">PME</strong> aux <strong className="font-bold">commerces</strong>, en passant par les <strong className="font-bold">cabinets médicaux</strong> et les <strong className="font-bold">copropriétés</strong>.
        </p>
      </section>
    </div>
  );
};

export default CompanyProfile;