import "../styles/header.css";
import React from "react";
import logo from "../assets/images/logo.png";

export default function Header() {
  return (
    <header>
      <span className="header-left">
        <span>
          <img src={logo} alt="logo" className="logo" />
        </span>
        <span className="header-title">
          <a className="header-link" href="/">
            blink reminder
          </a>
        </span>
      </span>
      <span className="header-right">
        {/* <span className="header-right-button">Blog</span>
        <span className="header-right-button">Settings</span>
        <span className="header-right-button">Contact</span> */}
        <span className="header-right-button">
          <a className="header-link" href="/about">
            about
          </a>
        </span>
      </span>
    </header>
  );
}
