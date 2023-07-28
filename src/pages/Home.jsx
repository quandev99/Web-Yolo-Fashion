import React from "react";
import Helmet from "../components/helmet";
import Slider from "../components/slider";
import sliderData from "../assets/fake-data/slider";
const Home = () => {
  return (
    <Helmet title="Trang chủ">
      {/* hero slider */}
      <Slider
        data={sliderData}
        control={true}
        auto={false}
        timeOut={5000}
      ></Slider>
      {/*end hero slider */}
    </Helmet>
  );
};

export default Home;
