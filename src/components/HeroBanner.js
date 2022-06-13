// props: scarpa (oggetto da cui estrapolare, brand, src immagine, modello"name", showPage), colore del riquadro extra (se non presente, il riquadro non viene renderizzato e viene renderizzata la sola immagine)
export default function HeroBanner({ shoes }) {
  return (
    <div className="hero">
      <div className="background"></div>
      <div className="inner-hero">
        <div className="popup">
          <div className="shoes-info">
            <div className="brand">{shoes.brand}</div>
            <div className="model">{shoes.model}</div>
          </div>
          <div className="right">
            <div className="disclaimer"></div>
            <div className="action"></div>
          </div>
        </div>
        <img src={shoes.img} alt="" />
      </div>
    </div>
  );
}
