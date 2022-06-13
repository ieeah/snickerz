// props: scarpa (oggetto da cui estrapolare, brand, src immagine, modello"name", showPage), colore del riquadro extra (se non presente, il riquadro non viene renderizzato e viene renderizzata la sola immagine)

import PopUp from "./PopUp";

export default function HeroBanner({ shoes }) {

  return (
    <div className="hero">
      <div className="inner-hero inline-center col-9">
        <img src={shoes.img} alt="" />
      </div>
      <PopUp shoes={shoes}/>
      {/* TODO - perché dio porco non mi renderizza il popup??? */}
      {/* <div className="popup">
        <div className="shoes-info">
          <div className="brand">{shoes.brand}</div>
          <div className="model">{shoes.model}</div>
        </div>
        <div className="right">
          <div className="disclaimer"></div>
          <div className="action"></div>
        </div>
      </div> */}
    </div>
  );
}

