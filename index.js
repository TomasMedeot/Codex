$(document).ready(function(){
  // Función para abrir el menú
  $("#menu-btn").click(function () {
    $("nav .navigation ul").addClass("active");
  });
  
  // Función para cerrar el menú
  $("#menu-close").click(function () {
    $("nav .navigation ul").removeClass("active");
  });
  
  // Inicialización del carrusel
  $('.slick-carousel').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 768, // Aplicar esta configuración en dispositivos con una anchura máxima de 767px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

document.getElementById("miFormulario").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Email registrado");

  var formData = new FormData(this);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://docs.google.com/forms/u/0/d/e/1FAIpQLScK7ERhvRTqDRTySU1lrpmOwKM3TN-M1y0uDJ-4TXrFuawoqg/formResponse");
  xhr.send(formData);

});