
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function EnterpriseHome() {
  return (
    <>

      
      <section className="info-section" style={{ paddingTop: '80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>J'aide les PME à <span className="accent-text">Automatiser</span></h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem' }}>
            Je développe des outils internes performants pour vous faire gagner du temps et fiabiliser vos processus (RH, facturation, stocks).
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginBottom: '4rem' }}>
          <Link to="/entreprise/services" className="btn btn-outline" style={{ background: '#10b981', color: '#fff', border: 'none' }}>
            Découvrir mes services
          </Link>
          <Link to="/entreprise/cas-clients" className="btn btn-outline">
            Voir les cas clients
          </Link>
        </div>

        <div className="info-grid">
          <motion.div 
            className="card"
            whileHover={{ y: -5 }}
          >
            <div style={{ fontSize: '2rem', color: '#10b981', marginBottom: '1rem' }}><i className="fas fa-cogs"></i></div>
            <h3>Outils sur-mesure</h3>
            <p>Des applications web ou mobiles conçues spécifiquement pour s'adapter à votre métier et non l'inverse.</p>
          </motion.div>

          <motion.div 
            className="card"
            whileHover={{ y: -5 }}
          >
            <div style={{ fontSize: '2rem', color: '#10b981', marginBottom: '1rem' }}><i className="fas fa-bolt"></i></div>
            <h3>Automatisation</h3>
            <p>Ne perdez plus de temps sur les tâches répétitives : envois d'emails, génération de rapports, relances.</p>
          </motion.div>

          <motion.div 
            className="card"
            whileHover={{ y: -5 }}
          >
            <div style={{ fontSize: '2rem', color: '#10b981', marginBottom: '1rem' }}><i className="fas fa-shield-alt"></i></div>
            <h3>Données Sécurisées</h3>
            <p>Fini les fichiers Excel volants. Centralisez vos données dans une architecture robuste et sécurisée.</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
