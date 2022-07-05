import React from 'react'
import "../Home/Home2.css"
import {Slide} from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css";


const Home2 = () => {

  return (
    <>
    <div className='separator-bar'></div>
    <div className='blob'></div>
    <div className='Home-container2'>
      <div className='heading'>POPULAR RIGHT NOW</div>
      <div className="ul-div">
          <ul className='ul-list'>
              <li>FACE COVERS</li>
              <li>WHITE SNEAKERS</li>
              <li>SUPERSTAR </li>
              <li>ADIDAS ORIGINALS </li>
              <li>ULTRABOOST</li>
          </ul>
      </div>
      
      <p className='category-heading'>WHO ARE YOU SHOPPING FOR?</p>
      
      <div className="category-container">
          <div className="men">
            <img className='category-img' src="https://www.soccerbible.com/media/102019/1-messi-limited-edition-crystal-boots-adidas-min.jpg" alt="" />
            <p className='text-center'>MEN</p>
          </div>
          <div className="women">
            <img className='category-img' src="https://www.lumen.me/assets/Pages/adidas-runners/program-background-img.jpg" alt="" />
            <p className='text-center'>WOMEN</p>
          </div>
          <div className="kids">
            <img className='category-img' src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enIN/Images/kids_1_tcm209-792188.png" alt="" />
            <p className='text-center'>KIDS</p>
          </div>
      </div>
     
     <p className='still-intrested'>STILL INTERESTED?</p>
    <Slide>
    <div className="products-container">
          <div className="product-1">
          <img className='align-products' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHs9CzU69xnVrNPbcD0-8WDHxcmyHuzOG8MB3YgP1_vILiXUGaZvVDlRwUwxVIv5kI_Pc&usqp=CAU" alt="running-shoes" />
          <p className='price-tag'>₹4999.00</p>
          <p className='description'>Ultraboost 4.5 DNA Shoes</p>
          <span className='title'>Originals</span>
          </div>
          <div className="product-2">
             <img className='align-products' src="https://assets.ajio.com/medias/sys_master/root/h79/h87/13223176962078/-473Wx593H-460360071-white-MODEL.jpg" alt="running-shoes" />
             <p className='price-tag'>₹2999.00</p>
             <p className='description'>Stan Smith Shoes</p>
             <span className='title'>Originals</span>
          </div>
          <div className="product-3">
           <img className='align-products' src="https://assets.ajio.com/medias/sys_master/root/20201023/5Inj/5f91dd38f997dd8c8374eccc/-473Wx593H-460738206-blue-MODEL.jpg" alt="running-shoes" />
           <p className='price-tag'>₹3500.00</p>
           <p className='description'>Stan Smith Shoes</p>
           <span className='title'>Originals</span>
          </div>
          <div className="product-4">
            <img className='align-products' src="https://assets.ajio.com/medias/sys_master/root/20210605/irwv/60ba7a0aaeb269a9e3d5b464/-473Wx593H-460834232-grey-MODEL.jpg" alt="running-shoes" />
            <p className='price-tag'>₹6999.00</p>
            <p className='description'>Stan Smith Shoes</p>
            <span className='title'>Originals</span>
          </div>
      </div>
    </Slide>
    </div>
    </>
  )
}

export default Home2
