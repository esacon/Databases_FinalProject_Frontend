import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { DB_URL } from '../../../connection';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { rutas } from '../../../path';

const ListaDocentes = () => {

    const [docentes, setDocentes] = useState([]);

    // Funciones que se ejecutan al cargar la página.
    useEffect(() => {
        getDocentes(); // Obtener docentes de la db.
    }, []);

    const history = useHistory(); // Historial del navegador.

    // Obtener dptos de la db.
    const getDocentes = async () => {
        try {
            const response = await axios.get(DB_URL + 'docente');
            console.log(response.data);
            setDocentes(response.data);
        } catch (error) {
            console.log("Ha ocurrido un error");
        }
    }

    const deleteDocente = (id) => {
        let url = DB_URL + `docente/${id}`;

        axios.delete(url, {
            id: id,
        }).then(() => {
            setDocentes(docentes.filter(docente => docente.codigo !== id));
            alert("Docente eliminado exitosamente.");
        })
    }

    return (
        <div class="col-sm-10 offset-sm-1 p-4 rounded">
            <h2 class="mg-l text-left mb-2">Docentes:</h2>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Identificación</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Codigo</th>
                        <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        docentes.map((docente) => (
                            <tr>
                                <td>{docente.uuid}</td>
                                <td>{docente.nombre}</td>
                                <td>{docente.codigo.dpto}</td>
                                <td>
                                    <button className="btn btn-warning btn-form " data-bs-toggle="modal" data-bs-target="#editarProducto" onClick={() => { history.push(rutas.ADM_DOC_U) }}><FontAwesomeIcon icon={faEdit} /></button>
                                    {"   "}
                                    <button className="btn btn-danger" onClick={() => { deleteDocente(docente.id) }}><FontAwesomeIcon icon={faTrashAlt} /></button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListaDocentes;
