import React, { useEffect, useState } from 'react';
import { rutas } from "../../path";
import '../../css/nicepage/Docente-clasesINI.css'
import '../../css/nicepage/nicepagedocclasesINI.css'

const iniciando = () => {
    return (
        <>  
    <section class="docclasesiniu-clearfix docclasesiniu-image docclasesiniu-section-1" id="sec-efed" data-image-width="3375" data-image-height="2250">
      <div class="docclasesiniu-clearfix docclasesiniu-sheet docclasesiniu-sheet-1">
        <div class="docclasesiniu-align-left docclasesiniu-container-style docclasesiniu-group docclasesiniu-shape-rectangle docclasesiniu-white docclasesiniu-group-1">
          <div class="docclasesiniu-container-layout docclasesiniu-container-layout-1"><span class="docclasesiniu-icon docclasesiniu-icon-circle docclasesiniu-palette-2-base docclasesiniu-spacing-16 docclasesiniu-icon-1"><svg class="docclasesiniu-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 64 64" ><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-8012"></use></svg><svg class="docclasesiniu-svg-content" viewBox="0 0 64 64" id="svg-8012"><path d="M40.54,52.14H11.25a5.51,5.51,0,0,1-5.5-5.5V17.36a5.51,5.51,0,0,1,5.5-5.5H40.54a5.51,5.51,0,0,1,5.5,5.5V46.64A5.51,5.51,0,0,1,40.54,52.14ZM11.25,14.86a2.5,2.5,0,0,0-2.5,2.5V46.64a2.5,2.5,0,0,0,2.5,2.5H40.54a2.5,2.5,0,0,0,2.5-2.5V17.36a2.5,2.5,0,0,0-2.5-2.5Z"></path><path d="M56.75,45.25a1.44,1.44,0,0,1-.67-.16L43.87,39A1.49,1.49,0,0,1,43,37.65V26.36A1.49,1.49,0,0,1,43.87,25l12.21-6.11a1.49,1.49,0,0,1,2.17,1.34v23.5A1.52,1.52,0,0,1,57.54,45,1.6,1.6,0,0,1,56.75,45.25ZM46,36.72l9.21,4.6V22.68L46,27.29Z"></path></svg></span>
            <h1 class="docclasesiniu-text docclasesiniu-text-1">Clases proximas</h1>
            <p class="docclasesiniu-text docclasesiniu-text-2">Las clases proximas a iniciar, es decir a las que le falten menos de 10 minutos, serán mostradas para que el profesor decida si iniciarla</p>
          </div>
        </div>
      </div>
    </section>
    <section class="docclasesiniu-clearfix docclasesiniu-section-2" id="sec-85d2">
      <div class="docclasesiniu-align-left docclasesiniu-clearfix docclasesiniu-sheet docclasesiniu-sheet-1">
        <div class="docclasesiniu-clearfix docclasesiniu-expanded-width docclasesiniu-layout-wrap docclasesiniu-layout-wrap-1">
          <div class="docclasesiniu-layout">
            <div class="docclasesiniu-layout-row">
              <div class="docclasesiniu-align-center docclasesiniu-container-style docclasesiniu-layout-cell docclasesiniu-size-30 docclasesiniu-layout-cell-1">
                <div class="docclasesiniu-container-layout docclasesiniu-container-layout-1"><span class="docclasesiniu-border-2 docclasesiniu-border-black docclasesiniu-icon docclasesiniu-icon-circle docclasesiniu-spacing-8 docclasesiniu-text-palette-2-base docclasesiniu-icon-1"><svg class="docclasesiniu-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 24 24" ><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-1023"></use></svg><svg class="docclasesiniu-svg-content" viewBox="0 0 24 24" id="svg-1023"><path d="M17.2501 2.00052C18.7689 2.00052 20.0001 3.23173 20.0001 4.75052V19.2488C20.0001 20.7675 18.7689 21.9988 17.2501 21.9988H6.75C5.23122 21.9988 4 20.7675 4 19.2488V4.75052C4 3.49158 4.84596 2.43023 6.00044 2.10391L5.99963 3.75071C5.69623 3.97877 5.5 4.34173 5.5 4.75052V19.2488C5.5 19.9391 6.05964 20.4988 6.75 20.4988H17.2501C17.9405 20.4988 18.5001 19.9391 18.5001 19.2488V4.75052C18.5001 4.06016 17.9405 3.50052 17.2501 3.50052L15 3.5V2L17.2501 2.00052ZM14.0001 2V10.1389C14.0001 10.886 13.2007 11.1665 12.7109 10.9033L12.6279 10.8512L10.5019 9.56575L8.42379 10.8172C7.92411 11.1779 7.09342 10.9564 7.00736 10.2594L7.0001 10.1389V2H14.0001ZM12.5001 3.5H8.5001V9.02327L10.0734 8.07421C10.3377 7.93602 10.6574 7.93341 10.8906 8.05036L12.5001 9.02396V3.5Z" fill="currentColor"></path></svg></span>
                  <h3 class="docclasesiniu-text docclasesiniu-text-default docclasesiniu-text-1">AsignaturaDelCurso</h3>
                  <h5 class="docclasesiniu-text docclasesiniu-text-default docclasesiniu-text-2">CodigoDelCurso</h5>
                  <h5 class="docclasesiniu-align-center docclasesiniu-text docclasesiniu-text-3">HORA</h5>
                  <p class="docclasesiniu-text docclasesiniu-text-4">Salon: SALON</p>
                  <a href="https://nicepage.com/k/arabic-style-html-templates" class="docclasesiniu-border-2 docclasesiniu-border-palette-2-base docclasesiniu-btn docclasesiniu-btn-round docclasesiniu-button-style docclasesiniu-hover-palette-2-base docclasesiniu-none docclasesiniu-radius-6 docclasesiniu-text-body-color docclasesiniu-text-hover-white docclasesiniu-btn-1">Iniciar</a>
                </div>
              </div>
              <div class="docclasesiniu-container-style docclasesiniu-layout-cell docclasesiniu-size-30 docclasesiniu-layout-cell-2">
                <div class="docclasesiniu-container-layout docclasesiniu-container-layout-2"><span class="docclasesiniu-border-2 docclasesiniu-border-black docclasesiniu-icon docclasesiniu-icon-circle docclasesiniu-spacing-8 docclasesiniu-text-palette-2-base docclasesiniu-icon-2"><svg class="docclasesiniu-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 24 24" ><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-1322"></use></svg><svg class="docclasesiniu-svg-content" viewBox="0 0 24 24" id="svg-1322"><path d="M17.2501 2.00052C18.7689 2.00052 20.0001 3.23173 20.0001 4.75052V19.2488C20.0001 20.7675 18.7689 21.9988 17.2501 21.9988H6.75C5.23122 21.9988 4 20.7675 4 19.2488V4.75052C4 3.49158 4.84596 2.43023 6.00044 2.10391L5.99963 3.75071C5.69623 3.97877 5.5 4.34173 5.5 4.75052V19.2488C5.5 19.9391 6.05964 20.4988 6.75 20.4988H17.2501C17.9405 20.4988 18.5001 19.9391 18.5001 19.2488V4.75052C18.5001 4.06016 17.9405 3.50052 17.2501 3.50052L15 3.5V2L17.2501 2.00052ZM14.0001 2V10.1389C14.0001 10.886 13.2007 11.1665 12.7109 10.9033L12.6279 10.8512L10.5019 9.56575L8.42379 10.8172C7.92411 11.1779 7.09342 10.9564 7.00736 10.2594L7.0001 10.1389V2H14.0001ZM12.5001 3.5H8.5001V9.02327L10.0734 8.07421C10.3377 7.93602 10.6574 7.93341 10.8906 8.05036L12.5001 9.02396V3.5Z" fill="currentColor"></path></svg></span>
                  <h3 class="docclasesiniu-align-center docclasesiniu-text docclasesiniu-text-default docclasesiniu-text-5">AsignaturaDelCurso</h3>
                  <h5 class="docclasesiniu-align-center docclasesiniu-text docclasesiniu-text-default docclasesiniu-text-6">CodigoDelCurso</h5>
                  <h5 class="docclasesiniu-align-center docclasesiniu-text docclasesiniu-text-7">HORA</h5>
                  <p class="docclasesiniu-align-center docclasesiniu-text docclasesiniu-text-8">Salon: SALON</p>
                  <a href="https://nicepage.com/k/arabic-style-html-templates" class="docclasesiniu-border-2 docclasesiniu-border-palette-2-base docclasesiniu-btn docclasesiniu-btn-round docclasesiniu-button-style docclasesiniu-hover-palette-2-base docclasesiniu-none docclasesiniu-radius-6 docclasesiniu-text-body-color docclasesiniu-text-hover-white docclasesiniu-btn-2">Iniciar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    );
}

export default iniciando;