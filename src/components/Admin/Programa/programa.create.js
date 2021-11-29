import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DB_URL } from '../../../connection';
import bookIcon from '../../../images/book.png'

const ProgramaCreate = () => {

    // Funciones que se ejecutan al cargar la página.
    useEffect(() => {
        getDepartamentos(); // Obtener estudiantes de la db.
        getPlanEstudios(); // Obtener estudiantes de la db.
    }, []);    

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);

        // Actualizar rutas
        let post_url = DB_URL + `programa`;

        // Actualizar cuerpo del post.
        axios.post(post_url, {
            nombre: data.get('nombre'),
            codigo_dpto: data.get('codigo_dpto'),
            uuid_plan: data.get('uuid_plan'),
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

    const [departamento, setDepartamento] = useState();

    const selectDepartamento = (e) => {    
        const departamento = JSON.parse(e.target.value);
        setDepartamento(departamento);
    };

    const [planEstudios, setPlanEstudios] = useState([]);

    const getPlanEstudios = async () => {
        try {
            const response = await axios.get(DB_URL + 'plan-estudio');
            console.log(response.data);
            setPlanEstudios(response.data);
        } catch (error) {
            console.log("Ha ocurrido un error");
        }
    }

    const [planEstudio, setPlanEstudio] = useState([]);

    const selectPlanEstudio = (e) => {    
        const planEstudio = JSON.parse(e.target.value);
        setPlanEstudio(planEstudio);
    };
    return (
        <>
        <div class="containerProgramaEst center">
        <span><img src={bookIcon} alt=""/></span><h3 class="mb35">Creando programa de estudio</h3>
        <form class="formularioProgramaEst" onSubmit={handleSubmit}>
            <label for="nombre">Nombre</label>
            <input type="text" name="nombre"/>
            <label for="codigo_dpto">Seleccione departamento</label>                
            <select class="form-select" name="codigo_dpto" onChange={selectDepartamento}>         
                    {                        
                        departamentos.map((dep) => (
                            <option value={dep.codigo}>{dep.nombre}</option>
                        ))                    
                    }
                </select>
            <label for="uuid_plan">Seleccione plan de estudio</label>                
                <select class="form-select" name="uuid_plan" id="" onChange={selectPlanEstudio}>
                    {                        
                        planEstudios.map((pln) => (
                            <option value={pln.uuid}>{pln.uuid}</option>
                        ))                    
                    }
                </select>
            <div class="center">
            <button class="btn btn-success justify-self-between mt-3 mb-3">Registrar</button>
            </div>
            
        </form>
        
    </div>
        </>
    );
}

export default ProgramaCreate;