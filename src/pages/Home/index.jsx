import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "./Banner";
import Boxes from "./Boxes";
import Carousel from "./Carousel";
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
        <Carousel />
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
