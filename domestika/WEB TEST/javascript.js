/* Variables: cambialas por los id y clases correspondiente*/

/* id del enlace que despliega el manú */
var lanzador = "#enlace-menu";

/* id del menú será desplegado */
var desplegable = "#menu";

/* clase (Sin el punto) que muestra el menú */
var despliegaClase= "menu-desplegado";

/* A partir de aqui, puedes dejar el código tal cual*/
function nav (){
    var lanz= document.querySelector (lanzador);
    lanz.addEventListener ("click", despliegaMenu, false);
}
function despliegaMenu (e) {
    e.preventDefault();
    var despl = document.querySelector (desplegable);
    despl.classList.toggle(desplegable);
}
/* Agregamos la clase js a la etiqueta html para saber que JS esta funcionando*/
document.querySelector("html").classList("js");
/* ejecutamos la funcion principal*/
nav ();