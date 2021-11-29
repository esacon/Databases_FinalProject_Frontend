
import { DB_URL } from '../../connection';


// Asignatura 

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
        const asignatura = JSON.parse(e.target.value);
        setAsignatura(asignatura);
    };


// Asistencia

    const [asistencias, setAsistencias] = useState([]);

    const getAsistencias = async () => {
        try {
            const response = await axios.get(DB_URL + 'asistencia');
            console.log(response.data);
            setAsistencias(response.data);
        } catch (error) {
            console.log("Ha ocurrido un error");
        }
    }

    const [asistencia, setAsistencia] = useState([]);

    const selectAsistencia = (e) => {    
        const asistencia = JSON.parse(e.target.value);
        setAsistencia(asistencia);
    };

// Conformado

    const [conformados, setConformados] = useState([]);

    const getConformados = async () => {
        try {
            const response = await axios.get(DB_URL + 'conformado');
            console.log(response.data);
            setConformados(response.data);
        } catch (error) {
            console.log("Ha ocurrido un error");
        }
    }

    const [conformado, setConformado] = useState([]);

    const selectConformado = (e) => {    
        const conformado = JSON.parse(e.target.value);
        setConformado(conformado);
    };

// Curso
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
    };

// Departamento

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

    const [departamento, setDepartamento] = useState([]);

    const selectDepartamento = (e) => {    
        const departamento = JSON.parse(e.target.value);
        setDepartamento(departamento);
    };

// Docente

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
        const docente = JSON.parse(e.target.value);
        setDocente(docente);
    };

// Estudiante
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

// Matricula
    const [matriculas, setMatriculas] = useState([]);

    const getMatriculas = async () => {
        try {
            const response = await axios.get(DB_URL + 'matricula');
            console.log(response.data);
            setMatriculas(response.data);
        } catch (error) {
            console.log("Ha ocurrido un error");
        }
    }

    const [matricula, setMatricula] = useState([]);

    const selectMatricula = (e) => {    
        const matricula = JSON.parse(e.target.value);
        setMatricula(matricula);
    };

// Periodo
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

// Plan de Estudios
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

// Programa
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

// Salon
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
        const salon = JSON.parse(e.target.value);
        setSalon(salon);
    };

// Sesion
    const [sesions, setSesiones] = useState([]);

    const getSesiones = async () => {
        try {
            const response = await axios.get(DB_URL + 'sesion');
            console.log(response.data);
            setSesiones(response.data);
        } catch (error) {
            console.log("Ha ocurrido un error");
        }
    }

    const [sesion, setSesion] = useState([]);

    const selectSesion = (e) => {    
        const sesion = JSON.parse(e.target.value);
        setSesion(sesion);
    };
