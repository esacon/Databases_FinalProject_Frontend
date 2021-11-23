import React, { useEffect, useState } from 'react';
import { DB_URL } from '../../connection';

const DepartamentoCreate = () => {
    const post_url = DB_URL + "departamento";

    return (
        <>
            <header class="py-5">
            <div class="container px-lg-5">
                <div class="p-4 p-lg-5 bg-light rounded-3 text-center">
                    <div class="m-4 m-lg-5">
                        <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n1"><i class="bi bi-archive"></i></div>
                        <h1 class="display-5 fw-bold">Creando nuevo departamento</h1>
                        <form action={post_url} class="mb-3 " method="post">
                            <div class="form-group pb-2">
                                <label for="nombre" class="fs-5">
                                    <span>Indique el nombre del departamento: </span>
                                    <input type="text" name="nombre" id="nombre" />
                                </label>
                            </div>
                            <button class="btn btn-success justify-self-between">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </header>
        </>
    );
}

export default DepartamentoCreate;