import { Helmet } from 'react-helmet-async';
import Projects from '../../components/Projects';

export default function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>Mes Projets | Amine Nahi</title>
      </Helmet>
      
      {/* Utilisation du composant exact d'origine */}
      <Projects />
      
    </>
  );
}
