function PrimaryBtn({ icon, text, personalized, img }) {
  return (
    <div className="btn primary-btn default">
      {text && <p>{text}</p>}
      {icon && <i className={icon}></i>}
      {personalized && (<img className="personalized-icon" src={img} alt="" />)}
    </div>
  );
}

export default PrimaryBtn;
