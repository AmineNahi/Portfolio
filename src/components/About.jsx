export default function About() {
  return (
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
  );
}