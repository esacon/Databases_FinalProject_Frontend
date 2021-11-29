import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { DB_URL } from '../../../connection';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { rutas } from '../../../path';

const ListaPeriodos = () => {

    const [periodos, setPeriodos] = useState([]);

    // Funciones que se ejecutan al cargar la página.
    useEffect(() => {
        getPeriodos(); // Obtener periodos de la db.
    }, []);    

    const history = useHistory(); // Historial del navegador.

    // Obtener dptos de la db.
    const getPeriodos = async () => {
        try {
            const response = await axios.get(DB_URL + 'periodo');
            console.log(response.data);
            setPeriodos(response.data);
        } catch (error) {
            console.log("Ha ocurrido un error");
        }
    }

    const deletePeriodo = (id) => {
        let url = DB_URL + `periodo/${id}`;
        
        axios.delete(url, {
            id: id,
        }).then(() => {
            setPeriodos(periodos.filter(periodo => periodo.id !== id));
            alert("Periodo eliminado exitosamente.");            
        })
    }

    return (
        <div class="col-sm-10 offset-sm-1 p-4 rounded">                
                <h2 class="mg-l text-left mb-2">Periodos:</h2> 
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">Identificación</th>
                    <th scope="col">Créditos</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        periodos.forEach((periodo) => (                                
                            <tr>
                                <td>{periodo.id}</td>
                                <td>{periodo.creditos}</td>
                                <td>{periodo.descripcion}</td>
                                <td>
                                    <button className="btn btn-warning btn-form " data-bs-toggle="modal" data-bs-target="#editarProducto" onClick={() => { history.push(rutas.ADM_PER_U) }}><FontAwesomeIcon icon={faEdit} /></button>
                                    {"   "}
                                    <button className="btn btn-danger" onClick={() => { deletePeriodo(periodo.codigo) }}><FontAwesomeIcon icon={faTrashAlt} /></button>
                                </td>
                            </tr>
                        )) 
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListaPeriodos;
