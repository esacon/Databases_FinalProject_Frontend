import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { DB_URL } from '../../../connection';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { rutas } from '../../../path';

const ListaCursos = () => {

    const [cursos, setCursos] = useState([]);

    // Funciones que se ejecutan al cargar la página.
    useEffect(() => {
        getCursos(); // Obtener cursos de la db.
    }, []);

    const history = useHistory(); // Historial del navegador.

    // Obtener dptos de la db.
    const getCursos = async () => {
        try {
            const response = await axios.get(DB_URL + 'curso');
            console.log(response.data);
            setCursos(response.data);
        } catch (error) {
            console.log("Ha ocurrido un error");
        }
    }

    const deleteCurso = (id) => {
        let url = DB_URL + `curso/${id}`;

        axios.delete(url, {
            id: id,
        }).then(() => {
            setCursos(cursos.filter(curso => curso.codigo !== id));
            alert("Curso eliminado exitosamente.");
        })
    }

    return (
        <div class="col-sm-10 offset-sm-1 p-4 rounded">
            <h2 class="mg-l text-left mb-2">Cursos:</h2>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Identificación</th>
                        <th scope="col">Departamento</th>
                        <th scope="col">Asignatura</th>
                        <th scope="col">Docente</th>
                        <th scope="col">Salón</th>
                        <th scope="col">Duración</th>
                        <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cursos.map((curso) => (
                            <tr>
                                <td>{curso.id}</td>
                                <td>{curso.codigo_dpto}</td>
                                <td>{curso.id_asignatura}</td>
                                <td>{curso.uuid_salon}</td>
                                <td>{curso.id_salon}</td>
                                <td>{curso.duracion}</td>
                                <td>
                                    <button className="btn btn-warning btn-form " data-bs-toggle="modal" data-bs-target="#editarProducto" onClick={() => { history.push(rutas.ADM_CUR_U) }}><FontAwesomeIcon icon={faEdit} /></button>
                                    {"   "}
                                    <button className="btn btn-danger" onClick={() => { deleteCurso(curso.id) }}><FontAwesomeIcon icon={faTrashAlt} /></button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListaCursos;
