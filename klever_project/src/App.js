import { Switch, Route } from 'react-router-dom'
import './App.css';
import AddToken from './pages/AddToken';
import EditToken from './pages/EditToken';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
        <Switch>
        <Route
          exact
          path="/"
          component={ Home }
        />
        <Route
        exact
        path="/AddToken"
        component={ AddToken }
        />
        <Route
        exact
        path="/EditToken"
        component={ EditToken }
        />
        </Switch>

    </div>
  );
}

export default App;