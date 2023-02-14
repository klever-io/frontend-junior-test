import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Home from './pages/Home';
import AddToken from './pages/AddToken';

function WalletRoutes() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/add-token" element={<AddToken />}/>
      </Routes>
    </Router>
  );
}

export default WalletRoutes;