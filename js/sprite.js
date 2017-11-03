function cargarImagenes() {

  document.getElementById('imagenes').style.width = "500px";

  i = 1;
  for (i = 1; i <= 25; i++) {
    var id = "img" + i;
    var element = document.createElement("div");
    element.setAttribute("id", id);
    element.setAttribute("class", "capa1")
    element.style.width="100px";
    element.style.height="100px";
    element.style.float = "left";
    element.style.backgroundImage = "url('img/imagenes.jpg')";
    element.style.backgroundSize = "600px 600px";
    document.getElementById('imagenes').appendChild(element);
  }


 var indice = 0;
  for (y = 0; y <= 400; y = y + 100) {
    for (w = 6; w >= 2; w = w - 1){
      x = w * -100;
      if (w == 6) {
        x = 0;
      }
      indice = indice + 1;
      var miImg = "img" + indice;
    document.getElementById(miImg).style.backgroundPosition = x + "px" + " " + y + "px";
    }
  }
}
