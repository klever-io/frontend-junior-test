import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import AddToken from './pages/AddToken';
import EditToken from './pages/EditToken';

function WalletRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/add-token" element={ <AddToken /> } />
        <Route path="/edit-token" element={ <EditToken /> } />
      </Routes>
    </Router>
  );
}

export default WalletRoutes;
