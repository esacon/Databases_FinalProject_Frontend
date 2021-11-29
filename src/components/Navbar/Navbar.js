import React from 'react';
import useAuthContext from "../Login/auth/hooks/useAuthContext";
import { rutas } from "../../path";
import LoginI from '../../images/log-in.png';

function Navbar() {

  function getBool(val) {
    return !!JSON.parse(String(val).toLowerCase());
  }

  let { isEstudianteAuthenticated, isAdminAuthenticated, isDocenteAuthenticated, logout } = useAuthContext();

  isEstudianteAuthenticated = getBool(isEstudianteAuthenticated);
  isAdminAuthenticated = getBool(isAdminAuthenticated);
  isDocenteAuthenticated = getBool(isDocenteAuthenticated);

  let logoutButton = <a class="nav-link ml-auto" href={rutas.LOGIN} onClick={logout}>
    <img width="30" height="30" class="d-inline-block align-top" alt="" src={LoginI}></img>
  </a>
  const adminMenu = <> 
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href={rutas.ADMIN} id="navbarDropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
    Productos
    </a>
    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
      <a class="dropdown-item" href={rutas.ADM_ASI}>Productos</a>
      <a class="dropdown-item" href={rutas.ADM_CUR}>Registrar productos</a>
      <a class="dropdown-item" href={rutas.ADM_DEP}>Modificar productos</a>
      <a class="dropdown-item" href={rutas.ADM_DOC}>Productos</a>
      <a class="dropdown-item" href={rutas.ADM_EST}>Registrar productos</a>
      <a class="dropdown-item" href={rutas.ADM_MAT}>Modificar productos</a>
      <a class="dropdown-item" href={rutas.ADM_PER}>Productos</a>
      <a class="dropdown-item" href={rutas.ADM_PLN}>Registrar productos</a>
      <a class="dropdown-item" href={rutas.ADM_SAL}>Modificar productos</a>
    </div>
  </li>  
</>

  

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
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="navbar-brand">
            Navbar
          </div>
          {logoutButton}
        </div>
      </nav>
    </>
  );
}
// return (
//   <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
//     <a class="navbar-brand" href={rutas.LOGIN}>
//       <img  width="30" height="30" class="d-inline-block align-top" alt="" src="https://static.wixstatic.com/media/2cd43b_fd0aba46da664bba9992400e48d51338~mv2_d_3543_4502_s_4_2.png/v1/fill/w_320,h_406,q_90/2cd43b_fd0aba46da664bba9992400e48d51338~mv2_d_3543_4502_s_4_2.png"></img>
//       <span class="navbar-brand mb-0 h1">PUB Data System</span>
//     </a>

//     <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
//       <div class="navbar-nav">
//         <a class="nav-item active nav-link" href={rutas.LOGIN}>Principal</a>
//       </div>        
//     </div>
//     { logoutButton }
//   </nav>
// );
// }

export default Navbar;
