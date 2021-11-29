import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/estilos.css'

import {BrowserRouter as Router, Switch} from 'react-router-dom';
import { rutas} from './path';
import PublicRoute from './components/Login/routes/PublicRoute';
import ProtectedRoute from './components/Login/routes/ProtectedRoute';

import Pendiente from './components/views/Pendiente';
import Unauthorized from './components/views/Unauthorized';
import Login from './components/Login/Login';

import Estudiante from './components/Estudiante/Estudiante';
import EstudianteCursos from './components/Estudiante/estudiante-cursos';
import EstudianteCurso from './components/Estudiante/estudiante-cursoid';
import EstudianteIngreso from './components/Estudiante/estudiante-ingreso';

import Docente from './components/Docente/Docente';
import DocenteCurso from './components/Docente/docente-cursoid';
import DocenteCursos from './components/Docente/docente-cursos';
import DocenteEnCurso from './components/Docente/docente-encurso';
import DocenteIniciando from './components/Docente/docente-iniciando';
import DocenteSesion from './components/Docente/docente-sesion';

import Admin from './components/Admin/Admin';

import AsignaturaCreate from './components/Admin/Asignatura/asignatura.create';
import AsignaturaLista from './components/Admin/Asignatura/asignatura.delete';
import AsignaturaUpdate from './components/Admin/Asignatura/asignatura.update';
import CursoCreate from './components/Admin/Curso/curso.create';
import CursoLista from './components/Admin/Curso/curso.delete';
import CursoUpdate from './components/Admin/Curso/curso.update';
import DepartamentoCreate from './components/Admin/Departamento/departamento.create';
import DepartamentoLista from './components/Admin/Departamento/departamento.delete';
import DepartamentoUpdate from './components/Admin/Departamento/departamento.update';
import DocenteCreate from './components/Admin/Docente/docente.create';
import DocenteLista from './components/Admin/Docente/docente.delete';
import DocenteUpdate from './components/Admin/Docente/docente.update';
import EstudianteCreate from './components/Admin/Estudiante/estudiante.create';
import EstudianteLista from './components/Admin/Estudiante/estudiante.delete';
import EstudianteUpdate from './components/Admin/Estudiante/estudiante.update';
import MatriculaCreate from './components/Admin/Matricula/matricula.create';
import MatriculaLista from './components/Admin/Matricula/matricula.delete';
import MatriculaUpdate from './components/Admin/Matricula/matricula.update';
import PeriodoCreate from './components/Admin/Periodo/periodo.create';
import PeriodoLista from './components/Admin/Periodo/periodo.delete';
import PeriodoUpdate from './components/Admin/Periodo/periodo.update';
import PlanCreate from './components/Admin/Plan/plan.create';
import PlanLista from './components/Admin/Plan/plan.delete';
import PlanUpdate from './components/Admin/Plan/plan.update';
import ProgramaCreate from './components/Admin/Programa/programa.create';
import ProgramaLista from './components/Admin/Programa/programa.delete';
import ProgramaUpdate from './components/Admin/Programa/programa.update';
import SalonCreate from './components/Admin/Salon/salon.create';
import SalonLista from './components/Admin/Salon/salon.delete';
import SalonUpdate from './components/Admin/Salon/salon.update';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PublicRoute exact path={rutas.LOGIN} component={Login} />
          <PublicRoute exact path={rutas.PENDIENTE} component={Pendiente} />
          <PublicRoute exact path={rutas.UNAUTHORIZED} component={Unauthorized} />

          <ProtectedRoute exact path={rutas.ESTUDIANTE} component={Estudiante} />
          <ProtectedRoute exact path={rutas.EST_ING} component={EstudianteIngreso} />
          <ProtectedRoute exact path={rutas.EST_CRS} component={EstudianteCursos} />
          <ProtectedRoute exact path={rutas.EST_CUR} component={EstudianteCurso} />
          <ProtectedRoute exact path={rutas.EST_ENT} component={Admin} />

          <ProtectedRoute exact path={rutas.DOCENTE} component={Docente} />
          <ProtectedRoute exact path={rutas.DOC_ASI} component={DocenteSesion} />
          <ProtectedRoute exact path={rutas.DOC_CRS} component={DocenteCursos} />
          <ProtectedRoute exact path={rutas.DOC_CUR} component={DocenteCurso} />
          <ProtectedRoute exact path={rutas.DOC_ENT} component={DocenteEnCurso} />
          <ProtectedRoute exact path={rutas.DOC_INI} component={DocenteIniciando} />
          
          <ProtectedRoute exact path={rutas.ADMIN} component={Admin} />   

          <ProtectedRoute exact path={rutas.ADM_ASI} component={AsignaturaCreate} />
          <ProtectedRoute exact path={rutas.ADM_ASI_L} component={AsignaturaLista} />
          <ProtectedRoute exact path={rutas.ADM_ASI_U} component={AsignaturaUpdate} />

          <ProtectedRoute exact path={rutas.ADM_CUR} component={CursoCreate} /> 
          <ProtectedRoute exact path={rutas.ADM_CUR_L} component={CursoLista} /> /
          <ProtectedRoute exact path={rutas.ADM_CUR_U} component={CursoUpdate} />

          <ProtectedRoute exact path={rutas.ADM_DEP} component={DepartamentoCreate} />
          <ProtectedRoute exact path={rutas.ADM_DEP_L} component={DepartamentoLista} /> 
          <ProtectedRoute exact path={rutas.ADM_DEP_U} component={DepartamentoUpdate} />

          <ProtectedRoute exact path={rutas.ADM_DOC} component={DocenteCreate} />
          <ProtectedRoute exact path={rutas.ADM_DOC_L} component={DocenteLista} /> 
          <ProtectedRoute exact path={rutas.ADM_DOC_U} component={DocenteUpdate} />

          <ProtectedRoute exact path={rutas.ADM_EST} component={EstudianteCreate} />
          <ProtectedRoute exact path={rutas.ADM_EST_L} component={EstudianteLista} /> 
          <ProtectedRoute exact path={rutas.ADM_EST_U} component={EstudianteUpdate} />

          <ProtectedRoute exact path={rutas.ADM_MAT} component={MatriculaCreate} />
          <ProtectedRoute exact path={rutas.ADM_MAT_L} component={MatriculaLista} /> 
          <ProtectedRoute exact path={rutas.ADM_MAT_U} component={MatriculaUpdate} />

          <ProtectedRoute exact path={rutas.ADM_PER} component={PeriodoCreate} />
          <ProtectedRoute exact path={rutas.ADM_PER_L} component={PeriodoLista} />  
          <ProtectedRoute exact path={rutas.ADM_PER_U} component={PeriodoUpdate} />

          <ProtectedRoute exact path={rutas.ADM_PLN} component={PlanCreate} />
          <ProtectedRoute exact path={rutas.ADM_PLN_L} component={PlanLista} /> 
          <ProtectedRoute exact path={rutas.ADM_PLN_U} component={PlanUpdate} />

          <ProtectedRoute exact path={rutas.ADM_PRG} component={ProgramaCreate} />
          <ProtectedRoute exact path={rutas.ADM_PRG_L} component={ProgramaLista} />
          <ProtectedRoute exact path={rutas.ADM_PRG_U} component={ProgramaUpdate} />

          <ProtectedRoute exact path={rutas.ADM_SAL} component={SalonCreate} />
          <ProtectedRoute exact path={rutas.ADM_SAL_L} component={SalonLista} />
          <ProtectedRoute exact path={rutas.ADM_SAL_U} component={SalonUpdate} />   
          
          <PublicRoute path="*" component={() => "404 NOT FOUND"} />       
        </Switch>
      </Router>
    </div>
  );
}


export default App;
