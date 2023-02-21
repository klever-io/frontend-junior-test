import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddToken from './pages/AddToken';
import EditToken from './pages/EditToken';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addToken" element={<AddToken />} />
      <Route path="/editToken/:tokenId" element={<EditToken />} />
    </Routes>
  );
}

export default App;
