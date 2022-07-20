import React from 'react'
import {Route , Routes} from "react-router-dom"
import Allfiles from '../All-Files/Allfiles'
import Mens from '../Products/Mens/Mens'
import Women from '../Products/Women/Women'
import Kids from "../Products/Kids/Kids"
import MensProductList from '../Products/Mens/MensProductList'
import SignUp from '../SignupSignin/SignUp'
import Signin from '../SignupSignin/Signin'
import Cart from '../Cart/Cart'
// import AddressForm from '../../CheckoutPages/AddressForm'
import PaymentForm from '../../CheckoutPages/PaymentForm'
// import Checkout from '../../CheckoutPages/Checkout'
import Review from '../../CheckoutPages/Review'
import CheckoutPage from '../../CheckoutPages/CheckoutPage'
import AddressForm from '../../CheckoutPages/AddressForm'

const Routing = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Allfiles/>}></Route>
          <Route path="/men" element={<Mens/>}></Route>
          <Route path="mensdata" element={<MensProductList/>}></Route>
          <Route path="/women" element={<Women/>}></Route>
          <Route path="/kids" element={<Kids/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/review" element={<Review/>}></Route>
          <Route path="/paymentform" element={<PaymentForm/>}></Route>
          <Route path="/checkoutpage" element={<CheckoutPage/>}></Route>
          <Route path="/checkout" element={<AddressForm/>}></Route>
      </Routes>
    </div>
  )
}

export default Routing
