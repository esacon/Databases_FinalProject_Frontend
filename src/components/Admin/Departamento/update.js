import React, { useEffect, useState } from 'react';
import { DB_URL } from '../../../connection';
import Icon from '../../../images/diploma.png';
import axios from 'axios';

const UpdateDepartamento = () => {

    useEffect(() => {
        getDepartamentos();
    }, []);

    const [departamentos, setDepartamentos] = useState([]);

    const [nombre, setNombre] = useState("");

    const getDepartamentos = async () => {
        try {
            const response = await axios.get(DB_URL + 'departamento');
            console.log(response.data);
            setDepartamentos(response.data);
        } catch (error) {
            console.log("Ha ocurrido un error");
        }
    }

    const [departamento, setDepartamento] = useState([]);

    const selectDepartamento = (e) => {    
        const departamento = JSON.parse(e.target.value);
        setDepartamento(departamento);
        setNombre(departamento.nombre);
    };

    const changeNombre = (e) => {    
        const nombre = JSON.parse(e.target.value); 
        setNombre(nombre);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);

        let url = DB_URL + `departamento/${data.get('codigo')}`;

        axios.put(url, {
            nombre: data.get('nombre'),
        }).then(() => {
            alert("Datos insertados exitosamente.");            
        })
    }

    return (
        <>
            <div class="modal-dialog text-center mt-0">
                <div class="col-sm-10 main-section">
                    <div class="modal-content">
                        <div class="center-img">
                            <div class="user-img">
                                <img src={Icon} class="img-icon" alt="icon" />
                            </div>
                        </div>
                        <h3 class="mb35">Actualizar departamento: </h3>
                        <form class="g-0" onSubmit={handleSubmit}>
                            <div class="col-12">
                                <select class="form-select" name="id" onChange={selectDepartamento}> 
                                    <option value={null}></option>                 
                                    {
                                        departamentos.map((departamento) => (
                                            <option value={JSON.stringify(departamento)}>{departamento.nombre}</option>
                                        ))                    
                                    }
                                </select>
                                <label for="nombre" class="form-label align-left">Nombre:</label>
                                <input class="form-control" type="text" id="nombre" name="nombre" value={nombre} onChange={changeNombre} />
                            </div>
                            <button class="btn btn-success justify-self-between mt-3 mb-2">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UpdateDepartamento;