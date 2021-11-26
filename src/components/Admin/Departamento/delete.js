import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { DB_URL } from '../../../connection';
import Icon from '../../../images/diploma.png';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { rutas } from '../../../path';

const ListaDepartamentos = () => {

    const [departamentos, setDepartamentos] = useState([]);

    // Funciones que se ejecutan al cargar la página.
    useEffect(() => {
        getDepartamentos(); // Obtener departamentos de la db.
    }, []);    

    const history = useHistory(); // Historial del navegador.

    // Obtener dptos de la db.
    const getDepartamentos = async () => {
        try {
            const response = await axios.get(DB_URL + 'departamento');
            console.log(response.data);
            setDepartamentos(response.data);
        } catch (error) {
            console.log("Ha ocurrido un error");
        }
    }

    const deleteDepartamento = (id) => {
        let url = DB_URL + `departamento/${id}`;
        
        axios.delete(url, {
            id: id,
        }).then(() => {
            setDepartamentos(departamentos.filter(departamento => departamento.codigo !== id));
            alert("Departamento eliminado exitosamente.");            
        })
    }

    return (
        <div class="col-sm-10 offset-sm-1 p-4 rounded">                
                <h2 class="mg-l text-left mb-2">Departamentos:</h2> 
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        departamentos.map((departamento) => (                                
                            <tr>
                                <td>{departamento.codigo}</td>
                                <td>{departamento.nombre}</td>
                                <td>
                                    <button className="btn btn-warning btn-form " data-bs-toggle="modal" data-bs-target="#editarProducto" onClick={() => { history.push(rutas.ADM_DEP_U) }}><FontAwesomeIcon icon={faEdit} /></button>
                                    {"   "}
                                    <button className="btn btn-danger" onClick={() => { deleteDepartamento(departamento.codigo) }}><FontAwesomeIcon icon={faTrashAlt} /></button>
                                </td>
                            </tr>
                        )) 
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListaDepartamentos;
