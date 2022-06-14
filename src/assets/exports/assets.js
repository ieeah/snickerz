// definizione degli asset da esportare e rendere utilizzabili nel progetto

const assets = {
  header: {
    logo: require("../imgs/Z-logo.svg"),
  },
  shoes: {
    evidence: {
      brand: "Nike",
      model: "Super Rep Go 2",
      img: require("../imgs/shoes/Nike Super Rep Go 2.jpg"),
      disclaimer: "Just Arrived",
    },
    other: [
      {
        brand: "Nike",
        model: "Airzoom Pegasus",
        img: require("../imgs/shoes/Nike Airzoom Pegasus/01.png"),
      },
      {
        brand: "Nike",
        model: "Alphafly",
        img: require("../imgs/shoes/Nike Alphafly/01.png"),
      },
      {
        brand: "Nike",
        model: "Ekiden",
        img: require("../imgs/shoes/Nike Ekiden/01.png"),
      },
      {
        brand: "Nike",
        model: "React",
        img: require("../imgs/shoes/Nike React/01.png"),
      },
      {
        brand: "Nike",
        model: "Zoom Fly 4",
        img: require("../imgs/shoes/Nike Zoom Fly 4/01.png"),
      },
      {
        brand: "Nike",
        model: "ZoomX",
        img: require("../imgs/shoes/Nike ZoomX/01.png"),
      }
    ],
  },
  icons: {
    carrello: require("../imgs/icons/bag-shopping-solid.svg"),
    search: require("../imgs/icons/magnifying-glass-solid.svg"),
    chevronRight: require("../imgs/icons/button-right.png"),
  }
};

export default assets;
