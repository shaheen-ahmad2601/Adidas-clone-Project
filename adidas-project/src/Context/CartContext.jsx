import React from "react";

export const CartContext = React.createContext();

const axios = require("axios");

export const CartContextProvider = ({ children }) => {
  const [cartProduct, setCartProduct] = React.useState([]);
  const [cart, setCart] = React.useState([]);
  const [wishlist, setWishlist] = React.useState([]);
  const [opencart, setOpencart] = React.useState(false);

  const handleOpencart = (comp) => {
    // setOpencart(true);
    // disp_change(comp);
  };
  const handleClosecart = () => setOpencart(false);

  const handleWishlistRemove = (id) => {};

  const handleCartRemove = (id) => {};

  const handleCart = (prod) => {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prod),
    };

    console.log("cart", prod);
  };

  const handleWishlist = (prod) => {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prod),
    };

    console.log("wishlist", prod);
  };

  return (
    <CartContext.Provider
      value={{
        cartProduct,
        setCartProduct,
        cart,
        setCart,
        wishlist,
        setWishlist,
        opencart,
        setOpencart,
        handleCart,
        handleCartRemove,
        handleOpencart,
        handleClosecart,
        handleWishlist,
        handleWishlistRemove,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
