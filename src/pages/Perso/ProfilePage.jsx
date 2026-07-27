import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ProfilePage() {
  return (
    <>
      <Helmet>
        <title>Profil & Compétences | Amine Nahi - Freelance Full Stack</title>
        <meta name="description" content="Développeur freelance spécialisé React, Node.js, Python et PostgreSQL. J'analyse, je conçois et je déploie des applications robustes." />
      </Helmet>
      
      <section className="info-section" style={{ paddingTop: '80px' }}>
        <div className="section-header">
          <h2>Profil & Compétences</h2>
        </div>
        
        <div className="info-grid">
          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3>À propos</h3>
            <p>Étudiant en BUT Informatique, je me spécialise dans la création d'applications modernes. Curieux, rigoureux et passionné par le code.</p>
            <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>Je ne me contente pas de coder : j'analyse le besoin, je propose une architecture, je développe et je déploie.</p>
            <Link to="/contact" className="link-text" style={{ marginTop: '1rem', display: 'inline-block' }}>Me contacter <i className="fas fa-arrow-right"></i></Link>
          </motion.div>

          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3>Compétences Techniques</h3>
            <div className="skills-mini-grid">
              <div className="skill-item"><i className="fab fa-html5" style={{ color: '#e34f26' }}></i><span>HTML/CSS</span></div>
              <div className="skill-item"><i className="fab fa-js" style={{ color: '#f7df1e' }}></i><span>JavaScript</span></div>
              <div className="skill-item"><i className="fab fa-react" style={{ color: '#61dafb' }}></i><span>React</span></div>
              <div className="skill-item"><i className="fab fa-node" style={{ color: '#3c873a' }}></i><span>Node.js</span></div>
              <div className="skill-item"><i className="fab fa-python" style={{ color: '#3776AB' }}></i><span>Python</span></div>
              <div className="skill-item"><i className="fas fa-database" style={{ color: '#336791' }}></i><span>PostgreSQL</span></div>
              <div className="skill-item"><i className="fab fa-docker" style={{ color: '#2496ED' }}></i><span>Docker</span></div>
              <div className="skill-item"><i className="fab fa-php" style={{ color: '#777bb4' }}></i><span>PHP</span></div>
              <div className="skill-item"><i className="fab fa-java" style={{ color: '#f89820' }}></i><span>Java</span></div>
            </div>
          </motion.div>

          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3>Ce que j'aime</h3>
            <ul className="likes-list">
              <li><i className="fas fa-check-circle accent-text"></i> Architecture logicielle</li>
              <li><i className="fas fa-check-circle accent-text"></i> Performance & SEO</li>
              <li><i className="fas fa-check-circle accent-text"></i> UI/UX Design</li>
              <li><i className="fas fa-check-circle accent-text"></i> Code propre & scalable</li>
              <li><i className="fas fa-check-circle accent-text"></i> Automatisation de processus</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
}
