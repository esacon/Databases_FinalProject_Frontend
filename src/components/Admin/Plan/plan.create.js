import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DB_URL } from '../../../connection';
import noteIcon from '../../../images/notebook.png'

const PlanCreate = () => {

    useEffect(() => {
        getAsignaturas(); // Obtener estudiantes de la db.
    }, []);

    const [plan_id, setPlan_id] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Actualizar rutas
        let post_url = DB_URL + `plan-estudio`;

        // Actualizar cuerpo del post.
        let response = await axios.post(post_url, {});
        console.log(response);
        setPlan_id(response.data.id);

        asignatura.forEach(async (asig) => {
            response = await axios.post(DB_URL + 'conformado', {
                id_asignatura: asig,
                uuid_plan: plan_id
            }).then((info) => {
                console.log(`Asignatura ${asig} insertada con éxito.`)
            });
            
        });
    }

    const [asignaturas, setAsignaturas] = useState([]);

    const getAsignaturas = async () => {
        try {
            const response = await axios.get(DB_URL + 'asignatura');
            console.log(response.data);
            setAsignaturas(response.data);
        } catch (error) {
            console.log("Ha ocurrido un error");
        }
    }

    const [asignatura, setAsignatura] = useState([]);
    const [labelAsignaturas, setLabelAsignaturas] = useState("");

    const selectAsignatura = (e) => {
        const id = e.target.value;
        setAsignatura(asignatura.push(parseInt(id)));
        setLabelAsignaturas(labelAsignaturas + `${id}, `)
    };

    return (
        <>
            <div class="containerCursoEst center">
                <span><img src={noteIcon} alt="" /></span><h3 class="mb35">Creando plan de estudio</h3>
                <form class="formularioCursoEst" onSubmit={handleSubmit}>
                    <label for="asignatura">Asignatura:</label>
                    <select class="form-select" name="asignatura" onChange={selectAsignatura}>
                        <option value={null}> </option>
                        {
                            asignaturas.map((asi) => (
                                <option value={asi.id}>{asi.nombre}</option>
                            ))
                        }
                    </select>
                    <label for="asignaturas">Seleccionadas:</label>
                    <label for="selected_asig">{labelAsignaturas}</label>
                    <div class="center">
                        <button class="btn btn-success justify-self-between mt-3 mb-3">Registrar</button>
                    </div>

                </form>

            </div>
        </>
    );
}

export default PlanCreate;