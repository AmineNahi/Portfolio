import { Helmet } from 'react-helmet-async';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact | Amine Nahi</title>
      </Helmet>
      
      <div style={{ paddingTop: '80px' }}>
        <Contact />
      </div>
    </>
  );
}
