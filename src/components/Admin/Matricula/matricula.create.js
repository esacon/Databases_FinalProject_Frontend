import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DB_URL } from '../../../connection';
import Icon from '../../../images/money.png';   

const MatriculaCreate = () => {

    // Funciones que se ejecutan al cargar la página.
    useEffect(() => {
        getEstudiantes(); // Obtener estudiantes de la db.
        getPeriodos(); // Obtener estudiantes de la db.
    }, []);  

    const [periodos, setPeriodos] = useState([]);

    const getPeriodos = async () => {
        try {
            const response = await axios.get(DB_URL + 'periodo');
            console.log(response.data);
            setPeriodos(response.data);
        } catch (error) {
            console.log("Ha ocurrido un error");
        }
    }

    const [periodo, setPeriodo] = useState([]);

    const selectPeriodo = (e) => {    
        const periodo = JSON.parse(e.target.value);
        setPeriodo(periodo);
    };

    const [estudiantes, setEstudiantes] = useState([]);

    const getEstudiantes = async () => {
        try {
            const response = await axios.get(DB_URL + 'estudiante');
            console.log(response.data);
            setEstudiantes(response.data);
        } catch (error) {
            console.log("Ha ocurrido un error");
        }
    }

    const [estudiante, setEstudiante] = useState([]);

    const selectEstudiante = (e) => {    
        const estudiante = JSON.parse(e.target.value);
        setEstudiante(estudiante);
    };

    return (
        <>
        <div class="containerMatricula center">
        <span><img src={Icon} alt=""/></span><h3 class="mb35">Creando Matricula</h3>
        <form class="formularioMatricula" action="">
            <label for="id_periodo">Seleccione periodo</label>                
            <select class="form-select" name="id_periodo" id="" onChange={selectPeriodo}>
                {                        
                        periodos.map((asi) => (
                            <option value={asi.id}>{asi.id}</option>
                        ))                    
                    }
                </select> 
            <label for="id_estudiante">Seleccione el estudiante</label>                
                <select class="form-select" name="id_estudiante" id="" onChange={selectEstudiante}>
                {                        
                        estudiantes.map((est) => (
                            <option value={est.id}>{est.nombre}</option>
                        ))                    
                    }
                </select> 
            <label for="">Asignaturas</label>               
            <input type="checkbox" id="asignatura1" name="asignatura1" value="asignatura"/>
            <label for="asignatura1">asignatura1</label><br/>
            <input type="checkbox" id="asignatura2" name="asignatura2" value="asignatura"/>
            <label for="asignatura1">asignatura2</label><br/>
            <input type="checkbox" id="asignatura3" name="asignatura3" value="asignatura"/>
            <label for="asignatura1">asignatura3</label><br/>
            <div class="center">
                <button class="btn btn-success justify-self-between mt-3 mb-3">Registrar</button>
            </div>
            
        </form>
        
    </div>
        </>
    );
}

export default MatriculaCreate;