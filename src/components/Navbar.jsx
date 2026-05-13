export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <span>N</span><span className="accent">A</span>
      </div>
      <nav className="nav-links">
        <a href="#accueil" className="active">Accueil</a>
        <a href="#infos">À propos & Compétences</a>
        <a href="#projets">Projets</a>
      </nav>
      <a href="#contact" className="btn btn-outline">
        Me contacter <i className="fas fa-arrow-right"></i>
      </a>
    </header>
  );
}