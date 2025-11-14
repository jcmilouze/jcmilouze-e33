import React, { useState } from 'react';
import { OfficeIcon, MedicalIcon, StoreIcon, JourneyIcon, FaqIcon } from './icons/IconComponents';

type Tab = 'personas' | 'portfolio' | 'channels' | 'journeys' | 'faq';

// PersonaCard component for reusability
const PersonaCard: React.FC<{icon: React.ReactNode; title: string; children: React.ReactNode}> = ({icon, title, children}) => (
    <div className="bg-slate-50 rounded-lg p-6 flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="flex-shrink-0 bg-sky-100 text-sky-700 rounded-full p-3 mt-1">
            {icon}
        </div>
        <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
            {children}
        </div>
    </div>
);

const JourneyBlock: React.FC<{title: string; imageUrl: string; imageAlt: string; children: React.ReactNode}> = ({title, imageUrl, imageAlt, children}) => (
    <div className="p-6 bg-slate-50 rounded-lg">
        <h3 className="text-xl font-semibold text-slate-800 mb-3">{title}</h3>
        <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="md:w-1/3">
                 <img src={imageUrl} alt={imageAlt} className="rounded-lg shadow-md w-full h-40 object-cover" />
            </div>
            <div className="md:w-2/3">
                 <ul className="list-none space-y-3 text-slate-600">
                    {children}
                 </ul>
            </div>
        </div>
    </div>
);

const ClientsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('personas');

  // Tab button component
  const TabButton: React.FC<{tabId: Tab; children: React.ReactNode, icon?: React.ReactNode}> = ({tabId, children, icon}) => {
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
      case 'personas':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-sky-700">Profils Types de Clients</h2>
            <p className="text-slate-600 leading-relaxed">Pour offrir un service sur-mesure, nous devons comprendre parfaitement les besoins uniques de chaque client. Voici trois exemples de partenaires avec qui nous travaillons au quotidien.</p>
            
            <PersonaCard icon={<OfficeIcon />} title="La PME en Croissance (Secteur tertiaire)">
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li><strong>Taille :</strong> 20 à 50 salariés, bureaux de 200 à 500m².</li>
                    <li><strong>Besoins :</strong> Nettoyage quotidien ou tri-hebdomadaire des bureaux, salles de réunion, et espaces communs pour garantir un environnement de travail sain et productif. Entretien des sanitaires et de la cuisine.</li>
                    <li><strong>Contraintes horaires :</strong> Intervention discrète tôt le matin (6h-8h) ou le soir (après 19h) pour ne pas perturber l'activité.</li>
                    <li><strong>Attentes :</strong> Fiabilité et régularité sont primordiales. Attend un interlocuteur réactif pour gérer les demandes ponctuelles (ex: nettoyage après un événement interne).</li>
                </ul>
            </PersonaCard>

            <PersonaCard icon={<MedicalIcon />} title="Le Cabinet Médical ou Paramédical">
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                     <li><strong>Taille :</strong> 2 à 5 praticiens, locaux de 80 à 150m².</li>
                    <li><strong>Besoins :</strong> Hygiène irréprochable des salles d'attente, des cabinets de consultation et des sanitaires. Désinfection des points de contact (poignées, interrupteurs, terminaux de paiement).</li>
                    <li><strong>Contraintes horaires :</strong> Nettoyage impérativement en dehors des heures de consultation, souvent pendant la pause déjeuner ou tard le soir.</li>
                    <li><strong>Attentes :</strong> Rigueur extrême dans l'application des protocoles de nettoyage spécifiques au milieu médical. Discrétion absolue et confiance dans le personnel intervenant.</li>
                </ul>
            </PersonaCard>

            <PersonaCard icon={<StoreIcon />} title="Le Commerce de Centre-Ville">
                <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li><strong>Taille :</strong> Boutique indépendante ou franchise, surface de vente de 50 à 200m².</li>
                    <li><strong>Besoins :</strong> Entretien des sols à fort trafic, nettoyage des vitrines pour une attractivité maximale, propreté des cabines d'essayage et des comptoirs.</li>
                    <li><strong>Contraintes horaires :</strong> Intervention très tôt le matin, avant l'arrivée du personnel et l'ouverture au public. Flexibilité requise pendant les périodes de soldes ou d'opérations commerciales.</li>
                    <li><strong>Attentes :</strong> Efficacité et rapidité d'exécution. Le gérant attend une boutique impeccable pour accueillir ses premiers clients. Le nettoyage doit valoriser les produits et l'image de marque.</li>
                </ul>
            </PersonaCard>
          </div>
        );
      case 'portfolio':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-sky-700">Répartition de notre Portefeuille Clients (2024)</h2>
            <p className="text-slate-600 leading-relaxed">Notre développement s'appuie sur une base de clients diversifiée et fidèle, preuve de notre capacité d'adaptation et de la qualité de nos services.</p>

            <div className="p-6 bg-slate-50 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Répartition par Secteur d'Activité</h3>
                <div className="space-y-3 text-slate-700">
                    <p><strong>Bureaux (PME / TPE) :</strong> 45%</p>
                    <p><strong>Commerces et points de vente :</strong> 25%</p>
                    <p><strong>Professions libérales (médical, juridique, etc.) :</strong> 15%</p>
                    <p><strong>Copropriétés :</strong> 10%</p>
                    <p><strong>Autres (locaux industriels légers, etc.) :</strong> 5%</p>
                </div>
            </div>

             <div className="p-6 bg-slate-50 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Fidélité de notre Clientèle</h3>
                <p className="text-slate-600 mb-3">La confiance se construit dans la durée. Nous sommes fiers de notre taux de rétention élevé.</p>
                <div className="space-y-3 text-slate-700">
                    <p><strong>Part des clients fidèles (plus de 2 ans) :</strong> 70%</p>
                    <p><strong>Part des nouveaux clients (moins de 2 ans) :</strong> 30%</p>
                    <p className="text-sm text-slate-500 italic">Ces chiffres témoignent de la satisfaction de nos clients et de notre croissance maîtrisée, principalement bâtie sur des relations solides.</p>
                </div>
            </div>
          </div>
        );
      case 'channels':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-sky-700">Nos Canaux de Prospection</h2>
            <p className="text-slate-600 leading-relaxed">Pour continuer notre croissance, nous combinons des méthodes de prospection traditionnelles et modernes, en privilégiant toujours une approche qualitative et personnalisée.</p>

            <ul className="list-none space-y-4">
                <li className="p-4 bg-slate-50 rounded-lg">
                    <h3 className="font-semibold text-slate-800">Prospection Téléphonique et E-mailing</h3>
                    <p className="text-slate-600">Nos chargés d'affaires réalisent un travail de ciblage précis pour contacter des entreprises dont les besoins correspondent à notre savoir-faire.</p>
                </li>
                <li className="p-4 bg-slate-50 rounded-lg">
                    <h3 className="font-semibold text-slate-800">Visites Terrain</h3>
                    <p className="text-slate-600">Nous croyons à la force du contact direct. Des visites spontanées dans les zones d'activités nous permettent de nous présenter et de comprendre les problématiques locales.</p>
                </li>
                <li className="p-4 bg-slate-50 rounded-lg">
                    <h3 className="font-semibold text-slate-800">Site Web et Référencement Local</h3>
                    <p className="text-slate-600">Notre site est notre vitrine digitale. Nous travaillons à être bien visibles sur les moteurs de recherche pour les entreprises lyonnaises qui cherchent un prestataire de nettoyage de confiance.</p>
                </li>
                 <li className="p-4 bg-slate-50 rounded-lg">
                    <h3 className="font-semibold text-slate-800">Recommandations et Bouche-à-oreille</h3>
                    <p className="text-slate-600">C'est notre canal le plus précieux. Un client satisfait est notre meilleur ambassadeur. Nous encourageons et valorisons les recommandations.</p>
                </li>
                 <li className="p-4 bg-slate-50 rounded-lg">
                    <h3 className="font-semibold text-slate-800">Réseaux Professionnels</h3>
                    <p className="text-slate-600">Notre gérant et nos commerciaux sont actifs dans les réseaux d'entrepreneurs locaux (clubs d'entreprises, BNI...) pour créer des liens et développer des synergies.</p>
                </li>
            </ul>
          </div>
        );
    case 'journeys':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-sky-700">Parcours de Quelques Clients Clés</h2>
            <p className="text-slate-600 leading-relaxed">La confiance s'entretient sur la durée. Voici l'historique de la relation avec trois de nos clients emblématiques, illustrant notre engagement au quotidien.</p>
            
            <JourneyBlock 
                title='Client A : PME "InnovTech"' 
                imageUrl="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2070&auto=format&fit=crop"
                imageAlt="Open-space avec employés au travail">
                <>
                    <li><strong>Janvier 2023 :</strong> Premier contact via le formulaire de notre site web.</li>
                    <li><strong>Février 2023 :</strong> Signature d'un contrat annuel pour un entretien bi-hebdomadaire.</li>
                    <li><strong>Mai 2023 :</strong> Première visite qualité. Le client signale un oubli ponctuel. Action corrective immédiate et rappel des consignes à l'équipe.</li>
                    <li><strong>Janvier 2024 :</strong> Renouvellement tacite du contrat. Geste commercial : nettoyage des vitres offert.</li>
                    <li><strong>Juin 2024 :</strong> L'entreprise déménage et nous reconfirme sa confiance pour ses nouveaux locaux, plus grands.</li>
                </>
            </JourneyBlock>
            
            <JourneyBlock 
                title='Client B : Cabinet Médical "SantéPlus"' 
                imageUrl="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                imageAlt="Réception et salle d'attente d'un cabinet médical moderne">
                <>
                    <li><strong>Juin 2023 :</strong> Signature d'un contrat mensuel flexible pour un nettoyage quotidien après fermeture.</li>
                    <li><strong>Novembre 2023 :</strong> Réclamation concernant des traces sur la vitrine. Le chef de secteur se déplace dans la journée et une nouvelle technique est mise en place.</li>
                    <li><strong>Décembre 2023 :</strong> Le cabinet signale un risque de départ, ayant reçu une offre concurrente moins chère.</li>
                    <li><strong>Janvier 2024 :</strong> Rendez-vous avec le gérant. Nous mettons en avant la fiabilité et la réactivité de notre service. Nous proposons une remise de fidélité de 5% pour le passage à un contrat annuel. Le client est conservé.</li>
                    <li><strong>Juillet 2024 :</strong> Le client nous recommande à un autre cabinet voisin, qui devient client à son tour.</li>
                </>
            </JourneyBlock>

            <JourneyBlock 
                title='Client C : Boutique "Le Vesti-Boutique"' 
                imageUrl="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=2079&auto=format&fit=crop"
                imageAlt="Intérieur d'une boutique de vêtements bien rangée">
                <>
                    <li><strong>Mars 2023 :</strong> Premier contact lors d'une visite terrain de notre commerciale.</li>
                    <li><strong>Avril 2023 :</strong> Signature d'un contrat mensuel pour un nettoyage des sols et vitrines avant ouverture.</li>
                    <li><strong>Juillet 2023 :</strong> Demande d'intervention supplémentaire en urgence pendant les soldes. Équipe mobilisée sous 24h.</li>
                    <li><strong>Décembre 2023 :</strong> Prestation de nettoyage approfondi avant les fêtes de fin d'année.</li>
                    <li><strong>Mai 2024 :</strong> Le gérant exprime sa satisfaction et nous interroge sur nos services pour une deuxième boutique en projet.</li>
                </>
            </JourneyBlock>
          </div>
        );
    case 'faq':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-sky-700">FAQ – Questions fréquentes des clients</h2>
            <p className="text-slate-600 leading-relaxed">Nous avons regroupé ici les questions les plus fréquentes de nos clients pour vous apporter des réponses claires et rapides.</p>
            <div className="space-y-4">
                <details className="p-4 bg-slate-50 rounded-lg cursor-pointer">
                    <summary className="font-semibold text-slate-800">Que faire si je ne suis pas satisfait d’une prestation ?</summary>
                    <p className="text-slate-600 mt-2">Votre satisfaction est notre priorité. Contactez immédiatement votre interlocuteur commercial dédié ou notre bureau. Nous nous engageons à vous apporter une solution sous 24h, ce qui inclut le plus souvent une ré-intervention gratuite.</p>
                </details>
                <details className="p-4 bg-slate-50 rounded-lg cursor-pointer">
                    <summary className="font-semibold text-slate-800">Qui est mon interlocuteur dédié chez ProNet Services ?</summary>
                    <p className="text-slate-600 mt-2">Dès la signature de votre contrat, un chargé d'affaires vous est attitré. Il est votre point de contact unique pour toute question commerciale ou administrative. Pour le suivi opérationnel, votre chef d'équipe référent est également à votre écoute.</p>
                </details>
                 <details className="p-4 bg-slate-50 rounded-lg cursor-pointer">
                    <summary className="font-semibold text-slate-800">Comment modifier la fréquence des interventions ?</summary>
                    <p className="text-slate-600 mt-2">C'est très simple. Il suffit d'en faire la demande auprès de votre chargé d'affaires. Nous établirons un avenant à votre contrat pour ajuster les prestations et la facturation en fonction de vos nouveaux besoins.</p>
                </details>
                 <details className="p-4 bg-slate-50 rounded-lg cursor-pointer">
                    <summary className="font-semibold text-slate-800">Sous quel délai pouvez-vous intervenir en cas d’urgence ?</summary>
                    <p className="text-slate-600 mt-2">Grâce à notre ancrage local, nous pouvons faire preuve d'une grande réactivité. Pour un besoin urgent (dégât des eaux, préparation d'événement imprévu...), nous pouvons généralement mobiliser une équipe sous 24 à 48 heures.</p>
                </details>
                 <details className="p-4 bg-slate-50 rounded-lg cursor-pointer">
                    <summary className="font-semibold text-slate-800">ProNet propose-t-il des avantages pour les clients fidèles ou le parrainage ?</summary>
                    <p className="text-slate-600 mt-2">Oui, nous valorisons la confiance de nos clients. Nous avons un programme de parrainage qui peut vous faire bénéficier de remises. N'hésitez pas à en parler à votre contact commercial pour en connaître les modalités précises.</p>
                </details>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
        <div className="mb-8 rounded-lg shadow-lg overflow-hidden">
             <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Immeuble de bureaux moderne" className="w-full h-48 object-cover" />
        </div>
      <div className="border-b border-slate-200 mb-8">
        <nav className="-mb-px flex flex-wrap space-x-6" aria-label="Tabs">
          <TabButton tabId="personas">Profils Types</TabButton>
          <TabButton tabId="portfolio">Portefeuille</TabButton>
          <TabButton tabId="channels">Prospection</TabButton>
          <TabButton tabId="journeys" icon={<JourneyIcon />}>Parcours Clients</TabButton>
          <TabButton tabId="faq" icon={<FaqIcon />}>FAQ</TabButton>
        </nav>
      </div>
      <div>
        {renderContent()}
      </div>
    </div>
  );
};

export default ClientsPage;