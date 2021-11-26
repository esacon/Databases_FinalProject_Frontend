import React, { useEffect, useState } from 'react';
import courseIcon from '../../../images/courses.png'
import axios from 'axios';
import { DB_URL } from '../../../connection';

const SalonCreate = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);

        // Actualizar rutas
        let post_url = DB_URL + `salon`;

        // Actualizar cuerpo del post.
        axios.post(post_url, {
            id: data.get("id"),
        }).then(() => {
            alert("Datos insertados exitosamente.");            
        })
    }
    return (
        <>
        <div class="containerSalon center">
        <span><img src={courseIcon}/></span><h3 class="mb35">Creando salon</h3>
        <form class="formularioSalon" onSubmit={handleSubmit}>
            <label for="id">Indique lugar</label>
            <input type="text" name="id"/>
            <div class="center">
                <button class="btn btn-success justify-self-between mt-3 mb-3">Enviar</button>
            </div>
        </form>
        
    </div>
        </>
    );
}

export default SalonCreate;