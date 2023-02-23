import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddToken from './pages/AddToken';
import EditToken from './pages/EditToken';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/addToken" component={ AddToken } />
      <Route exact path="/editToken/:id" component={ EditToken } />
    </Switch>
  );
}

export default App;
