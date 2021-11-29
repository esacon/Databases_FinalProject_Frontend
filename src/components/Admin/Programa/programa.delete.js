import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { DB_URL } from '../../../connection';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { rutas } from '../../../path';

const ListaProgramas = () => {

    const [programas, setProgramas] = useState([]);

    // Funciones que se ejecutan al cargar la página.
    useEffect(() => {
        getProgramas(); // Obtener programas de la db.
    }, []);    

    const history = useHistory(); // Historial del navegador.

    // Obtener dptos de la db.
    const getProgramas = async () => {
        try {
            const response = await axios.get(DB_URL + 'programa');
            console.log(response.data);
            setProgramas(response.data);
        } catch (error) {
            console.log("Ha ocurrido un error");
        }
    }

    const deletePrograma = (id) => {
        let url = DB_URL + `programa/${id}`;
        
        axios.delete(url, {
            id: id,
        }).then(() => {
            setProgramas(programas.filter(programa => programa.id !== id));
            alert("Programa eliminado exitosamente.");            
        })
    }

    return (
        <div class="col-sm-10 offset-sm-1 p-4 rounded">                
                <h2 class="mg-l text-left mb-2">Programas:</h2> 
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">Identificación</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Departamento</th>
                    <th scope="col">Codigo</th>
                    <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        programas.forEach((programa) => (                                
                            <tr>
                                <td>{programa.uuid}</td>
                                <td>{programa.nombre}</td>
                                <td>{programa.codigo_dpto}</td>
                                <td>{programa.uuid_plan}</td>
                                <td>
                                    <button className="btn btn-warning btn-form " data-bs-toggle="modal" data-bs-target="#editarProducto" onClick={() => { history.push(rutas.ADM_PRG_U) }}><FontAwesomeIcon icon={faEdit} /></button>
                                    {"   "}
                                    <button className="btn btn-danger" onClick={() => { deletePrograma(programa.codigo) }}><FontAwesomeIcon icon={faTrashAlt} /></button>
                                </td>
                            </tr>
                        )) 
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListaProgramas;
