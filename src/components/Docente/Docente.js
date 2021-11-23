import React, { useEffect, useState } from 'react';

let doc = {dep : "La guacharaca"}

const Docente = () => {
    return (
        <>
            <div class="container-fluid">
                    <h1 class="mt-4">Bienvenido nombreDelProfesor</h1>
                    <h5 class="">Departamento {doc.dep}</h5>
                    <img src="" alt="..." class="rounded" />
                    <p>Desde este menú maneje las clases, asistencias, entre otras opciones hermosas</p>
                    
                </div>
        </>
    );
}

export default Docente;