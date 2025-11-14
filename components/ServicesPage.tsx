import React, { useState } from 'react';

type Tab = 'prestations' | 'formules' | 'qualite';

const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('prestations');
  
  const TabButton: React.FC<{tabId: Tab; children: React.ReactNode}> = ({tabId, children}) => {
    const isActive = activeTab === tabId;
    return (
        <button
            onClick={() => setActiveTab(tabId)}
            className={`px-4 py-2 text-lg font-semibold rounded-t-lg transition-colors focus:outline-none text-center ${isActive ? 'border-b-4 border-sky-600 text-sky-700' : 'text-slate-500 hover:text-sky-600'}`}
        >
            {children}
        </button>
    )
  }
  
  const renderContent = () => {
    switch (activeTab) {
      case 'prestations':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-sky-700">Nos Prestations Principales</h2>
            <p className="text-slate-600 leading-relaxed">Nous proposons une gamme complète de services de nettoyage pour répondre aux besoins spécifiques de chaque environnement professionnel. Chaque prestation est réalisée selon un cahier des charges précis, défini avec vous.</p>
            
            <div className="space-y-6">
                <section className="offre bg-slate-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Nettoyage de Bureaux et Espaces de Travail</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">Un environnement de travail propre est essentiel pour le bien-être et la productivité. Nous assurons un entretien impeccable de vos locaux : dépoussiérage, nettoyage des surfaces, aspiration des sols, gestion des corbeilles, et entretien des sanitaires et cuisines.</p>
                  <img
                    src="https://filedn.eu/l2dkKFuRGueFx6uQAnQW97B/site%20e33/Nettoyage%20de%20Bureaux%20et%20Espaces%20de%20Travail.avif"
                    alt="Bureau parfaitement propre et organisé avec un ordinateur portable, illustrant le résultat d'un service de nettoyage professionnel"
                    className="offre-image w-full h-56 object-cover rounded-lg shadow-md"
                  />
                </section>

                <section className="offre bg-slate-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Entretien de Commerces et Points de Vente</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">La propreté de votre magasin est la première vitrine de votre marque. Nous garantissons une propreté irréprochable des sols, vitrines, et mobilier pour accueillir vos clients.</p>
                  <img
                    src="https://filedn.eu/l2dkKFuRGueFx6uQAnQW97B/site%20e33/Entretien%20de%20Commerces%20et%20Points%20de%20Vente.avif"
                    alt="Nettoyage d’une boutique de prêt-à-porter avec les rayons en arrière-plan"
                    className="offre-image w-full h-56 object-cover rounded-lg shadow-md"
                  />
                </section>

                <section className="offre bg-slate-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Nettoyage de Cabinets Médicaux et Paramédicaux</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">Nous appliquons des protocoles d'hygiène stricts pour le nettoyage et la désinfection des salles d'attente, cabinets de consultation et sanitaires, garantissant un environnement sain pour les patients et le personnel.</p>
                  <img
                    src="https://filedn.eu/l2dkKFuRGueFx6uQAnQW97B/site%20e33/Nettoyage%20de%20Cabinets%20M%C3%A9dicaux%20et%20Param%C3%A9dicaux.avif"
                    alt="Désinfection d'un cabinet de consultation médical par un professionnel"
                    className="offre-image w-full h-56 object-cover rounded-lg shadow-md"
                  />
                </section>

                <section className="offre bg-slate-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Entretien de Copropriétés et Parties Communes</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">Nous assurons le confort et la propreté des espaces de vie partagés (halls, escaliers, ascenseurs) et gérons la logistique des containers poubelles pour le bien-être des résidents.</p>
                  <img
                    src="https://filedn.eu/l2dkKFuRGueFx6uQAnQW97B/site%20e33/Entretien%20de%20Copropri%C3%A9t%C3%A9s%20et%20Parties%20Communes.avif"
                    alt="Hall d'entrée d'un immeuble résidentiel moderne, propre et lumineux"
                    className="offre-image w-full h-56 object-cover rounded-lg shadow-md"
                  />
                </section>

                <section className="offre bg-slate-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Remise en État Après Travaux ou Déménagement</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">Pour des besoins spécifiques, nous proposons des interventions ciblées pour une propreté impeccable après un chantier, avant un emménagement ou un événement important.</p>
                  <img
                    src="https://filedn.eu/l2dkKFuRGueFx6uQAnQW97B/site%20e33/Remise%20en%20%C3%89tat%20Apr%C3%A8s%20Travaux%20ou%20D%C3%A9m%C3%A9nagement.avif"
                    alt="Sol d’un bureau en cours de nettoyage après des travaux de rénovation"
                    className="offre-image w-full h-56 object-cover rounded-lg shadow-md"
                  />
                </section>

                <section className="offre bg-slate-50 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Nettoyage Ponctuel (Vitrages, Interventions spécifiques…)</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">Des vitres propres pour une luminosité optimale et une image soignée. Nos équipes interviennent sur tous types de surfaces vitrées, en toute sécurité (vitrines, baies vitrées, cloisons...).</p>
                  <img
                    src="https://filedn.eu/l2dkKFuRGueFx6uQAnQW97B/site%20e33/Nettoyage%20Ponctuel.avif"
                    alt="Professionnel du nettoyage lavant les grandes baies vitrées d'un immeuble de bureaux"
                    className="offre-image w-full h-56 object-cover rounded-lg shadow-md"
                  />
                </section>
            </div>
          </div>
        );
      case 'formules':
        return (
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3">
                    <h2 className="text-3xl font-bold text-sky-700">Formules et Contrats</h2>
                    <p className="text-slate-600 leading-relaxed mt-4">Nous proposons des solutions flexibles pour s'adapter parfaitement à votre budget et à vos besoins. Tous nos tarifs sont établis sur devis après une visite de vos locaux pour une estimation juste et précise.</p>
                </div>
                <div className="md:w-1/3">
                    <img
                        src="https://filedn.eu/l2dkKFuRGueFx6uQAnQW97B/site%20e33/contrat.avif"
                        alt="Signature d'un contrat de service symbolisant le partenariat"
                        className="rounded-lg shadow-md w-full h-auto object-cover"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-sky-600">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Contrat Annuel "Sérénité"</h3>
                    <p className="text-slate-600 mb-3">La solution idéale pour un entretien régulier et sans souci. Vous bénéficiez d'un tarif préférentiel et d'une planification fixe.</p>
                    <p className="text-lg font-bold text-sky-700">À partir de 180€ HT / mois</p>
                    <p className="text-sm text-slate-500">(Exemple pour un bureau de 50m² avec 2 interventions/semaine)</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-sky-600">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">Abonnement Mensuel "Flexibilité"</h3>
                    <p className="text-slate-600 mb-3">Un contrat souple, sans engagement annuel, pour adapter la fréquence des prestations à votre activité saisonnière.</p>
                     <p className="text-lg font-bold text-sky-700">À partir de 120€ HT / mois</p>
                    <p className="text-sm text-slate-500">(Exemple pour un petit commerce avec 1 intervention/semaine)</p>
                </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Prestation Ponctuelle "À la Carte"</h3>
                <p className="text-slate-600 mb-3">Pour un besoin spécifique (remise en état, nettoyage de vitres, événement...). Nous intervenons sur devis selon la nature et la surface de la prestation.</p>
                <p className="text-lg font-bold text-sky-700">Tarification sur devis</p>
                <p className="text-sm text-slate-500">(Exemple : Remise en état après travaux d'un local de 100m² : environ 400-600€ HT)</p>
            </div>
            
            <div className="bg-sky-100 text-sky-800 p-4 rounded-lg text-center">
                <p><strong>Note :</strong> Ces tarifs sont des estimations. Contactez-nous pour obtenir un devis personnalisé et gratuit !</p>
            </div>
          </div>
        );
      case 'qualite':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-sky-700">Nos Engagements Qualité</h2>
            <p className="text-slate-600 leading-relaxed">La qualité n'est pas une option, c'est le cœur de notre métier. Chez ProNet Services, nous nous engageons sur un cahier des charges rigoureux et des contrôles réguliers pour garantir votre entière satisfaction.</p>
            
             <div className="p-6 bg-slate-50 rounded-lg">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-2/3">
                        <h3 className="text-xl font-semibold text-slate-800 mb-2">Notre Charte Qualité</h3>
                        <p className="text-slate-600 mb-3">Chaque collaborateur ProNet Services adhère à notre charte, qui repose sur 4 piliers :</p>
                        <ul className="list-disc list-inside text-slate-600 space-y-2">
                            <li><strong>Rigueur & Ponctualité :</strong> Respect des horaires d'intervention et du cahier des charges défini.</li>
                            <li><strong>Discrétion & Professionnalisme :</strong> Nos agents interviennent avec courtoisie et respect de votre environnement de travail.</li>
                            <li><strong>Proactivité & Communication :</strong> Utilisation d'un cahier de liaison (physique ou numérique) pour signaler toute anomalie et assurer un suivi transparent.</li>
                            <li><strong>Respect de l'Environnement :</strong> Utilisation systématique de produits écolabellisés et de méthodes de nettoyage économes en eau.</li>
                        </ul>
                    </div>
                    <div className="md:w-1/3">
                        <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop" alt="Soleil brillant à travers les arbres, symbolisant l'engagement environnemental" className="rounded-lg shadow-md w-full h-48 object-cover"/>
                    </div>
                </div>
            </div>
            
            <div className="p-6 bg-slate-50 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Un Processus de Contrôle Éprouvé</h3>
                <p className="text-slate-600 mb-3">Nous ne nous contentons pas de promesses. Nous vérifions !</p>
                 <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li><strong>Visites de Contrôle Inopinées :</strong> Nos chefs d'équipe réalisent des visites régulières sur vos sites pour s'assurer de la conformité des prestations.</li>
                    <li><strong>Rapports Qualité :</strong> Des fiches de contrôle sont remplies et peuvent vous être transmises sur demande, en toute transparence.</li>
                    <li><strong>Garantie "Satisfait ou Refait" :</strong> Si une prestation n'est pas à la hauteur de vos attentes, nous nous engageons à réintervenir gratuitement dans les plus brefs délais.</li>
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
        <nav className="-mb-px flex flex-wrap space-x-6" aria-label="Tabs">
          <TabButton tabId="prestations">Prestations</TabButton>
          <TabButton tabId="formules">Formules & Contrats</TabButton>
          <TabButton tabId="qualite">Engagements Qualité</TabButton>
        </nav>
      </div>
      <div>
        {renderContent()}
      </div>
    </div>
  );
};

export default ServicesPage;