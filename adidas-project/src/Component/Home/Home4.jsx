
import React from "react";
import "../Home/Home4.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
// import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const Home4 = (props) => {
  const navigate = useNavigate();
  const { onAdd } = props;
  const { cartProduct, setCartProduct } = React.useContext(CartContext);
  return (
    <>
    //just adding this component to make more component but actually I don't need this to render the project
    </>
  );
};

export default Home4;
