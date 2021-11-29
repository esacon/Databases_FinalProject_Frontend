import React from 'react';
import { useHistory } from 'react-router';
import GoogleLogin from 'react-google-login';
import cookie from 'react-cookies';
import LoginIcon from '../../images/user.png';
import useAuthContext from './auth/hooks/useAuthContext';
import { rutas } from "../../path";
import '../../App.css';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const Login = () => {

    const history = useHistory();
    const {loginEstudiante, loginDocente, loginAdmin, logout} = useAuthContext();

    const responseGoogle = async (response) => {
        console.log(response);
        if (response.tokenId) {
            try {
                cookie.save('token', response.tokenId);

                // https://sabiduria-backend.herokuapp.com/
                const user = await fetch('http://localhost:5000/server/conexiones/users', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        correo: response.profileObj.email
                    })
                });

                cookie.save('correo', response.profileObj.email);

                const content = await user.json();
                console.log(content);
                if (content.role === 1){
                    console.log("Estudiante conectado.");
                    loginEstudiante();
                    sleep(1000).then(() => { history.push(rutas.ESTUDIANTE); });     
                    return;
                } else if (content.role === 2) {
                    console.log("Docente conectado.");
                    loginDocente();
                    sleep(1000).then(() => { history.push(rutas.DOCENTE); });
                    return;
                } else if (content.role === 3) {
                    console.log("Admin conectado.");
                    loginAdmin();
                    sleep(1000).then(() => { history.push(rutas.ADMIN); });
                    return;
                }

                logout();
                console.log("Asignación pendiente.");
                history.push(rutas.PENDIENTE);

            } catch (error) {
                console.log('error', error);
            }
        }
    };

    return (
        <div class="modal-dialog text-center">
            <div class="col-sm-8 main-section">
                <div class="modal-content">
                    <div class="col-12 user-img">
                        <img src={LoginIcon} alt="icon" />
                    </div>
                    <div class="d-grid gap-2">
                        <div className="loginBox">
                            <h4 class="mg-l">Inicie sesión: </h4>
                            <GoogleLogin
                                clientId="819657394751-i8a1qcf8tede4ipuddop6jvtuogs94vh.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                        </div>                      
                    </div>
                </div>
            </div>
        </div>       
    );
}

export default Login;
