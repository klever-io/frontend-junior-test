import { Routes, Route } from 'react-router-dom'
import './assets/css/Global.css';
import Home from './pages/Home';
import AddOrEditToken from './pages/AddOrEditToken';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/add-token' element={ <AddOrEditToken /> } />
      <Route path='/edit-token' element={ <AddOrEditToken /> } />
    </Routes>
    </div>
  );
}

export default App;
