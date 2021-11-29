//import React, { useEffect, useState } from 'react';
import bossIcon from '../../images/boss.png'
import noteIcon from '../../images/notebook.png'
import courseIcon from '../../images/courses.png'
import skyIcon from '../../images/skyscraper.png'
import studentIcon from '../../images/student.png'
import moneyIcon from '../../images/money.png'
import hourIcon from '../../images/hourglass.png'
import teacherIcon from '../../images/teacher.png'
import diplomaIcon from '../../images/diploma.png'
import bookIcon from '../../images/book.png'
import {rutas} from '../../path.js';

const Admin = () => { 
    return (
        <>
            <div class="containerPerfilAdmin">
        <div class="center mb35">
            <img src={bossIcon} alt=""/>
        </div>
        <div class=" containerCategorias mgl25 mgb20">
            <div class="caja center left">
                <a href={rutas.ADM_ASI}>
                <span><img src={noteIcon} alt=""/></span>
                Asignatura
                </a> 
            </div>
            <div class="caja center left">
                <a href={rutas.ADM_CUR}>
                <span><img src={courseIcon} alt=""/></span>
                Curso
                </a>
            </div>
            <div class="caja center left">
                <a href={rutas.ADM_DEP}>
                <span><img src={skyIcon} alt=""/></span>
                Departamento
                </a>    
            </div>
            <div class="caja center left">
                <a href={rutas.ADM_EST}>
                <span><img src={studentIcon} alt=""/></span>
                Estudiante
                </a>
                
            </div>
            <div class="caja center left">
                <a href={rutas.ADM_MAT}>
                <span><img src={moneyIcon} alt=""/></span>
                 Matricula    
                </a>
                
            </div>
            <div class="caja center left">
                <a href={rutas.ADM_PER}>
                <span><img src={hourIcon} alt=""/></span>
                Periodo
                </a>
               
            </div>
            <div class="caja center left">
                <a href={rutas.ADM_DOC}>
                <span><img src={teacherIcon} alt=""/></span>
                Profesor
                </a>
            </div>
            <div class="caja center left">
                <a href={rutas.ADM_PRG}>
                <span><img src={diplomaIcon} alt=""/></span>
                Programa
                </a>
                
            </div>
            <div class="caja center left">
                <a href={rutas.ADM_SAL}>
                <span><img src={courseIcon} alt=""/></span>
                Salon
                </a>
                
            </div>
            <div class="caja center left">
                <a href={rutas.ADM_PLN}>
                <span><img src={bookIcon} alt=""/></span>
                 Plan de estudios
                </a>
            </div>

        </div>
    </div>
        </>
    );
}

export default Admin;