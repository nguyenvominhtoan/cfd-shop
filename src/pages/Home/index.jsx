import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "./Banner";
import Boxes from "./Boxes";
import Carousel from "./Carousel";
import Deal from "./Deal";
import Featured from "./HotProduct";
import FeaturedProducts from "./FeaturedProducts";
import Sperator from "./Sperator";
import { useHome } from "./useHome";

const HomePage = () => {
  const { productProps, hotProductProps } = useHome();
  console.log("hotProductProps", hotProductProps);
  return (
    <>
      {" "}
      <main className="main">
        <Banner />
        <Featured hotProductProps={hotProductProps} />
        <div className="mb-7 mb-lg-11" />
        {/* <FeaturedProducts {...productProps} />
        <Deal />
        <Carousel /> */}
        <div className="container">
          <hr className="mt-3 mb-6" />
        </div>
        <div className="container">
          <hr className="mt-5 mb-6" />
        </div>
        {/* <FeaturedProducts /> */}
        <div className="container">
          <hr className="mt-5 mb-0" />
        </div>
        {/* <Boxes />
        <Sperator /> */}
      </main>
    </>
  );
};

export default HomePage;
