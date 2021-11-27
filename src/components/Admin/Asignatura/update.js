import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { DB_URL } from '../../../connection';
import Icon from '../../../images/diploma.png';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { rutas } from '../../../path';

const ListaAsignaturas = () => {

    const [asignaturas, setAsignaturas] = useState([]);

    // Funciones que se ejecutan al cargar la página.
    useEffect(() => {
        getAsignaturas(); // Obtener asignaturas de la db.
    }, []);    

    const history = useHistory(); // Historial del navegador.

    // Obtener dptos de la db.
    const getAsignaturas = async () => {
        try {
            const response = await axios.get(DB_URL + 'asignatura');
            console.log(response.data);
            setAsignaturas(response.data);
        } catch (error) {
            console.log("Ha ocurrido un error");
        }
    }

    const deleteAsignatura = (id) => {
        let url = DB_URL + `asignatura/${id}`;
        
        axios.delete(url, {
            id: id,
        }).then(() => {
            setAsignaturas(asignaturas.filter(asignatura => asignatura.codigo !== id));
            alert("Asignatura eliminado exitosamente.");            
        })
    }

    return (
        <div class="col-sm-10 offset-sm-1 p-4 rounded">                
                <h2 class="mg-l text-left mb-2">Asignaturas:</h2> 
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">Identificación</th>
                    <th scope="col">Créditos</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Código Departamento</th>
                    <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        asignaturas.map((asignatura) => (                                
                            <tr>
                                <td>{asignatura.id}</td>
                                <td>{asignatura.creditos}</td>
                                <td>{asignatura.nombre}</td>
                                <td>{asignatura.cod_depto}</td>
                                <td>
                                    <button className="btn btn-warning btn-form " data-bs-toggle="modal" data-bs-target="#editarProducto" onClick={() => { history.push(rutas.ADM_ASI_U) }}><FontAwesomeIcon icon={faEdit} /></button>
                                    {"   "}
                                    <button className="btn btn-danger" onClick={() => { deleteAsignatura(asignatura.id) }}><FontAwesomeIcon icon={faTrashAlt} /></button>
                                </td>
                            </tr>
                        )) 
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListaAsignaturas;
