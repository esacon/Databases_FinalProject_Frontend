import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { DB_URL } from '../../../connection';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { rutas } from '../../../path';

const ListaEstudiantes = () => {

    const [estudiantes, setEstudiantes] = useState([]);

    // Funciones que se ejecutan al cargar la página.
    useEffect(() => {
        getEstudiantes(); // Obtener estudiantes de la db.
    }, []);    

    const history = useHistory(); // Historial del navegador.

    // Obtener dptos de la db.
    const getEstudiantes = async () => {
        try {
            const response = await axios.get(DB_URL + 'estudiante');
            console.log(response.data);
            setEstudiantes(response.data);
        } catch (error) {
            console.log("Ha ocurrido un error");
        }
    }

    const deleteEstudiante = (id) => {
        let url = DB_URL + `estudiante/${id}`;
        
        axios.delete(url, {
            id: id,
        }).then(() => {
            setEstudiantes(estudiantes.filter(estudiante => estudiante.id !== id));
            alert("Estudiante eliminado exitosamente.");            
        })
    }

    return (
        <div class="col-sm-10 offset-sm-1 p-4 rounded">                
                <h2 class="mg-l text-left mb-2">Estudiantes:</h2> 
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">Identificación</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Id plan de estudio</th>
                    <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        estudiantes.forEach((estudiante) => (                                
                            <tr>
                                <td>{estudiante.id}</td>
                                <td>{estudiante.nombre}</td>
                                <td>{estudiante.uuid_plan}</td>
                                <td>
                                    <button className="btn btn-warning btn-form " data-bs-toggle="modal" data-bs-target="#editarProducto" onClick={() => { history.push(rutas.ADM_EST_U) }}><FontAwesomeIcon icon={faEdit} /></button>
                                    {"   "}
                                    <button className="btn btn-danger" onClick={() => { deleteEstudiante(estudiante.codigo) }}><FontAwesomeIcon icon={faTrashAlt} /></button>
                                </td>
                            </tr>
                        )) 
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListaEstudiantes;
