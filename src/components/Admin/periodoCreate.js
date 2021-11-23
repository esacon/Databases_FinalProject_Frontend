import React, { useEffect, useState } from 'react';

const PeriodoCreate = () => {
    return (
        <>
            <header class="py-5">
            <div class="container px-lg-5">
                <div class="p-4 p-lg-5 bg-light rounded-3 text-center">
                    <div class="m-4 m-lg-5">
                        <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n1"><i class="bi bi-archive"></i></div>
                        <h1 class="display-5 fw-bold">Registrando nuevo periodo</h1>
                        <form action="" class="mb-3 " method="post">
                            <div class="form-group pb-2">
                                <label for="id1" class="fs-5">
                                    <span>Indique el año: </span>
                                    <input type="number" name="id1" id="id1" />
                                </label>
                            </div>
                            <div class="form-group pb-2">
                                <label for="id2" class="fs-5">
                                    <span>Indique la seccion: </span>
                                    <select name="id2" id="id2">
                                        <option value="1">01</option>
                                        <option value="2">02</option>
                                    </select>
                                </label>
                            </div>
                            <div class="form-group pb-2">
                                <label for="creditos" class="fs-5">
                                    <span>Indique el numero de creditos: </span>
                                    <input type="number" name="creditos" id="creditos" />
                                </label>
                            </div>
                            <div class="form-group pb-2">
                                <label for="descripcion" class="fs-5">
                                    <span>Indique la descripcion del periodo: </span>
                                    <input type="text" name="descripcion" id="descripcion" />
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

export default PeriodoCreate;