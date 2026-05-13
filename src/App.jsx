import '@fortawesome/fontawesome-free/css/all.min.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      {/* Sidebar Réseaux */}
      <aside className="social-sidebar">
        <a href="https://github.com/AmineNahi" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/amine-nahi-735a72343/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
        <a href="https://www.instagram.com/_amine.nh" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
        <a href="mailto:amine.nahi@etu.univ-amu.fr" aria-label="Email"><i className="far fa-envelope"></i></a>
      </aside>

      <div className="main-wrapper">
        {/* Navigation */}
        <header className="navbar">
          <div className="logo">
            <span>N</span><span className="accent">A</span>
          </div>
          <nav className="nav-links">
            <a href="#accueil" className="active">Accueil</a>
            <a href="#infos">À propos & Compétences</a>
            <a href="#projets">Projets</a>
          </nav>
          <a href="#contact" className="btn btn-outline">Me contacter <i className="fas fa-arrow-right"></i></a>
        </header>

        {/* Composants principaux */}
        <Hero />
        
        {/* Section Infos (À propos & Compétences) */}
        <section id="infos" className="info-section">
          <div className="info-grid">
            <div className="card">
              <h3>À propos</h3>
              <p>Étudiant en BUT Informatique, je me spécialise dans la création d'applications modernes. Curieux, rigoureux et passionné par le code.</p>
              <a href="#contact" className="link-text">En savoir plus <i className="fas fa-arrow-right"></i></a>
            </div>

            <div className="card">
              <h3>Compétences</h3>
              <div className="skills-mini-grid">
                <div className="skill-item"><i className="fab fa-html5" style={{ color: '#e34f26' }}></i><span>HTML/CSS</span></div>
                <div className="skill-item"><i className="fab fa-js" style={{ color: '#f7df1e' }}></i><span>JavaScript</span></div>
                <div className="skill-item"><i className="fab fa-react" style={{ color: '#61dafb' }}></i><span>React</span></div>
                <div className="skill-item"><i className="fab fa-php" style={{ color: '#777bb4' }}></i><span>PHP</span></div>
                <div className="skill-item"><i className="fab fa-java" style={{ color: '#f89820' }}></i><span>Java</span></div>
                <div className="skill-item"><i className="fas fa-mobile-alt" style={{ color: '#42a5f5' }}></i><span>Flutter</span></div>
              </div>
            </div>

            <div className="card">
              <h3>Ce que j'aime</h3>
              <ul className="likes-list">
                <li><i className="fas fa-check-circle accent-text"></i> Architecture logicielle</li>
                <li><i className="fas fa-check-circle accent-text"></i> Performance & SEO</li>
                <li><i className="fas fa-check-circle accent-text"></i> UI/UX Design</li>
                <li><i className="fas fa-check-circle accent-text"></i> Code propre & scalable</li>
              </ul>
            </div>
          </div>
        </section>

        <Projects />
        <Contact />

        {/* Footer */}
        <footer>
          <p>© {new Date().getFullYear()} Nahi Amine. Tous droits réservés.</p>
        </footer>
      </div>
    </>
  );
}

export default App;