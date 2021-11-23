import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DB_URL } from '../../connection';

const PlanCreate = () => {
    const [asignaturas, setAsignaturas] = useState([]);

    useEffect(() => {
        getAsignaturas();
    }, []);


    const getAsignaturas = async () => {
        try {
            const response = await axios.get(DB_URL + 'asignatura');
            console.log(response.data.asignaturas);
            setAsignaturas(response.data.asignaturas);
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
                        <h1 class="display-5 fw-bold">Creando nuevo Plan de estudio</h1>
                        <form action="" class="mb-3 " method="post">
                            <div class="form-group pb-2">
                                <label for="uuid" class="fs-5">
                                    <span>Indique el ID: </span>
                                    <input type="text" name="uuid" id="uuid" />
                                </label>
                            </div>
                            
                            <div class="form-check pt-3 fs-5">
                                <p>Seleccione las asignaturas que conforman el plan: </p>
                                { 
                                    asignaturas.map((asi) => {
                                        <label class=" border border-info p-1 rounded mx-1"><input type="checkbox" name="asignaturas" value={asi.id} /> {asi.nombre}</label>
                                    })
                                }
                                
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

export default PlanCreate;