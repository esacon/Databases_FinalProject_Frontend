import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DB_URL } from '../../../connection';
import Icon from '../../../images/student.png';

const EstudianteCreate = () => {

    // Funciones que se ejecutan al cargar la página.
    useEffect(() => {
        getProgramas(); // Obtener estudiantes de la db.
    }, []);   
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);

        // Actualizar rutas
        let post_url = DB_URL + `estudiante`;

        // Actualizar cuerpo del post.
        axios.post(post_url, {
            nombre: data.get('nombre'),
            uuid_plan: data.get('uuid_plan'),
            correo: data.get('correo')
        }).then(() => {
            alert("Datos insertados exitosamente.");            
        })
    }
    const [programas, setProgramas] = useState([]);

    const getProgramas = async () => {
        try {
            const response = await axios.get(DB_URL + 'programa');
            console.log(response.data);
            setProgramas(response.data);
        } catch (error) {
            console.log("Ha ocurrido un error");
        }
    }

    const [programa, setPrograma] = useState([]);

    const selectPrograma = (e) => {    
        const programa = JSON.parse(e.target.value);
        setPrograma(programa);
    };
    return (
        <>
            <div class="containerEstudiante center">
        <span><img src={Icon} alt=""/></span><h3 class="mb35">Creando Estudiante</h3>
        <form class="formularioEstudiante" onSubmit={handleSubmit}>
            <label for='nombre'>Nombre</label>
            <input name="nombre" type="text"/>
            <label for="uuid_plan">Programa</label>                
                <select class="form-select" name="uuid_plan">
                    {                        
                        programas.map((prg) => (
                            <option value={prg.uuid}>{prg.nombre}</option>
                        ))                    
                    }
                </select>
            <div class="center">
            <input name="correo" type="email" required="true"/>
            <button class="btn btn-success justify-self-between mt-3 mb-3">Registrar</button>
            </div>
            
        </form>
        
    </div>
        </>
    );
}

export default EstudianteCreate;