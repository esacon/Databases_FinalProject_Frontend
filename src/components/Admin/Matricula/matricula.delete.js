import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { DB_URL } from '../../../connection';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { rutas } from '../../../path';

const ListaMatriculas = () => {

    const [matriculas, setMatriculas] = useState([]);

    // Funciones que se ejecutan al cargar la página.
    useEffect(() => {
        getMatriculas(); // Obtener matriculas de la db.
    }, []);    

    const history = useHistory(); // Historial del navegador.

    // Obtener dptos de la db.
    const getMatriculas = async () => {
        try {
            const response = await axios.get(DB_URL + 'matricula');
            console.log(response.data);
            setMatriculas(response.data);
        } catch (error) {
            console.log("Ha ocurrido un error");
        }
    }

    const deleteMatricula = (id) => {
        let url = DB_URL + `matricula/${id}`;
        
        axios.delete(url, {
            id: id,
        }).then(() => {
            setMatriculas(matriculas.filter(matricula => matricula.id !== id));
            alert("Matricula eliminada exitosamente.");            
        })
    }

    return (
        <div class="col-sm-10 offset-sm-1 p-4 rounded">                
                <h2 class="mg-l text-left mb-2">Matriculas:</h2> 
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">Identificación</th>
                    <th scope="col">Asignatura 1</th>
                    <th scope="col">Asignatura 2</th>
                    <th scope="col">Asignatura 3</th>
                    <th scope="col">Identificación</th>
                    <th scope="col">Periodo</th>}
                    <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        matriculas.forEach((matricula) => (                                
                            <tr>
                                <td>{matricula.id}</td>
                                <td>{matricula.id_asignatura1}</td>
                                <td>{matricula.id_asignatura2}</td>
                                <td>{matricula.id_asignatura3}</td>
                                <td>{matricula.id_estudiante}</td>
                                <td>{matricula.id_periodo}</td>
                                <td>
                                    <button className="btn btn-warning btn-form " data-bs-toggle="modal" data-bs-target="#editarProducto" onClick={() => { history.push(rutas.ADM_MAT_U) }}><FontAwesomeIcon icon={faEdit} /></button>
                                    {"   "}
                                    <button className="btn btn-danger" onClick={() => { deleteMatricula(matricula.codigo) }}><FontAwesomeIcon icon={faTrashAlt} /></button>
                                </td>
                            </tr>
                        )) 
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListaMatriculas;
