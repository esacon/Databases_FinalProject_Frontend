import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import { rutas} from './path';
import PublicRoute from './components/Login/routes/PublicRoute';
import ProtectedRoute from './components/Login/routes/ProtectedRoute';
import Pendiente from './components/views/Pendiente';
import Unauthorized from './components/views/Unauthorized';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';

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


import Estudiante from './components/Estudiante/Estudiante';
import EST_CRS from './components/Estudiante/estudiante-cursos';
import EST_ING from './components/Estudiante/estudiante-ingreso';
import EST_CUR from './components/Estudiante/estudiante-cursoid';


import Docente from './components/Docente/Docente';
import DOC_CRS from './components/Docente/docente-cursos';
import DOC_INI from './components/Docente/docente-iniciando';
import DOC_CUR from './components/Docente/docente-cursoid';
import DOC_ENT from './components/Docente/docente-encurso';
import DOC_ASI from './components/Docente/docente-sesion';
import './css/estilos.css'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PublicRoute exact path={rutas.LOGIN} component={Login} />
          <PublicRoute exact path={rutas.ADMIN} component={Admin} />/* */
          <PublicRoute exact path={rutas.ADM_ASI} component={AsignaturaCreate} />/* */
          <PublicRoute exact path={rutas.ADM_CUR} component={CursoCreate} />/* */

          <PublicRoute exact path={rutas.ADM_DEP} component={DepartamentoCreate} />/* */
          <PublicRoute exact path={rutas.ADM_DEP_L} component={ListaDepartamentos} />/* */
          <PublicRoute exact path={rutas.ADM_DEP_U} component={UpdateDepartamento} />/* */

          <PublicRoute exact path={rutas.ADM_DOC} component={ProfeCreate} />/* */

          <PublicRoute exact path={rutas.ADM_EST} component={EstudianteCreate} />/* */
          <PublicRoute exact path={rutas.ADM_EST_L} component={ListaEstudiantes} />/* */

          <PublicRoute exact path={rutas.ADM_MAT} component={MatriculaCreate} />/* */
          <PublicRoute exact path={rutas.ADM_PER} component={PeriodoCreate} />/* */
          <PublicRoute exact path={rutas.ADM_PLN} component={PlanCreate} />/* */
          <PublicRoute exact path={rutas.ADM_PRG} component={ProgramaCreate} />/* */
          <PublicRoute exact path={rutas.ADM_SAL} component={SalonCreate} />/* */

          <PublicRoute exact path={rutas.ESTUDIANTE} component={Estudiante} />/* */
          <PublicRoute exact path={rutas.EST_CRS} component={EST_CRS} />/* */
          <PublicRoute exact path={rutas.EST_ING} component={EST_ING} />/* */
          <PublicRoute exact path={rutas.EST_CUR} component={EST_CUR} />/* */


          <PublicRoute exact path={rutas.DOCENTE} component={Docente} />/* */
          <PublicRoute exact path={rutas.DOC_CRS} component={DOC_CRS} />/* */
          <PublicRoute exact path={rutas.DOC_INI} component={DOC_INI} />/* */
          <PublicRoute exact path={rutas.DOC_CUR} component={DOC_CUR} />/* */
          <PublicRoute exact path={rutas.DOC_ECU} component={DOC_ENT} />/* */
          <PublicRoute exact path={rutas.DOC_ASI} component={DOC_ASI} />/* */
          


          <PublicRoute exact path={rutas.PENDIENTE} component={Pendiente} />
          <PublicRoute exact path={rutas.UNAUTHORIZED} component={Unauthorized} />
          <PublicRoute path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </Router>
    </div>
  );
}


export default App;
