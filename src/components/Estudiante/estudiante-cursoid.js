import React, { useEffect, useState } from 'react';
import '../../css/nicepage/Docente-claseINFO.css'
import '../../css/nicepage/nicepagedocclaseinfo.css'

const estudiantecurso = () => {
  return (
            <>
            <section class="estclaseinfo-clearfix estclaseinfo-image estclaseinfo-section-1" id="sec-efed" data-image-width="3375" data-image-height="2250">
      <div class="estclaseinfo-clearfix estclaseinfo-sheet estclaseinfo-sheet-1">
        <div class="estclaseinfo-align-left estclaseinfo-container-style estclaseinfo-group estclaseinfo-shape-rectangle estclaseinfo-white estclaseinfo-group-1">
          <div class="estclaseinfo-container-layout estclaseinfo-container-layout-1"><span class="estclaseinfo-icon estclaseinfo-icon-circle estclaseinfo-palette-2-base estclaseinfo-spacing-16 estclaseinfo-icon-1"><svg class="estclaseinfo-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 512 512" ><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-8fee"></use></svg><svg class="estclaseinfo-svg-content" viewBox="0 0 512 512" id="svg-8fee"><path d="M70.46,265.48H441.54a5.1,5.1,0,0,0,5.1-5.1V31.28a5.1,5.1,0,0,0-5.1-5.1H70.46a5.1,5.1,0,0,0-5.1,5.1v229.1A5.1,5.1,0,0,0,70.46,265.48Zm119.24-10.2a66.34,66.34,0,0,1,132.6,0ZM75.56,36.38H436.44v218.9H332.52A76.72,76.72,0,0,0,279,184.71a43.31,43.31,0,1,0-46.06,0,76.72,76.72,0,0,0-53.49,70.57H75.56ZM256,181.17a33.11,33.11,0,1,1,33.11-33.11A33.15,33.15,0,0,1,256,181.17Z"></path><path d="M424.08,406.71a43.84,43.84,0,1,0-46.37,0,77.92,77.92,0,0,0-49.26,46.36,78,78,0,0,0-49.26-46.36,43.83,43.83,0,1,0-46.38,0,78,78,0,0,0-49.26,46.36,77.92,77.92,0,0,0-49.26-46.36,43.84,43.84,0,1,0-46.37,0,77.68,77.68,0,0,0-54.36,74,5.1,5.1,0,0,0,10.2,0,67.35,67.35,0,1,1,134.69,0,5.1,5.1,0,1,0,10.2,0,67.35,67.35,0,0,1,134.7,0,5.1,5.1,0,0,0,10.2,0,67.35,67.35,0,1,1,134.69,0,5.1,5.1,0,0,0,10.2,0A77.68,77.68,0,0,0,424.08,406.71ZM77.47,369.53a33.64,33.64,0,1,1,33.64,33.64A33.67,33.67,0,0,1,77.47,369.53Zm144.9,0A33.63,33.63,0,1,1,256,403.17,33.67,33.67,0,0,1,222.37,369.53Zm144.89,0a33.64,33.64,0,1,1,33.64,33.64A33.67,33.67,0,0,1,367.26,369.53Z"></path></svg></span>
            <h1 class="estclaseinfo-align-center estclaseinfo-text estclaseinfo-text-1">AsignaturaNombre</h1>
            <p class="estclaseinfo-text estclaseinfo-text-2">Codigo:&nbsp;<br/>Profesor:<br/>Horario: Dia - hora<br/>Duracion:&nbsp;<br/>Lugar:
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="estclaseinfo-clearfix estclaseinfo-section-2" id="sec-85d2">
      <div class="estclaseinfo-align-left estclaseinfo-clearfix estclaseinfo-sheet estclaseinfo-sheet-1">
        <h1 class="estclaseinfo-text estclaseinfo-text-palette-2-base estclaseinfo-title estclaseinfo-text-1">Sesiones</h1>
        <div class="estclaseinfo-expanded-width estclaseinfo-list estclaseinfo-list-1">
          <div class="estclaseinfo-repeater estclaseinfo-repeater-1">
            <div class="estclaseinfo-container-style estclaseinfo-list-item estclaseinfo-repeater-item">
              <div class="estclaseinfo-container-layout estclaseinfo-similar-container estclaseinfo-container-layout-1"><span class="estclaseinfo-icon estclaseinfo-icon-circle estclaseinfo-text-palette-1-base estclaseinfo-icon-1"><svg class="estclaseinfo-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 512 512" ><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-bb49"></use></svg><svg class="estclaseinfo-svg-content" viewBox="0 0 512 512" id="svg-bb49" ><g id="_x31_7_x2C_team_x2C_group_x2C_meeting_x2C_business"><g><path d="M255.32,193.293c23.312,0,42.278-18.977,42.278-42.303c0-23.313-18.966-42.277-42.278-42.277    c-23.319,0-42.291,18.965-42.291,42.277C213.029,174.316,232.001,193.293,255.32,193.293z"></path><path d="M205.324,90.883c18.725,0,33.958-15.24,33.958-33.971c0-18.719-15.233-33.947-33.958-33.947    c-18.718,0-33.946,15.229-33.946,33.947C171.378,75.643,186.606,90.883,205.324,90.883z"></path><path d="M369.98,183.439c23.319,0,42.291-18.967,42.291-42.277c0-23.326-18.972-42.305-42.291-42.305    c-23.313,0-42.278,18.979-42.278,42.305C327.702,164.473,346.668,183.439,369.98,183.439z"></path><path d="M142.006,183.439c23.313,0,42.279-18.967,42.279-42.277c0-23.326-18.966-42.305-42.279-42.305    c-23.312,0-42.278,18.979-42.278,42.305C99.729,164.473,118.694,183.439,142.006,183.439z"></path><path d="M305.315,90.883c18.718,0,33.945-15.24,33.945-33.971c0-18.719-15.228-33.947-33.945-33.947    c-18.725,0-33.958,15.229-33.958,33.947C271.357,75.643,286.591,90.883,305.315,90.883z"></path><path d="M300.546,368.699c10.652-0.938,16.937-6.607,20.231-18.219c0-0.012-0.003-0.021-0.003-0.033V262.59    c-0.015-0.055-0.04-0.104-0.053-0.158c-6.724-30.115-38.913-44.127-65.978-44.4c-20.381-0.176-45.505,7.486-58.404,28.512    c-0.14,1.055-0.694,1.992-1.505,2.625c-2.084,3.879-3.773,8.174-4.97,12.92v87.906c0.105,0.215,0.198,0.439,0.265,0.68    c3.245,11.672,9.439,17.426,19.951,18.471v-52.85h8v157.902v8v2.18h33.239v-107.51h8v107.51h33.226V315.945h8V368.699z"></path><path d="M369.542,207.625c-21.528,1.764-44.083,14.414-45.944,38.697c-0.015,0.191-0.059,0.371-0.099,0.553    c2.059,3.957,3.63,8.154,4.716,12.549c0.347,0.594,0.56,1.273,0.56,2.01v89.014c0,0.236-0.03,0.465-0.069,0.689    c0.011,0.389-0.016,0.783-0.125,1.178c-4.261,15.389-13.445,23.369-28.034,24.404v97.805h65.435v-107.51h8v107.51h33.214V306.439    h8v52.854c10.534-1.035,16.735-6.787,19.976-18.469c0.066-0.242,0.16-0.467,0.266-0.684v-87.955    C426.905,218.383,396.262,205.436,369.542,207.625z"></path><path d="M182.422,352.816c-0.049-0.178-0.068-0.355-0.092-0.535c-0.287-0.551-0.465-1.168-0.465-1.834v-89.014    c0-0.008,0.002-0.014,0.002-0.021c0-0.002,0.001-0.004,0.001-0.006c0.003-0.514,0.107-1.002,0.287-1.451    c1.395-5.461,3.434-10.572,6.061-15.279c-2.735-23.207-24.74-35.328-45.776-37.051c-26.716-2.191-57.381,10.771-65.888,44.605    v87.91c0.105,0.215,0.199,0.439,0.266,0.68c3.246,11.674,9.444,17.428,19.963,18.471v-52.852h8v167.758h33.226V367.014h8v107.184    h64.075v-97.035C195.726,376.018,186.66,368.055,182.422,352.816z"></path>
</g>
</g></svg></span>
                <h3 class="estclaseinfo-align-center estclaseinfo-text estclaseinfo-text-2">Fecha_Sesion</h3>
                <h3 class="estclaseinfo-text estclaseinfo-text-3">No asististe</h3>
              </div>
            </div>
            <div class="estclaseinfo-container-style estclaseinfo-list-item estclaseinfo-repeater-item">
              <div class="estclaseinfo-container-layout estclaseinfo-similar-container estclaseinfo-container-layout-2"><span class="estclaseinfo-icon estclaseinfo-icon-circle estclaseinfo-text-palette-1-base estclaseinfo-icon-2"><svg class="estclaseinfo-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 512 512" ><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-6995"></use></svg><svg class="estclaseinfo-svg-content" viewBox="0 0 512 512" id="svg-6995" ><g id="_x31_7_x2C_team_x2C_group_x2C_meeting_x2C_business"><g><path d="M255.32,193.293c23.312,0,42.278-18.977,42.278-42.303c0-23.313-18.966-42.277-42.278-42.277    c-23.319,0-42.291,18.965-42.291,42.277C213.029,174.316,232.001,193.293,255.32,193.293z"></path><path d="M205.324,90.883c18.725,0,33.958-15.24,33.958-33.971c0-18.719-15.233-33.947-33.958-33.947    c-18.718,0-33.946,15.229-33.946,33.947C171.378,75.643,186.606,90.883,205.324,90.883z"></path><path d="M369.98,183.439c23.319,0,42.291-18.967,42.291-42.277c0-23.326-18.972-42.305-42.291-42.305    c-23.313,0-42.278,18.979-42.278,42.305C327.702,164.473,346.668,183.439,369.98,183.439z"></path><path d="M142.006,183.439c23.313,0,42.279-18.967,42.279-42.277c0-23.326-18.966-42.305-42.279-42.305    c-23.312,0-42.278,18.979-42.278,42.305C99.729,164.473,118.694,183.439,142.006,183.439z"></path><path d="M305.315,90.883c18.718,0,33.945-15.24,33.945-33.971c0-18.719-15.228-33.947-33.945-33.947    c-18.725,0-33.958,15.229-33.958,33.947C271.357,75.643,286.591,90.883,305.315,90.883z"></path><path d="M300.546,368.699c10.652-0.938,16.937-6.607,20.231-18.219c0-0.012-0.003-0.021-0.003-0.033V262.59    c-0.015-0.055-0.04-0.104-0.053-0.158c-6.724-30.115-38.913-44.127-65.978-44.4c-20.381-0.176-45.505,7.486-58.404,28.512    c-0.14,1.055-0.694,1.992-1.505,2.625c-2.084,3.879-3.773,8.174-4.97,12.92v87.906c0.105,0.215,0.198,0.439,0.265,0.68    c3.245,11.672,9.439,17.426,19.951,18.471v-52.85h8v157.902v8v2.18h33.239v-107.51h8v107.51h33.226V315.945h8V368.699z"></path><path d="M369.542,207.625c-21.528,1.764-44.083,14.414-45.944,38.697c-0.015,0.191-0.059,0.371-0.099,0.553    c2.059,3.957,3.63,8.154,4.716,12.549c0.347,0.594,0.56,1.273,0.56,2.01v89.014c0,0.236-0.03,0.465-0.069,0.689    c0.011,0.389-0.016,0.783-0.125,1.178c-4.261,15.389-13.445,23.369-28.034,24.404v97.805h65.435v-107.51h8v107.51h33.214V306.439    h8v52.854c10.534-1.035,16.735-6.787,19.976-18.469c0.066-0.242,0.16-0.467,0.266-0.684v-87.955    C426.905,218.383,396.262,205.436,369.542,207.625z"></path><path d="M182.422,352.816c-0.049-0.178-0.068-0.355-0.092-0.535c-0.287-0.551-0.465-1.168-0.465-1.834v-89.014    c0-0.008,0.002-0.014,0.002-0.021c0-0.002,0.001-0.004,0.001-0.006c0.003-0.514,0.107-1.002,0.287-1.451    c1.395-5.461,3.434-10.572,6.061-15.279c-2.735-23.207-24.74-35.328-45.776-37.051c-26.716-2.191-57.381,10.771-65.888,44.605    v87.91c0.105,0.215,0.199,0.439,0.266,0.68c3.246,11.674,9.444,17.428,19.963,18.471v-52.852h8v167.758h33.226V367.014h8v107.184    h64.075v-97.035C195.726,376.018,186.66,368.055,182.422,352.816z"></path>
</g>
</g></svg></span>
                <h3 class="estclaseinfo-align-center estclaseinfo-text estclaseinfo-text-4">Fecha_Sesion</h3>
                <h3 class="estclaseinfo-text estclaseinfo-text-5">No asististe</h3>
              </div>
            </div>
            <div class="estclaseinfo-container-style estclaseinfo-list-item estclaseinfo-repeater-item">
              <div class="estclaseinfo-container-layout estclaseinfo-similar-container estclaseinfo-container-layout-3"><span class="estclaseinfo-icon estclaseinfo-icon-circle estclaseinfo-text-palette-1-base estclaseinfo-icon-3"><svg class="estclaseinfo-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 512 512" ><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#svg-e5c7"></use></svg><svg class="estclaseinfo-svg-content" viewBox="0 0 512 512" id="svg-e5c7" ><g id="_x31_7_x2C_team_x2C_group_x2C_meeting_x2C_business"><g><path d="M255.32,193.293c23.312,0,42.278-18.977,42.278-42.303c0-23.313-18.966-42.277-42.278-42.277    c-23.319,0-42.291,18.965-42.291,42.277C213.029,174.316,232.001,193.293,255.32,193.293z"></path><path d="M205.324,90.883c18.725,0,33.958-15.24,33.958-33.971c0-18.719-15.233-33.947-33.958-33.947    c-18.718,0-33.946,15.229-33.946,33.947C171.378,75.643,186.606,90.883,205.324,90.883z"></path><path d="M369.98,183.439c23.319,0,42.291-18.967,42.291-42.277c0-23.326-18.972-42.305-42.291-42.305    c-23.313,0-42.278,18.979-42.278,42.305C327.702,164.473,346.668,183.439,369.98,183.439z"></path><path d="M142.006,183.439c23.313,0,42.279-18.967,42.279-42.277c0-23.326-18.966-42.305-42.279-42.305    c-23.312,0-42.278,18.979-42.278,42.305C99.729,164.473,118.694,183.439,142.006,183.439z"></path><path d="M305.315,90.883c18.718,0,33.945-15.24,33.945-33.971c0-18.719-15.228-33.947-33.945-33.947    c-18.725,0-33.958,15.229-33.958,33.947C271.357,75.643,286.591,90.883,305.315,90.883z"></path><path d="M300.546,368.699c10.652-0.938,16.937-6.607,20.231-18.219c0-0.012-0.003-0.021-0.003-0.033V262.59    c-0.015-0.055-0.04-0.104-0.053-0.158c-6.724-30.115-38.913-44.127-65.978-44.4c-20.381-0.176-45.505,7.486-58.404,28.512    c-0.14,1.055-0.694,1.992-1.505,2.625c-2.084,3.879-3.773,8.174-4.97,12.92v87.906c0.105,0.215,0.198,0.439,0.265,0.68    c3.245,11.672,9.439,17.426,19.951,18.471v-52.85h8v157.902v8v2.18h33.239v-107.51h8v107.51h33.226V315.945h8V368.699z"></path><path d="M369.542,207.625c-21.528,1.764-44.083,14.414-45.944,38.697c-0.015,0.191-0.059,0.371-0.099,0.553    c2.059,3.957,3.63,8.154,4.716,12.549c0.347,0.594,0.56,1.273,0.56,2.01v89.014c0,0.236-0.03,0.465-0.069,0.689    c0.011,0.389-0.016,0.783-0.125,1.178c-4.261,15.389-13.445,23.369-28.034,24.404v97.805h65.435v-107.51h8v107.51h33.214V306.439    h8v52.854c10.534-1.035,16.735-6.787,19.976-18.469c0.066-0.242,0.16-0.467,0.266-0.684v-87.955    C426.905,218.383,396.262,205.436,369.542,207.625z"></path><path d="M182.422,352.816c-0.049-0.178-0.068-0.355-0.092-0.535c-0.287-0.551-0.465-1.168-0.465-1.834v-89.014    c0-0.008,0.002-0.014,0.002-0.021c0-0.002,0.001-0.004,0.001-0.006c0.003-0.514,0.107-1.002,0.287-1.451    c1.395-5.461,3.434-10.572,6.061-15.279c-2.735-23.207-24.74-35.328-45.776-37.051c-26.716-2.191-57.381,10.771-65.888,44.605    v87.91c0.105,0.215,0.199,0.439,0.266,0.68c3.246,11.674,9.444,17.428,19.963,18.471v-52.852h8v167.758h33.226V367.014h8v107.184    h64.075v-97.035C195.726,376.018,186.66,368.055,182.422,352.816z"></path>
</g>
</g></svg></span>
                <h3 class="estclaseinfo-align-center estclaseinfo-text estclaseinfo-text-6">Fecha_Sesion</h3>
                <h3 class="estclaseinfo-text estclaseinfo-text-7">No asististe</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
            </>
            );
}

            export default estudiantecurso;