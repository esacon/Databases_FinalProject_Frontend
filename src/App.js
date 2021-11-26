import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
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
import EnCurso from './components/Docente/enCurso';
import AsignaturaCreate from './components/Admin/Asignatura/asignaturaCreate';
import CursoCreate from './components/Admin/Curso/cursoCreate';

import DepartamentoCreate from './components/Admin/Departamento/create';
import ListaDepartamentos from './components/Admin/Departamento/delete';
import UpdateDepartamento from './components/Admin/Departamento/update';

import ProfeCreate from './components/Admin/Docente/profeCreate';

import EstudianteCreate from './components/Admin/Estudiante/estudianteCreate';
import ListaEstudiantes from './components/Admin/Estudiante/delete';

import MatriculaCreate from './components/Admin/Matricula/matriculaCreate';
import PeriodoCreate from './components/Admin/Periodo/periodoCreate';
import PlanCreate from './components/Admin/Plan/planCreate';
import ProgramaCreate from './components/Admin/Programa/programaCreate';
import SalonCreate from './components/Admin/Salon/salonCreate';
import './css/estilos.css'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PublicRoute exact path={rutas.LOGIN} component={Login} />
          <ProtectedRoute exact path={rutas.ADMIN} component={Admin} />
          <ProtectedRoute exact path={rutas.ADM_ASI} component={AsignaturaCreate} />
          <ProtectedRoute exact path={rutas.ADM_CUR} component={CursoCreate} />

          <ProtectedRoute exact path={rutas.ADM_DEP} component={DepartamentoCreate} />
          <ProtectedRoute exact path={rutas.ADM_DEP_L} component={ListaDepartamentos} />
          <ProtectedRoute exact path={rutas.ADM_DEP_U} component={UpdateDepartamento} />

          <ProtectedRoute exact path={rutas.ADM_DOC} component={ProfeCreate} />

          <ProtectedRoute exact path={rutas.ADM_EST} component={EstudianteCreate} />
          <ProtectedRoute exact path={rutas.ADM_EST_L} component={ListaEstudiantes} />

          <ProtectedRoute exact path={rutas.ADM_MAT} component={MatriculaCreate} />
          <ProtectedRoute exact path={rutas.ADM_PER} component={PeriodoCreate} />
          <ProtectedRoute exact path={rutas.ADM_PLN} component={PlanCreate} />
          <ProtectedRoute exact path={rutas.ADM_PRG} component={ProgramaCreate} />
          <ProtectedRoute exact path={rutas.ADM_SAL} component={SalonCreate} />
          <ProtectedRoute exact path={rutas.ESTUDIANTE} component={Estudiante} />
          <ProtectedRoute exact path={rutas.DOCENTE} component={Docente} />
          <PublicRoute exact path={rutas.PENDIENTE} component={Pendiente} />
          <PublicRoute exact path={rutas.UNAUTHORIZED} component={Unauthorized} />
          <PublicRoute path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </Router>
    </div>
  );
}

/**
 * 
 * 
          <ProtectedRoute exact path={rutas.EST_ING} component={ingreso} />
          <ProtectedRoute exact path={rutas.EST_CUR} component={curso} />
          <ProtectedRoute exact path={rutas.EST_ENT} component={entrando} />
          <ProtectedRoute exact path={rutas.EST_MAT} component={matricula} />
          <ProtectedRoute exact path={rutas.DOCENTE} component={Docente} />
          <ProtectedRoute exact path={rutas.DOC_ASI} component={asignaturaP} />
          <ProtectedRoute exact path={rutas.DOC_CUR} component={curso} />
          <ProtectedRoute exact path={rutas.DOC_ECU} component={EnCurso} />
          <ProtectedRoute exact path={rutas.DOC_INI} component={iniciando} />
 */

export default App;
