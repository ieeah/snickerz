import { useState } from 'react';

export default function Header() {

  const [topLinks, setTopLinks] = useState([
    { text: "Newsletter", to: "/" },
    { text: "Negozi", to: "/" },
    { text: "Contatti", to: "/" },
    { text: "Lavora con noi", to: "/" },
    { text: "Rimborsi e resi", to: "/" },
  ]);

  const [loginLinks, setLoginLinks] = useState([
    
    {
      text: "Registrati",
      to: "/",
    },
    {
      text: "Accedi",
      to: "/",
    }
  ]);

  const [mainLinks, setMainLinks] = useState([
    {
      text: "Donna",
      to: "/",
    },
    {
      text: "Uomo",
      to: "/",
    },
    {
      text: "Bambini",
      to: "/",
    }
  ]);

  return (
    <div className="header">
      <div className="top-bar">
        <div className="inner-top inline-center col-9">
          <ul className="inline-list">
            {topLinks.map((link, index) => (
              <li key={index}>
                <a href={link.to}> {link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <nav className="main-navigation">
        <div className="inner-navigation inline-center col-9">
          <div className="left">
            <a href="/">
              <img
                src="assets/imgs/Z-logo.svg"
                alt="the company logo"
                className="brand"
              />
            </a>
            <div className="searchbar">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Cerca"
              />
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className="center">
            <nav className="categories">
              <ul className="inline-list">
                {mainLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.to}> {link.text}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <a href="/" className="outlet">Sports Outlet</a>
          </div>
          <div className="right">
            <ul className="inline-list">
              { 
                loginLinks.map((link, index) => (
                  <li key={`login-link-${index}`}>
                    <a href={link.to}>{link.text}</a>
                  </li>
                ))
               }
            </ul>
            <i class="fa-solid fa-box"></i>
          </div>
        </div>
      </nav>
    </div>
  );
}
