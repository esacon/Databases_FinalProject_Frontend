import useAuthContext from "../Login/auth/hooks/useAuthContext";
import { rutas } from "../../path";

function Navbar(){

    function getBool(val) {
      return !!JSON.parse(String(val).toLowerCase());
    }

  let {isEstudianteAuthenticated, isAdminAuthenticated, isDocenteAuthenticated, logout} = useAuthContext();

  isEstudianteAuthenticated = getBool(isEstudianteAuthenticated);
  isAdminAuthenticated = getBool(isAdminAuthenticated);
  isDocenteAuthenticated = getBool(isDocenteAuthenticated);

  let tabs = null;
  let logoutButton = null;
  let sideVar = null


  const estudianteMenu = <> 
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Opciones</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href={rutas.EST_ING}>Ingresar a clase</a>
          </div>
        </li>  
  </>

  const docenteMenu = <> 
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Opciones</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href={rutas.DOC_INI}>Iniciar la clase</a>
          </div>
        </li>  
  </>

  if (isEstudianteAuthenticated) {
    tabs = <>
            <a class="nav-item active nav-link" href={rutas.ESTUDIANTE}>Inicio</a>
            { estudianteMenu }
          </>
    sideVar = <>
    <div class="border-end bg-white" id="sidebar-wrapper">
        <div class="sidebar-heading border-bottom bg-light">Estudiante</div>
        <div class="list-group list-group-flush">
            <a class="list-group-item list-group-item-action list-group-item-light p-3" href={rutas.EST_MAT}>Matriculas</a>
            <a class="list-group-item list-group-item-action list-group-item-light p-3" href={rutas.EST_CUR}>Cursos</a>
            <a class="list-group-item list-group-item-action list-group-item-light p-3" href={rutas.EST_CAL}>Clases</a>
        </div>
    </div>
    </>
    logoutButton = <button class="btn btn-outline-danger my-2 my-sm-0" onClick={logout}>Cerrar sesión</button>
  } else if (isDocenteAuthenticated) {
    tabs = <>
            <a class="nav-item active nav-link" href={rutas.DOCENTE}>Inicio</a>
            { docenteMenu }
          </>
    sideVar = <>
    <div class="border-end bg-white" id="sidebar-wrapper">
        <div class="sidebar-heading border-bottom bg-light">Docente</div>
        <div class="list-group list-group-flush">
            <a class="list-group-item list-group-item-action list-group-item-light p-3" href={rutas.DOC_ASI}>Asignaturas</a>
            <a class="list-group-item list-group-item-action list-group-item-light p-3" href={rutas.DOC_CUR}>Cursos</a>
        </div>
    </div>
    </>
    logoutButton = <button class="btn btn-outline-danger my-2 my-sm-0" onClick={logout}>Cerrar sesión</button>
  } else if (isAdminAuthenticated) {
    tabs = <>
            <a class="nav-item active nav-link" href={rutas.ADMIN}>Inicio</a>
          </>
    sideVar = <>
    <div class="border-end bg-white" id="sidebar-wrapper">
        <div class="sidebar-heading border-bottom bg-light">ADMIN</div>
        <div class="list-group list-group-flush">
            <a class="list-group-item list-group-item-action list-group-item-light p-3" href={rutas.ADM_ASI}>Crear asignatura</a>
            <a class="list-group-item list-group-item-action list-group-item-light p-3" href={rutas.ADM_CUR}>Crear curso</a>
            <a class="list-group-item list-group-item-action list-group-item-light p-3" href={rutas.ADM_DEP}>Crear departamento</a>
            <a class="list-group-item list-group-item-action list-group-item-light p-3" href={rutas.ADM_EST}>Crear estudiante</a>
            <a class="list-group-item list-group-item-action list-group-item-light p-3" href={rutas.ADM_MAT}>Crear matricula</a>
            <a class="list-group-item list-group-item-action list-group-item-light p-3" href={rutas.ADM_PER}>Crear periodo</a>
            <a class="list-group-item list-group-item-action list-group-item-light p-3" href={rutas.ADM_DOC}>Crear profesor</a>
            <a class="list-group-item list-group-item-action list-group-item-light p-3" href={rutas.ADM_PRG}>Crear programa</a>
            <a class="list-group-item list-group-item-action list-group-item-light p-3" href={rutas.ADM_SAL}>Crear salon</a>
            <a class="list-group-item list-group-item-action list-group-item-light p-3" href={rutas.ADM_PLN}>Crear plan de estudios</a>
        </div>
    </div>
    </>
    logoutButton = <button class="btn btn-outline-danger my-2 my-sm-0" onClick={logout}>Cerrar sesión</button>
  }

  return (
    <>
    {sideVar}
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                  {tabs}
              </ul>
          </div>
      </div>
      {logoutButton}
  </nav>
  </>
  );
}

export default Navbar;