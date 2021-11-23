import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { rutas } from "../../../path";
import useAuthContext from '../auth/hooks/useAuthContext';

const ProtectedRoute = (props) => {

    function getBool(val) {
        return !!JSON.parse(String(val).toLowerCase());
    }

    let {isEstudianteAuthenticated, isAdminAuthenticated, isDocenteAuthenticated} = useAuthContext();
    const {path} = props;
    const admin_routes = [rutas.ADMIN, rutas.ADM_ASI, rutas.ADM_CUR, rutas.ADM_DEP, rutas.ADM_EST, rutas.ADM_MAT, rutas.ADM_PER, rutas.ADM_PLN, rutas.ADM_DOC, rutas.ADM_PRG, rutas.ADM_SAL];
    const docente_routes = [rutas.DOCENTE, rutas.DOC_INI, rutas.DOC_ECU, rutas.DOC_CUR, rutas.DOC_ASI];
    const estudiante_routes = [rutas.ESTUDIANTE, rutas.EST_CAL, rutas.EST_CUR, rutas.EST_ING, rutas.EST_ENT, rutas.EST_MAT];

    isEstudianteAuthenticated = getBool(isEstudianteAuthenticated);
    isAdminAuthenticated = getBool(isAdminAuthenticated);
    isDocenteAuthenticated = getBool(isDocenteAuthenticated);

    if (isEstudianteAuthenticated === false && isAdminAuthenticated === false && isDocenteAuthenticated === false) {
        console.log(0);
        return <Redirect to={rutas.UNAUTHORIZED} />;
    } else if (isEstudianteAuthenticated && isAdminAuthenticated === false && isDocenteAuthenticated === false) {
        console.log(1);
        if (admin_routes.includes(path)) {
            return <Redirect to={rutas.UNAUTHORIZED} />;
        } else if (docente_routes.includes(path)) {
            return <Redirect to={rutas.UNAUTHORIZED} />;
        }
        return <Route {...props} />;  
    } else if (isEstudianteAuthenticated === false && isDocenteAuthenticated && isAdminAuthenticated === false) {
        console.log(2);
        if (admin_routes.includes(path)) {
            return <Redirect to={rutas.UNAUTHORIZED} />;
        } else if (estudiante_routes.includes(path)) {
            return <Redirect to={rutas.UNAUTHORIZED} />;
        }
        return <Route {...props} />;  
    }

    console.log(3);
    return <Route {...props} />;
}

export default ProtectedRoute;