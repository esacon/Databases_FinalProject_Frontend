import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
import cookie from 'react-cookies';
import {DB_URL} from '../../connection';
import '../../css/nicepage/Docente-cursos.css';
import '../../css/nicepage/nicepagedoccurso.css';

const EstudianteCursos = () => {
  

  const idEstudiante = cookie.load('id_estudiante');

  const cursosData = [{id_asignatura: '', id: '', dia: '', hora: '', duracion: '', id_salon: ''},
  {id_asignatura: '', id: '', dia: '', hora: '', duracion: '', id_salon: ''},
  {id_asignatura: '', id: '', dia: '', hora: '', duracion: '', id_salon: ''}];

  const cursosElement = <></>;

  useEffect(() => {
    getPeriodos();
  }, []);

  const [periodos, setPeriodos] = useState([]);

  const getPeriodos = async () => {
    try {
      const response = await axios.get(DB_URL + 'periodo');
      setPeriodos(response.data);
    } catch (error) {
      console.log("Ha ocurrido un error");
    }
  }

  const [cursosEstudiante, setCursosEstudiante] = useState([]);
  var periodo_var = null;
  const getCursosEstudiante = async () => {
    try {
      const response = await axios.get(DB_URL + `curso/est/${periodo_var}/${idEstudiante}`);
      setCursosEstudiante(response.data);
    } catch (error) {
      console.log("Ha ocurrido un error");
    }
  }

  const [periodo, setPeriodo] = useState([]);

  const selectPeriodo = (e) => {
    periodo_var = e.target.value;
    setPeriodo(e.target.value);
    getCursosEstudiante();
    console.log(cursosEstudiante)
    for (let i = 0; i < 3; i++) {
      if(i<cursosEstudiante.length){
        cursosData[i].id_asignatura = cursosEstudiante[i].id_asignatura;
        cursosData[i].id_salon = cursosEstudiante[i].id_salon;
        cursosData[i].dia = cursosEstudiante[i].dia;
        cursosData[i].duracion = cursosEstudiante[i].duracion;
        cursosData[i].hora = cursosEstudiante[i].hora;
        cursosData[i].id = cursosEstudiante[i].id;
      }else{
        cursosData[i].id_asignatura = '';
        cursosData[i].id_salon = '';
        cursosData[i].dia = '';
        cursosData[i].duracion = '';
        cursosData[i].hora = '';
        cursosData[i].id = '';
      }
      
    }
    cursosElement = <>
  <div class="doccursou-container-style doccursou-layout-cell doccursou-opacity doccursou-opacity-85 doccursou-radius-50 doccursou-shape-round doccursou-size-20 doccursou-layout-cell-1">
                <div class="doccursou-border-6 doccursou-border-grey-75 doccursou-container-layout doccursou-container-layout-1"><span class="doccursou-align-left doccursou-border-2 doccursou-border-black doccursou-icon doccursou-icon-circle doccursou-spacing-8 doccursou-text-palette-2-base doccursou-icon-1" data-href="https://nicepage.com"><svg class="doccursou-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 24 24" ><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-04b0"></use></svg><svg class="doccursou-svg-content" viewBox="0 0 24 24" id="svg-04b0"><path d="M17.2501 2.00052C18.7689 2.00052 20.0001 3.23173 20.0001 4.75052V19.2488C20.0001 20.7675 18.7689 21.9988 17.2501 21.9988H6.75C5.23122 21.9988 4 20.7675 4 19.2488V4.75052C4 3.49158 4.84596 2.43023 6.00044 2.10391L5.99963 3.75071C5.69623 3.97877 5.5 4.34173 5.5 4.75052V19.2488C5.5 19.9391 6.05964 20.4988 6.75 20.4988H17.2501C17.9405 20.4988 18.5001 19.9391 18.5001 19.2488V4.75052C18.5001 4.06016 17.9405 3.50052 17.2501 3.50052L15 3.5V2L17.2501 2.00052ZM14.0001 2V10.1389C14.0001 10.886 13.2007 11.1665 12.7109 10.9033L12.6279 10.8512L10.5019 9.56575L8.42379 10.8172C7.92411 11.1779 7.09342 10.9564 7.00736 10.2594L7.0001 10.1389V2H14.0001ZM12.5001 3.5H8.5001V9.02327L10.0734 8.07421C10.3377 7.93602 10.6574 7.93341 10.8906 8.05036L12.5001 9.02396V3.5Z" fill="currentColor"></path></svg></span>
                  <h3 class="doccursou-align-left doccursou-text doccursou-text-2">{cursosData[0].id_asignatura}</h3>
                  <h5 class="doccursou-align-left doccursou-text doccursou-text-3">NRC: {cursosData[0].id}</h5>
                  <h5 class="doccursou-align-left doccursou-text doccursou-text-4">{cursosData[0].dia} - {cursosData[0].hora}<br />{cursosData[0].duracion} Horas
                  </h5>
                  <p class="doccursou-align-left doccursou-text doccursou-text-5">Salon: {cursosData[0].id_salon}</p>
                </div>
              </div>

              <div class="doccursou-container-style doccursou-layout-cell doccursou-opacity doccursou-opacity-85 doccursou-radius-50 doccursou-shape-round doccursou-size-20 doccursou-layout-cell-1">
                <div class="doccursou-border-6 doccursou-border-grey-75 doccursou-container-layout doccursou-container-layout-1"><span class="doccursou-align-left doccursou-border-2 doccursou-border-black doccursou-icon doccursou-icon-circle doccursou-spacing-8 doccursou-text-palette-2-base doccursou-icon-1" data-href="https://nicepage.com"><svg class="doccursou-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 24 24" ><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-04b0"></use></svg><svg class="doccursou-svg-content" viewBox="0 0 24 24" id="svg-04b0"><path d="M17.2501 2.00052C18.7689 2.00052 20.0001 3.23173 20.0001 4.75052V19.2488C20.0001 20.7675 18.7689 21.9988 17.2501 21.9988H6.75C5.23122 21.9988 4 20.7675 4 19.2488V4.75052C4 3.49158 4.84596 2.43023 6.00044 2.10391L5.99963 3.75071C5.69623 3.97877 5.5 4.34173 5.5 4.75052V19.2488C5.5 19.9391 6.05964 20.4988 6.75 20.4988H17.2501C17.9405 20.4988 18.5001 19.9391 18.5001 19.2488V4.75052C18.5001 4.06016 17.9405 3.50052 17.2501 3.50052L15 3.5V2L17.2501 2.00052ZM14.0001 2V10.1389C14.0001 10.886 13.2007 11.1665 12.7109 10.9033L12.6279 10.8512L10.5019 9.56575L8.42379 10.8172C7.92411 11.1779 7.09342 10.9564 7.00736 10.2594L7.0001 10.1389V2H14.0001ZM12.5001 3.5H8.5001V9.02327L10.0734 8.07421C10.3377 7.93602 10.6574 7.93341 10.8906 8.05036L12.5001 9.02396V3.5Z" fill="currentColor"></path></svg></span>
                  <h3 class="doccursou-align-left doccursou-text doccursou-text-2">{cursosData[1].id_asignatura}</h3>
                  <h5 class="doccursou-align-left doccursou-text doccursou-text-3">NRC: {cursosData[1].id}</h5>
                  <h5 class="doccursou-align-left doccursou-text doccursou-text-4">{cursosData[1].dia} - {cursosData[1].hora}<br />{cursosData[1].duracion} Horas
                  </h5>
                  <p class="doccursou-align-left doccursou-text doccursou-text-5">Salon: {cursosData[1].id_salon}</p>
                </div>
              </div>

              <div class="doccursou-container-style doccursou-layout-cell doccursou-opacity doccursou-opacity-85 doccursou-radius-50 doccursou-shape-round doccursou-size-20 doccursou-layout-cell-1">
                <div class="doccursou-border-6 doccursou-border-grey-75 doccursou-container-layout doccursou-container-layout-1"><span class="doccursou-align-left doccursou-border-2 doccursou-border-black doccursou-icon doccursou-icon-circle doccursou-spacing-8 doccursou-text-palette-2-base doccursou-icon-1" data-href="https://nicepage.com"><svg class="doccursou-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 24 24" ><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-04b0"></use></svg><svg class="doccursou-svg-content" viewBox="0 0 24 24" id="svg-04b0"><path d="M17.2501 2.00052C18.7689 2.00052 20.0001 3.23173 20.0001 4.75052V19.2488C20.0001 20.7675 18.7689 21.9988 17.2501 21.9988H6.75C5.23122 21.9988 4 20.7675 4 19.2488V4.75052C4 3.49158 4.84596 2.43023 6.00044 2.10391L5.99963 3.75071C5.69623 3.97877 5.5 4.34173 5.5 4.75052V19.2488C5.5 19.9391 6.05964 20.4988 6.75 20.4988H17.2501C17.9405 20.4988 18.5001 19.9391 18.5001 19.2488V4.75052C18.5001 4.06016 17.9405 3.50052 17.2501 3.50052L15 3.5V2L17.2501 2.00052ZM14.0001 2V10.1389C14.0001 10.886 13.2007 11.1665 12.7109 10.9033L12.6279 10.8512L10.5019 9.56575L8.42379 10.8172C7.92411 11.1779 7.09342 10.9564 7.00736 10.2594L7.0001 10.1389V2H14.0001ZM12.5001 3.5H8.5001V9.02327L10.0734 8.07421C10.3377 7.93602 10.6574 7.93341 10.8906 8.05036L12.5001 9.02396V3.5Z" fill="currentColor"></path></svg></span>
                  <h3 class="doccursou-align-left doccursou-text doccursou-text-2">{cursosData[2].id_asignatura}</h3>
                  <h5 class="doccursou-align-left doccursou-text doccursou-text-3">NRC: {cursosData[2].id}</h5>
                  <h5 class="doccursou-align-left doccursou-text doccursou-text-4">{cursosData[2].dia} - {cursosData[2].hora}<br />{cursosData[2].duracion} Horas
                  </h5>
                  <p class="doccursou-align-left doccursou-text doccursou-text-5">Salon: {cursosData[2].id_salon}</p>
                </div>
              </div>
  </>
    ReactDOM.render(cursosElement, document.getElementById('classContainerMain'))
  };

  return (
    <>

      <section class="doccursou-clearfix doccursou-image doccursou-section-1" id="sec-efed" data-image-width="3375" data-image-height="2250">
        <div class="doccursou-clearfix doccursou-sheet doccursou-sheet-1">
          <div class="doccursou-align-left doccursou-container-style doccursou-group doccursou-shape-rectangle doccursou-white doccursou-group-1">
            <div class="doccursou-container-layout doccursou-container-layout-1">
              <div class="doccursou-container-style doccursou-group doccursou-group-2">
                <div class="doccursou-container-layout">
                  <h1 class="doccursou-text doccursou-text-default doccursou-text-1">Historico</h1>
                  <p class="doccursou-text doccursou-text-2">Aquí encuentra la informacion acerca de los cursos en los que ha participado</p>
                </div>
              </div><span class="doccursou-icon doccursou-icon-circle doccursou-text-palette-2-base doccursou-icon-1"><svg class="doccursou-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 56 56" ><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-354d"></use></svg><svg class="doccursou-svg-content" viewBox="0 0 56 56" id="svg-354d" ><g><path d="M38,0h-2H20h-2H0v56h18h2h16h2h18V0H38z M18,54H2V2h16V54z M36,54H20V2h16V54z M54,54H38V2h16V54z"></path><path d="M16,4H4v22h12V4z M14,24H6V6h8V24z"></path><path d="M34,4H22v22h12V4z M32,24h-8V6h8V24z"></path><path d="M52,4H40v22h12V4z M50,24h-8V6h8V24z"></path><path d="M10,51c3.309,0,6-2.691,6-6s-2.691-6-6-6s-6,2.691-6,6S6.691,51,10,51z M10,41c2.206,0,4,1.794,4,4s-1.794,4-4,4   s-4-1.794-4-4S7.794,41,10,41z"></path><path d="M28,51c3.309,0,6-2.691,6-6s-2.691-6-6-6s-6,2.691-6,6S24.691,51,28,51z M28,41c2.206,0,4,1.794,4,4s-1.794,4-4,4   s-4-1.794-4-4S25.794,41,28,41z"></path><path d="M46,51c3.309,0,6-2.691,6-6s-2.691-6-6-6s-6,2.691-6,6S42.691,51,46,51z M46,41c2.206,0,4,1.794,4,4s-1.794,4-4,4   s-4-1.794-4-4S43.794,41,46,41z"></path>
              </g></svg></span>
            </div>
          </div>
        </div>
      </section>
      <section class="doccursou-clearfix doccursou-section-2" id="sec-85d2">
        <div class="doccursou-align-left doccursou-clearfix doccursou-sheet doccursou-sheet-1">
          <h2 class="doccursou-text doccursou-text-default doccursou-text-1">Periodo Academico</h2>
          <div class="doccursou-form doccursou-form-1">
            <form action="#" method="POST" class="doccursou-clearfix doccursou-form-spacing-10 doccursou-form-vertical doccursou-inner-form" source="custom" name="form" >
              <div class="doccursou-form-group doccursou-form-select doccursou-form-group-1">
                <label for="select-50a8" class="doccursou-form-control-hidden doccursou-label"></label>
                <div class="doccursou-form-select-wrapper">
                  <select id="select-50a8" name="select" class="doccursou-border-1 doccursou-border-grey-30 doccursou-input doccursou-input-rectangle doccursou-white" onChange={selectPeriodo}>
                  <option value={null} selected></option>
                    {
                      periodos.map((per) => (
                        <option value={per.id}>{per.id}</option>
                      ))
                    }
                  </select>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" version="1" class="doccursou-caret"><path fill="currentColor" d="M4 8L0 4h8z"></path></svg>
                </div>
              </div>
              <div class="doccursou-form-send-message doccursou-form-send-success"> Gracias! Tu mensaje ha sido enviado. </div>
              <div class="doccursou-form-send-error doccursou-form-send-message"> No se puede enviar su mensaje. Por favor, corrija los errores y vuelva a intentarlo. </div>
              <input type="hidden" value="" name="recaptchaResponse" />
            </form>
          </div>
          <div class="doccursou-clearfix doccursou-gutter-42 doccursou-layout-wrap doccursou-layout-wrap-1">
            <div class="doccursou-layout">
              <div class="doccursou-layout-row" id="classContainerMain">

              
                
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default EstudianteCursos;