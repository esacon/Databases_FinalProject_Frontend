import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { DB_URL } from '../../../connection';
import Icon from '../../../images/diploma.png';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { rutas } from '../../../path';

const ListaPlan = () => {

    const [planes, setPlanes] = useState([]);

    // Funciones que se ejecutan al cargar la página.
    useEffect(() => {
        getPlanes(); // Obtener planes de la db.
    }, []);    

    const history = useHistory(); // Historial del navegador.

    // Obtener dptos de la db.
    const getPlanes = async () => {
        try {
            const response = await axios.get(DB_URL + 'plan-estudio');
            console.log(response.data);
            setPlanes(response.data);
        } catch (error) {
            console.log("Ha ocurrido un error");
        }
    }

    const deletePlan = (id) => {
        let url = DB_URL + `plan/${id}`;
        
        axios.delete(url, {
            id: id,
        }).then(() => {
            setPlanes(planes.filter(plan => plan.codigo !== id));
            alert("Plan eliminado exitosamente.");            
        })
    }

    return (
        <div class="col-sm-10 offset-sm-1 p-4 rounded">                
                <h2 class="mg-l text-left mb-2">Planes:</h2> 
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">Identificación</th>
                    <th scope="col">Creditos</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        planes.map((plan) => (                                
                            <tr>
                                <td>{plan.id}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => { deletePlan(plan.id) }}><FontAwesomeIcon icon={faTrashAlt} /></button>
                                </td>
                            </tr>
                        )) 
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListaPlan;
