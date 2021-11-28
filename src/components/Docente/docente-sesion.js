import React, { useEffect, useState } from 'react';
import '../../css/nicepage/Docente-sesion.css'
import '../../css/nicepage/nicepagesesion.css'
const sesiondoc = () => {
    return (
        <>
        <section class="docsesionu-clearfix docsesionu-image docsesionu-section-1" id="sec-efed" data-image-width="3375" data-image-height="2250">
      <div class="docsesionu-clearfix docsesionu-sheet docsesionu-sheet-1">
        <div class="docsesionu-align-left docsesionu-container-style docsesionu-expanded-width docsesionu-group docsesionu-shape-rectangle docsesionu-white docsesionu-group-1">
          <div class="docsesionu-container-layout docsesionu-container-layout-1">
            <h1 class="docsesionu-align-center docsesionu-text docsesionu-text-1">ID_CURSO</h1>
            <h2 class="docsesionu-align-center docsesionu-text docsesionu-text-2">Fecha<br/>FECHA_SESION
            </h2>
          </div>
        </div>
      </div>
    </section>
    <section class="docsesionu-clearfix docsesionu-section-2" id="sec-2f3a">
      <div class="docsesionu-clearfix docsesionu-sheet docsesionu-sheet-1">
        <h1 class="docsesionu-text docsesionu-text-palette-2-base docsesionu-text-1">Asistencia</h1>
        <div class="docsesionu-expanded-width docsesionu-list docsesionu-list-1">
          <div class="docsesionu-repeater docsesionu-repeater-1">
            <div class="docsesionu-container-style docsesionu-list-item docsesionu-repeater-item">
              <div class="docsesionu-container-layout docsesionu-similar-container docsesionu-container-layout-1"><span class="docsesionu-icon docsesionu-icon-circle docsesionu-text-palette-1-base docsesionu-icon-1"><svg class="docsesionu-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 24 24" ><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-45ac"></use></svg><svg class="docsesionu-svg-content" viewBox="0 0 24 24" id="svg-45ac" ><g id="icons"><g id="user"><ellipse cx="12" cy="8" rx="5" ry="6"></ellipse><path d="M21.8,19.1c-0.9-1.8-2.6-3.3-4.8-4.2c-0.6-0.2-1.3-0.2-1.8,0.1c-1,0.6-2,0.9-3.2,0.9s-2.2-0.3-3.2-0.9    C8.3,14.8,7.6,14.7,7,15c-2.2,0.9-3.9,2.4-4.8,4.2C1.5,20.5,2.6,22,4.1,22h15.8C21.4,22,22.5,20.5,21.8,19.1z"></path>
</g>
</g></svg></span>
                <h3 class="docsesionu-text docsesionu-text-default docsesionu-text-2">Nombre_Estudiante</h3>
              </div>
            </div>
            <div class="docsesionu-container-style docsesionu-list-item docsesionu-repeater-item">
              <div class="docsesionu-container-layout docsesionu-similar-container docsesionu-container-layout-2"><span class="docsesionu-icon docsesionu-icon-circle docsesionu-text-palette-1-base docsesionu-icon-2"><svg class="docsesionu-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 24 24" ><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-5364"></use></svg><svg class="docsesionu-svg-content" viewBox="0 0 24 24" id="svg-5364" ><g id="icons"><g id="user"><ellipse cx="12" cy="8" rx="5" ry="6"></ellipse><path d="M21.8,19.1c-0.9-1.8-2.6-3.3-4.8-4.2c-0.6-0.2-1.3-0.2-1.8,0.1c-1,0.6-2,0.9-3.2,0.9s-2.2-0.3-3.2-0.9    C8.3,14.8,7.6,14.7,7,15c-2.2,0.9-3.9,2.4-4.8,4.2C1.5,20.5,2.6,22,4.1,22h15.8C21.4,22,22.5,20.5,21.8,19.1z"></path>
</g>
</g></svg></span>
                <h3 class="docsesionu-text docsesionu-text-default docsesionu-text-3">Nombre_Estudiante2</h3>
              </div>
            </div>
            <div class="docsesionu-container-style docsesionu-list-item docsesionu-repeater-item">
              <div class="docsesionu-container-layout docsesionu-similar-container docsesionu-container-layout-3"><span class="docsesionu-icon docsesionu-icon-circle docsesionu-text-palette-1-base docsesionu-icon-3"><svg class="docsesionu-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 24 24" ><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-fb2e"></use></svg><svg class="docsesionu-svg-content" viewBox="0 0 24 24" id="svg-fb2e" ><g id="icons"><g id="user"><ellipse cx="12" cy="8" rx="5" ry="6"></ellipse><path d="M21.8,19.1c-0.9-1.8-2.6-3.3-4.8-4.2c-0.6-0.2-1.3-0.2-1.8,0.1c-1,0.6-2,0.9-3.2,0.9s-2.2-0.3-3.2-0.9    C8.3,14.8,7.6,14.7,7,15c-2.2,0.9-3.9,2.4-4.8,4.2C1.5,20.5,2.6,22,4.1,22h15.8C21.4,22,22.5,20.5,21.8,19.1z"></path>
</g>
</g></svg></span>
                <h3 class="docsesionu-text docsesionu-text-default docsesionu-text-4">Nombre_Estudiante3</h3>
              </div>
            </div>
          </div>
        </div>
        <a href="https://nicepage.com/website-mockup" class="docsesionu-align-center docsesionu-border-2 docsesionu-border-hover-palette-1-base docsesionu-border-palette-1-base docsesionu-btn docsesionu-btn-round docsesionu-button-style docsesionu-hover-palette-1-base docsesionu-none docsesionu-radius-50 docsesionu-btn-1">Imprimir</a>
      </div>
    </section>
        </>
    );
}

export default sesiondoc;