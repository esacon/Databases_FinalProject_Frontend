import React, { useEffect, useState } from 'react';

const SalonCreate = () => {
    return (
        <>
        <div class="py-5">
            <div class="container px-lg-5">
                <div class="p-4 p-lg-5 bg-light rounded-3 text-center">
                    <div class="m-4 m-lg-5">
                        <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n1"><i class="bi bi-archive"></i></div>
                        <h1 class="display-5 fw-bold">Registrando salon de clases</h1>
                        <form action="" class="mb-3 " method="post">
                            <div class="form-group pb-2">
                                <label for="id" class="fs-5">
                                    <span>Indique el indicativo (ej: 44G1): </span>
                                    <input type="text" name="id" id="id" />
                                </label>
                            </div>
                            <div class="form-check pb-2">
                                <label for="is_virtual" class="fs-5">
                                    <p>¿Es un curso virtual?</p>
                                    <input type="radio" name="is_virtual" value='true' class="form-check-input" /><span>Sí</span><br/>
                                    <input type="radio" name="is_virtual" value='false' class="form-check-input" /><span>No</span>
                                </label>
                            </div>
                            <button class="btn btn-success justify-self-between">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default SalonCreate;