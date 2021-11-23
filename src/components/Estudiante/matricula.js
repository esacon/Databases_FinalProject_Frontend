import React, { useEffect, useState } from 'react';

const matricula = () => {
    const [matriculaEst, setMatricula] = useState([]);

    useEffect(() => {
        getMatricula();
    }, []);


    const getMatricula = async () => {
        try {
            const response = await axios.get('ruta para obtener los matricula de un estudiante determinado');
            console.log(response.data.matricula);
            setMatricula(response.data.matricula);
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
                        <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n1"><i class="bi bi-clipboard-check"></i></div>
                        <h1 class="display-5 fw-bold">Matriculas</h1>
                        <p class="fs-4">Aquí se encuentran las matriculas registradas de los semestres cursados</p>
                    </div>
                </div>
            </div>
        </header>
        <section class="pt-4">
            <div class="container px-lg-5">
                {
                    matriculaEst.map((mat)=>{
                        <div class="row gx-lg-5">
                            <div class="col-lg-6 col-xxl-4 mb-5">
                                <div class="card bg-light border-0 h-100">
                                    <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                        <div class="feature bg-primary bg-gradient text-black rounded-3 mb-4 mt-n4">ICONO</div>
                                        <h2 class="fs-4 fw-bold">{mat.id_periodo}</h2>
                                        <p class="mb-0">{mat.descripcion}</p>
                                        <p class="mb-0">{mat.id_asignatura1}</p>
                                        <p class="mb-0">{mat.id_asignatura2}</p>
                                        <p class="mb-0">{mat.id_asignatura3}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </section>
        </>
    );
}

export default matricula;