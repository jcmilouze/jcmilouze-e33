import React, { useState } from 'react';
import { StarIcon, PolicyIcon } from './icons/IconComponents';

type Tab = 'synthesis' | 'policy';

const ReviewsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('synthesis');

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
      case 'synthesis':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-sky-700">Synthèse des Avis Clients</h2>
            <p className="text-slate-600 leading-relaxed">Les retours de nos clients sont une source d'information précieuse pour évaluer notre performance et identifier nos axes d'amélioration. Nous suivons attentivement les avis laissés sur les plateformes spécialisées et via nos enquêtes de satisfaction.</p>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/3">
                 <div className="p-6 bg-slate-50 rounded-lg">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Aperçu Global</h3>
                    <p className="text-lg font-semibold text-sky-700 mb-4">Note moyenne : 4.7 / 5 <span className="text-sm font-normal text-slate-500">(basée sur 120 avis vérifiés)</span></p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-green-700 mb-2">Points positifs récurrents :</h4>
                            <ul className="list-disc list-inside text-slate-600 space-y-1">
                                <li>Qualité et fiabilité des prestations.</li>
                                <li>Professionnalisme et discrétion des agents.</li>
                                <li>Réactivité du service client en cas de demande.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-amber-700 mb-2">Critiques fréquentes (points à améliorer) :</h4>
                            <ul className="list-disc list-inside text-slate-600 space-y-1">
                                <li>Oublis occasionnels sur des points de détail (ex: toiles d'araignées).</li>
                                <li>Manque de communication proactive lors du remplacement d'un agent habituel.</li>
                                <li>Tarifs perçus comme légèrement supérieurs à la concurrence locale.</li>
                            </ul>
                        </div>
                    </div>
                </div>
              </div>
              <div className="md:w-1/3">
                 <img 
                    src="https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Personne laissant un avis en ligne sur un ordinateur"
                    className="rounded-lg shadow-md w-full h-auto object-cover"
                  />
              </div>
            </div>
          </div>
        );
      case 'policy':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-sky-700">Politique de Traitement des Avis</h2>
            <p className="text-slate-600 leading-relaxed">Chaque avis, qu'il soit positif ou négatif, est une opportunité. C'est une chance de remercier un client satisfait ou de regagner la confiance d'un client mécontent. Voici la politique que nous nous efforçons d'appliquer.</p>

            <div className="p-6 bg-slate-50 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Comment nous devrions répondre</h3>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>
                        <strong>Avis positifs :</strong> Remercier personnellement le client, mentionner un point précis de son commentaire pour montrer une lecture attentive, et réaffirmer notre engagement à maintenir ce niveau de qualité.
                    </li>
                     <li>
                        <strong>Avis négatifs :</strong> Présenter nos excuses pour l'expérience décevante, ne jamais être sur la défensive, proposer une solution concrète (appel téléphonique, intervention corrective), et inviter à poursuivre l'échange en privé pour résoudre le problème.
                    </li>
                </ul>
            </div>
            
            <div className="p-6 bg-yellow-50 border-l-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-yellow-800 mb-2">Nos limites actuelles et axes de progrès</h3>
                <p className="text-yellow-700 leading-relaxed">
                   Nous reconnaissons que notre gestion des avis en ligne n'est pas encore optimale. Notre principal défi est le <strong>manque de systématicité</strong>. Faute de temps et d'une personne clairement dédiée, les réponses ne sont pas toujours apportées dans un délai court et régulier. C'est un objectif clé d'amélioration pour l'année à venir : structurer une veille et un processus de réponse pour garantir qu'aucun avis ne reste sans réponse plus de 48 heures.
                </p>
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
          <TabButton tabId="synthesis" icon={<StarIcon />}>Synthèse des Avis</TabButton>
          <TabButton tabId="policy" icon={<PolicyIcon />}>Politique de Traitement</TabButton>
        </nav>
      </div>
      <div>
        {renderContent()}
      </div>
    </div>
  );
};

export default ReviewsPage;