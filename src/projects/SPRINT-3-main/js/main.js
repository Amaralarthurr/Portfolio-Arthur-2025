//PARTE DOS GRÁFICOS!

const CHART2 = document.querySelector("#donut2");
const CHART = document.querySelector("#donut");

let rosquinha2 = new Chart(CHART2, {
  type: "doughnut",
  data: {
    labels: ["IRPF1", "IRPF2", "IRPF3"],
    datasets: [
      {
        label: "Reais",
        backgroundColor: ["#1A3153", "#1A3153", "#1A3153"],
        data: [43, 55, 89],
        hoverOffset: 8,
        borderColor: ["#D7D4D4"],
      },
      {
        label: "Reais",
        backgroundColor: ["#D7D4D4"],
        borderColor: ["#D7D4D4"],
      },
      {
        label: "Reais",
        backgroundColor: ["#1C6BDC", "#1C6BDC", "#1C6BDC"],
        data: [43, 55, 89],
        hoverOffset: 8,
        borderColor: ["#D7D4D4"],
      },
    ],
  },
  options: {
    cutout: 90,
    maintainAspectRatio: false,
    responsive: true,

    plugins: {
      legend: {
        align: "end",
        labels: {
          usePointStyle: true,
          pointStyle: "rectRounded",
        },
      },
    },
  },
});

let rosquinha = new Chart(CHART, {
  type: "doughnut",
  data: {
    labels: ["IRPF1", "IRPF2", "IRPF3"],
    datasets: [
      {
        label: "Reais",
        backgroundColor: ["#21945b", "#21945b", "#21945b"],
        data: [43, 55, 89],
        hoverOffset: 8,
        borderColor: ["#D7D4D4"],
      },
      {
        label: "Reais",
        backgroundColor: ["#D7D4D4"],
        borderColor: ["#D7D4D4"],
      },
      {
        label: "Reais",
        backgroundColor: ["#39D98A", "#39D98A", "#39D98A"],
        data: [43, 55, 89],
        hoverOffset: 8,
        borderColor: ["#D7D4D4"],
      },
    ],
  },
  options: {
    cutout: 90,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        align: "end",
        labels: {
          usePointStyle: true,
          pointStyle: "rectRounded",
        },
      },
    },
  },
});

//PARTE DA MODAL!

function disableScroll() {
  // Get the current page scroll position
  scrollTop = window.scrollY || document.documentElement.scrollTop;
  (scrollLeft = window.scrollX || document.documentElement.scrollLeft),
    // if any scroll is attempted,
    // set this to the previous value
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
}

function enableScroll() {
  window.onscroll = function () {};
}

//Modal 1!
const openModalButtom = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModalButtom, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

openModalButtom.addEventListener("click", () => disableScroll());
closeModalButton.addEventListener("click", () => enableScroll());
fade.addEventListener("click", () => enableScroll());
//Fim Modal 1!

//Modal 2!
const openModalButtom2 = document.querySelector("#open-modal2");
const closeModalButton2 = document.querySelector("#close-modal2");
const modal2 = document.querySelector("#modal2");
const fade2 = document.querySelector("#fade2");

const toggleModal2 = () => {
  modal2.classList.toggle("hide");
  fade2.classList.toggle("hide");
};

[openModalButtom2, closeModalButton2, fade2].forEach((el) => {
  el.addEventListener("click", () => toggleModal2());
});

openModalButtom2.addEventListener("click", () => disableScroll());
closeModalButton2.addEventListener("click", () => enableScroll());
fade2.addEventListener("click", () => enableScroll());
//Fim Modal 2!

//Modal 3!
const openModalButtom3 = document.querySelector("#open-modal3");
const closeModalButton3 = document.querySelector("#close-modal3");
const modal3 = document.querySelector("#modal3");
const fade3 = document.querySelector("#fade3");

const toggleModal3 = () => {
  modal3.classList.toggle("hide");
  fade3.classList.toggle("hide");
};

[openModalButtom3, closeModalButton3, fade3].forEach((el) => {
  el.addEventListener("click", () => toggleModal3());
});

openModalButtom3.addEventListener("click", () => disableScroll());
closeModalButton3.addEventListener("click", () => enableScroll());
fade3.addEventListener("click", () => enableScroll());
//Fim Modal 3!

//Modal 4!
const openModalButtom4 = document.querySelector("#open-modal4");
const closeModalButton4 = document.querySelector("#close-modal4");
const modal4 = document.querySelector("#modal4");
const fade4 = document.querySelector("#fade4");

const toggleModal4 = () => {
  modal4.classList.toggle("hide");
  fade4.classList.toggle("hide");
};

[openModalButtom4, closeModalButton4, fade4].forEach((el) => {
  el.addEventListener("click", () => toggleModal4());
});

openModalButtom4.addEventListener("click", () => disableScroll());
closeModalButton4.addEventListener("click", () => enableScroll());
fade4.addEventListener("click", () => enableScroll());
//Fim Modal 4!

//Modal 5!
const openModalButtom5 = document.querySelector("#open-modal5");
const closeModalButton5 = document.querySelector("#close-modal5");
const modal5 = document.querySelector("#modal5");
const fade5 = document.querySelector("#fade5");

const toggleModal5 = () => {
  modal5.classList.toggle("hide");
  fade5.classList.toggle("hide");
};

[openModalButtom5, closeModalButton5, fade5].forEach((el) => {
  el.addEventListener("click", () => toggleModal5());
});

openModalButtom5.addEventListener("click", () => disableScroll());
closeModalButton5.addEventListener("click", () => enableScroll());
fade5.addEventListener("click", () => enableScroll());
//Fim Modal 5!
