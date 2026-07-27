import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CaseStudiesPage() {
  const cases = [
    {
      title: "Suivi financier automatisé",
      problem: "L'entreprise devait suivre ses flux financiers manuellement avec des rappels oubliés et des erreurs de saisie.",
      solution: "Développement d'une application sur-mesure avec backend centralisé, automatisation des emails de relance, base de données PostgreSQL robuste.",
      results: [
        "Gain de temps de plusieurs heures par semaine",
        "Fiabilité totale des relances",
        "Meilleure visibilité financière en temps réel"
      ]
    },
    {
      title: "Outil de gestion de charge",
      problem: "Besoin d'anticiper la charge de travail des équipes face à la complexité des plannings et l'arrivée de nouveaux projets (MPP).",
      solution: "Création d'un outil permettant d'importer et d'entrer des MPP (Microsoft Project Plan). L'outil calcule et projette la charge de travail en ETP.",
      results: [
        "Prévision précise des pics d'activité",
        "Meilleure répartition des ressources",
        "Anticipation des recrutements ou renforts"
      ]
    },
    {
      title: "Génération de rapports RFF (PDF)",
      problem: "La création des Rapports de Fin de Fabrication (RFF) nécessitait la compilation manuelle laborieuse de multiples fichiers PDF, prenant jusqu'à un jour et demi.",
      solution: "Développement d'un moteur de génération et formatage automatique qui fusionne et compile les différents PDF selon les données métiers.",
      results: [
        "Durée de réalisation passée de 1,5 jours à 10 minutes",
        "Zéro erreur d'assemblage",
        "Processus entièrement automatisé"
      ]
    },
    {
      title: "Catalogue web et devis sur-mesure",
      problem: "Les commerciaux manquaient d'un outil rapide et fiable pour générer des devis complexes adaptés aux besoins spécifiques des clients.",
      solution: "Développement d'un catalogue web interactif intégrant toutes les règles métier et permettant de construire dynamiquement un devis.",
      results: [
        "Création de devis sur-mesure et ultra-précis",
        "Réactivité accrue face aux clients",
        "Centralisation des offres commerciales"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cas Clients | Développeur Freelance PME | Amine Nahi</title>
        <meta name="description" content="Découvrez les projets réalisés pour des PME : suivi financier automatisé, gestion de charge, automatisation de génération de PDF et catalogue de devis." />
        <meta name="keywords" content="Cas clients développeur freelance, portfolio développeur PME, exemples applications métier, automatisation processus" />
      </Helmet>
      
      <section className="info-section" style={{ paddingTop: '80px' }}>
        <div className="section-header">
          <h2>Cas Clients</h2>
        </div>
        
        <div className="info-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
          {cases.map((study, i) => (
            <motion.div 
              key={i}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <h3>{study.title}</h3>
              
              <div style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>
                <h4 style={{ color: '#e34f26', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fas fa-times-circle"></i> Le Problème
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '5px' }}>{study.problem}</p>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fas fa-lightbulb"></i> La Solution
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '5px' }}>{study.solution}</p>
              </div>

              <div>
                <h4 style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <i className="fas fa-check-circle"></i> Le Résultat
                </h4>
                <ul className="likes-list" style={{ marginTop: 0 }}>
                  {study.results.map((res, j) => (
                    <li key={j} style={{ fontSize: '0.9rem' }}><i className="fas fa-check" style={{ color: '#10b981' }}></i> {res}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/contact" className="btn btn-outline" style={{ background: '#10b981', color: '#fff', border: 'none' }}>
            Me parler de votre besoin <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>
    </>
  );
}
