import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Home4.css"


const Home4 = () => {
  const productSlide = [
    {
      image:
        "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/b26b8d0ea5254529ae5ba7fa00deedd6_9366/288022_01_standard.jpg",
      price: "₹6999.00",
      des: "Stan Smith Shoes",
      title: "Originals",
    },
    {
      image:
        "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/3482c42d804346ed88e7ade5010805c5_9366/HD2350_21_model.jpg",
      price: "₹3799.00",
      des: "Stan Smith Shoes",
      title: "Originals",
    },
    {
      image:
        "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/09c5ea6df1bd4be6baaaac5e003e7047_9366/FY7756_01_standard.jpg",
      price: "₹6999.00",
      des: "Stan Smith Shoes",
      title: "Originals",
    },
    {
      image:
        "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/bfac4aab68ec4ddb82dcad2c0074a997_9366/H31447_21_model.jpg",
      price: "₹7599.00",
      des: "Stan Smith Shoes",
      title: "Originals",
    },
  
  ];
 
  return (
    <>
    <p className="best-of">BEST OF ADIDAS</p>
    <Slide>
      <div className="display">
        {productSlide.map((el, index) => (
          <>
           <div className="single-div">
           <div className="slide" key={index}>
              <img src={el.image} alt="" />
            </div>
            <div>
              <p className="price-tag">{el.price}</p>
              <p className="description">{el.des}</p>
              <p className="title">{el.title}</p>
            </div>
           </div>
          </>
        ))}
      </div>
    </Slide>
    </>
  );
};

export default Home4;
