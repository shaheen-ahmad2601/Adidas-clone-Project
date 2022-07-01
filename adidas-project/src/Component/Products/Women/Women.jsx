import React from "react";
import Navbar from "../../Navbar/Navbar";
import "./Women.css";
import WomensubComponent from "../Women/WomensubComponent"

const Women = () => {
  const womenData = [
    {
        image:"https://i.pinimg.com/originals/da/31/13/da311340d71df08fe5d7cf358d5f1526.jpg",
        title:"MAKE SPACE",
        para:"A high performance yoga collection- inspired by the elements and made in part with Parley Ocean plastic"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTWG_AB8UYXIrUvkhXuiB2jSJtTD7i7N7T0Z01EXHw-qnTC38ZnxC-7BgoqknnR3KlXt8&usqp=CAU",
        title:"BE THE REAL YOU",
        para:"A high performance yoga collection- inspired by the elements and made in part with Parley Ocean plastic"
    },
    {
        image:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/17811856/2022/4/28/1c4ad6a1-4fa3-471a-a8f8-7b68e60c90711651139796878-ADIDAS-Women-Tshirts-7811651139796373-1.jpg",
        title:"BLUE VERSION",
        para:"A high performance yoga collection- inspired by the elements and made in part with Parley Ocean plastic"
    },
    {
        image:"https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/sportswear-ss22-studiolounge-launch-hp-teasercarousel-one_size_tcm209-876506.jpg",
        title:"YOUR MOMENT, YOUR WAY",
        para:"A high performance yoga collection- inspired by the elements and made in part with Parley Ocean plastic"
    }
]
  return (
    <>
      <Navbar />
      <div className="women-container1">

          <div className="text-wrapper1-women">
            <h1>TOGETHER, LET’S RUN</h1>
            <p>
              From May 23, let’s Run For The Oceans and help <br /> end plastic
              waste. Together, Impossible is Nothing.
            </p>
            <div className="women-btn-container">
              <div>
                <button className="women-btn1">
                  LEARN MORE
                  <i class="fa-solid fa-arrow-right-long  "></i>
                </button>
              </div>
            </div>
          </div>
    
      </div>
      <div className="whats-hot-container">
        <div className="subcomponent-women-category">
          {womenData.map((el,id)=>(
            <div className="women-product-container">
              <img className="div-image" src={el.image} alt="" />
              <div className="description-div">
              <p className="make-space">{el.title}</p>
              <p className="para">{el.para}</p>
              <p className="shop-now">SHOP NOW</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <WomensubComponent/>
    </>
  );
};

export default Women;
