import React, { useState } from 'react';
import { ChartIcon, SatisfactionIcon, TargetIcon, DashboardIcon, StrategyIcon } from './icons/IconComponents';

type Tab = 'chiffres' | 'satisfaction' | 'objectifs' | 'dashboard' | 'strategy';

const ResultsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('chiffres');

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
      case 'chiffres':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-sky-700">Chiffres Clés Récents</h2>
            <p className="text-slate-600 leading-relaxed">Nos résultats témoignent d'une croissance saine et maîtrisée, fondée sur la confiance de nos clients et la performance de nos équipes.</p>
            
            <div className="p-6 bg-slate-50 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Performance Économique</h3>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li><strong>Chiffre d'Affaires 2023 :</strong> <span className="font-semibold text-slate-800">1 750 000 € HT</span></li>
                    <li><strong>Chiffre d'Affaires 2024 (prévisionnel) :</strong> <span className="font-semibold text-slate-800">1 925 000 € HT</span> (soit +10% de croissance)</li>
                </ul>
            </div>
            
            <div className="p-6 bg-slate-50 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Performance Commerciale</h3>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li><strong>Nombre de clients actifs :</strong> <span className="font-semibold text-slate-800">185</span></li>
                    <li><strong>Taux de renouvellement des contrats annuels :</strong> <span className="font-semibold text-green-600">95%</span></li>
                    <li><strong>Taux de résiliation annuel :</strong> <span className="font-semibold text-red-600">5%</span> (incluant les déménagements et cessations d'activité)</li>
                </ul>
            </div>
          </div>
        );
      case 'satisfaction':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-sky-700">Indicateurs de Satisfaction Client</h2>
            <p className="text-slate-600 leading-relaxed">La satisfaction de nos clients est notre indicateur de performance le plus important. Nous la mesurons et la suivons en continu pour nous améliorer.</p>

             <div className="p-6 bg-slate-50 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Enquête de Satisfaction Annuelle (2023)</h3>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li><strong>Taux de satisfaction global :</strong> <span className="font-semibold text-green-600">92%</span> de nos clients se déclarent "satisfaits" ou "très satisfaits".</li>
                    <li><strong>Qualité des prestations :</strong> Notée <span className="font-semibold text-slate-800">4,6 / 5</span> en moyenne.</li>
                    <li><strong>Réactivité du service client :</strong> Notée <span className="font-semibold text-slate-800">4,8 / 5</span> en moyenne.</li>
                </ul>
            </div>

            <div className="p-6 bg-slate-50 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Suivi Qualité et Réclamations</h3>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li><strong>Nombre moyen de réclamations par mois :</strong> <span className="font-semibold text-slate-800">Moins de 5</span> (concernant majoritairement des oublis mineurs).</li>
                    <li><strong>Délai moyen de traitement d'une réclamation :</strong> <span className="font-semibold text-slate-800">24 heures</span>.</li>
                    <li><strong>Taux de résolution au premier contact :</strong> <span className="font-semibold text-slate-800">98%</span>.</li>
                </ul>
            </div>
          </div>
        );
      case 'objectifs':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-sky-700">Objectifs de Développement (Année à venir)</h2>
            <p className="text-slate-600 leading-relaxed">Nous ne nous reposons pas sur nos acquis. Pour l'année à venir, nous nous sommes fixés des objectifs ambitieux mais réalistes pour continuer à grandir tout en améliorant notre qualité de service.</p>

            <div className="p-6 bg-slate-50 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Objectifs Commerciaux et Financiers</h3>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>Atteindre <span className="font-semibold text-sky-700">2,1 millions d'euros de Chiffre d'Affaires</span>.</li>
                    <li>Signer <span className="font-semibold text-sky-700">25 nouveaux contrats significatifs</span>.</li>
                    <li>Maintenir une croissance à deux chiffres tout en consolidant notre rentabilité.</li>
                </ul>
            </div>
             <div className="p-6 bg-slate-50 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Objectifs Qualité et Fidélisation</h3>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>Faire passer le taux de renouvellement des contrats de <span className="font-semibold">95% à 97%</span>.</li>
                    <li>Réduire le nombre moyen de réclamations mensuelles <span className="font-semibold">en dessous de 3</span>.</li>
                    <li>Lancer une <span className="font-semibold text-sky-700">newsletter trimestrielle</span> pour renforcer le lien avec nos clients (conseils propreté, actualités de l'entreprise...).</li>
                     <li>Digitaliser le <span className="font-semibold text-sky-700">cahier de liaison</span> pour les clients qui le souhaitent, afin d'améliorer la traçabilité et la réactivité.</li>
                </ul>
            </div>
          </div>
        );
    case 'dashboard':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-sky-700">Tableau de Bord Commercial ProNet Services</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3">
                    <p className="text-slate-600 leading-relaxed mb-4">Ce tableau de bord est un outil interne de suivi de notre performance commerciale et de la santé de notre relation client. Il est mis à jour mensuellement par la direction.</p>
                    <div className="p-6 bg-slate-50 rounded-lg">
                        <h3 className="text-xl font-semibold text-slate-800 mb-3">Indicateurs sur les 12 derniers mois (glissants)</h3>
                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                            <div>
                                <h4 className="font-semibold">Acquisition :</h4>
                                <ul className="list-disc list-inside text-slate-600">
                                    <li>Nouveaux clients T1: <strong>8</strong></li>
                                    <li>Nouveaux clients T2: <strong>6</strong></li>
                                    <li>Nouveaux clients T3: <strong>7</strong></li>
                                    <li>Nouveaux clients T4: <strong>9</strong></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold">Attrition :</h4>
                                <ul className="list-disc list-inside text-slate-600">
                                     <li>Clients perdus T1: <strong>3</strong></li>
                                     <li>Clients perdus T2: <strong>2</strong></li>
                                     <li>Clients perdus T3: <strong>4</strong></li>
                                     <li>Clients perdus T4: <strong>2</strong></li>
                                </ul>
                            </div>
                            <div className="md:col-span-2">
                                <h4 className="font-semibold mt-2">Performance & Fidélisation :</h4>
                                <ul className="list-disc list-inside text-slate-600">
                                    <li>Taux de transformation devis → contrats: <strong>45%</strong></li>
                                    <li>Part du CA réalisée avec les clients existants: <strong>85%</strong></li>
                                    <li>Taux de relance des clients inactifs (inactifs depuis > 1 an): <strong>30%</strong> (Objectif: 75%)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="md:w-1/3">
                    <img 
                      src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Écran avec des graphiques business"
                      className="rounded-lg shadow-md w-full h-auto object-cover"
                    />
                </div>
            </div>
          </div>
        );
    case 'strategy':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-sky-700">Espace Direction & Stratégie</h2>
             <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="md:w-2/3">
                    <div className="p-6 bg-slate-50 rounded-lg">
                        <h3 className="text-xl font-semibold text-slate-800 mb-2">Message de la Direction : Bilan & Perspectives</h3>
                        <p className="text-slate-600 leading-relaxed italic">"L'année écoulée a confirmé la solidité de notre modèle : notre croissance est au rendez-vous et la qualité de nos prestations est reconnue. Je suis fier du travail accompli par chaque membre de l'équipe ProNet Services.
                        <br/><br/>
                        Cependant, nous ne devons pas nous reposer sur nos lauriers. La concurrence locale est de plus en plus agressive sur les prix, et nous avons perdu quelques clients historiques cette année. Ces départs, bien que peu nombreux, sont un signal d'alarme. Ils nous montrent que la qualité seule ne suffit plus à garantir la fidélité. Nous devons devenir plus proactifs, plus communicants, et mieux structurer notre relation client pour anticiper les besoins et renforcer les liens qui nous unissent à nos partenaires."</p>
                    </div>
                </div>
                 <div className="md:w-1/3">
                    <img 
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                      alt="Personnes regardant des données sur un écran"
                      className="rounded-lg shadow-md w-full h-auto object-cover"
                    />
                </div>
            </div>

            <div className="p-6 bg-sky-50 rounded-lg border-l-4 border-sky-500">
                <h3 className="text-xl font-semibold text-sky-800 mb-2">Priorités Stratégiques pour l'Année à Venir</h3>
                <p className="text-sky-900 leading-relaxed">Face à ces constats, nos efforts se concentreront sur 4 axes majeurs liés à la relation client :</p>
                 <ul className="list-disc list-inside text-slate-600 mt-2 space-y-2">
                    <li><strong>Mieux suivre nos clients clés :</strong> Mettre en place un programme de suivi renforcé pour nos 20% de clients les plus importants.</li>
                    <li><strong>Structurer nos actions de fidélisation :</strong> Lancer au moins deux nouvelles actions concrètes (newsletter, programme de parrainage amélioré) pour valoriser nos clients actuels.</li>
                    <li><strong>Améliorer notre e-réputation :</strong> Mettre en place un processus systématique de collecte et de réponse aux avis en ligne pour en faire un levier de réassurance.</li>
                    <li><strong>Renforcer la communication sortante :</strong> Ne plus attendre que le client nous contacte, mais aller vers lui avec de l'information utile et des attentions personnalisées.</li>
                </ul>
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
          <TabButton tabId="chiffres" icon={<ChartIcon />}>Chiffres Clés</TabButton>
          <TabButton tabId="satisfaction" icon={<SatisfactionIcon />}>Satisfaction</TabButton>
          <TabButton tabId="objectifs" icon={<TargetIcon />}>Objectifs</TabButton>
          <TabButton tabId="dashboard" icon={<DashboardIcon />}>Tableau de Bord</TabButton>
          <TabButton tabId="strategy" icon={<StrategyIcon />}>Stratégie</TabButton>
        </nav>
      </div>
      <div>
        {renderContent()}
      </div>
    </div>
  );
};

export default ResultsPage;