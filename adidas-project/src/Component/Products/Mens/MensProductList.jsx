import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../Navbar/Navbar";
import "./MensProductList.css";
import { CartContext } from "../../../Context/CartContext";

const MensProductList = () => {
  const [product, setProduct] = useState([]);
  let axio = axios.create(
    {
      baseURL: "http://localhost:3000/mens"
    });

  const { cartProduct } = React.useContext(CartContext);
  useEffect(() => {
    axio.get('').then((data) => {
      setProduct(data);
      console.log(data);
    });
  }, []);
  return (
    <>
      <Navbar />

      <div className="mens-products-file">
        <div className="container">
          {product.map((el) => (
            <div className="single-div">
              <img width="240px" src={el.img[0]} alt="" />
              <div className="description">
                <p className="bold-text">{el.brand}</p>
                <p>{el.name}</p>
                <p className="bold-text">{"BestPrice - " + el.price}</p>

                <p>
                  OriginalPrice - <strike>{el.origPrice}</strike>
                </p>
              </div>
              <div></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MensProductList;
