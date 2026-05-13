import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="accueil" className="hero">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="tag">DÉVELOPPEUR FULL STACK</span>
        <h1>Je conçois des expériences web <span className="highlight">modernes</span> & performantes.</h1>
        <p>Développeur passionné par la création d'applications élégantes, rapides et accessibles, du front-end au back-end.</p>
        <div className="hero-buttons">
          <a href="#projets" className="btn btn-primary">Voir mes projets <i className="fas fa-arrow-right"></i></a>
          {/* Le lien pointe directement vers la racine du dossier public */}
          <a href="/CV_Amine_Nahi.pdf" download="CV_Amine_Nahi.pdf" target="_blank" rel="noreferrer" className="btn btn-secondary">
            Télécharger mon CV <i className="fas fa-download"></i>
          </a>
        </div>
      </motion.div>
      
      <motion.div 
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="glow-effect"></div>
        <img src="/images/profile.png" alt="Photo de profile de Nahi Amine" className="profile-image" />
      </motion.div>
    </section>
  );
}