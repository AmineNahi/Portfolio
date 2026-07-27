import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Amine Nahi | Développeur Freelance & Outils PME</title>
        <meta name="description" content="Développeur Freelance Full Stack. Je vous accompagne dans la création d'outils internes sur-mesure et l'automatisation de vos processus métier." />
        <meta name="keywords" content="Amine Nahi, Freelance dev, développeur freelance, création outils internes, développeur react, développeur PME" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Amine Nahi",
              "jobTitle": "Développeur Freelance Full Stack",
              "url": "https://aminenahi.netlify.app/",
              "sameAs": [
                "https://www.linkedin.com/in/amine-nahi-735a72343/",
                "https://github.com/AmineNahi"
              ]
            }
          `}
        </script>
      </Helmet>
      
      {/* Composant Hero Original */}
      <Hero />

      {/* Nouvelle section Double Entrée */}
      <section className="info-section" style={{ paddingTop: '2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2>Choisissez votre espace</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Mon profil s'adapte à vos besoins. Que vous cherchiez un collaborateur technique ou une solution pour votre entreprise.
          </p>
        </div>

        <div className="info-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          
          <motion.div 
            className="card"
            whileHover={{ y: -5 }}
            style={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '1rem' }}>
              <i className="fas fa-code"></i>
            </div>
            <h3>Espace Recruteur</h3>
            <p style={{ flex: 1, marginBottom: '2rem' }}>
              Développeur Fullstack. Spécialisé backend, bases de données et applications métier robustes.
            </p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <Link to="/profil" className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>Profil</Link>
              <Link to="/projets" className="btn btn-outline" style={{ padding: '0.5rem 1rem', background: 'var(--accent)', color: 'var(--bg-main)', border: 'none' }}>Projets</Link>
            </div>
          </motion.div>

          <motion.div 
            className="card"
            whileHover={{ y: -5 }}
            style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', border: '1px solid var(--accent)' }}
          >
            <div style={{ fontSize: '3rem', color: '#10b981', marginBottom: '1rem' }}>
              <i className="fas fa-building"></i>
            </div>
            <h3>Espace PME</h3>
            <p style={{ flex: 1, marginBottom: '2rem' }}>
              J'aide les entreprises à créer des outils internes sur-mesure et à automatiser leurs processus métiers.
            </p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <Link to="/entreprise" className="btn btn-outline" style={{ padding: '0.5rem 1rem', background: '#10b981', color: '#fff', border: 'none' }}>Découvrir les solutions</Link>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
