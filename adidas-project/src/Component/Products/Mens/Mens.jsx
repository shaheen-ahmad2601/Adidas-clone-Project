import React from "react";
import mens from "../../../Assets/mens.mp4";
import Navbar from "../../Navbar/Navbar";
import "./Mens.css";
import MensubComponent from "./MensubComponent";
import { CartContext } from "../../../Context/CartContext";

const Mens = () => {
  return (
    // ------------------video div--------------------------
    <>
    <Navbar/>
      <div className="men-container">
        <video autoPlay loop muted>
          <source src={mens} type="video/mp4" />
        </video>

        <div className="text-wrapper">
          <h1>
            <span className="green-text">TAKE YOUR</span> BEST FOOT <span className="forward">FORWARD</span>
          </h1>
          <p>
          From May 23, let’s Run For The Oceans and help end plastic waste. Together, Impossible is Nothing.
          </p>
          <button className="video-btn">
            EXPLORE
            <i class="fa-solid fa-arrow-right-long  "></i>
          </button>
        </div>
      </div>

      {/* ------------img div------------------------ */}
      <div className="men-container1">
        <img
          className="div1-img"
          src="https://cdn.wallpapersafari.com/95/11/ZVdchq.jpg"
          alt=""
        />

        <div className="text-wrapper1-men">
          <h1 className="today-h1">TODAY'S ICONS, MADE FOR TOMORROW.</h1>
          <p className="introducing">
            Introducing our latest collection of icons, now made in part with
            Parley Ocean Plastic.
          </p>
          <div className="btn-container">
          <div>
            <button className="div1-btn1">SHOP MEN
            <i class="fa-solid fa-arrow-right-long  "></i>
            </button>
          </div>
          <div>
            <button className="div1-btn2">SHOP WOMEN
            <i class="fa-solid fa-arrow-right-long  "></i>
            </button>
          </div>
          </div>
        </div>
      </div>
      <MensubComponent/>
    </>
  );
};

export default Mens;

