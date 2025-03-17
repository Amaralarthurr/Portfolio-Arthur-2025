let sanduiches = document.getElementsByClassName("navbar-toggler");

if (sanduiches.length > 0) {
  let isGray = false; // Variável para rastrear o estado

  sanduiches[0].addEventListener("click", () => {
    let headerBg = document.querySelector("#headerBg");
    let logo = document.querySelector("#logo");

    if (isGray) {
      headerBg.style.backgroundColor = "transparent";
      logo.style.display = "flex";
    }

    isGray = !isGray;
  });
}
