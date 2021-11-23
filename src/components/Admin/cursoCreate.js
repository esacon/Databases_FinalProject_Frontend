import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DB_URL } from '../../connection';

const CursoCreate = () => {
    const [docentes, setDocentes] = useState([]);
    const [asignaturas, setAsignaturas] = useState([]);
    const [salones, setSalones] = useState([]);

    useEffect(() => {
        getDocentes();
        getAsignaturas();
        getSalones();
    }, []);


    const getDocentes = async () => {
        try {
            const response = await axios.get(DB_URL + 'docente');
            console.log(response.data.docentes);
            setDocentes(response.data.docentes);
        } catch (error) {
            console.log("Ha ocurrido un error");
        }
    }
    const getAsignaturas = async () => {
        try {
            const response = await axios.get(DB_URL + 'asignatura');
            console.log(response.data.asignaturas);
            setAsignaturas(response.data.asignaturas);
        } catch (error) {
            console.log("Ha ocurrido un error");
        }
    }
    const getSalones = async () => {
        try {
            const response = await axios.get(DB_URL + 'salon');
            console.log(response.data.salones);
            setSalones(response.data.salones);
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
                        <h1 class="display-5 fw-bold">Creando curso</h1>
                        <form action="" class="mb-3 " method="post">
                            <div class="form-group pb-2">
                                <label for="uuid_docente" class="fs-5">
                                    <span>Seleccione el docente: </span>
                                    <select name="uuid_docente" id="uuid_docente">
                                    { 
                                        docentes.map((doc)=>{
                                            <option value={doc.uuid}>{doc.nombre}</option>
                                        })
                                    }
                                    </select>
                                </label>
                            </div>
                            <div class="form-group pb-2">
                                <label for="id_asignatura" class="fs-5">
                                    <span>Seleccione la asignatura: </span>
                                    <select name="id_asignatura" id="id_asignatura">
                                    { 
                                        asignaturas.map((asi)=>{
                                            <option value={asi.id}>{asi.nombre}</option>
                                        })
                                    }
                                    </select>
                                </label>
                            </div>
                            <div class="form-group pb-2">
                                <label for="id_salon" class="fs-5">
                                    <span>Seleccione el salon: </span>
                                    <select name="id_salon" id="id_salon">
                                    { 
                                        salones.map((sal)=>{
                                            <option value={sal.id}>{sal.id}</option>
                                        })
                                    }
                                    </select>
                                </label>
                            </div>
                            <div class="form-group pb-2">
                                <label for="horario" class="fs-5">
                                    <span>Indique la hora cuando se realiza el curso: </span>
                                    <input type="time" name="horario" id="horario" />
                                </label>
                            </div>
                            <div class="form-group pb-2">
                                <label for="duracion" class="fs-5">
                                    <span>Indique la duracion: </span>
                                    <input type="number" name="duracion" id="duracion" />
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

export default CursoCreate;