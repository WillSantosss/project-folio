

export default function preLoad() {
  window.addEventListener("load", function () {
    // Atrasar a remoção do preloader por 2 segundos
    setTimeout(function () {
      let preloader = document.querySelector(".preloader");
      let conteudo = document.getElementById("mainHome");

      preloader.style.display = "none";
      conteudo.style.display = "block"; // Mostrar o conteúdo da página
    }, 1000);
  });
}
