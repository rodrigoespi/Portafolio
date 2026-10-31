
const botonAgregar = document.getElementById("boton-agregar");
const textoCambiante = document.getElementById("texto-agregado");

botonAgregar.addEventListener("click", function(){
    if(textoCambiante.style.display === "none"){
        textoCambiante.style.display = "block";
        textoCambiante.textContent = "23 de enero";
        botonAgregar.textContent = "Ocultar fecha de cumpleaños";
    } else{
        textoCambiante.style.display = "none";
        botonAgregar.textContent = "Mostrar fecha de cumpleaños";
    }
});
const botonToggle = document.getElementById("boton-toggle");
const mensajeSecreto = document.getElementById("mensaje-secreto");

botonToggle.addEventListener("click", function(){
    if(mensajeSecreto.style.display === "none"){
        mensajeSecreto.style.display = "block";
        botonToggle.textContent = "Ocultar Mensaje";
    } else {
        mensajeSecreto.style.display = "none";
        botonToggle.textContent = "Mostrar Mensaje";
    }
});
const botonModo = document.getElementById("boton-modo");
botonModo.addEventListener("click", function(){
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
        botonModo.textContent = "Modo claro";
    } else {
        botonModo.textContent = "Modo oscuro";
    }
});