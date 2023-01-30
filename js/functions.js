/*
    Función que cambia la imagen SVG dependiendo si la categoría
    está expandida o no.
*/
const change_svg_form = (refBoton, refContenedorItems) => {
    refBoton.addEventListener("click", () => {
        if (refContenedorItems.classList.contains("show")){
            change_status_svg(refBoton);
        } else{
            change_status_svg(refBoton);
        }
    });
};

/*
    Función que cambia el estilo del elemento SVG de manera dinámica, en este caso verifica si el SVG
    contiene en total 4 elementos hijos (si es así es porque el elemento SVG es
    cuadro con el símbolo '+' en su interior), y lo elimina para que sea un '-'.
    Caso contrario agrega la línea que falta para que vuelva a ser un '+'.
*/
const change_status_svg = (elementSVG) => {
    if (elementSVG.childElementCount == 4){
        elementSVG.removeChild(elementSVG.childNodes[3]);
    } else{
        const line2 = createElementCustom("line", {"x1":"12", "y1":"9", "x2":"12", "y2":"15"});
        elementSVG.appendChild(line2);
    }
}

/*
    Creo un elemento SVG de manera dinámica. En este caso utilizo un SVG que es un
    cuadro con el símbolo '-' en su interior. Por eso se genera con sus respectivos
    atributos y elementos.
*/
const svg_colapsar = (id, id_contenedor) => {
    const svg = createElementCustom("svg",
        {"id":id, 
        "width":"44", 
        "height":"44", 
        "viewBox":"0 0 24 24", 
        "stroke-width":"1.5", 
        "stroke":"#000000",
        "fill":"none",
        "stroke-linecap":"round",
        "stroke-linejoin":"round",
        "data-bs-toggle":"collapse",
        "href": id_contenedor
    });
    svg.classList.add(...["icon", "icon-tabler", "icon-tabler-square-minus", "btn-contraer"]);
    // Creo sus dependencias de la misma manera y los uno al svg principal
    const path = createElementCustom("path", {"stroke":"none","d":"M0 0h24v24H0z", "fill":"none"});
    const rect = createElementCustom("rect", {"x":"4","y":"4","width":"16", "height":"16", "rx":"2"});
    const line = createElementCustom("line", {"x1":"9", "y1":"12","x2":"15","y2":"12"});
    svg.appendChild(path);
    svg.appendChild(rect);
    svg.appendChild(line);
    return svg;
}

/*
    Función original hecha por mí. Crea un elemento customizado para SVG.
    Recibe por parámetro el tipo de elemento ('svg', 'rect', 'line', etc), y
    los atributos en forma de objeto para ir agregándolos de manera ordenada.
*/

function createElementCustom(tipo, atributos){
    const newElementSVG = document.createElementNS('http://www.w3.org/2000/svg', tipo);
    if (typeof(atributos) == "object"){
        Object.keys(atributos).forEach((atributo) => {
            newElementSVG.setAttribute(atributo, atributos[atributo]);
        })
    }
    return newElementSVG;
}

export { change_svg_form, svg_colapsar };