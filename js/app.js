import { colapsar } from "./functions.js";

/* Referencia de contenedores */
const $contenedor_educacion = document.querySelector("#containerEducationItems");
const $contenedor_trabajo = document.querySelector("#containerWorkItems");
const $contenedor_habilidades = document.querySelector("#containerAbilityItems");
const $contenedor_proyectos = document.querySelector("#containerProyects");

/* Referencia de botones */
const $boton_colapsar_educacion = document.querySelector("#btnCollapseEducation");
const $boton_colapsar_trabajo = document.querySelector("#btnCollapseWork");
const $boton_colapsar_habilidades = document.querySelector("#btnCollapseAbilities");
const $boton_colapsar_proyectos = document.querySelector("#btnCollapseProyects");

colapsar($boton_colapsar_educacion, $contenedor_educacion);
colapsar($boton_colapsar_trabajo, $contenedor_trabajo);
colapsar($boton_colapsar_habilidades, $contenedor_habilidades);
colapsar($boton_colapsar_proyectos, $contenedor_proyectos);