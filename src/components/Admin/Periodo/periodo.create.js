import React, { useEffect, useState } from 'react';
import { DB_URL } from '../../../connection';
import hourIcon from '../../../images/hourglass.png';
import axios from 'axios';

const PeriodoCreate = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);

        // Actualizar rutas
        let post_url = DB_URL + `periodo`;

        // Actualizar cuerpo del post.
        axios.post(post_url, {
            id: parseInt(data.get('id1').concat(data.get('id2'))),
            creditos: data.get('creditos'),
            descripcion: data.get('descripcion'),
        }).then(() => {
            alert("Datos insertados exitosamente.");            
        })
    }
    return (
        <>
            <div class="containerPeriodo center">
        <span><img src={hourIcon} alt=""/></span><h3 class="mb35">Creando Periodo</h3>
        <form class="formularioPeriodo" onSubmit={handleSubmit}>
            <label for="id1">Año</label>
            <input type="text" name='id1'/>
            <label for="id2">Sección</label>                
                <select name="id2" id="">
                    <option value="01">
                        01
                    </option>
                    <option value="02">
                        02
                    </option>
                </select>
            <label for="creditos">número de créditos</label>
            <input type="number" name='creditos'/>
            <label for="descripcion">Descripción</label>
            <input type="textfield" name="descripcion"/>
            <div class="center">
                <button class="btn btn-success justify-self-between mt-3 mb-3">Registrar</button>
            </div>
            
        </form>
        
    </div>
        </>
    );
}

export default PeriodoCreate;