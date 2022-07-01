import React from "react";
import "../Home/Home3.css";
import {Slide} from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css";

const Home3 = () => {
  return (
      <>
      <p className='new-arrivals'>NEW ARRIVALS</p>
       
       <div className="products-container1">
      <div className="product-1">
        <img
          className="align-products"
          src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/f3e584ae50e144ddb007ae0b001beb55_9366/Adilette_Pride_Slides_Black_GX6389_01_standard.jpg"
          alt="running-shoes"
        />
        <p className="price-tag">₹4999.00</p>
        <p className="description">Ultraboost 4.5 DNA Shoes</p>
        <span className="title">Originals</span>
      </div>
      <div className="product-2">
        <img
          className="align-products"
          src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/c4eef76ad3664fb19a7dae1e00326612_9366/Superstar_Pride_Shoes_White_GX6395_01_standard.jpg"
          alt="running-shoes"
        />
        <p className="price-tag">₹2999.00</p>
        <p className="description">Stan Smith Shoes</p>
        <span className="title">Originals</span>
      </div>
      <div className="product-3">
        <img
          className="align-products"
          src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/bad26d803bca49aa8b26ae140150962d_9366/OZWEEGO_Shoes_Grey_HR1169_01_standard.jpg"
          alt="running-shoes"
        />
        <p className="price-tag">₹3500.00</p>
        <p className="description">Stan Smith Shoes</p>
        <span className="title">Originals</span>
      </div>
      <div className="product-4">
        <img
          className="align-products"
          src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/cdafc4c1e111445cadc2ae2800473416_9366/Adilette_Cork_Slides_Blue_GV7078_01_standard.jpg"
          alt="running-shoes"
        />
        <p className="price-tag">₹6999.00</p>
        <p className="description">Stan Smith Shoes</p>
        <span className="title">Originals</span>
      </div>
    </div>
     
      </>
    
  );
};

export default Home3;
