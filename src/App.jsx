import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Layout from './components/Layout';
import PersoSinglePage from './pages/PersoSinglePage';
import EnterpriseSinglePage from './pages/EnterpriseSinglePage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<PersoSinglePage />} />
            <Route path="entreprise" element={<EnterpriseSinglePage />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;