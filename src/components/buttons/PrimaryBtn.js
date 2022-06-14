function PrimaryBtn({ icon, text, personalized, img }) {
  return (
    <button className="primary primary-btn">
      {text && <p>{text}</p>}
      {icon && <i className={icon}></i>}
      {personalized && (<img className="personalized-icon" src={img} alt="" />)}
    </button>
  );
}

export default PrimaryBtn;
