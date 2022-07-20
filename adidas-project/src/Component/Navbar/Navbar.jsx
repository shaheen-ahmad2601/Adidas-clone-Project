import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="navbar-container">
        <div className="top-nav">
          <div className="span-container">
            <span>SIGN UP & GET 15% OFF</span>
            <span>FREE DELIVERY FOR ALL ORDERS NOW</span>
            <span>FREE RETURNS</span>
          </div>
        </div>

        <div className="mid-nav">
          <div className="mid-content">
            <span>help</span>
            <span>returns</span>
            <span>order tracker</span>
            <span>sign up</span>
          </div>
        </div>

        <div className="bottom-nav">
          <span className="img-span">
            <img
              onClick={() => navigate("/")}
              className="adi-logo"
              src="http://cdn.shopify.com/s/files/1/0249/5892/6941/products/Adidaslogoironon_1200x1200.png?v=1611838196"
              alt=""
            />
          </span>
          <div className="product-container">
            <div className="dropdown">
              <button
                className="dropbtn men-text"
                onClick={() => navigate("/men")}
              >
                MEN
              </button>
              <div className="dropdown-content">
                <a href="#">FOOTWARE</a>
                <a href="#">CLOTHING</a>
                <a href="#">ACCESSORIES</a>
              </div>
            </div>

            <div className="dropdown ">
              <button
                className="dropbtn women-text"
                onClick={() => navigate("/women")}
              >
                WOMEN
              </button>
              <div className="dropdown-content">
                <a href="#">FOOTWARE</a>
                <a href="#">CLOTHING</a>
                <a href="#">ACCESSORIES</a>
              </div>
            </div>

            <div className="dropdown ">
              <button
                className="dropbtn kid-text"
                onClick={() => navigate("/kids")}
              >
                KIDS
              </button>
              <div className="dropdown-content">
                <a href="#">FOOTWARE</a>
                <a href="#">CLOTHING</a>
                <a href="#">ACCESSORIES</a>
              </div>
            </div>
            <p>SPORTS</p>
            <p>BRANDS</p>
            <p>COLLECTIONS</p>
            <p>OUTLET</p>
            <input className="input-search" type="text" placeholder="Search" />
          </div>
          {/* </span> */}

          <div className="icon">
            <i
              onClick={() => navigate("/signin")}
              class="fa-solid fa-user fa-lg (62% increase)"
            ></i>
            <i class="fa-solid fa-heart fa-lg (62% increase)"></i>
            <i
              onClick={() => navigate("/cart")}
              class="fa-solid fa-cart-flatbed fa-lg (62% increase)"
            ></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
