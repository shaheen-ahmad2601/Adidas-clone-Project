// import React from "react";
// import "../Home/Home3.css";
// import { CartContext } from "../../Context/CartContext"; 
// import { useNavigate } from "react-router-dom";

// const Home3 = (props) => {
//   const navigate = useNavigate();
//   const { onAdd } = props;
//   const { cartProduct, setCartProduct } = React.useContext(CartContext);
//   return (
//       <>
//       <p className='new-arrivals'>NEW ARRIVALS</p>
       
//        <div className="products-container1"  onClick={onAdd}>
//       <div className="product-1" onClick={() => {
//                   setCartProduct([...cartProduct])
//                   navigate("/cart")
//                 }
//                 }>
//         <img
//           className="align-products"
//           src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/f3e584ae50e144ddb007ae0b001beb55_9366/Adilette_Pride_Slides_Black_GX6389_01_standard.jpg"
//           alt="running-shoes"
//         />
//         <p className="price-tag">₹4999.00</p>
//         <p className="description">Ultraboost 4.5 DNA Shoes</p>
//         <span className="title">Originals</span>
//       </div>
//       <div className="product-2">
//         <img
//           className="align-products"
//           src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/c4eef76ad3664fb19a7dae1e00326612_9366/Superstar_Pride_Shoes_White_GX6395_01_standard.jpg"
//           alt="running-shoes"
//         />
//         <p className="price-tag">₹2999.00</p>
//         <p className="description">Stan Smith Shoes</p>
//         <span className="title">Originals</span>
//       </div>
//       <div className="product-3">
//         <img
//           className="align-products"
//           src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/bad26d803bca49aa8b26ae140150962d_9366/OZWEEGO_Shoes_Grey_HR1169_01_standard.jpg"
//           alt="running-shoes"
//         />
//         <p className="price-tag">₹3500.00</p>
//         <p className="description">Stan Smith Shoes</p>
//         <span className="title">Originals</span>
//       </div>
//       <div className="product-4">
//         <img
//           className="align-products"
//           src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/cdafc4c1e111445cadc2ae2800473416_9366/Adilette_Cork_Slides_Blue_GV7078_01_standard.jpg"
//           alt="running-shoes"
//         />
//         <p className="price-tag">₹6999.00</p>
//         <p className="description">Stan Smith Shoes</p>
//         <span className="title">Originals</span>
//       </div>
//     </div>
     
//       </>
    
//   );
// };

// export default Home3;


import React from "react";
import "../Home/Home3.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
// import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const Home3 = (props) => {


  // const data1 = [
  //   {
  //     image:
  //       "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/1d1ac6d6fd3045f7ad33ae8f0136b595_9366/jaysaw-reflective-m.jpg",
  //     category: "SNEAKERS",
  //   },
  //   {
  //     image:
  //       "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/e0826ccc3ea24d7d80f2ae1c015eb659_9366/m-bl-ft-pt.jpg",
  //     category: "PANTS",
  //   },
  //   {
  //     image:
  //       "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/313d772351f14d289074ae2100a85d5d_9366/m-mel-hd.jpg",
  //     category: "HOODIES & SWEATSHIRT",
  //   },
  //   {
  //     image:
  //       "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/22e21c736b9042cda230adaa00a35bf0_9366/small-logo-single-jersey-tee.jpg",
  //     category: "UPPER",
  //   },
  // ];
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
      {/* <div className="men-category">
        {data1.map((el) => (
          <>
            <div className="men-container" onClick={onAdd}>
              <img className="men-category-img" src={el.image} alt="" />
              <p className="men- category-title">{el.category}</p>
            </div>
          </>
        ))}
      </div> */}

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
      {/* <Footer /> */}
    </>
  );
};

export default Home3;

