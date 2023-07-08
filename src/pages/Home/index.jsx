import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "./Banner";
import Boxes from "./Boxes";
import Deal from "./Deal";
import Featured from "./Featured";
import FeaturedProducts from "./FeaturedProducts";
import Sperator from "./Sperator";

const HomePage = () => {
  return (
    <>
      {" "}
      <main className="main">
        <Banner />
        <Featured />
        <div className="mb-7 mb-lg-11" />
        {/* <FeaturedProducts /> */}
        <Deal />
        <div className="container">
          <div
            className="owl-carousel mt-5 mb-5 owl-simple"
            data-toggle="owl"
            data-owl-options='{
                                                        "nav": false, 
                                                        "dots": false,
                                                        "margin": 30,
                                                        "loop": false,
                                                        "responsive": {
                                                            "0": {
                                                                "items":2
                                                            },
                                                            "420": {
                                                                "items":3
                                                            },
                                                            "600": {
                                                                "items":4
                                                            },
                                                            "900": {
                                                                "items":5
                                                            },
                                                            "1024": {
                                                                "items":6
                                                            }
                                                        }
                                                    }'
          >
            <a href="#" className="brand">
              <img src="assets/images/brands/1.png" alt="Brand Name" />
            </a>
            <a href="#" className="brand">
              <img src="assets/images/brands/2.png" alt="Brand Name" />
            </a>
            <a href="#" className="brand">
              <img src="assets/images/brands/3.png" alt="Brand Name" />
            </a>
            <a href="#" className="brand">
              <img src="assets/images/brands/4.png" alt="Brand Name" />
            </a>
            <a href="#" className="brand">
              <img src="assets/images/brands/5.png" alt="Brand Name" />
            </a>
            <a href="#" className="brand">
              <img src="assets/images/brands/6.png" alt="Brand Name" />
            </a>
          </div>
        </div>
        <div className="container">
          <hr className="mt-3 mb-6" />
        </div>
        <div className="container">
          <hr className="mt-5 mb-6" />
        </div>
        <FeaturedProducts />
        <div className="container">
          <hr className="mt-5 mb-0" />
        </div>
        <Boxes />
        <Sperator />
      </main>
    </>
  );
};

export default HomePage;
