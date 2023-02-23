import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddToken from './pages/AddToken'
import EditToken from './pages/EditToken'
import NotFound from './pages/NotFound';
import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add" element={<AddToken/>} />
        <Route path="/edit" element={<EditToken/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App;
