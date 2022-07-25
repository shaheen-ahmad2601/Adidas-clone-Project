
import React from "react";
import "../Home/Home3.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
// import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const Home3 = (props) => {

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
        "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/bad26d803bca49aa8b26ae140150962d_9366/OZWEEGO_Shoes_Grey_HR1169_01_standard.jpg",
      price: "₹4499.00",
      des: "Stan Smith Shoes",
      title: "Originals",
    },
    {
      image:
        "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/cdafc4c1e111445cadc2ae2800473416_9366/Adilette_Cork_Slides_Blue_GV7078_01_standard.jpg",
      price: "₹1199.00",
      des: "Stan Smith Shoes",
      title: "Originals",
    },
  ];
  const data3 = [
    {
      image:
        "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/b26b8d0ea5254529ae5ba7fa00deedd6_9366/288022_01_standard.jpg",
      price: "₹1800.00",
      des: "Stan Smith Shoes",
      title: "Originals",
    },
    {
      image:
        "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/3482c42d804346ed88e7ade5010805c5_9366/HD2350_21_model.jpg",
      price: "₹2399.00",
      des: "Stan Smith Shoes",
      title: "Originals",
    },
    {
      image:
        "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/09c5ea6df1bd4be6baaaac5e003e7047_9366/FY7756_01_standard.jpg",
      price: "₹1199.00",
      des: "Stan Smith Shoes",
      title: "Originals",
    },
    {
      image:
        "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/bfac4aab68ec4ddb82dcad2c0074a997_9366/H31447_21_model.jpg",
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
      {/* <Footer /> */}
    </>
  );
};

export default Home3;

