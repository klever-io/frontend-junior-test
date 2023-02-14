import { Routes, Route } from 'react-router-dom';
import AddToken from './Pages/AddToken';
import EditToken from './Pages/EditToken';
import Home from './Pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/add-token' element={ <AddToken /> } />
      <Route path='/edit-token' element={ <EditToken /> } />
    </Routes>
  );
}

export default App;
