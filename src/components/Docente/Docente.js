import React, { useEffect, useState } from 'react';
import '../../css/nicepage/Docente.css'
import '../../css/nicepage/nicepagedocente.css'
import { rutas } from '../../path';

const Docente = () => {
    return (
        <>
            
    <section class="docenteu-clearfix docenteu-image docenteu-section-1" id="carousel_2e1d" data-image-width="3375" data-image-height="2250">
      <div class="docenteu-clearfix docenteu-sheet docenteu-valign-middle docenteu-sheet-1">
        <div class="docenteu-align-left docenteu-container-style docenteu-group docenteu-shape-rectangle docenteu-white docenteu-group-1">
          <div class="docenteu-container-layout docenteu-container-layout-1">
            <div class="docenteu-palette-2-base docenteu-shape docenteu-shape-circle docenteu-shape-1"></div>
            <h1 class="docenteu-text docenteu-text-default docenteu-text-1"> Bienvenido</h1>
            <p class="docenteu-text docenteu-text-2">¿Cómo le fue en su día estimado profesor?</p>
          </div>
        </div>
      </div>
    </section>
    <section class="docenteu-align-center-lg docenteu-align-center-md docenteu-align-center-sm docenteu-align-center-xl docenteu-align-left-xs docenteu-clearfix docenteu-grey-10 docenteu-section-2" id="carousel_2469">
      <div class="docenteu-clearfix docenteu-sheet docenteu-sheet-1">
        <h1 class="docenteu-text docenteu-text-default docenteu-text-palette-2-base docenteu-text-1">Servicios disponibles</h1>
        <div class="docenteu-expanded-width docenteu-list docenteu-list-1">
          <div class="docenteu-repeater docenteu-repeater-1">
            <div class="docenteu-align-left docenteu-container-style docenteu-list-item docenteu-radius-26 docenteu-repeater-item docenteu-shape-round docenteu-white docenteu-list-item-1">
              <div class="docenteu-container-layout docenteu-similar-container docenteu-container-layout-1">
                <h5 class="docenteu-text docenteu-text-palette-2-base docenteu-text-2">Revisar cursos</h5>
                <p class="docenteu-text docenteu-text-grey-40 docenteu-text-3">Revise los cursos que tiene o tenía asignados.</p>
                <a href={rutas.DOC_CRS} data-page-id="825420159" class="docenteu-align-center docenteu-border-2 docenteu-border-palette-2-base docenteu-btn docenteu-btn-round docenteu-button-style docenteu-hover-palette-2-base docenteu-none docenteu-radius-6 docenteu-text-body-color docenteu-text-hover-white docenteu-btn-1">Ingresar<br/>
                </a>
              </div>
            </div>
            <div class="docenteu-align-left docenteu-container-style docenteu-list-item docenteu-radius-26 docenteu-repeater-item docenteu-shape-round docenteu-white docenteu-list-item-2">
              <div class="docenteu-container-layout docenteu-similar-container docenteu-container-layout-2">

                <h5 class="docenteu-text docenteu-text-palette-2-base docenteu-text-4">Iniciar clase</h5>
                <p class="docenteu-text docenteu-text-grey-40 docenteu-text-5">Revise las clases proximas a iniciar e inicie las correspondientes una vez llegada la hora.</p>
                <a href={rutas.DOC_INI} class="docenteu-align-center docenteu-border-2 docenteu-border-palette-2-base docenteu-btn docenteu-btn-round docenteu-button-style docenteu-hover-palette-2-base docenteu-none docenteu-radius-6 docenteu-text-body-color docenteu-text-hover-white docenteu-btn-2">Ingresar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="docenteu-align-center docenteu-clearfix docenteu-grey-10 docenteu-section-3" id="carousel_0ac4">
      <div class="docenteu-clearfix docenteu-sheet docenteu-sheet-1">
        <h1 class="docenteu-text docenteu-text-default docenteu-text-palette-2-base docenteu-text-1">Conoce nuestro equipo</h1>
        <div class="docenteu-expanded-width docenteu-list docenteu-list-1">
          <div class="docenteu-repeater docenteu-repeater-1">
            <div class="docenteu-align-center docenteu-container-style docenteu-list-item docenteu-repeater-item docenteu-shape-rectangle docenteu-white docenteu-list-item-1">
              <div class="docenteu-container-layout docenteu-similar-container docenteu-container-layout-1">
                <div class="docenteu-border-4 docenteu-border-palette-2-light-2 docenteu-expanded-width docenteu-image docenteu-image-circle docenteu-preserve-proportions docenteu-image-1" alt="" data-image-width="206" data-image-height="206">
                  <div class="docenteu-preserve-proportions-child" ></div>
                </div>
                <h4 class="docenteu-text docenteu-text-default docenteu-text-2">Mariana Oquendo</h4>
                <p class="docenteu-text docenteu-text-default docenteu-text-3"> Creative Leader</p>
              </div>
            </div>
            <div class="docenteu-align-center docenteu-container-style docenteu-list-item docenteu-repeater-item docenteu-shape-rectangle docenteu-white docenteu-list-item-2">
              <div class="docenteu-container-layout docenteu-similar-container docenteu-container-layout-2">
                <div class="docenteu-border-4 docenteu-border-palette-2-light-2 docenteu-expanded-width docenteu-image docenteu-image-circle docenteu-preserve-proportions docenteu-image-2" alt="" data-image-width="206" data-image-height="206">
                  <div class="docenteu-preserve-proportions-child" ></div>
                </div>
                <h4 class="docenteu-text docenteu-text-default docenteu-text-4">Enrique Niebles</h4>
                <p class="docenteu-text docenteu-text-default docenteu-text-5">Sales Manager</p>
              </div>
            </div>
            <div class="docenteu-align-center docenteu-container-style docenteu-list-item docenteu-repeater-item docenteu-shape-rectangle docenteu-white docenteu-list-item-3">
              <div class="docenteu-container-layout docenteu-similar-container docenteu-container-layout-3">
                <div class="docenteu-border-4 docenteu-border-palette-2-light-2 docenteu-expanded-width docenteu-image docenteu-image-circle docenteu-preserve-proportions docenteu-image-3" alt="" data-image-width="206" data-image-height="206">
                  <div class="docenteu-preserve-proportions-child" ></div>
                </div>
                <h4 class="docenteu-text docenteu-text-default docenteu-text-6">Juan<br/>Prada
                </h4>
                <p class="docenteu-text docenteu-text-default docenteu-text-7"> Web Developer</p>
              </div>
            </div>
            <div class="docenteu-align-center docenteu-container-style docenteu-list-item docenteu-repeater-item docenteu-shape-rectangle docenteu-white docenteu-list-item-4">
              <div class="docenteu-container-layout docenteu-similar-container docenteu-container-layout-4">
                <div class="docenteu-border-4 docenteu-border-palette-2-light-2 docenteu-expanded-width docenteu-image docenteu-image-circle docenteu-preserve-proportions docenteu-image-4" alt="" data-image-width="626" data-image-height="417">
                  <div class="docenteu-preserve-proportions-child" ></div>
                </div>
                <h4 class="docenteu-text docenteu-text-default docenteu-text-8">Enrique Miranda</h4>
                <p class="docenteu-text docenteu-text-default docenteu-text-9">Web Designer</p>
              </div>
            </div>
            <div class="docenteu-align-center docenteu-container-style docenteu-list-item docenteu-repeater-item docenteu-shape-rectangle docenteu-white docenteu-list-item-5">
              <div class="docenteu-container-layout docenteu-similar-container docenteu-container-layout-5">
                <div class="docenteu-border-4 docenteu-border-palette-2-light-2 docenteu-expanded-width docenteu-image docenteu-image-circle docenteu-preserve-proportions docenteu-image-5" alt="" data-image-width="626" data-image-height="417">
                  <div class="docenteu-preserve-proportions-child" ></div>
                </div>
                <h4 class="docenteu-text docenteu-text-default docenteu-text-10">Santiago Poveda</h4>
                <p class="docenteu-text docenteu-text-default docenteu-text-11">Web Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="docenteu-align-center docenteu-clearfix docenteu-expanded-width-xl docenteu-palette-5-dark-3 docenteu-section-4" id="carousel_d922">
      <div class="docenteu-clearfix docenteu-sheet docenteu-valign-middle docenteu-sheet-1">
        <div class="docenteu-clearfix docenteu-gutter-0 docenteu-layout-wrap docenteu-layout-wrap-1">
          <div class="docenteu-gutter-0 docenteu-layout">
            <div class="docenteu-layout-row">
              <div class="docenteu-align-left docenteu-container-style docenteu-layout-cell docenteu-shape-rectangle docenteu-size-27-lg docenteu-size-27-md docenteu-size-27-sm docenteu-size-27-xs docenteu-size-30-xl docenteu-layout-cell-1">
                <div class="docenteu-container-layout docenteu-container-layout-1">
                  <h2 class="docenteu-text docenteu-text-1">Envia tus comentarios al administrador.</h2>
                </div>
              </div>
              <div class="docenteu-align-left docenteu-container-style docenteu-layout-cell docenteu-palette-2-base docenteu-shape-rectangle docenteu-size-30-xl docenteu-size-33-lg docenteu-size-33-md docenteu-size-33-sm docenteu-size-33-xs docenteu-layout-cell-2">
                <div class="docenteu-container-layout docenteu-valign-middle-xl docenteu-container-layout-2">
                  <div class="docenteu-form docenteu-form-1">
                    <form action="#" method="POST" class="docenteu-clearfix docenteu-form-spacing-30 docenteu-form-vertical docenteu-inner-form" source="custom" name="form">
                      <div class="docenteu-form-group docenteu-form-name">
                        <label for="name-3b9a" class="docenteu-form-control-hidden docenteu-label" wfd-invisible="true">Name</label>
                        <input type="text" placeholder="Nombre" id="name-3b9a" name="name" class="docenteu-border-2 docenteu-border-no-left docenteu-border-no-right docenteu-border-no-top docenteu-border-white docenteu-input docenteu-input-rectangle docenteu-input-1" required=""/>
                      </div>
                      <div class="docenteu-form-email docenteu-form-group">
                        <label for="email-3b9a" class="docenteu-form-control-hidden docenteu-label" wfd-invisible="true">Email</label>
                        <input type="email" placeholder="Correo" id="email-3b9a" name="email" class="docenteu-border-2 docenteu-border-no-left docenteu-border-no-right docenteu-border-no-top docenteu-border-white docenteu-input docenteu-input-rectangle docenteu-input-2" required=""/>
                      </div>
                      <div class="docenteu-form-group docenteu-form-group-3">
                        <label for="text-160a" class="docenteu-form-control-hidden docenteu-label"></label>
                        <input type="text" id="text-160a" name="text" class="docenteu-border-2 docenteu-border-no-left docenteu-border-no-right docenteu-border-no-top docenteu-border-white docenteu-input docenteu-input-rectangle docenteu-input-3" placeholder="Asunto"/>
                      </div>
                      <div class="docenteu-form-group docenteu-form-message">
                        <label for="message-3b9a" class="docenteu-form-control-hidden docenteu-label" wfd-invisible="true">Message</label>
                        <textarea placeholder="Mensaje..." rows="4" cols="50" id="message-3b9a" name="message" class="docenteu-border-2 docenteu-border-no-left docenteu-border-no-right docenteu-border-no-top docenteu-border-white docenteu-input docenteu-input-rectangle docenteu-input-4" required=""></textarea>
                      </div>
                      <div class="docenteu-align-left docenteu-form-group docenteu-form-submit">
                        <a href="#" class="docenteu-active-palette-2-light-3 docenteu-border-none docenteu-btn docenteu-btn-submit docenteu-button-style docenteu-hover-palette-2-light-3 docenteu-text-active-black docenteu-text-hover-black docenteu-text-palette-2-base docenteu-white docenteu-btn-1">ENVIAR</a>
                        <input type="submit" value="submit" class="docenteu-form-control-hidden" wfd-invisible="true"/>
                      </div>
                      <div class="docenteu-form-send-message docenteu-form-send-success" wfd-invisible="true"> Thank you! Your message has been sent. </div>
                      <div class="docenteu-form-send-error docenteu-form-send-message" wfd-invisible="true"> Unable to send your message. Please fix errors then try again. </div>
                      <input type="hidden" value="" name="recaptchaResponse" wfd-invisible="true"/>
                    </form>
                  </div>
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

export default Docente;