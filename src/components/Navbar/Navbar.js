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

  
  let logoutButton = <button class="btn btn-outline-danger my-2 my-sm-0" onClick={logout}>Cerrar</button>
  

//   <nav>
//   <a href="">
//       <img src="imagenes/school.png" alt="school">
//   </a>
//   <button class="btnLog">
//       <img src="imagenes/log-in.png" alt="">
//   </button>
// </nav>
  return (
    <>
     <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          </div>
      </div>
      {logoutButton}
  </nav>
  </>
  );
}

export default Navbar;