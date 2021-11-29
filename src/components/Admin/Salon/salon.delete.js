import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { DB_URL } from '../../../connection';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { rutas } from '../../../path';

const ListaSalons = () => {

    const [salons, setSalons] = useState([]);

    // Funciones que se ejecutan al cargar la página.
    useEffect(() => {
        getSalons(); // Obtener salons de la db.
    }, []);    

    const history = useHistory(); // Historial del navegador.

    // Obtener dptos de la db.
    const getSalons = async () => {
        try {
            const response = await axios.get(DB_URL + 'salon');
            console.log(response.data);
            setSalons(response.data);
        } catch (error) {
            console.log("Ha ocurrido un error");
        }
    }

    const deleteSalon = (id) => {
        let url = DB_URL + `salon/${id}`;
        
        axios.delete(url, {
            id: id,
        }).then(() => {
            setSalons(salons.filter(salon => salon.id !== id));
            alert("Salon eliminado exitosamente.");            
        })
    }

    return (
        <div class="col-sm-10 offset-sm-1 p-4 rounded">                
                <h2 class="mg-l text-left mb-2">Salons:</h2> 
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">Identificación</th>
                    <th scope="col">Virtual</th>
                    <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        salons.forEach((salon) => (                                
                            <tr>
                                <td>{salon.id}</td>
                                <td>{salon.is_virtual}</td>
                                <td>{salon.opciones}</td>
                                <td>
                                    <button className="btn btn-warning btn-form " data-bs-toggle="modal" data-bs-target="#editarProducto" onClick={() => { history.push(rutas.ADM_SAL_U) }}><FontAwesomeIcon icon={faEdit} /></button>
                                    {"   "}
                                    <button className="btn btn-danger" onClick={() => { deleteSalon(salon.codigo) }}><FontAwesomeIcon icon={faTrashAlt} /></button>
                                </td>
                            </tr>
                        )) 
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListaSalons;
