import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import AddOrEditToken from './pages/AddOrEditToken';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/add-token' element={ <AddOrEditToken /> } />
      <Route path='/edit-token' element={ <AddOrEditToken /> } />
    </Routes>
  );
}

export default App;
