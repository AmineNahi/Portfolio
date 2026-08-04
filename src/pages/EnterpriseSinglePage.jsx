import React from 'react';
import { Helmet } from 'react-helmet-async';
import EnterpriseHome from './Entreprise/EnterpriseHome';
import ServicesPage from './Entreprise/ServicesPage';
import CaseStudiesPage from './Entreprise/CaseStudiesPage';
import ContactPage from './ContactPage';

export default function EnterpriseSinglePage() {
  return (
    <>
      <Helmet>
        <title>Amine Nahi | Solutions PME & Outils Internes</title>
        <meta name="description" content="Solutions digitales pour PME : outils internes, automatisation et logiciels sur mesure." />
      </Helmet>

      <div id="accueil-entreprise">
        <EnterpriseHome />
      </div>

      <div id="services">
        <ServicesPage />
      </div>

      <div id="cas-clients">
        <CaseStudiesPage />
      </div>

      <div id="contact">
        <ContactPage />
      </div>
    </>
  );
}
