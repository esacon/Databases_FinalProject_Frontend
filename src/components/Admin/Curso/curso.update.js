import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DB_URL } from '../../../connection';
import Icon from '../../../images/courses.png'
import TimePicker from 'react-time-picker';
const CursoCreate = () => {

    // Funciones que se ejecutan al cargar la página.
    useEffect(() => {
        getCursos();
        getAsignaturas(); // Obtener estudiantes de la db.
        getDocentes(); // Obtener estudiantes de la db.
        getSalones(); // Obtener estudiantes de la db.
        getPeriodos(); // Obtener estudiantes de la db.
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);

        // Actualizar rutas
        let post_url = DB_URL + `curso/${curso.id}`;

        // Actualizar cuerpo del post.
        axios.put(post_url, {
            uuid_docente: data.get('uuid_docente'),
            id_asignatura: data.get('id_asignatura'),
            id_salon: data.get('id_salon'),
            id_periodo: data.get('id_periodo'),
            dia: data.get('dia'),
            horario: data.get('horario'),
            duracion: data.get('duracion')
        }).then(() => {
            alert("Datos insertados exitosamente.");
        })
    }

    const [time, setTime] = useState('');

    const [cursos, setCursos] = useState([]);

    const getCursos = async () => {
        try {
            const response = await axios.get(DB_URL + 'curso');
            console.log(response.data);
            setCursos(response.data);
        } catch (error) {
            console.log("Ha ocurrido un error");
        }
    }

    const [curso, setCurso] = useState([]);

    const selectCurso = (e) => {    
        const curso = JSON.parse(e.target.value);
        setCurso(curso);
        setTime(curso.horario);
    };

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
        const asignatura = e.target.value;
        setAsignatura(asignatura);
    };

    const [docentes, setDocentes] = useState([]);

    const getDocentes = async () => {
        try {
            const response = await axios.get(DB_URL + 'docente');
            console.log(response.data);
            setDocentes(response.data);
        } catch (error) {
            console.log("Ha ocurrido un error");
        }
    }

    const [docente, setDocente] = useState([]);

    const selectDocente = (e) => {
        const docente = e.target.value;
        setDocente(docente);
    };

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
        const periodo = e.target.value;
        setPeriodo(periodo);
    };

    const [salones, setSalones] = useState([]);

    const getSalones = async () => {
        try {
            const response = await axios.get(DB_URL + 'salon');
            console.log(response.data);
            setSalones(response.data);
        } catch (error) {
            console.log("Ha ocurrido un error");
        }
    }

    const [salon, setSalon] = useState([]);

    const selectSalon = (e) => {
        const salon = e.target.value;
        setSalon(salon);
    };

    return (
        <>
            <div class="containerCurso center">
                <span><img src={Icon} alt="" /></span><h3 class="mb35">Creando curso</h3>
                <form class="formularioCurso" onSubmit={handleSubmit}>
                    <label for="uuid_docente">Cursos:</label>
                    <select class="form-select" name="uuid_docente" id="" onChange={selectCurso}>
                        {
                            cursos.map((curso) => (
                                <option value={JSON.stringify(curso)}>{curso.nombre}</option>
                            ))
                        }
                    </select>
                    <label for="uuid_docente">Docente</label>
                    <select class="form-select" name="uuid_docente" id="" onChange={selectDocente}>
                        {
                            docentes.map((doc) => (
                                <option value={doc.uuid}>{doc.nombre}</option>
                            ))
                        }
                    </select>
                    <label for="id_asignatura">Asignatura</label>
                    <select class="form-select" name="id_asignatura" id="" onChange={selectAsignatura}>
                        {
                            asignaturas.map((asi) => (
                                <option value={asi.id}>{asi.nombre}</option>
                            ))
                        }
                    </select>
                    <label for="id_salon">Salon</label>
                    <select class="form-select" name="id_salon" id="" onChange={selectSalon}>
                        {
                            salones.map((sal) => (
                                <option value={sal.id}>{sal.id}</option>
                            ))
                        }
                    </select>
                    <label for="">Periodo</label>
                    <select class="form-select" name="id_periodo" id="" onChange={selectPeriodo}>
                        {
                            periodos.map((asi) => (
                                <option value={asi.id}>{asi.id}</option>
                            ))
                        }
                    </select>
                    <label for="dia">Día de la semana</label>
                    <select class="form-select" name="dia" id="">
                        <option value="Lunes">
                            Lunes
                        </option>
                        <option value="Martes">
                            Martes
                        </option>
                        <option value="Miercoles">
                            Miercoles
                        </option>
                        <option value="Juves">
                            Jueves
                        </option>
                        <option value="Viernes">
                            Viernes
                        </option>
                        <option value="Sabado">
                            Sabado
                        </option>
                    </select>
                    <label for="horario">Hora</label>
                    <TimePicker onChange={setTime} value={time} name="horario" disableClock="false" />
                    <label for="duracion">Duración</label>
                    <input type="number" name="duracion" />
                    <div class="center">
                        <button class="btn btn-success justify-self-between mt-3 mb-3">Registrar</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default CursoCreate;