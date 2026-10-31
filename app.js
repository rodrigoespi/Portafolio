const botonModo = document.getElementById("boton-modo");
botonModo.addEventListener("click", function(){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        botonModo.textContent = "Modo Claro";
    }else {
        botonModo.textContent = "Modo Oscuro";
    }
})