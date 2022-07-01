import React from "react";
import Navbar from "../../Navbar/Navbar";
import "./Kids.css";
// import WomensubComponent from "../Women/WomensubComponent"
import {Slide} from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css";
import Footer from "../../Footer/Footer";

const Kids = () => {
  const kidsData = [
    {
        image:"https://tetherproduction.com/wp-content/gallery/adidas-young-athlete/5.jpg",
        title:"MAKE SPACE",
        para:"A high performance yoga collection- inspired by the elements and made in part with Parley Ocean plastic"
    },
    {
        image:"https://tetherproduction.com/wp-content/gallery/adidas-young-athlete/3.jpg",
        title:"BE THE REAL YOU",
        para:"A high performance yoga collection- inspired by the elements and made in part with Parley Ocean plastic"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxEW5yjZ1BIzzgaeIiUUAP_XRi6cY-CAbGly3Mx8YLEQ4m4sO3kQDTaeSnP8T6pa98U-A&usqp=CAU",
        title:"BLUE VERSION",
        para:"A high performance yoga collection- inspired by the elements and made in part with Parley Ocean plastic"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxNsSO1x3DkLnBTel-cCzYegWLbNCPm82KA_tImTB-Sn9P7tchfj9A5zHmtq_SZngmEQw&usqp=CAU",
        title:"YOUR MOMENT, YOUR WAY",
        para:"A high performance yoga collection- inspired by the elements and made in part with Parley Ocean plastic"
    }
]
  return (
    <>
      <Navbar />
      <div className="kids-container1">

          <div className="text-wrapper1-kids">
            <h1>YOU GOTTA BE HUSTLER</h1>
            <p>
              From May 23, let’s Run For The Oceans and help <br /> end plastic
              waste. Together, Impossible is Nothing.
            </p>
            <div className="kids-btn-container">
              <div>
                <button className="kids-btn1">
                  LEARN MORE
                  <i class="fa-solid fa-arrow-right-long  "></i>
                </button>
              </div>
            </div>
          </div>
    
      </div>
      <div className="whats-hot-container">
        <div className="subcomponent-kids-category">
          {kidsData.map((el,id)=>(
            <div className="kids-product-container">
              <img className="kids-div-image" src={el.image} alt="" />
              <div className="kids-description-div">
              <p className="kids-make-space">{el.title}</p>
              <p className="kids-para">{el.para}</p>
              <p className="kids-shop-now">SHOP NOW</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <WomensubComponent/> */}
      <div className="kids-category-heading">TOP PICKS FOR YOU</div>
      <Slide>
    <div className="kids-products-container">
          <div className="kids-product-1">
          <img className='kids-align-products' src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8b19f5114d24d878e72ad2600f615cd_9366/G57947_01_standard.jpg" alt="running-shoes" />
          <p className='kids-price-tag'>₹4999.00</p>
          <p className='kids-description'>Ultraboost 4.5 DNA Shoes</p>
          <span className='kids-title'>Originals</span>
          </div>
          <div className="kids-product-2">
             <img className='kids-align-products' src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/62bd7dd25f334bfd992bad2600aa7d19_9366/G57946_01_standard.jpg" alt="running-shoes" />
             <p className='kids-price-tag'>₹2999.00</p>
             <p className='kids-description'>Stan Smith Shoes</p>
             <span className='kids-title'>Originals</span>
          </div>
          <div className="kids-product-3">
           <img className='kids-align-products' src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/f74e2bccabf044838a86ad2e00fb53bb_9366/FZ5440_01_standard.jpg" alt="running-shoes" />
           <p className='kids-price-tag'>₹3500.00</p>
           <p className='kids-description'>Stan Smith Shoes</p>
           <span className='kids-title'>Originals</span>
          </div>
          <div className="kids-product-4">
            <img className='kids-align-products' src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/80483e6ffaae422a9bf0ad2600c50f49_9366/H67853_01_standard.jpg" alt="running-shoes" />
            <p className='kids-price-tag'>₹6999.00</p>
            <p className='kids-description'>Stan Smith Shoes</p>
            <span className='kids-title'>Originals</span>
          </div>
      </div>
    </Slide>

    <div className="kids-category-heading1">TOP PICKS FOR YOU</div>
      <Slide>
    <div className="kids-products-container1">
          <div className="kids-product-1">
          <img className='kids-align-products' src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/3e90b681dc2e4d599f9fad9100e49909_9366/H01504_01_standard.jpg" alt="running-shoes" />
          <p className='kids-price-tag'>₹4999.00</p>
          <p className='kids-description'>Ultraboost 4.5 DNA Shoes</p>
          <span className='kids-title'>Originals</span>
          </div>
          <div className="kids-product-2">
             <img className='kids-align-products' src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/62bd7dd25f334bfd992bad2600aa7d19_9366/G57946_01_standard.jpg" alt="running-shoes" />
             <p className='kids-price-tag'>₹2999.00</p>
             <p className='kids-description'>Stan Smith Shoes</p>
             <span className='kids-title'>Originals</span>
          </div>
          <div className="kids-product-3">
           <img className='kids-align-products' src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8b19f5114d24d878e72ad2600f615cd_9366/G57947_01_standard.jpg" alt="running-shoes" />
           <p className='kids-price-tag'>₹3500.00</p>
           <p className='kids-description'>Stan Smith Shoes</p>
           <span className='kids-title'>Originals</span>
          </div>
          <div className="kids-product-4">
            <img className='kids-align-products' src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/80483e6ffaae422a9bf0ad2600c50f49_9366/H67853_01_standard.jpg" alt="running-shoes" />
            <p className='kids-price-tag'>₹6999.00</p>
            <p className='kids-description'>Stan Smith Shoes</p>
            <span className='kids-title'>Originals</span>
          </div>
      </div>
    </Slide>

    {/* ----------------------------------------------------- */}
  <div className="kids-footer">
      <div className="f-heading">
      ADIDAS KIDS’ CLOTHING & KIDS’ SHOES
      </div>
      <div className="kids-paragrapgh">
      Whether they’re big kids playing in a weekend tournament or little ones mastering the monkey bars, being a young creator is all about having fun while playing hard. Find girls’ and boys’ shoes to support both their game and their style. Boys’ and girls’ clothing and shoes from adidas are built to give kids of every age and stage comfort and confidence for everything from first steps to personal bests.
      </div>

      <div className="footer-section">
          <div className="girl-clothing">
              <p className="title-bold" >GIRLS CLOTHING</p>
              <p>T-shirts</p>
              <p>Shorts</p>
              <p>Hoodies</p>
              <p>Tracksuits</p>
              <p className="text-bold">SHOP ALL</p>
          </div>
          <div className="boy-clothing">
              <p className="title-bold">BOYS CLOTHING</p>
              <p>T-shirts</p>
              <p>Shorts</p>
              <p>Hoodies</p>
              <p>Tracksuits</p>
              <p className="text-bold">SHOP ALL</p>
          </div>
          <div className="girl-shoes">
              <p className="title-bold">GIRLS SHOES</p>
              <p>T-shirts</p>
              <p>Shorts</p>
              <p>Hoodies</p>
              <p>Tracksuits</p>
              <p className="text-bold">SHOP ALL</p>
          </div>

          <div className="boy-shoes">
              <p className="title-bold">BOYS SHOES</p>
              <p>T-shirts</p>
              <p>Shorts</p>
              <p>Hoodies</p>
              <p>Tracksuits</p>
              <p className="text-bold">SHOP ALL</p>
          </div>
      </div>
  </div>
  <Footer/>
    </>
  );
};

export default Kids;

