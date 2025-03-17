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
        backgroundColor: ["#1a3153", "#1a3153", "#1a3153"],
        data: [43, 55, 89],
        hoverOffset: 8,
        // borderColor:['#0350c4']
      },
      {
        label: "Reais",
        backgroundColor: ["#0350c4"],
        //  borderColor:['#0350c4']
      },
      {
        label: "Reais",
        backgroundColor: ["#0350c4", "#0350c4", "#0350c4"],
        data: [43, 55, 89],
        hoverOffset: 8,
        // borderColor:['#0350c4']
      },
    ],
  },
  options: {
    cutout: 90,
    maintainAspectRatio: false,
    responsive: true,

    plugins: {
      legend: {
        position: "bottom",
        align: "center",
        labels: {
          color: "#dcdada",
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
        backgroundColor: ["#1a3153", "#1a3153", "#1a3153"],
        data: [43, 55, 89],
        hoverOffset: 8,
        // borderColor:"transparent"
      },
      {
        label: "Reais",
        backgroundColor: ["#0350c4"],
        //  borderColor:['#0350c4']
      },
      {
        label: "Reais",
        backgroundColor: ["#0350c4", "#0350c4", "#0350c4"],
        data: [43, 55, 89],
        hoverOffset: 8,
        // borderColor:"transparent"
      },
    ],
  },
  options: {
    cutout: 90,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        align: "center",
        position: "bottom",
        labels: {
          color: "#dcdada",
          usePointStyle: true,
          pointStyle: "rectRounded",
        },
      },
    },
  },
});

function atualizarLegenda() {
  if (window.innerWidth > 992) {
    rosquinha2.options.plugins.legend.position = "top";
    rosquinha2.update();

    rosquinha.options.plugins.legend.position = "top";
    rosquinha.update();
  } else {
    rosquinha2.options.plugins.legend.position = "bottom";
    rosquinha2.update();

    rosquinha.options.plugins.legend.position = "bottom";
    rosquinha.update();
  }
}

atualizarLegenda();
window.addEventListener("resize", atualizarLegenda);

const lightMode = document.getElementById("lightMode");

lightMode.addEventListener("click", mudarCorGrafico2);

function mudarCorGrafico2() {
  const outerCircleColor = "#1a3153"; // Cor do círculo externo
  const innerCircleColor = "#0350c4"; // Cor do círculo interno

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

// Botões para mudar o tipo de gráfico
const btnDonut = document.getElementById("rosca");
const btnBar = document.getElementById("barra");

btnDonut.addEventListener("click", () => mudarTipoGrafico("doughnut"));
btnBar.addEventListener("click", () => mudarTipoGrafico("bar"));

function mudarTipoGrafico(tipo) {
  // Configurações para gráfico de barras (com grids)
  if (tipo === "bar") {
    rosquinha2.config.options.scales = {
      x: {
        display: true,
        grid: {
          display: true, // Exibir grid no eixo X
        },
      },
      y: {
        display: true,
        grid: {
          display: true, // Exibir grid no eixo Y
        },
      },
    };
  }
  // Configurações para gráfico de donut (sem grids)
  else if (tipo === "doughnut") {
    rosquinha2.config.options.scales = {};
  }

  // Alterar o tipo do gráfico rosquinha2
  rosquinha2.config.type = tipo;
  rosquinha2.update();
}

const btnDonut2 = document.getElementById("rosca2");
const btnBar2 = document.getElementById("barra2");

btnDonut2.addEventListener("click", () => mudarTipoGrafico2("doughnut"));
btnBar2.addEventListener("click", () => mudarTipoGrafico2("bar"));

function mudarTipoGrafico2(tipo) {
  // Configurações para gráfico de barras (com grids)
  if (tipo === "bar") {
    rosquinha.config.options.scales = {
      x: {
        display: true,
        grid: {
          display: true, // Exibir grid no eixo X
        },
      },
      y: {
        display: true,
        grid: {
          display: true, // Exibir grid no eixo Y
        },
      },
    };
  }
  // Configurações para gráfico de donut (sem grids)
  else if (tipo === "doughnut") {
    rosquinha.config.options.scales = {};
  }

  // Alterar o tipo do gráfico rosquinha
  rosquinha.config.type = tipo;
  rosquinha.update();
}
