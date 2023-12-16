let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

//Funcion que aplica las animaciones de las habilidades
function bar() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let b2 = document.getElementsByClassName("progreso");
    b2[0].classList.add("javascript");
    b2[1].classList.add("htmlcss");
    b2[2].classList.add("photoshop");
    b2[3].classList.add("wordpress");
    b2[4].classList.add("drupal");
    b2[5].classList.add("comunicacion");
    b2[6].classList.add("trabajo");
    b2[7].classList.add("creatividad");
    b2[8].classList.add("dedicacion");
    b2[9].classList.add("proyect");
  }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
  bar();
};
