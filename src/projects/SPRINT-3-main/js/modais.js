//Função para parar o scroll!
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

//Função para habilitar o scroll!
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

//Modal 6!
const openModalButtom6 = document.querySelector("#open-modal6");
const closeModalButton6 = document.querySelector("#close-modal6");
const modal6 = document.querySelector("#modal6");
const fade6 = document.querySelector("#fade6");

const toggleModal6 = () => {
  modal6.classList.toggle("hide");
  fade6.classList.toggle("hide");
};

[openModalButtom6, closeModalButton6, fade6].forEach((el) => {
  el.addEventListener("click", () => toggleModal6());
});

openModalButtom6.addEventListener("click", () => disableScroll());
closeModalButton6.addEventListener("click", () => enableScroll());
fade6.addEventListener("click", () => enableScroll());
//Fim Modal 6!

//Modal 7!
const openModalButtom7 = document.querySelector("#open-modal7");
const closeModalButton7 = document.querySelector("#close-modal7");
const modal7 = document.querySelector("#modal7");
const fade7 = document.querySelector("#fade7");

const toggleModal7 = () => {
  modal7.classList.toggle("hide");
  fade7.classList.toggle("hide");
};

[openModalButtom7, closeModalButton7, fade7].forEach((el) => {
  el.addEventListener("click", () => toggleModal7());
});

openModalButtom7.addEventListener("click", () => disableScroll());
closeModalButton7.addEventListener("click", () => enableScroll());
fade7.addEventListener("click", () => enableScroll());
//Fim Modal 7!

//Modal 8!
const openModalButtom8 = document.querySelector("#open-modal8");
const closeModalButton8 = document.querySelector("#close-modal8");
const modal8 = document.querySelector("#modal8");
const fade8 = document.querySelector("#fade8");

const toggleModal8 = () => {
  modal8.classList.toggle("hide");
  fade8.classList.toggle("hide");
};

[openModalButtom8, closeModalButton8, fade8].forEach((el) => {
  el.addEventListener("click", () => toggleModal8());
});

openModalButtom8.addEventListener("click", () => disableScroll());
closeModalButton8.addEventListener("click", () => enableScroll());
fade8.addEventListener("click", () => enableScroll());
//Fim Modal 8!

//Modal 9!
const openModalButtom9 = document.querySelector("#open-modal9");
const closeModalButton9 = document.querySelector("#close-modal9");
const modal9 = document.querySelector("#modal9");
const fade9 = document.querySelector("#fade9");

const toggleModal9 = () => {
  modal9.classList.toggle("hide");
  fade9.classList.toggle("hide");
};

[openModalButtom9, closeModalButton9, fade9].forEach((el) => {
  el.addEventListener("click", () => toggleModal9());
});

openModalButtom9.addEventListener("click", () => disableScroll());
closeModalButton9.addEventListener("click", () => enableScroll());
fade9.addEventListener("click", () => enableScroll());
//Fim Modal 9!

//Modal 10!
const openModalButtom10 = document.querySelector("#open-modal10");
const closeModalButton10 = document.querySelector("#close-modal10");
const modal10 = document.querySelector("#modal10");
const fade10 = document.querySelector("#fade10");

const toggleModal10 = () => {
  modal10.classList.toggle("hide");
  fade10.classList.toggle("hide");
};

[openModalButtom10, closeModalButton10, fade10].forEach((el) => {
  el.addEventListener("click", () => toggleModal10());
});

openModalButtom10.addEventListener("click", () => disableScroll());
closeModalButton10.addEventListener("click", () => enableScroll());
fade10.addEventListener("click", () => enableScroll());
//Fim Modal 10!
