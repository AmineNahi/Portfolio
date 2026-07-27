import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();
  const isBusiness = location.pathname.startsWith('/entreprise');

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
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <span>N</span><span className="accent">A</span>
            </Link>
          </div>
          
          {/* Dual Navigation based on route */}
          <nav className="nav-links">
            {isBusiness ? (
              <>
                <Link to="/entreprise" className={location.pathname === '/entreprise' ? 'active' : ''}>PME Accueil</Link>
                <Link to="/entreprise/services" className={location.pathname === '/entreprise/services' ? 'active' : ''}>Services</Link>
                <Link to="/entreprise/cas-clients" className={location.pathname === '/entreprise/cas-clients' ? 'active' : ''}>Cas Clients</Link>
              </>
            ) : (
              <>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</Link>
                <Link to="/profil" className={location.pathname === '/profil' ? 'active' : ''}>Profil</Link>
                <Link to="/projets" className={location.pathname === '/projets' ? 'active' : ''}>Projets</Link>
              </>
            )}
          </nav>
          
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <Link to={isBusiness ? "/" : "/entreprise"} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textDecoration: 'none' }}>
              {isBusiness ? <><i className="fas fa-user"></i> Espace Perso</> : <><i className="fas fa-building"></i> Espace PME</>}
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </header>

        {/* Dynamic Content */}
        <Outlet />

        {/* Footer */}
        <footer>
          <p>© {new Date().getFullYear()} Nahi Amine. Tous droits réservés.</p>
        </footer>
      </div>
    </>
  );
}
