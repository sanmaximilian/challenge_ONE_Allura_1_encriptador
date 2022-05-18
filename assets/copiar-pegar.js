function copyToClipBoard() {
/* Asigna a copyText el contenido de msg */
var copyText = document.getElementById("msg");

/* Selecciona el texto con compatibilidad para mobil (a testaear luego) */
copyText.select();
copyText.setSelectionRange(0, 99999); /* For mobile devices */

 /* Usando el clippboard del navegador copia el value de copyText */
navigator.clipboard.writeText(copyText.value);

/* Alerta para debug temprano */
// alert("El texto copiado es: " + copyText.value);
}