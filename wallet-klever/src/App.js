import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddToken from './pages/AddToken';
import EditToken from './pages/EditToken';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addToken" element={<AddToken />} />
      <Route path="/editToken/:id" element={<EditToken />} />
    </Routes>
  );
}

export default App;
