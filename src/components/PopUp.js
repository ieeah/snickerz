import assets from "../assets/exports/assets";
import PrimaryBtn from "./buttons/PrimaryBtn";
const NikeBrand = require("../assets/imgs/brands/nike-swoosh.png");

function PopUp({ shoes }) {
  return (
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
  );
}

export default PopUp;
