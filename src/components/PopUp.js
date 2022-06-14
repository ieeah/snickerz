import assets from "../assets/exports/assets";
import PrimaryBtn from "./buttons/PrimaryBtn";
import Link from "./buttons/Link";

const NikeBrand = require("../assets/imgs/brands/nike-swoosh.png");

function PopUp({ shoes }) {
  return (
    <div className="popup">
      <div className="shoes-info col-8">
        <div className="model">{shoes.model}</div>
        <img className="brand-logo" src={NikeBrand} alt="Nike brand" />
      </div>
      <div className="right col-4">
        <div className="disclaimer">{shoes.disclaimer}</div>
        <Link to="/" title="visita la pagina delle Nike super rep go 2">
          <PrimaryBtn personalized={true} img={assets.icons.chevronRight} />
        </Link>
      </div>
    </div>
  );
}

export default PopUp;
