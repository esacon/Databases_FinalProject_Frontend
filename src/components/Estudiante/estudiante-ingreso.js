import React, { useEffect, useState } from 'react';
import '../../css/nicepage/estudiante-claseINTO.css'
import '../../css/nicepage/nicepageclaseinto.css'

const EstudianteIngreso = () => {
  return (
    <>
      <section class="claseintou-clearfix claseintou-image claseintou-section-1" id="sec-efed" data-image-width="3375" data-image-height="2250">
        <div class="claseintou-clearfix claseintou-sheet claseintou-sheet-1">
          <div class="claseintou-align-left claseintou-container-style claseintou-group claseintou-shape-rectangle claseintou-white claseintou-group-1">
            <div class="claseintou-container-layout claseintou-container-layout-1"><span class="claseintou-icon claseintou-icon-circle claseintou-palette-2-base claseintou-spacing-16 claseintou-icon-1"><svg class="claseintou-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 512 512" ><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-2314"></use></svg><svg class="claseintou-svg-content" viewBox="0 0 512 512" id="svg-2314"><path d="M70.46,265.48H441.54a5.1,5.1,0,0,0,5.1-5.1V31.28a5.1,5.1,0,0,0-5.1-5.1H70.46a5.1,5.1,0,0,0-5.1,5.1v229.1A5.1,5.1,0,0,0,70.46,265.48Zm119.24-10.2a66.34,66.34,0,0,1,132.6,0ZM75.56,36.38H436.44v218.9H332.52A76.72,76.72,0,0,0,279,184.71a43.31,43.31,0,1,0-46.06,0,76.72,76.72,0,0,0-53.49,70.57H75.56ZM256,181.17a33.11,33.11,0,1,1,33.11-33.11A33.15,33.15,0,0,1,256,181.17Z"></path><path d="M424.08,406.71a43.84,43.84,0,1,0-46.37,0,77.92,77.92,0,0,0-49.26,46.36,78,78,0,0,0-49.26-46.36,43.83,43.83,0,1,0-46.38,0,78,78,0,0,0-49.26,46.36,77.92,77.92,0,0,0-49.26-46.36,43.84,43.84,0,1,0-46.37,0,77.68,77.68,0,0,0-54.36,74,5.1,5.1,0,0,0,10.2,0,67.35,67.35,0,1,1,134.69,0,5.1,5.1,0,1,0,10.2,0,67.35,67.35,0,0,1,134.7,0,5.1,5.1,0,0,0,10.2,0,67.35,67.35,0,1,1,134.69,0,5.1,5.1,0,0,0,10.2,0A77.68,77.68,0,0,0,424.08,406.71ZM77.47,369.53a33.64,33.64,0,1,1,33.64,33.64A33.67,33.67,0,0,1,77.47,369.53Zm144.9,0A33.63,33.63,0,1,1,256,403.17,33.67,33.67,0,0,1,222.37,369.53Zm144.89,0a33.64,33.64,0,1,1,33.64,33.64A33.67,33.67,0,0,1,367.26,369.53Z"></path></svg></span>
              <h1 class="claseintou-align-center claseintou-text claseintou-text-1">Asignatura</h1>
              <p class="claseintou-text claseintou-text-2">Codigo:;<br />Profesor:<br />Horario: Dia - hora<br />Duracion:&nbsp;<br />Lugar:
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="claseintou-clearfix claseintou-section-2" id="sec-85d2">
        <div class="claseintou-align-left claseintou-clearfix claseintou-sheet claseintou-sheet-1">
          <h1 class="claseintou-text claseintou-text-palette-2-base claseintou-title claseintou-text-1">Ingresar</h1>
          <div class="claseintou-expanded-width claseintou-form claseintou-form-1">
            <form method="POST" class="claseintou-clearfix claseintou-form-horizontal claseintou-form-spacing-50 claseintou-inner-form" source="custom" name="form" >
              <div class="claseintou-form-group claseintou-form-group-1">
                <input type="text" placeholder="Indique código del curso" id="text-91f6" name="cursoCode" class="claseintou-border-1 claseintou-border-grey-30 claseintou-input claseintou-input-rectangle claseintou-white" required/>
              </div>
              <div class="claseintou-form-group claseintou-form-group-2">
                <input type="text" placeholder="Indique código del profesor" id="text-2099" name="profeCode" class="claseintou-border-1 claseintou-border-grey-30 claseintou-input claseintou-input-rectangle claseintou-white" required/>
              </div>
              <div class="claseintou-align-left claseintou-form-group claseintou-form-submit">
                <button>Enviar</button>
              </div>
            </form>
          </div>
          <div class="claseintou-expanded-width claseintou-form claseintou-form-1  claseintou-border-1 claseintou-border-grey-30 claseintou-input-rectangle">
            <form method="POST" class="claseintou-clearfix claseintou-form-vertical claseintou-form-spacing-50 claseintou-inner-form" source="custom" name="form" >
              <div class="claseintou-form-group claseintou-form-group-1">
                <label for="text-91f6" class="claseintou-label">Indique código del curso</label>
                <input type="file" accept="image/*" id="text-91f6" name="cursoCode" class="claseintou-input claseintou-white" required/>
              </div>
              <div class="claseintou-form-group claseintou-form-group-2">
                <label for="text-2099" class="claseintou-label">Indique código del profesor</label>
                <input type="file" accept="image/*" id="text-2099" name="profeCode" class="claseintou-input claseintou-white" required/>
              </div>
              <div class="claseintou-align-center claseintou-form-group claseintou-form-submit">
                <a href="#" class="claseintou-btn claseintou-btn-submit claseintou-button-style">Enviar</a>
                <input type="submit" value="submit" class="claseintou-form-control-hidden" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default EstudianteIngreso;