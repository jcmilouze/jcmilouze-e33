import React, { useState } from 'react';
import { CrmIcon, LoyaltyIcon, DigitalIcon, ProjectsIcon } from './icons/IconComponents';

type Tab = 'suivi' | 'fidelisation' | 'digital' | 'projects';

const CrmPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('suivi');

  const TabButton: React.FC<{tabId: Tab; icon: React.ReactNode; children: React.ReactNode}> = ({tabId, icon, children}) => {
    const isActive = activeTab === tabId;
    return (
        <button
            onClick={() => setActiveTab(tabId)}
            className={`flex items-center space-x-2 px-4 py-2 text-lg font-semibold rounded-t-lg transition-colors focus:outline-none text-center ${isActive ? 'border-b-4 border-sky-600 text-sky-700' : 'text-slate-500 hover:text-sky-600'}`}
        >
            {icon}
            <span>{children}</span>
        </button>
    )
  }
  
  const renderContent = () => {
    switch (activeTab) {
      case 'suivi':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-sky-700">Comment nous suivons nos clients</h2>
            <p className="text-slate-600 leading-relaxed">Un client bien suivi est un client satisfait. Notre approche repose sur des outils rigoureux et une communication proactive pour anticiper les besoins et garantir une qualité constante.</p>
            
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="md:w-2/3">
                  <div className="p-6 bg-slate-50 rounded-lg">
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">Notre Système d'Information Client (SIC)</h3>
                      <p className="text-slate-600 mb-3">Au cœur de notre suivi se trouve notre SIC, une base de données centralisée qui nous permet une vision à 360° de chaque client. Chaque fiche client contient :</p>
                      <ul className="list-disc list-inside text-slate-600 space-y-1">
                          <li>Les coordonnées et les contacts privilégiés.</li>
                          <li>L'historique complet des prestations et des interventions.</li>
                          <li>Le contrat en cours et le cahier des charges détaillé.</li>
                          <li>Le suivi des réclamations éventuelles et de leur résolution.</li>
                          <li>Les comptes-rendus des visites qualité.</li>
                      </ul>
                  </div>
              </div>
              <div className="md:w-1/3">
                   <img 
                      src="https://images.unsplash.com/photo-1556740772-1a741367b93e?q=80&w=2070&auto=format&fit=crop"
                      alt="Conseiller clientèle avec casque au téléphone"
                      className="rounded-lg shadow-md w-full h-auto object-cover"
                    />
              </div>
            </div>

            <div className="p-6 bg-slate-50 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Un Processus de Suivi Actif</h3>
                 <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li><strong>Prise de Contact Post-Démarrage :</strong> Une semaine après le début d'un nouveau contrat, le chargé d'affaires appelle le client pour un premier retour.</li>
                    <li><strong>Bilans Réguliers :</strong> Selon la taille du contrat, un bilan téléphonique ou physique est planifié tous les trimestres ou semestres pour faire le point.</li>
                    <li><strong>Visites Qualité :</strong> Notre chef d'équipe référent effectue des visites régulières sur site (souvent mensuelles) pour contrôler la prestation et échanger avec le client.</li>
                     <li><strong>Cahier de Liaison :</strong> Un outil simple mais essentiel, laissé sur site, pour une communication directe et efficace entre le client et nos équipes.</li>
                </ul>
            </div>
          </div>
        );
      case 'fidelisation':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-sky-700">Nos Actions de Fidélisation</h2>
            <p className="text-slate-600 leading-relaxed">Fidéliser un client coûte moins cher que d'en acquérir un nouveau. C'est pourquoi nous mettons en place des actions concrètes pour remercier nos clients de leur confiance et renforcer notre partenariat.</p>

            <div className="p-6 bg-slate-50 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Programmes Actuellement en Place</h3>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li><strong>Remise de Fidélité :</strong> Une réduction de 5% est automatiquement appliquée sur la facture annuelle pour les clients ayant plus de 3 ans d'ancienneté.</li>
                    <li><strong>Offre de Parrainage :</strong> Un client qui nous recommande bénéficie d'un mois de prestation offert si le contact aboutit à un nouveau contrat annuel.</li>
                    <li><strong>Cadeaux de fin d'année :</strong> Nous envoyons un panier garni de produits locaux à nos clients les plus importants pour les remercier.</li>
                    <li><strong>Rapports Qualité Proactifs :</strong> L'envoi régulier de nos fiches de contrôle qualité montre notre engagement et notre transparence.</li>
                </ul>
            </div>
            
            <div className="p-6 bg-yellow-50 border-l-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-yellow-800 mb-2">Points d'Amélioration Identifiés</h3>
                <p className="text-yellow-700 leading-relaxed">
                    <strong>Ce qui fonctionne bien :</strong> Les actions directes comme le parrainage et les visites de suivi sont très appréciées pour leur contact humain.
                    <br />
                    <strong>Ce qui est perfectible :</strong> Notre communication est encore très traditionnelle. Nous manquons d'actions de fidélisation numériques (pas de newsletter, pas d'offres spéciales par e-mail), ce qui est un axe de développement pour l'année à venir.
                </p>
            </div>
          </div>
        );
      case 'digital':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-sky-700">Notre Présence Digitale</h2>
            <p className="text-slate-600 leading-relaxed">Bien que nos actions de fidélisation soient encore traditionnelles, nous avons initié une présence en ligne pour assurer notre visibilité et faciliter la prise de contact.</p>

            <div className="p-6 bg-slate-50 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Réseaux Sociaux Professionnels</h3>
                <p className="text-slate-600">
                    Nous disposons d'une page entreprise sur <strong>LinkedIn</strong>. Actuellement, elle est principalement utilisée pour :
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-1 mt-2">
                    <li>Présenter l'entreprise et nos valeurs.</li>
                    <li>Publier ponctuellement des nouvelles (ex: obtention d'un nouveau label écologique).</li>
                    <li>Permettre à nos commerciaux d'entrer en contact avec des prospects.</li>
                </ul>
                <p className="text-slate-500 italic mt-2">L'animation de la page reste simple et pourrait être développée avec des témoignages clients ou des conseils propreté.</p>
            </div>

            <div className="p-6 bg-slate-50 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Le Site Web comme Outil de Contact</h3>
                <p className="text-slate-600">
                    Notre site web actuel joue un rôle clé dans la génération de nouveaux contacts. Son principal outil est le <strong>formulaire de demande de devis en ligne</strong>. Simple et rapide à remplir, il permet à un prospect de nous transmettre facilement ses besoins. Chaque demande est traitée par un commercial sous 24 heures ouvrées, un engagement fort de notre part en termes de réactivité.
                </p>
            </div>
          </div>
        );
    case 'projects':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-sky-700">Projets en Cours et Idées d'Actions Relation Client</h2>
            <p className="text-slate-600 leading-relaxed">Pour améliorer continuellement la relation avec nos clients, plusieurs pistes sont à l'étude. Ces projets, à différents stades de maturité, représentent des opportunités de renforcer la satisfaction et la fidélisation.</p>

             <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3">
                    <ul className="list-none space-y-4">
                        <li className="p-4 bg-slate-50 rounded-lg">
                            <h3 className="font-semibold text-slate-800">Enquête de satisfaction en ligne</h3>
                            <p className="text-slate-600"><strong>Objectif :</strong> Recueillir des retours plus structurés et réguliers. <strong>Avancement :</strong> <span className="font-semibold text-blue-600">En préparation.</span> Le questionnaire est en cours de rédaction, mais l'outil de diffusion n'est pas encore choisi.</p>
                        </li>
                         <li className="p-4 bg-slate-50 rounded-lg">
                            <h3 className="font-semibold text-slate-800">Lancement d'une newsletter BtoB</h3>
                            <p className="text-slate-600"><strong>Objectif :</strong> Garder le contact, partager des conseils, informer sur nos actualités. <strong>Avancement :</strong> <span className="font-semibold text-amber-600">À l'étude.</span> L'idée est validée, mais le calendrier et les ressources à y allouer ne sont pas définis.</p>
                        </li>
                         <li className="p-4 bg-slate-50 rounded-lg">
                            <h3 className="font-semibold text-slate-800">Refonte du programme de parrainage</h3>
                            <p className="text-slate-600"><strong>Objectif :</strong> Rendre le programme plus attractif et plus facile à utiliser pour nos clients. <strong>Avancement :</strong> <span className="font-semibold text-red-600">En pause.</span> L'offre actuelle existe mais est peu promue. Une réflexion est nécessaire pour la moderniser.</p>
                        </li>
                    </ul>
                </div>
                <div className="md:w-1/3">
                    <img 
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                      alt="Équipe en réunion de brainstorming"
                      className="rounded-lg shadow-md w-full h-auto object-cover"
                    />
                </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
      <div className="border-b border-slate-200 mb-8">
        <nav className="-mb-px flex flex-wrap space-x-2 md:space-x-6" aria-label="Tabs">
          <TabButton tabId="suivi" icon={<CrmIcon />}>Suivi Client</TabButton>
          <TabButton tabId="fidelisation" icon={<LoyaltyIcon />}>Actions de Fidélisation</TabButton>
          <TabButton tabId="digital" icon={<DigitalIcon />}>Présence Digitale</TabButton>
          <TabButton tabId="projects" icon={<ProjectsIcon />}>Projets & Idées</TabButton>
        </nav>
      </div>
      <div>
        {renderContent()}
      </div>
    </div>
  );
};

export default CrmPage;