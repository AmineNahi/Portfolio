
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const services = [
    {
      icon: "fas fa-laptop-code",
      title: "Développement d'applications",
      desc: "Je conçois des outils adaptés à votre entreprise.",
      items: ["Gestion interne", "Suivi d'activité", "Automatisation"]
    },
    {
      icon: "fas fa-network-wired",
      title: "Création de backend & API",
      desc: "Des fondations solides pour vos applications web ou mobiles.",
      items: ["API sécurisées (JWT)", "Architecture scalable", "Gestion centralisée"]
    },
    {
      icon: "fas fa-database",
      title: "Mise en place de bases de données",
      desc: "Stockez vos informations de manière fiable et performante.",
      items: ["PostgreSQL", "Optimisation des performances", "Structuration"]
    },
    {
      icon: "fas fa-sync-alt",
      title: "Automatisation",
      desc: "Ne perdez plus de temps sur des tâches répétitives.",
      items: ["Envoi d'emails automatiques", "Tâches planifiées", "Scripts métier"]
    },
    {
      icon: "fas fa-server",
      title: "Déploiement & maintenance",
      desc: "Je m'occupe de mettre votre solution en ligne.",
      items: ["Serveur VM", "Monitoring", "Mise à jour continue"]
    }
  ];

  return (
    <>

      
      <section className="info-section" style={{ paddingTop: '80px' }}>
        <div className="section-header">
          <h2>Mes Services</h2>
        </div>
        
        <div className="info-grid">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div style={{ fontSize: '2rem', color: '#10b981', marginBottom: '1rem' }}><i className={service.icon}></i></div>
              <h3>{service.title}</h3>
              <p style={{ marginBottom: '1rem' }}>{service.desc}</p>
              <ul className="likes-list">
                {service.items.map((item, j) => (
                  <li key={j}><i className="fas fa-check-circle" style={{ color: '#10b981' }}></i> {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/contact" className="btn btn-outline" style={{ background: '#10b981', color: '#fff', border: 'none' }}>
            Discuter de votre projet <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>
    </>
  );
}
