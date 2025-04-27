/*botom-abrir{
    display: block;
    padding: 0;
  }
  .col2{
    display: none;
  }*/

    const col2 = document.querySelector("#nav");
    const menu = document.querySelector("#menu");
    const header = document.querySelector("#header");
    menu.addEventListener("click", () => {
      col2.classList.toggle("visible");
      header.classList.toggle("visible");
    })
   
  