import React from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import "./Cart.css";
const Cart = () => {
  const navigate = useNavigate();

  const { cartProduct } = React.useContext(CartContext);
  return <div className="cart-div">
    {
      cartProduct.map((item,index) => {
        return  <>
        
          <div className="parent-cart">
          <div>
            <div className="slide" key={index}>
              <img className="img-cart" src={item.image} alt="" style={{width:"400px"}}/>
            </div>
            <div>
              <p className="price-tag">{item.price}</p>
              <p className="description">{item.des}</p>
              <p className="title">{item.title}</p>
            </div>
          </div>
          <div className="des-container">
            <p className="des-heading">ADIDAS FORTA RUN X  LEGO® BAUMHAUS <br /> SHOES</p>
            <p style={{fontWeight:"bold"}}>MRP : 4999.00</p>
            <p>Inclusive all taxes</p>

            <p className="size">Choose Your Size</p>
            <ul className="sizez-li">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
            </ul>
            <p style={{fontSize:"20px",fontWeight:"600"}}>Free shipping for all orders</p>
            <p style={{fontSize:"20px",fontWeight:"600"}}>for all returns</p>
          </div>
          </div>
          
        </>
      })
    }
     <button className="div1-btn2" onClick={() => navigate("/checkout")}> Checkout
            <i class="fa-solid fa-arrow-right-long  "></i>
            </button>
  </div>;
};

export default Cart;
