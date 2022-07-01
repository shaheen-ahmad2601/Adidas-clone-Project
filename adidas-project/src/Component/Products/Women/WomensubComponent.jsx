import React from 'react'
import "./WomensubComponent.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Footer from '../../Footer/Footer';

const WomensubComponent = () => {
    const data1 = [
        {
            image:"https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/b648d8e1aa6141989598ae6a000b6e74_9366/super-sleek-3-strap-shoes.jpg",
            category:"SNEAKERS"
        },
        {
            image:"https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/f50979b8e645411096c6ae1a00aac728_9366/essentials-yoga-rib-tank-top.jpg",
            category:"Tops"
        },
        {
            image:"https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/94f30481e99f4318b125ae9f00c2675a_9366/optime-7-8-t.jpg",
            category:"TIGHTS"
        },
        {
            image:"https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/b8fbe2d1b9f945008cddad58009cb1a8_9366/adicolor-classics-corded-velour-oversize-sweatshirt.jpg",
            category:"SWEATSHIRTS"
        }
    ]
    const data2 = [
        {
          image:
            "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/1091653e8ca545f4b62cadc100b8cace_9366/Adicolor_Split_Trefoil_Tee_Black_HC7039_21_model.jpg",
          price: "₹2500.00",
          des: "Stan Smith Shoes",
          title: "Originals",
        },
        {
          image:
            "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/ae140a1e320549f68214adc6011f537c_9366/Love_Unites_Crop_Trefoil_Tee_Black_HC3078_21_model.jpg",
          price: "₹3399.00",
          des: "Stan Smith Shoes",
          title: "Originals",
        },
        {
          image:
            "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/c1bcf38508d94c50b289ae4b00ba945f_9366/Blocked_Graphic_Crop_Tee_Black_HF2128_21_model.jpg",
          price: "₹4499.00",
          des: "Stan Smith Shoes",
          title: "Originals",
        },
        {
          image:
            "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/55465bb20f8f4b4aa5d2adb0008d576f_9366/Love_Unites_Crop_Hoodie_Purple_HC3080_21_model.jpg",
          price: "₹1199.00",
          des: "Stan Smith Shoes",
          title: "Originals",
        },
      
      ];
      const data3 = [
        {
          image:
            "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/70e098d322a2452d84acacfa00bae32f_9366/GZ2913_01_standard.jpg",
          price: "₹1800.00",
          des: "Stan Smith Shoes",
          title: "Originals",
        },
        {
          image:
            "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/ddfc0fb941e8414bbbfaacee00d51eeb_9366/GZ2914_01_standard.jpg",
          price: "₹2399.00",
          des: "Stan Smith Shoes",
          title: "Originals",
        },
        {
          image:
            "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/792cc8c7b51a43269604ad1800c52c0a_9366/GZ2915_01_standard.jpg",
          price: "₹1199.00",
          des: "Stan Smith Shoes",
          title: "Originals",
        },
        {
          image:
            "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/2cc3f591a53f413ca9f3ae1300f43909_9366/GW0564_01_standard.jpg",
          price: "₹1199.00",
          des: "Stan Smith Shoes",
          title: "Originals",
        },
      
      ];
  return (
   <>
   <div  className='shop-by-category'>SHOP BY CATEGORY</div>
    <div className='women-category'>
      {data1.map((el,id)=>(
          <div className="women-container" key={id}>
              <img className='women-category-img' src={el.image} alt="" />
              <p className='women-category-title'>{el.category}</p>
          </div>
      ))}
    </div>
  

  <div className='originals-container'>
  <p className='women-originals'>WOMEN ORIGINALS</p>
  <Slide>
      <div className="display">
        {data2.map((el, index) => (
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
  </div>


  <div className='best-container'>
  <p className='women-originals'>BEST OF ADIDAS</p>
  <Slide>
      <div className="display">
        {data3.map((el, index) => (
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
  </div>
  <Footer/>
   </>
  )
}

export default WomensubComponent
