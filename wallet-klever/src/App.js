import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddToken from './pages/AddToken';
import EditToken from './pages/EditToken';
import './App.css';
import 'bulma/css/bulma.css';

function App() {
  return (
    <div className='hero is-fullheight custom-background'>
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/addToken" component={ AddToken } />
      <Route exact path="/editToken/:id" component={ EditToken } />
    </Switch>
    </div>
  );
}

export default App;
