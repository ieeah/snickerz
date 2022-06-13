function PopUp({ shoes }) {
  <div className="popup">
    <div className="shoes-info">
      <div className="brand">{shoes.brand}</div>
      <div className="model">{shoes.model}</div>
    </div>
    <div className="right">
      <div className="disclaimer"></div>
      <div className="action"></div>
    </div>
  </div>;
}

export default PopUp;