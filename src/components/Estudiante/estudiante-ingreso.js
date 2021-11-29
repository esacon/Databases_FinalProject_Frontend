import React, { useEffect, useState } from 'react';
import '../../css/nicepage/estudiante-claseINTO.css';
import '../../css/nicepage/nicepageclaseinto.css';
import { DB_URL } from '../../connection';
import axios from 'axios';
import cookie from 'react-cookies';
import ReactDOM from 'react-dom';

const EstudianteIngreso = () => {
  
  const estudiante_id = cookie.load('idEstudiante');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    // Actualizar rutas
    let URL = DB_URL + `sesion/est/ingreso&${data.get('cursoCode')}&${data.get('profeCode')}`;

    // Actualizar cuerpo del post.
    axios.get(URL).then((info) => {
      let result = info.data;
      console.log(result);
      if(result.length > 0){
        result= result[0];
        let temp =<></>;
        let d = new Date(Date.now());
        let time = result.hora.split(":");
        let horas = d.getHours() - parseInt(time[0]);
        let minutos = d.getMinutes() - parseInt(time[1]); 
        let estado = "Inasistencia";
        if(horas === 0){
          if (minutos <= 10){
            alert('A tiempo');
            estado = "A tiempo";
          } else if (minutos <= 20) {
            alert('Con retraso');
            estado = "Con retraso";
          } else{
            alert('La clase ya no está disponible para ingresar.');            
          }
          if(estado !== 'Inasistencia'){
            let URL_ASIS = DB_URL + `/asistencia/${data.get('cursoCode')}/${estudiante_id}/${estado}`;
            axios.put(URL_ASIS, {}).then(() => {
                alert("Registro actualizado.");
            })
          }
        } else if (horas > 0) {
          alert('La clase ya no está disponible para ingresar.');
        } else {
          alert('Todavía falta un poco para que inicie la clase.');
        }
        temp = <>
                <h1 class="claseintou-align-center claseintou-text claseintou-text-1">{result.id_asignatura}</h1>
                <p class="claseintou-text claseintou-text-2">Codigo: {result.id}<br />Profesor: {result.uuid_docente}<br />Horario: {result.dia} - {result.hora}<br />Duracion: {result.duracion}<br />Lugar: {result.id_salon}<br/>Estado: {estado}</p>
              </>;
        ReactDOM.render(temp, document.getElementById('claseIinformacion'));
        ReactDOM.render(<></>, document.getElementById('sec-85d2'));
      } else {
        alert('La información suministrada no corresponde con nuestros registros.');
      }      
    });    
  }

  return (
    <>
      <section class="claseintou-clearfix claseintou-image claseintou-section-1" id="sec-efed" data-image-width="3375" data-image-height="2250">
        <div class="claseintou-clearfix claseintou-sheet claseintou-sheet-1">
          <div class="claseintou-align-left claseintou-container-style claseintou-group claseintou-shape-rectangle claseintou-white claseintou-group-1">
            <div class="claseintou-container-layout claseintou-container-layout-1"><span class="claseintou-icon claseintou-icon-circle claseintou-palette-2-base claseintou-spacing-16 claseintou-icon-1"><svg class="claseintou-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 512 512" ><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-2314"></use></svg><svg class="claseintou-svg-content" viewBox="0 0 512 512" id="svg-2314"><path d="M70.46,265.48H441.54a5.1,5.1,0,0,0,5.1-5.1V31.28a5.1,5.1,0,0,0-5.1-5.1H70.46a5.1,5.1,0,0,0-5.1,5.1v229.1A5.1,5.1,0,0,0,70.46,265.48Zm119.24-10.2a66.34,66.34,0,0,1,132.6,0ZM75.56,36.38H436.44v218.9H332.52A76.72,76.72,0,0,0,279,184.71a43.31,43.31,0,1,0-46.06,0,76.72,76.72,0,0,0-53.49,70.57H75.56ZM256,181.17a33.11,33.11,0,1,1,33.11-33.11A33.15,33.15,0,0,1,256,181.17Z"></path><path d="M424.08,406.71a43.84,43.84,0,1,0-46.37,0,77.92,77.92,0,0,0-49.26,46.36,78,78,0,0,0-49.26-46.36,43.83,43.83,0,1,0-46.38,0,78,78,0,0,0-49.26,46.36,77.92,77.92,0,0,0-49.26-46.36,43.84,43.84,0,1,0-46.37,0,77.68,77.68,0,0,0-54.36,74,5.1,5.1,0,0,0,10.2,0,67.35,67.35,0,1,1,134.69,0,5.1,5.1,0,1,0,10.2,0,67.35,67.35,0,0,1,134.7,0,5.1,5.1,0,0,0,10.2,0,67.35,67.35,0,1,1,134.69,0,5.1,5.1,0,0,0,10.2,0A77.68,77.68,0,0,0,424.08,406.71ZM77.47,369.53a33.64,33.64,0,1,1,33.64,33.64A33.67,33.67,0,0,1,77.47,369.53Zm144.9,0A33.63,33.63,0,1,1,256,403.17,33.67,33.67,0,0,1,222.37,369.53Zm144.89,0a33.64,33.64,0,1,1,33.64,33.64A33.67,33.67,0,0,1,367.26,369.53Z"></path></svg></span>
            <div id="claseIinformacion">
              <h1 class="claseintou-align-center claseintou-text claseintou-text-1">Asignatura</h1>
              <p class="claseintou-text claseintou-text-2">Codigo:<br />Profesor:<br />Horario: Dia - hora<br />Duracion:&nbsp;<br />Lugar: <br/>Estado:</p>
            </div>
            </div>
          </div>
        </div>
      </section>
      <section class="claseintou-clearfix claseintou-section-2" id="sec-85d2">
        <div class="claseintou-align-left claseintou-clearfix claseintou-sheet claseintou-sheet-1">
          <h1 class="claseintou-text claseintou-text-palette-2-base claseintou-title claseintou-text-1">Ingresar</h1>
          <div class="claseintou-expanded-width claseintou-form claseintou-form-1">
            <form class="claseintou-clearfix claseintou-form-horizontal claseintou-form-spacing-50 claseintou-inner-form" source="custom" name="form" onSubmit={handleSubmit}>
              <div class="claseintou-form-group claseintou-form-group-1">
                <input type="text" placeholder="Indique código del curso" id="text-91f6" name="cursoCode" class="claseintou-border-1 claseintou-border-grey-30 claseintou-input claseintou-input-rectangle claseintou-white" required />
              </div>
              <div class="claseintou-form-group claseintou-form-group-2">
                <input type="text" placeholder="Indique código del profesor" id="text-2099" name="profeCode" class="claseintou-border-1 claseintou-border-grey-30 claseintou-input claseintou-input-rectangle claseintou-white" required />
              </div>
              <div class="claseintou-align-left claseintou-form-group claseintou-form-submit">
                <button>Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default EstudianteIngreso;