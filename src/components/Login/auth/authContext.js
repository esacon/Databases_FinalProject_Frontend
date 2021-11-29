import { createContext, useState, useCallback, useMemo } from "react";
import PropTypes from 'prop-types';
import cookie from 'react-cookies';
import axios from "axios";
import { DB_URL } from "../../../connection";

const { OAuth2Client } = require('google-auth-library');

const CLIENT_ID = '819657394751-i8a1qcf8tede4ipuddop6jvtuogs94vh.apps.googleusercontent.com';
// Cookies for login authentication.
const LOGIN_ADMIN = 'LOGIN_ADMIN';
const LOGIN_ESTUDIANTE = 'LOGIN_ESTUDIANTE';
const LOGIN_DOCENTE = 'LOGIN_DOCENTE';
const EST_ID = 'EST_ID';
const DOC_ID = 'DOC_ID';

export const AuthContext = createContext();
export default function AuthContextProvider({children}) {    

    const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(window.localStorage.getItem(LOGIN_ADMIN));
    const [isEstudianteAuthenticated, setIsEstudianteAuthenticated] = useState(window.localStorage.getItem(LOGIN_ESTUDIANTE));
    const [isDocenteAuthenticated, setIsDocenteAuthenticated] = useState(window.localStorage.getItem(LOGIN_DOCENTE));
    const [idEstudiante, setIDEstudiante] = useState(window.localStorage.getItem(EST_ID));
    const [idDocente, setIDDocente] = useState(window.localStorage.getItem(DOC_ID));

    const loginEstudiante = useCallback(() => {
        const client = new OAuth2Client(CLIENT_ID);
        const token = cookie.load('token');

        const verify = async (token) => {
            try {
                const ticket = await client.verifyIdToken({
                    idToken: token,
                    audience: CLIENT_ID
                });
                const payload = ticket.getPayload();
                const userid = payload['sub'];
                console.log('UserID: ', userid);

                const res = await axios.get(DB_URL + `/estudiante/${correo}`);
                const id = res.data[0];
                
                setIsEstudianteAuthenticated(true);
                setIsDocenteAuthenticated(false);
                setIsAdminAuthenticated(false);
                setIDEstudiante(id);
                setIDDocente('');
                window.localStorage.setItem(EST_ID, id);
                window.localStorage.setItem(DOC_ID, '');
                window.localStorage.setItem(LOGIN_ESTUDIANTE, true);
                window.localStorage.setItem(LOGIN_DOCENTE, false);
                window.localStorage.setItem(LOGIN_ADMIN, false);
                return;
            } catch (error) {
                console.log('error', error);
            } 
        }
        
        verify(token);          
    }, []);

    const loginDocente = useCallback(() => {
        const client = new OAuth2Client(CLIENT_ID);
        const token = cookie.load('token');

        const verify = async (token) => {
            try {
                const ticket = await client.verifyIdToken({
                    idToken: token,
                    audience: CLIENT_ID
                });
                const payload = ticket.getPayload();
                const userid = payload['sub'];
                console.log('UserID: ', userid);

                const res = await axios.get(DB_URL + '');
                const id = res.data[0];

                setIsDocenteAuthenticated(true);
                setIsEstudianteAuthenticated(false);
                setIsAdminAuthenticated(false);
                setIDDocente(id);
                setIDEstudiante('');
                window.localStorage.setItem(DOC_ID, id);
                Window.localStorage.setItem(EST_ID, '');
                window.localStorage.setItem(LOGIN_DOCENTE, true);
                window.localStorage.setItem(LOGIN_ESTUDIANTE, false);
                window.localStorage.setItem(LOGIN_ADMIN, false);
                return;
            } catch (error) {
                console.log('error', error);
            } 
        }
        
        verify(token);          
    }, []);

    const loginAdmin = useCallback(() => {
        
        const client = new OAuth2Client(CLIENT_ID);
        const token = cookie.load('token');

        const verify = async (token) => {
            try {
                const ticket = await client.verifyIdToken({
                    idToken: token,
                    audience: CLIENT_ID
                });
                const payload = ticket.getPayload();
                const userid = payload['sub'];
                console.log('UserID: ', userid);
                setIsAdminAuthenticated(true);
                setIsEstudianteAuthenticated(false);
                setIsDocenteAuthenticated(false);
                setIDDocente('');
                setIDEstudiante('');
                window.localStorage.setItem(DOC_ID, '');
                Window.localStorage.setItem(EST_ID, '');
                window.localStorage.setItem(LOGIN_ADMIN, true);
                window.localStorage.setItem(LOGIN_ESTUDIANTE, false);
                window.localStorage.setItem(LOGIN_DOCENTE, false);
                return;
            } catch (error) {
                console.log('error', error);
            } 
        }
        
        verify(token);  
    }, []);

    const logout = useCallback(() => {
        setIsAdminAuthenticated(false);
        setIsEstudianteAuthenticated(false);
        setIsDocenteAuthenticated(false);
        setIDDocente('');
        setIDEstudiante('');
        window.localStorage.setItem(DOC_ID, '');
        Window.localStorage.setItem(EST_ID, '');
        window.localStorage.removeItem(LOGIN_ADMIN, true);
        window.localStorage.removeItem(LOGIN_ESTUDIANTE, true);
        window.localStorage.removeItem(LOGIN_DOCENTE, true);
    }, []);

    const value = useMemo(() => ({
        isEstudianteAuthenticated,
        isAdminAuthenticated,
        isDocenteAuthenticated,
        loginEstudiante,
        loginDocente,
        loginAdmin,
        idDocente,
        idEstudiante,
        logout
    }), [isEstudianteAuthenticated, isAdminAuthenticated, isDocenteAuthenticated, loginEstudiante, loginDocente, loginAdmin, idDocente, idEstudiante, logout]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

AuthContextProvider.propTypes = {
    children: PropTypes.object
};