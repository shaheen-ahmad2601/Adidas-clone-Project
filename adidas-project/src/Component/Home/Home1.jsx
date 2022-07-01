import React from "react";
import bg from "../../Assets/bg.mp4";
import "./Home1.css";

const Home1 = () => {
  return (
    // ------------------video div--------------------------
    <>
      <div className="Home-container">
        <video autoPlay loop muted>
          <source src={bg} type="video/mp4" />
        </video>

        <div className="text-wrapper">
          <h1>
            RUN FOR THE <span className="oceans">OCEANS</span>
          </h1>
          <p>
            It's time to put on your running shoes and Run For The Oceans. Every
            minute counts.
          </p>
          <button className="video-btn">
            LEARN MORE
            <i class="fa-solid fa-arrow-right-long  "></i>
          </button>
        </div>
      </div>

      {/* ------------img div------------------------ */}
      <div className="Home-container1">
        <img
          className="div1-img"
          src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enIN/Images/ParleyHPBIN_tcm209-881927.jpg"
          alt=""
        />

        <div className="text-wrapper1">
          <h1>TODAY'S ICONS, MADE FOR TOMORROW.</h1>
          <p className="introducing">
            Introducing our latest collection of icons, now made in part with
            Parley Ocean Plastic.
          </p>
          <div className="btn-container">
          <div>
            <button className="div1-btn1">SHOP MEN
            <i class="fa-solid fa-arrow-right-long  "></i>
            </button>
          </div>
          <div>
            <button className="div1-btn2">SHOP WOMEN
            <i class="fa-solid fa-arrow-right-long  "></i>
            </button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1;
