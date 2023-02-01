import { change_svg_form, svg_colapsar } from "./functions.js";

/* Referencia de contenedores */
const $contenedor_educacion = document.querySelector("#containerEducationItems");
const $contenedor_trabajo = document.querySelector("#containerWorkItems");
const $contenedor_habilidades = document.querySelector("#containerAbilityItems");
const $contenedor_proyectos = document.querySelector("#containerProyects");

/* Referencia de contenedores del boton de colapsar/expandir */
const $contenedor_btn_educacion = document.querySelector("#containerEducationButton");
const $contenedor_btn_trabajo = document.querySelector("#containerWorkButton");
const $contenedor_btn_habilidades = document.querySelector("#containerAbilitiesButton");
const $contenedor_btn_proyectos = document.querySelector("#containerProyectsButton");

// ----> Al contenedor del texto de cada sección le agrego el archivo SVG de manera dinámica
$contenedor_btn_educacion.appendChild(svg_colapsar("btnCollapseEducation", "#containerEducationItems"));
$contenedor_btn_trabajo.appendChild(svg_colapsar("btnCollapseWork", "#containerWorkItems"));
$contenedor_btn_habilidades.appendChild(svg_colapsar("btnCollapseAbilities", "#containerAbilityItems"));
$contenedor_btn_proyectos.appendChild(svg_colapsar("btnCollapseProyects", "#containerProyects"));

/* Referencia de botones */
const $boton_colapsar_educacion = document.querySelector("#btnCollapseEducation");
const $boton_colapsar_trabajo = document.querySelector("#btnCollapseWork");
const $boton_colapsar_habilidades = document.querySelector("#btnCollapseAbilities");
const $boton_colapsar_proyectos = document.querySelector("#btnCollapseProyects");

change_svg_form($boton_colapsar_educacion, $contenedor_educacion);
change_svg_form($boton_colapsar_trabajo, $contenedor_trabajo);
change_svg_form($boton_colapsar_habilidades, $contenedor_habilidades);
change_svg_form($boton_colapsar_proyectos, $contenedor_proyectos);