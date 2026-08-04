import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ProfilePage from './Perso/ProfilePage';
import ProjectsPage from './Perso/ProjectsPage';
import ContactPage from './ContactPage';

export default function PersoSinglePage() {
  return (
    <>
      <Helmet>
        <title>Amine Nahi | Développeur Freelance Full Stack</title>
        <meta name="description" content="Développeur Freelance Full Stack. Je vous accompagne dans la création d'outils internes sur-mesure et l'automatisation de vos processus métier." />
      </Helmet>
      
      <div id="accueil">
        <Hero />
      </div>

      <div id="profil">
        <ProfilePage />
      </div>

      <div id="projets">
        <ProjectsPage />
      </div>

      <div id="contact">
        <ContactPage />
      </div>
    </>
  );
}
