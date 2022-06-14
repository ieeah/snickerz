// props: scarpa (oggetto da cui estrapolare, brand, src immagine, modello"name", showPage), colore del riquadro extra (se non presente, il riquadro non viene renderizzato e viene renderizzata la sola immagine)
import assets from "../assets/exports/assets";
import PrimaryBtn from "./buttons/PrimaryBtn";
const NikeBrand = require("../assets/imgs/brands/nike-swoosh.png");
export default function HeroBanner({ shoes }) {
  return (
    <div className="hero">
      <div className="background"></div>
      <div className="inner-hero inline-center col-9">
        <div className="popup">
          <div className="shoes-info col-8">
            <div className="brand-logo">
              <img src={NikeBrand} alt="Nike" />
            </div>
            <div className="model">{shoes.model}</div>
          </div>
          <div className="right col-4">
            <div className="disclaimer">{shoes.disclaimer}</div>
            <PrimaryBtn personalized={true} img={assets.icons.chevronRight} />
          </div>
        </div>
        <img src={shoes.img} alt="" />
      </div>
    </div>
  );
}
