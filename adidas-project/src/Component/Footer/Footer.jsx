import React from "react";
import "../Footer/Footer.css";

export default function Footer() {
  return (
    <>
      <div className="Footer-di-v">
        <div className="FooterMain-di-v">
          <div className="offer-di-v">
            <div className="offer-title"> JOIN ADIDAS AND GET 15% OFF</div>
            <div className="footer-sign-box">
              <button className="footer-signUp-option">
                Sign UP<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------------- */}
      <div className="footer-second-container">
        <div className="footer-second-sub-conatiner">
          <div className="box">
            <div className="di-v-title">PRODUCTS</div>
            <div className="sub-title">Footwear</div>
            <div className="sub-title">Clothing</div>
            <div className="sub-title">Accessories</div>
            <br />
            <div className="sub-title">Outlet</div>
            <div className="sub-title">New Arrivals</div>
          </div>
          <div className="box">
            <div className="di-v-title">SPORTS</div>
            <div className="sub-title">Running</div>
            <div className="sub-title">Football</div>
            <div className="sub-title">Gym/Training</div>
            <div className="sub-title">Tennis</div>

            <div className="sub-title">Outdoor</div>
            <div className="sub-title">Basketball</div>
            <div className="sub-title">Swimming</div>
            <div className="sub-title">Skateboarding</div>
          </div>
          <div className="box">
            <div className="di-v-title">COLLECTIONS</div>
            <div className="sub-title">Ultraboost</div>
            <div className="sub-title">Superstar</div>
            <div className="sub-title">NMD</div>
            <div className="sub-title">Stan Smith</div>
            <div className="sub-title">Sustainability</div>
            <div className="sub-title">Predator</div>
            <div className="sub-title">Parley</div>
            <div className="sub-title">adicolor</div>
          </div>
          <div className="box">
            <div className="di-v-title">SUPPORT</div>
            <div className="sub-title">Help</div>
            <div className="sub-title">Customer Services</div>
            <div className="sub-title">Returns & exchanges</div>
            <div className="sub-title">Shipping</div>
            <div className="sub-title">Order Tracker</div>
            <div className="sub-title">Store Locator</div>
            <div className="sub-title">Running Shoe Finder</div>
            <div className="sub-title">Bra Fit Guide</div>
            <div className="sub-title">adiclub</div>
            <div className="sub-title">adiclub Terms and conditions</div>
          </div>
          <div className="box">
            <div className="di-v-title">COMPANY INFO</div>
            <div className="sub-title">About Us</div>
            <div className="sub-title">adidas stories</div>
            <div className="sub-title">adidas Apps</div>
            <div className="sub-title">Entity Details</div>
            <div className="sub-title">Press</div>
            <div className="sub-title">Careers</div>
          </div>
        </div>
      </div>
      <div className="Footer-last-dv">
        <div className="Footer-last-sub-dv">
          <div className="conditions-dv">

            <div className="conditions-title">Privacy Policy </div>
            <div className="conditions-title">Terms and conditions </div>
            <div className="cookies">Cookies</div>

          </div>
          <div className="conditions-dv1" >©2021 adidas India Marketing Pvt. Ltd</div>

        </div>
      </div>
    </>
  );
}