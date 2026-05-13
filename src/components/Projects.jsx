import { motion } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: "Mobilité Internationale (AMU)",
    tech: ["PHP (POO)", "MySQL", "JS"],
    desc: "Conception d'une application MVC pour la gestion des dossiers étudiants d'Aix-Marseille Université.",
    img: "/images/amu-project.png",
    link: "https://github.com/AmineNahi/Portfolio"
  },
  {
    id: 2,
    title: "Sunne-Sport",
    tech: ["HTML/CSS", "PHP", "JS"],
    desc: "Site web organisé pour un tournoi e-sport à l'IUT d'Aix-en-Provence. Gestion des inscriptions et matchs.",
    img: "/images/sunne-sport.png",
    link: "https://github.com/AmineNahi/Sunne-Sport"
  },
  {
    id: 3,
    title: "CodeBrief",
    tech: ["Flutter", "Dart"],
    desc: "Application mobile de gestion de projet avec cahier des charges intégré pour une organisation optimale.",
    img: "/images/flutter_app.png",
    link: "https://github.com/AmineNahi/CodeBrief"
  },
  {
    id: 4,
    title: "Jeu Pac-Man Revisité",
    tech: ["C++"],
    desc: "Jeu original en C++ : incarnez Pac-Man, ramassez des projectiles et détruisez les fantômes.",
    img: "/images/Pacman-game.png",
    link: "https://github.com/AmineNahi/PacMan_game"
  },
  {
    id: 5,
    title: "Portfolio Dynamique",
    tech: ["React", "HTML/CSS", "JavaScript"],
    desc: "Création d'un site portfolio interactif intégrant des animations fluides propulsé par un back-end en Flask.",
    img: "/images/Portfolio.png",
    link: "https://github.com/AmineNahi/Portfolio"
  }
];

export default function Projects() {
  return (
    <section id="projets" className="projects-section">
      <div className="section-header">
        <h2>Mes Projets</h2>
        <a href="https://github.com/AmineNahi" target="_blank" rel="noreferrer" className="link-text">
          Voir mon GitHub <i className="fas fa-arrow-right"></i>
        </a>
      </div>
      
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <motion.div 
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} /* S'anime une seule fois en scrollant */
            transition={{ duration: 0.5, delay: index * 0.1 }} /* Effet cascade */
          >
            <div className="project-image" style={{ backgroundImage: `url(${project.img})` }}></div>
            <div className="project-content">
              <div className="tags">
                {project.tech.map((t, i) => <span key={i}>{t}</span>)}
              </div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}