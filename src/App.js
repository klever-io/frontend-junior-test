import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import AddOrEditToken from './pages/AddOrEditToken';
import Header from './components/Header';
import './assets/css/Global.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/add-token' element={ <AddOrEditToken /> } />
      <Route path='/edit-token/:id' element={ <AddOrEditToken /> } />
    </Routes>
    </div>
  );
}

export default App;
