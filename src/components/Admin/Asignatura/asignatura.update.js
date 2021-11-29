import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DB_URL } from '../../../connection';
import Icon from '../../../images/courses.png'

const AsignaturaUpdate = () => {

    // Funciones que se ejecutan al cargar la página.
    useEffect(() => {
        getDepartamentos(); // Obtener estudiantes de la db.
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);

        // Actualizar rutas
        let post_url = DB_URL + `asignatura`;

        // Actualizar cuerpo del post.
        axios.post(post_url, {
            nombre: data.get('nombre'),
            codigo_dpto: data.get('codigo_dpto'),
            creditos: data.get('creditos')
        }).then(() => {
            alert("Datos insertados exitosamente.");
        })
    }

    const [departamentos, setDepartamentos] = useState([]);

    const getDepartamentos = async () => {
        try {
            const response = await axios.get(DB_URL + 'departamento');
            console.log(response.data);
            setDepartamentos(response.data);
        } catch (error) {
            console.log("Ha ocurrido un error");
        }
    }
/*
    const [departamento, setDepartamento] = useState();

    const selectDepartamento = (e) => {
        const departamento = e.target.value;
        setDepartamento(departamento);
    };
*/

    return (
        <>
            <div class="containerAsignatura center">
                <span><img src={Icon} alt="" /></span><h3 class="mb35">Creando Asignatura</h3>
                <form class="formularioAsignatura" onSubmit={handleSubmit}>
                    <label for="codigo_dpto">Departamento</label>
                    <select class="form-select" name="codigo_dpto" /*onChange={selectDepartamento}*/>
                        {
                            departamentos.map((dep) => (
                                <option value={dep.codigo}>{dep.nombre}</option>
                            ))
                        }
                    </select>
                    <label for="nombre">Nombre</label>
                    <input type="text" name="nombre" />
                    <label for="creditos">Numero de créditos</label>
                    <input type="number" name='creditos' />
                    <div class="center">
                        <button class="btn btn-success justify-self-between mt-3 mb-3">Registrar</button>
                    </div>
                </form>

            </div>
        </>
    );
}

export default AsignaturaUpdate;