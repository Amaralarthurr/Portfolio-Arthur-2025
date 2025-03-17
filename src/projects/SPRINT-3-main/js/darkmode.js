let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disbleDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};

if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkmode() : disbleDarkmode();
});

const darkMode = document.getElementById("darkMode");
darkMode.addEventListener("click", mudarCorGrafico);
function mudarCorGrafico() {
  const outerCircleColor = "#049f51"; // Cor do círculo externo
  const innerCircleColor = "#39D98A"; // Cor do círculo interno

  // Atualizando a cor de todos os datasets do gráfico rosquinha2
  rosquinha2.data.datasets.forEach((dataset, index) => {
    if (index === 0) {
      // Primeiro dataset (círculo externo)
      dataset.backgroundColor = dataset.backgroundColor.map(
        () => outerCircleColor
      );
    } else {
      // Dataset interno (círculo interno)
      dataset.backgroundColor = dataset.backgroundColor.map(
        () => innerCircleColor
      );
    }
  });
  rosquinha2.update();

  // Atualizando a cor de todos os datasets do gráfico rosquinha
  rosquinha.data.datasets.forEach((dataset, index) => {
    if (index === 0) {
      // Primeiro dataset (círculo externo)
      dataset.backgroundColor = dataset.backgroundColor.map(
        () => outerCircleColor
      );
    } else {
      // Dataset interno (círculo interno)
      dataset.backgroundColor = dataset.backgroundColor.map(
        () => innerCircleColor
      );
    }
  });
  rosquinha.update();
}
