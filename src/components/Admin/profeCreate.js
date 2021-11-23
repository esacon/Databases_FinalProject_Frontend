import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DB_URL } from '../../connection';

const ProfeCreate = () => {

    const [departamentos, setDepartamentos] = useState([]);

    useEffect(() => {
        getDepartamentos();
    }, []);


    const getDepartamentos = async () => {
        try {
            const response = await axios.get(DB_URL + 'departamento');
            console.log(response.data.departamentos);
            setDepartamentos(response.data.departamentos);
        } catch (error) {
            console.log("Ha ocurrido un error");
        }
    }
    return (
        <>
        <header class="py-5">
            <div class="container px-lg-5">
                <div class="p-4 p-lg-5 bg-light rounded-3 text-center">
                    <div class="m-4 m-lg-5">
                        <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n1"><i class="bi bi-archive"></i></div>
                        <h1 class="display-5 fw-bold">Creando usuario docente</h1>
                        <form action="" class="mb-3 " method="post">
                            <div class="form-group pb-2">
                                <label for="codigo_dpto" class="fs-5">
                                    <span>Seleccione el departamento: </span>
                                    <select name="codigo_dpto" id="codigo_dpto">
                                    { 
                                        departamentos.map((dep)=>{
                                            <option value={dep.codigo}>{dep.nombre}</option>
                                        })
                                    }
                                    </select>
                                </label>
                            </div>
                            <div class="form-group pb-2">
                                <label for="nombre" class="fs-5">
                                    <span>Indique nombre: </span>
                                    <input type="text" name="nombre" id="nombre" />
                                </label>
                            </div>
                            <button class="btn btn-success justify-self-between">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </header>
        </>
    );
}

export default ProfeCreate;