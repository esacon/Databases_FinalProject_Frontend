import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import { rutas} from './path';
import ProtectedRoute from './components/Login/routes/ProtectedRoute';
import PublicRoute from './components/Login/routes/PublicRoute';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import Estudiante from './components/Estudiante/Estudiante';
import Docente from './components/Docente/Docente';
import Pendiente from './components/views/Pendiente';
import Unauthorized from './components/views/Unauthorized';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PublicRoute exact path={rutas.LOGIN} component={Login} />
          <ProtectedRoute exact path={rutas.ADMIN} component={Admin} />
          <ProtectedRoute exact path={rutas.ESTUDIANTE} component={Estudiante} />
          <ProtectedRoute exact path={rutas.EST_MAT} component={Estudiante} />
          <ProtectedRoute exact path={rutas.DOCENTE} component={Docente} />
          <PublicRoute exact path={rutas.PENDIENTE} component={Pendiente} />
          <PublicRoute exact path={rutas.UNAUTHORIZED} component={Unauthorized} />
          <PublicRoute path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
