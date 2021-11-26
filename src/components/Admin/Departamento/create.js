import React, { useEffect, useState } from 'react';
import { DB_URL } from '../../../connection';
import Icon from '../../../images/diploma.png';
import axios from 'axios';

const DepartamentoCreate = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);

        // Actualizar rutas
        let post_url = DB_URL + `departamento`;

        // Actualizar cuerpo del post.
        axios.post(post_url, {
            nombre: data.get('nombre')
        }).then(() => {
            alert("Datos insertados exitosamente.");            
        })
    }

    return (
        <>
            <div class="modal-dialog text-center mt-0">
                <div class="col-sm-10 main-section">
                    <div class="modal-content">
                        <div class="center-img">
                            <div class="user-img">
                                <img src={Icon} class="img-icon" alt="icon" />
                            </div>
                        </div>
                        <h3 class="mb35">Creando departamento: </h3>
                        <form class="g-0" onSubmit={handleSubmit}>
                            <div class="col-12">
                                <label for="nombre" class="form-label align-left">Nombre:</label>
                                <input class="form-control" type="text" id="nombre" name="nombre" placeholder="Ingrese el nombre del departamento..." />
                            </div>
                            <button class="btn btn-success justify-self-between mt-3 mb-2">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DepartamentoCreate;