import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import { rutas} from './path';
import ProtectedRoute from './components/Login/routes/ProtectedRoute';
import PublicRoute from './components/Login/routes/PublicRoute';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PublicRoute exact path={rutas.LOGIN} component={Login} />
          <PublicRoute path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
