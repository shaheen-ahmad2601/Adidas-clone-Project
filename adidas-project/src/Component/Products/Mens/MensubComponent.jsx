import React from "react";
import "./MensubComponent.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Footer from "../../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";

const MensubComponent = (props) => {


  const data1 = [
    {
      image:
        "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/1d1ac6d6fd3045f7ad33ae8f0136b595_9366/jaysaw-reflective-m.jpg",
      category: "SNEAKERS",
    },
    {
      image:
        "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/e0826ccc3ea24d7d80f2ae1c015eb659_9366/m-bl-ft-pt.jpg",
      category: "PANTS",
    },
    {
      image:
        "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/313d772351f14d289074ae2100a85d5d_9366/m-mel-hd.jpg",
      category: "HOODIES & SWEATSHIRT",
    },
    {
      image:
        "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/22e21c736b9042cda230adaa00a35bf0_9366/small-logo-single-jersey-tee.jpg",
      category: "UPPER",
    },
  ];
  const data2 = [
    {
      image:
        "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/f3e584ae50e144ddb007ae0b001beb55_9366/Adilette_Pride_Slides_Black_GX6389_01_standard.jpg",
      price: "₹2500.00",
      des: "Stan Smith Shoes",
      title: "Originals",
    },
    {
      image:
        "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/c4eef76ad3664fb19a7dae1e00326612_9366/Superstar_Pride_Shoes_White_GX6395_01_standard.jpg",
      price: "₹3399.00",
      des: "Stan Smith Shoes",
      title: "Originals",
    },
    {
      image:
        "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/8367b789fbb545c183cbae1a00f555c9_9366/Disney_Mickey_and_Friends_Tee_Black_HF4932_21_model.jpg",
      price: "₹4499.00",
      des: "Stan Smith Shoes",
      title: "Originals",
    },
    {
      image:
        "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/a6194812862e446a96abada1013cbbe4_9366/Disney_Mickey_and_Friends_Shorts_Black_HF4930_21_model.jpg",
      price: "₹1199.00",
      des: "Stan Smith Shoes",
      title: "Originals",
    },
  ];
  const data3 = [
    {
      image:
        "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/1a87a2361e624dbc8a28ad1700c3a9d3_9366/GZ2917_01_standard.jpg",
      price: "₹1800.00",
      des: "Stan Smith Shoes",
      title: "Originals",
    },
    {
      image:
        "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/afce941473344f479600ac45017d8f6a_9366/FY6034_01_standard.jpg",
      price: "₹2399.00",
      des: "Stan Smith Shoes",
      title: "Originals",
    },
    {
      image:
        "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/708a92a1fd2f43cfbb96ad1800c2dbfc_9366/GV9695_01_standard.jpg",
      price: "₹1199.00",
      des: "Stan Smith Shoes",
      title: "Originals",
    },
    {
      image:
        "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/f3e584ae50e144ddb007ae0b001beb55_9366/GX6389_01_standard.jpg",
      price: "₹1199.00",
      des: "Stan Smith Shoes",
      title: "Originals",
    },
  ];
  const navigate = useNavigate();
  const { onAdd } = props;
  const { cartProduct, setCartProduct } = React.useContext(CartContext);
  return (
    <>
      <div className="men-category">
        {data1.map((el) => (
          <>
            <div className="men-container" onClick={onAdd}>
              <img className="men-category-img" src={el.image} alt="" />
              <p className="men- category-title">{el.category}</p>
            </div>
          </>
        ))}
      </div>

      {/* ------------------------------ */}
      <div className="originals-container">
        <p className="men-originals">MEN ORIGINALS</p>
        <Slide>
          <div className="display">
            {data2.map((el, index) => (
              <>
                <div className="single-div" onClick={() => {
                  setCartProduct([...cartProduct,el])
                  navigate("/cart")
                }
                }
                >
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

      {/* -------------------------------------------- */}

      <div className="best-container">
        <p className="men-originals">BEST OF ADIDAS</p>
        <Slide>
          <div className="display">
            {data3.map((el, index) => (
              <>
                <div className="single-div" onClick={() => {
                  setCartProduct([...cartProduct, el])
                  navigate("/cart")
                }
                }>
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
      <Footer />
    </>
  );
};

export default MensubComponent;
