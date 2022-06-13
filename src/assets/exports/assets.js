// definizione degli asset da esportare e rendere utilizzabili nel progetto

const popUpShoesImg = require("../imgs/shoes/Nike Super Rep Go 2.jpg");

const assets = {
  header: {
    logo: require("../imgs/Z-logo.svg"),
  },
  hero: {
    img: popUpShoesImg,
  },
  popUp: {
    shoes: {
      brand: "Nike",
      model: "Super Rep Go 2",
      img: popUpShoesImg,
    }
  },
};

export default assets;
