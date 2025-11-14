import React, { useState } from 'react';
import { MarketingIcon } from './icons/IconComponents';

type Tab = 'who-we-are' | 'area' | 'positioning' | 'marketing';

const AboutPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('who-we-are');

  const renderContent = () => {
    switch (activeTab) {
      case 'who-we-are':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-sky-700">Qui sommes-nous ?</h2>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/3 space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    Fondée à Lyon en 2023, ProNet Services est née d'une ambition simple : offrir aux entreprises de la région un service de propreté qui allie la rigueur des grands groupes à la proximité d'un partenaire local. Notre fondateur, fort de 15 ans d'expérience comme responsable d'exploitation, a constaté un besoin clair pour des prestations fiables, transparentes et véritablement adaptées aux PME. La croissance rapide de ProNet Services, principalement par le bouche-à-oreille, confirme la pertinence de cette vision.
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Notre équipe, notre force</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Notre entreprise à taille humaine compte aujourd'hui une cinquantaine de collaborateurs engagés. Notre organisation est structurée pour garantir réactivité et qualité :
                    </p>
                    <ul className="list-disc list-inside text-slate-600 mt-2 space-y-1">
                      <li><strong>Direction :</strong> Un gérant unique, garant de la vision et de la satisfaction client.</li>
                      <li><strong>Service Commercial :</strong> Deux chargés d'affaires dédiés pour vous conseiller et élaborer des offres sur-mesure.</li>
                      <li><strong>Équipes Terrain :</strong> Plus de 40 agents de service compétents, encadrés par 4 chefs d'équipe expérimentés qui assurent le suivi quotidien des chantiers.</li>
                    </ul>
                  </div>
              </div>
               <div className="md:w-1/3">
                 <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                    alt="Équipe professionnelle en collaboration"
                    className="rounded-lg shadow-md w-full h-auto object-cover"
                  />
              </div>
            </div>

             <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2 mt-6">Nos valeurs et engagements</h3>
              <p className="text-slate-600 leading-relaxed">
                Au-delà de la propreté, nous nous engageons sur des valeurs fondamentales qui guident chacune de nos actions : la Qualité, la Responsabilité Sociétale des Entreprises (RSE) et la Sécurité. Nous privilégions l'utilisation de produits écolabellisés, assurons la formation continue de nos équipes aux meilleures pratiques et garantissons un environnement de travail sécurisé pour tous.
              </p>
            </div>
          </div>
        );
      case 'area':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-sky-700">Zone de chalandise et concurrents</h2>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Un ancrage local fort à Lyon</h3>
                <p className="text-slate-600 leading-relaxed">
                  ProNet Services concentre son activité sur Lyon et sa première couronne (Villeurbanne, Bron, Vénissieux, Caluire-et-Cuire...). Cette proximité géographique est la clé de notre réactivité. Nous intervenons avec une efficacité particulière dans les grands pôles d'activités tertiaires et industriels comme les parcs de Gerland, de la Soie ou encore Techlid à l'ouest de Lyon.
                </p>
              </div>
              <div className="md:w-1/3">
                <img 
                  src="https://filedn.eu/l2dkKFuRGueFx6uQAnQW97B/site%20e33/zone.avif"
                  alt="Carte de Lyon et sa métropole illustrant la zone de chalandise"
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2 mt-6">Notre place dans le paysage concurrentiel</h3>
              <p className="text-slate-600 leading-relaxed">
                Le marché du nettoyage professionnel lyonnais est dynamique et diversifié. On y trouve principalement :
              </p>
              <ul className="list-disc list-inside text-slate-600 mt-2 space-y-1">
                <li><strong>Les géants nationaux :</strong> Ils offrent une couverture complète mais peuvent manquer de souplesse et de personnalisation.</li>
                <li><strong>Les très petites entreprises locales :</strong> Souvent très agiles, elles peuvent cependant être limitées en termes de capacité et de structure pour des clients plus exigeants.</li>
              </ul>
               <p className="text-slate-600 leading-relaxed mt-4">
                <strong>Le positionnement de ProNet Services se situe à l'intersection parfaite :</strong> nous possédons la structure, les processus et la fiabilité d'une PME solidement établie, tout en conservant la souplesse, la réactivité et la proximité d'un acteur 100% local.
              </p>
            </div>
          </div>
        );
      case 'positioning':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-sky-700">Positionnement et image</h2>
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Le juste prix pour une qualité garantie</h3>
              <p className="text-slate-600 leading-relaxed">
                Notre positionnement est celui du milieu de gamme, un choix délibéré. Nous ne cherchons pas à être les moins chers, car nous refusons de compromettre la qualité du service, la juste rémunération de nos salariés ou nos engagements environnementaux. Notre objectif est d'offrir le meilleur rapport qualité-service-prix du marché. Choisir ProNet Services, ce n'est pas une simple dépense, c'est un investissement dans votre image de marque et le bien-être de vos équipes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Notre image : vos garanties</h3>
              <p className="text-slate-600 leading-relaxed">
                Nous souhaitons que nos clients nous perçoivent avant tout comme :
              </p>
              <ul className="list-disc list-inside text-slate-600 mt-2 space-y-1">
                <li><strong>Un partenaire de confiance :</strong> Fiabilité, ponctualité, et respect scrupuleux du cahier des charges sont les piliers de notre réputation.</li>
                <li><strong>Un expert accessible :</strong> Nous sommes faciles à joindre. Vous disposez d'un interlocuteur unique qui connaît votre dossier et répond rapidement à vos demandes.</li>
                <li><strong>Un acteur transparent :</strong> Nos devis sont clairs et détaillés, notre facturation est sans surprise, et notre communication est toujours honnête et proactive.</li>
              </ul>
            </div>
          </div>
        );
      case 'marketing':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-sky-700">Communication & Marketing</h2>
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Nos objectifs de communication</h3>
              <p className="text-slate-600 leading-relaxed">Notre stratégie de communication vise plusieurs objectifs clés pour soutenir notre croissance et renforcer notre image de marque :</p>
              <ul className="list-disc list-inside text-slate-600 mt-2 space-y-1">
                <li><strong>Notoriété :</strong> Faire connaître ProNet Services auprès des PME et professions libérales de la métropole lyonnaise.</li>
                <li><strong>Réassurance :</strong> Démontrer notre professionnalisme et notre fiabilité pour rassurer les prospects lors de leur prise de décision.</li>
                <li><strong>Fidélisation :</strong> Maintenir le lien avec nos clients existants et valoriser leur confiance.</li>
                <li><strong>Image :</strong> Mettre en avant notre engagement pour la qualité, la proximité et la RSE.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Nos canaux et actions</h3>
               <ul className="list-none space-y-4">
                    <li className="p-4 bg-slate-50 rounded-lg">
                        <h4 className="font-semibold text-slate-800">Site Web & Référencement local</h4>
                        <p className="text-slate-600"><strong>Cible :</strong> Prospects. <strong>Fréquence :</strong> Continue. <strong>Limites :</strong> Le contenu est encore peu orienté vers la fidélisation ; il sert surtout à l'acquisition.</p>
                    </li>
                     <li className="p-4 bg-slate-50 rounded-lg">
                        <h4 className="font-semibold text-slate-800">Page LinkedIn</h4>
                        <p className="text-slate-600"><strong>Cible :</strong> Prospects, clients, partenaires. <strong>Fréquence :</strong> Irrégulière (environ 1 post par mois). <strong>Limites :</strong> Manque de régularité et d'une vraie stratégie de contenu pour engager notre communauté.</p>
                    </li>
                     <li className="p-4 bg-slate-50 rounded-lg">
                        <h4 className="font-semibold text-slate-800">Emailings ponctuels</h4>
                        <p className="text-slate-600"><strong>Cible :</strong> Clients et prospects. <strong>Fréquence :</strong> Très faible (vœux de fin d'année). <strong>Limites :</strong> Canal sous-exploité pour la fidélisation (pas de newsletter, pas d'offres spéciales).</p>
                    </li>
                     <li className="p-4 bg-slate-50 rounded-lg">
                        <h4 className="font-semibold text-slate-800">Flyers en zones d'activités</h4>
                        <p className="text-slate-600"><strong>Cible :</strong> Prospects. <strong>Fréquence :</strong> Campagnes ponctuelles. <strong>Limites :</strong> Outil traditionnel avec un retour sur investissement difficile à mesurer.</p>
                    </li>
               </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Exemples d'actions passées</h3>
               <p className="text-slate-600 leading-relaxed"><strong>Mailing de vœux (Janvier 2024) :</strong> Envoi d'une carte de vœux électronique à tous nos clients et prospects qualifiés, avec une offre de "-10% sur une prestation ponctuelle". <br/><strong>Opération "Spéciale Gerland" (Juin 2023) :</strong> Distribution de flyers et campagne de phoning ciblée sur le parc d'activités de Gerland pour développer notre présence dans ce secteur.</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  
  const TabButton: React.FC<{tabId: Tab; children: React.ReactNode; icon?: React.ReactNode}> = ({tabId, children, icon}) => {
    const isActive = activeTab === tabId;
    return (
        <button
            onClick={() => setActiveTab(tabId)}
            className={`flex items-center space-x-2 px-4 py-2 text-lg font-semibold rounded-t-lg transition-colors focus:outline-none ${isActive ? 'border-b-4 border-sky-600 text-sky-700' : 'text-slate-500 hover:text-sky-600'}`}
        >
            {icon}
            <span>{children}</span>
        </button>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
        <div className="border-b border-slate-200 mb-8">
            <nav className="-mb-px flex flex-wrap space-x-6" aria-label="Tabs">
                <TabButton tabId="who-we-are">Qui sommes-nous ?</TabButton>
                <TabButton tabId="area">Zone & Concurrents</TabButton>
                <TabButton tabId="positioning">Positionnement & Image</TabButton>
                <TabButton tabId="marketing" icon={<MarketingIcon />}>Communication</TabButton>
            </nav>
        </div>
        <div>
            {renderContent()}
        </div>
    </div>
  );
};

export default AboutPage;