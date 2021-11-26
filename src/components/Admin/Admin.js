import React, { useEffect, useState } from 'react';
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


const Admin = () => {
    return (
        <>
            <div class="containerPerfilAdmin">
        <div class="center mb35">
            <img src={bossIcon} alt=""/>
        </div>
        <div class=" containerCategorias mgl25 mgb20">
            <div class="caja center left">
                <a href="">
                <span><img src={noteIcon} alt=""/></span>
                Asignatura
                </a> 
            </div>
            <div class="caja center left">
                <a href="">
                <span><img src={courseIcon} alt=""/></span>
                Curso
                </a>
            </div>
            <div class="caja center left">
                <a href="">
                <span><img src={skyIcon} alt=""/></span>
                Departamento
                </a>
                <span><img src={skyIcon} alt=""/></span>
                Departamento
            </div>
            <div class="caja center left">
                <a href="">
                <span><img src={studentIcon} alt=""/></span>
                Estudiante
                </a>
                
            </div>
            <div class="caja center left">
                <a href="">
                <span><img src={moneyIcon} alt=""/></span>
                 Matricula    
                </a>
                <span><img src={moneyIcon} alt=""/></span>
                Matricula
            </div>
            <div class="caja center left">
                <a href="">
                <span><img src={hourIcon} alt=""/></span>
                Periodo
                </a>
               
            </div>
            <div class="caja center left">
                <
                <span><img src={teacherIcon} alt=""/></span>
                Profesor
            </div>
            <div class="caja center left">
                <span><img src={diplomaIcon} alt=""/></span>
                Programa
            </div>
            <div class="caja center left">
                <span><img src={courseIcon} alt=""/></span>
                Salon
            </div>
            <div class="caja center left">
                <span><img src={bookIcon} alt=""/></span>
                Plan de estudios
            </div>

        </div>
    </div>
        </>
    );
}

export default Admin;