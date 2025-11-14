import React, { useState } from 'react';
import { TeamIcon, StudentIcon, MessageIcon, RecruitmentIcon } from './icons/IconComponents';

type Tab = 'organisation' | 'missions' | 'messages' | 'recruitment';

const TeamPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('organisation');

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
      case 'organisation':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-sky-700">Organisation Commerciale</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3">
                    <p className="text-slate-600 leading-relaxed">Notre force commerciale repose sur une équipe restreinte, expérimentée et proche du terrain. Cette structure agile nous permet d'être réactifs et de construire une relation de confiance durable avec chaque client.</p>
                    <div className="mt-4 space-y-4">
                        <div className="p-4 bg-slate-50 rounded-lg">
                            <h3 className="text-xl font-semibold text-slate-800 mb-2">Julien Durand - Responsable Commercial</h3>
                            <p className="text-slate-600 mb-3">Avec plus de 10 ans d'expérience dans les services aux entreprises, Julien pilote la stratégie commerciale de ProNet Services.</p>
                            <ul className="list-disc list-inside text-slate-600 space-y-1">
                                <li><strong>Rôle :</strong> Définir les objectifs, animer et former l'équipe, et garantir la satisfaction des clients grands comptes.</li>
                                <li><strong>Missions :</strong> Gérer les appels d'offres importants, développer les partenariats stratégiques, et analyser les performances pour orienter la croissance.</li>
                            </ul>
                        </div>
                        
                        <div className="p-4 bg-slate-50 rounded-lg">
                            <h3 className="text-xl font-semibold text-slate-800 mb-2">Chloé Martin - Commerciale Terrain</h3>
                            <p className="text-slate-600 mb-3">Chloé est le visage de ProNet Services sur le terrain. Elle est l'interlocutrice privilégiée de nos prospects et de nombreux clients.</p>
                             <ul className="list-disc list-inside text-slate-600 space-y-1">
                                <li><strong>Rôle :</strong> Développer le portefeuille clients sur un secteur défini de la métropole lyonnaise.</li>
                                <li><strong>Missions :</strong> Prospecter de nouvelles entreprises, réaliser les rendez-vous de découverte, élaborer les devis sur-mesure, et assurer le suivi des nouveaux clients durant leur première année.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/3">
                    <img 
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                      alt="Équipe de jeunes professionnels en open-space"
                      className="rounded-lg shadow-md w-full h-auto object-cover"
                    />
                </div>
            </div>
          </div>
        );
      case 'missions':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-sky-700">Missions pour un Stagiaire / Alternant Bac Pro MCV</h2>
            <p className="text-slate-600 leading-relaxed">Accueillir un élève en formation est pour nous une opportunité de transmettre notre passion du service client. Sous la supervision de Julien Durand, vous participerez activement à la vie du service commercial avec des missions concrètes et formatrices.</p>

            <div className="p-6 bg-slate-50 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Développement et suivi de la base de données</h3>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>
                        <strong>Mise à jour du SIC :</strong> Vous apprendrez à utiliser notre Système d'Information Client pour vérifier et enrichir les fiches clients (nouvel interlocuteur, changement d'adresse, etc.).
                    </li>
                     <li>
                        <strong>Qualification de fichiers prospects :</strong> À partir de bases de données, vous effectuerez des recherches pour identifier les bons contacts et qualifier le potentiel des entreprises (secteur, taille), une étape cruciale avant toute prospection.
                    </li>
                </ul>
            </div>

             <div className="p-6 bg-slate-50 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Participation aux actions commerciales</h3>
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>
                        <strong>Préparation de campagnes :</strong> Vous aiderez à la préparation d'opérations de prospection ciblées (e-mailing, phoning) en extrayant les listes de contacts pertinents depuis notre SIC.
                    </li>
                     <li>
                        <strong>Relance de clients inactifs :</strong> Vous participerez à des campagnes de relance de clients n'ayant pas fait appel à nos services ponctuels depuis plus d'un an, afin de maintenir le contact et de détecter de nouveaux besoins.
                    </li>
                </ul>
            </div>
            
            <div className="p-6 bg-slate-50 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Contribution à la relation client et à la fidélisation</h3>
                <p className="text-yellow-700 leading-relaxed">
                   <strong>Suivi de la satisfaction :</strong> Vous pourrez participer à la réalisation d'enquêtes de satisfaction par téléphone auprès de nos clients pour recueillir leurs impressions et identifier des axes d'amélioration.
                   <br/>
                   <strong>Actions de fidélisation :</strong> Vous contribuerez à la mise en œuvre d'opérations concrètes comme la préparation des cadeaux de fin d'année ou la diffusion de notre offre de parrainage.
                </p>
            </div>
          </div>
        );
    case 'messages':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-sky-700">Exemples de Messages Commerciaux</h2>
            <p className="text-slate-600 leading-relaxed">Voici quelques modèles de messages que nous utilisons. Ils servent de base et doivent être adaptés à chaque situation.</p>
            <div className="space-y-4">
                <details className="p-4 bg-slate-50 rounded-lg cursor-pointer">
                    <summary className="font-semibold text-slate-800">Mail de relance suite à un devis</summary>
                    <p className="text-slate-600 mt-2 whitespace-pre-line">
                        <strong>Objet :</strong> Suite à notre proposition pour l'entretien de vos locaux
                        
                        Bonjour [Nom du contact],

                        Je reviens vers vous concernant notre devis n°[Numéro] que je vous ai adressé le [Date].
                        Avez-vous eu le temps de l'étudier ? Avez-vous des questions ?

                        Je reste à votre disposition pour en discuter.

                        Cordialement,
                        Chloé Martin - ProNet Services
                    </p>
                </details>
                <details className="p-4 bg-slate-50 rounded-lg cursor-pointer">
                    <summary className="font-semibold text-slate-800">Mail de remerciement après signature</summary>
                     <p className="text-slate-600 mt-2 whitespace-pre-line">
                        <strong>Objet :</strong> Bienvenue chez ProNet Services !

                        Bonjour [Nom du contact],

                        Toute l'équipe de ProNet Services vous remercie de votre confiance.
                        Nous sommes ravis de vous compter parmi nos nouveaux partenaires. Nous mettrons tout en œuvre pour vous donner entière satisfaction.
                        
                        Comme convenu, nos interventions débuteront le [Date].

                        Bien à vous,
                        Julien Durand - ProNet Services
                    </p>
                </details>
                <details className="p-4 bg-slate-50 rounded-lg cursor-pointer">
                    <summary className="font-semibold text-slate-800">Mail de relance d'un client inactif</summary>
                    <p className="text-slate-600 mt-2 whitespace-pre-line">
                        <strong>Objet :</strong> ProNet Services garde le contact

                        Bonjour [Nom du contact],

                        Cela fait un moment que nous n'avons pas eu le plaisir de travailler avec vous.
                        Nous voulions simplement prendre de vos nouvelles et vous rappeler que nous sommes toujours à votre disposition pour toute prestation de nettoyage ponctuelle ou régulière.

                        N'hésitez pas si vous avez un nouveau besoin.

                        Cordialement,
                        L'équipe ProNet Services
                    </p>
                </details>
            </div>
          </div>
        );
    case 'recruitment':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-sky-700">Recrutement & Stages chez ProNet Services</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3 space-y-4">
                     <div className="p-6 bg-slate-50 rounded-lg">
                        <h3 className="text-xl font-semibold text-slate-800 mb-2">Notre politique d'accueil</h3>
                        <p className="text-slate-600">Nous sommes convaincus que les talents de demain se forment aujourd'hui. C'est pourquoi nous accordons une grande importance à l'accueil de stagiaires et d'alternants. Nous nous engageons à offrir un encadrement de qualité et des missions qui ont du sens.</p>
                    </div>
                     <div className="p-6 bg-slate-50 rounded-lg">
                        <h3 className="text-xl font-semibold text-slate-800 mb-2">Offre de stage : Assistant(e) Relation Client (Bac Pro MCV)</h3>
                        <ul className="list-none space-y-2 text-slate-600">
                            <li><strong>Missions :</strong> Rattaché(e) au responsable commercial, vous participerez au suivi des clients, à la mise à jour de la base de données, à la préparation d'actions de prospection et de fidélisation (voir onglet "Missions d'un stagiaire").</li>
                            <li><strong>Durée :</strong> 4 à 8 semaines.</li>
                            <li><strong>Lieu :</strong> Lyon 7ème.</li>
                            <li><strong>Profil attendu :</strong> Vous êtes dynamique, organisé(e) et doté(e) d'un excellent sens du contact. Votre aisance au téléphone et votre envie d'apprendre seront vos meilleurs atouts.</li>
                        </ul>
                    </div>
                </div>
                 <div className="md:w-1/3">
                    <img 
                      src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Jeune en situation de travail avec un tuteur"
                      className="rounded-lg shadow-md w-full h-auto object-cover"
                    />
                </div>
            </div>
             <div className="p-6 bg-slate-50 rounded-lg mt-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Une journée type de stagiaire</h3>
                <p className="text-slate-600"><strong>Matin :</strong> Point avec le tuteur, mise à jour des fiches clients dans le SIC suite aux retours des commerciaux. Préparation d'une liste de prospects à contacter pour une campagne thématique. <strong>Après-midi :</strong> Participation à une campagne d'appels pour une enquête de satisfaction, rédaction d'un compte-rendu. Aide à la préparation des devis.</p>
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
          <TabButton tabId="organisation" icon={<TeamIcon />}>Organisation</TabButton>
          <TabButton tabId="missions" icon={<StudentIcon />}>Missions Stagiaire</TabButton>
          <TabButton tabId="messages" icon={<MessageIcon />}>Exemples Messages</TabButton>
          <TabButton tabId="recruitment" icon={<RecruitmentIcon />}>Recrutement</TabButton>
        </nav>
      </div>
      <div>
        {renderContent()}
      </div>
    </div>
  );
};

export default TeamPage;