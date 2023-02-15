import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import appStore from "../img/appStore.png";
import googlePlay from "../img/gg-play.png";

export default function Navbar() {
  const getTheme = () => {
    return JSON.parse(localStorage.getItem("theme")) || false;
  };

  const [theme, setTheme] = useState(getTheme());

  const toggleTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };

  useEffect(() => {
    document.body.className = theme;

    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  return (
    <>
      <div
        class="alert-top sticky-top alert-warning alert alert-dismissible fade show"
        role="alert"
      >
        <p>
          Download Apliksi Kami Di:
          <a href="https://play.google.com" className="mx-2">
            <img src={googlePlay} alt="play-store" width="100" />
          </a>
          <a href="https://www.apple.com/id/app-store">
            <img src={appStore} alt="app-store" width="100" />
          </a>
        </p>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>

      <nav className="navbar navbar-expand-lg bg-primary navbar-dark py-3">
        <div className="container">
          <Link to="/" className="navbar-brand fw-bolder fsize">
            TokoKu
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
              <Link to="/" className="nav-link" style={{ color: "white" }}>
                Home
              </Link>
              <Link
                to="/list-product"
                className="nav-link"
                style={{ color: "white" }}
              >
                List Product
              </Link>
              <Link
                to="/reviews"
                className="nav-link"
                style={{ color: "white" }}
              >
                Review's
              </Link>
            </div>
            <button className="btn btn-warning" onClick={() => toggleTheme()}>
              Dark Mode
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
