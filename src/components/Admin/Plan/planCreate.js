import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DB_URL } from '../../../connection';
import noteIcon from '../../../images/notebook.png'

const PlanCreate = () => {

    useEffect(() => {
        getAsignaturas(); // Obtener estudiantes de la db.
    }, []);   

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

    const selectAsignatura = (e) => {    
        const id = e.target.value;
        console.log(id)
        setAsignaturas(asignaturas.filter(asi => asi.id !== id));
    };

    return (
        <>
        <div class="containerCursoEst center">
        <span><img src={noteIcon} alt=""/></span><h3 class="mb35">Creando plan de estudio</h3>
        <form class="formularioCursoEst"action="">
            <label for="">Nombre</label>
            <input type="text" name="nombre"/> 
            <label for="">Asignaturas</label>              
            <label for="asignatura1">asignatura1</label><br/>
            <select class="form-select" name="asignatura1" onChange={selectAsignatura}>       
                    <option value={null}> </option>  
                    {                        
                        asignaturas.map((asi) => (
                            <option value={asi.id}>{asi.nombre}</option>
                        ))                    
                    }
            </select>    
            <label for="asignatura1">asignatura2</label><br/>
            <select class="form-select" name="asignatura2" onChange={selectAsignatura}> 
                    <option value={null}> </option>           
                    {                        
                        asignaturas.map((asi) => (
                            <option value={asi.id}>{asi.nombre}</option>
                        ))                    
                    }
            </select>    
            <label for="asignatura1">asignatura3</label><br/>
            <select class="form-select" name="asignatura3" onChange={selectAsignatura}> 
                    <option value={null}> </option>           
                    {                        
                        asignaturas.map((asi) => (
                            <option value={asi.id}>{asi.nombre}</option>
                        ))                    
                    }
            </select>    
            <div class="center">
                <button class="btn btn-success justify-self-between mt-3 mb-3">Enviar</button>
            </div>
            
        </form>
        
    </div>
        </>
    );
}

export default PlanCreate;