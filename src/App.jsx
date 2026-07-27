import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Layout from './components/Layout';
import Home from './pages/Home';
import ProfilePage from './pages/Perso/ProfilePage';
import ProjectsPage from './pages/Perso/ProjectsPage';
import EnterpriseHome from './pages/Entreprise/EnterpriseHome';
import ServicesPage from './pages/Entreprise/ServicesPage';
import CaseStudiesPage from './pages/Entreprise/CaseStudiesPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Espace Perso */}
            <Route index element={<Home />} />
            <Route path="profil" element={<ProfilePage />} />
            <Route path="projets" element={<ProjectsPage />} />
            
            {/* Espace PME */}
            <Route path="entreprise" element={<EnterpriseHome />} />
            <Route path="entreprise/services" element={<ServicesPage />} />
            <Route path="entreprise/cas-clients" element={<CaseStudiesPage />} />
            
            {/* Contact global */}
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;