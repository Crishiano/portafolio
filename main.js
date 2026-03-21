/*botom-abrir{
    display: block;
    padding: 0;
  }
  .col2{
    display: none;
  }*/

   
  const imagenes = [
  "imagenes/proyecto_clinica.png",
  "imagenes/proyecto_clinica2.png",
  "imagenes/proyecto_clinica3.png"
];

let indice = 0;

const img = document.getElementById("imagen");

document.getElementById("avanzar").addEventListener("click", () => {
  indice = (indice + 1) % imagenes.length;
  img.src = imagenes[indice];
});

document.getElementById("retroceder").addEventListener("click", () => {
  indice = (indice - 1 + imagenes.length) % imagenes.length;
  img.src = imagenes[indice];
});