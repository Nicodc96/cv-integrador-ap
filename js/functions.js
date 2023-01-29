const colapsar = (refBoton, refContenedor) => {
    if (typeof refBoton != "null" && typeof refContenedor != "null"){
        refBoton.addEventListener("click", (e) => {
            if (refContenedor.classList.contains("visually-hidden")){
                refContenedor.classList.toggle("visually-hidden");
            } else{
                refContenedor.classList.toggle("visually-hidden");
            }
        });
    }
};

export { colapsar };