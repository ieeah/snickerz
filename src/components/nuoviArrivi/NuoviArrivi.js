function SectionHeader({ title, brand }) {
  return (
    <div className="section-header">
      <h2 className="section-title">{title}</h2>
      <img src={brand} alt="brand" className="section-brand" />
    </div>
  );
}

function SectionContent({ children }) {
  return <div className="section-content">{children}</div>;
}

function ShoesCard({ shoes }) {}

export default function NuoviArrivi() {
  return (
    <div className="arrivi-wrapper">
      <SectionHeader title="Nuovi Arrivi" brand={{}} />
    </div>
  );
}
