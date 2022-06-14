import PopUp from "./PopUp";

// props: scarpa (oggetto da cui estrapolare, brand, src immagine, modello"name", showPage), colore del riquadro extra (se non presente, il riquadro non viene renderizzato e viene renderizzata la sola immagine)
export default function HeroBanner({ shoes }) {
  return (
    <div className="hero">
      <div className="background"></div>
      <div className="inner-hero inline-center col-9">
        <PopUp shoes={shoes} />
        <img className="evidence" src={shoes.img} alt="" />
      </div>
    </div>
  );
}
