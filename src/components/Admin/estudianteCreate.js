import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DB_URL } from '../../connection';

const EstudianteCreate = () => {
    const [programas, setProgramas] = useState([]);

    useEffect(() => {
        getProgramas();
    }, []);


    const getProgramas = async () => {
        try {
            const response = await axios.get(DB_URL + 'programa');
            console.log(response.data.programas);
            setProgramas(response.data.programas);
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
                        <h1 class="display-5 fw-bold">Creando usuario estudiante</h1>

                        <form action="" class="mb-3"  method="post">
                            <div class="form-group pb-2">
                                <label for="uuid_plan" class="fs-5">
                                    <span>Seleccione el programa: </span>
                                    <select name="uuid_plan" id="uuid_plan">
                                        <option value=""></option>
                                        { 
                                        programas.map((prg)=>{
                                            <option value={prg.uuid_plan}>{prg.nombre}</option>
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

                        </form>
                        <button class="btn btn-success justify-self-between" form="crearEst">Enviar</button>
                    </div>
                </div>
            </div>
        </header>
        </>
    );
}

export default EstudianteCreate;