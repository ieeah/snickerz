import { useState } from 'react';
import assets from "../assets/exports/assets";

export default function Header() {

  const [topLinks] = useState([
    { text: "Newsletter", to: "/" },
    { text: "Negozi", to: "/" },
    { text: "Contatti", to: "/" },
    { text: "Lavora con noi", to: "/" },
    { text: "Rimborsi e resi", to: "/" },
  ]);

  const [loginLinks] = useState([
    
    {
      text: "Registrati",
      to: "/",
    },
    {
      text: "Accedi",
      to: "/",
    }
  ]);

  const [mainLinks] = useState([
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

  const heroImg = assets.header.logo.default;

  return (
    <div className="header">
      <div className="top-bar">
        <div className="inner-top inline-center col-9">
          <ul className="inline-list">
            {topLinks.map((link, index) => (
              <li key={index}>
                <a href={link.to} title={link.text}>
                  {" "}
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <nav className="main-navigation">
        <div className="inner-navigation inline-center col-9">
          <div className="left">
            <a href="/">
              <img src={heroImg} alt="the company logo" className="brand" />
            </a>
            <div className="searchbar">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Cerca"
              />
              <i className="fa-solid fa-magnifying-glass"></i>
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
            <a href="/" className="outlet">
              Sports Outlet
            </a>
          </div>
          <div className="right">
            <ul className="inline-list">
              {loginLinks.map((link, index) => (
                <li key={`login-link-${index}`}>
                  <a href={link.to}>{link.text}</a>
                </li>
              ))}
            </ul>
            <i className="fa-solid fa-box"></i>
          </div>
        </div>
      </nav>
    </div>
  );
}
