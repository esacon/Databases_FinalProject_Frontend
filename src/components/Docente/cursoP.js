import React, { useEffect, useState } from 'react';

const cursoP = () => {
    const [cursosEst, setCursos] = useState([]);

    useEffect(() => {
        getCursos();
    }, []);


    const getCursos = async () => {
        try {
            const response = await axios.get('ruta para obtener los cursos de un estudiante determinado');
            console.log(response.data.cursos);
            setCursos(response.data.cursos);
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
                <div
                  class="
                    feature
                    bg-primary bg-gradient
                    text-white
                    rounded-3
                    mb-4
                    mt-n1
                  "
                >
                  <i class="bi bi-book"></i>
                </div>
                <h1 class="display-5 fw-bold">Cursos</h1>
                <p class="fs-4">
                  Estos son los cursos impartidos a lo largo de su carrera universitaria
                </p>
              </div>
            </div>
          </div>
        </header>
        
        <section class="pt-4">
          <div class="container px-lg-5">
            {
                cursosEst.map((cur)=>{
                    <div class="row gx-lg-5">
                        <div class="col-lg-6 col-xxl-4 mb-5">
                            <div class="card bg-light border-0 h-100">
                                <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <div
                                    class="
                                        feature
                                        bg-primary bg-gradient
                                        text-black
                                        rounded-3
                                        mb-4
                                        mt-n4
                                    "
                                    >
                                    <i class="bi bi-collection-play"></i>
                                    </div>
                                    <h2 class="fs-4 fw-bold">{cur.asignatura}</h2>
                                    <p class="mb-0">ID: {cur.id}</p>
                                    <p class="mb-0">{cur.horario}</p>
                                    <p class="mb-0">{cur.id_salon}</p>
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

export default cursoP;