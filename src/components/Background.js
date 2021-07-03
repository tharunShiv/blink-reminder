import "../styles/background.css";
import React from "react";
import BgOne from "../assets/images/bg-1.svg";
import BgTwo from "../assets/images/bg-2.svg";

export default function Header() {
  return (
    <>
      <img src={BgOne} alt="bg" className="bgOne-image" />
      <img src={BgTwo} alt="bg" className="bgTwo-image" />
    </>
  );
}
