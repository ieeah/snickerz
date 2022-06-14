export default function Link({ children, to, className }) {
  return (
    <a href={to} className={`unstyled-link ${className ? className : ""}`}>
      {children}
    </a>
  );
}
