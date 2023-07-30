import React from "react";
import Helmet from "../components/helmet";
import Slider from "../components/slider";
import sliderData from "../assets/fake-data/slider";
import { Section, SectionBody, SectionTitle } from "../components/section";
import PolicyCard from "../components/policyCard";
import policy from "../assets/fake-data/policy";
import Grid from "../components/grid";
import productData from "../assets/fake-data/products";
import { Link } from "react-router-dom";
import ProductCard from "../components/productCard";
import banner from "../assets/images/banner.png";

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
      {/*Section */}
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map((item, index) => (
              <Link to="/policy" key={index}>
                <PolicyCard
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                ></PolicyCard>
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/*end Section */}

      {/*best selling section*/}
      <Section>
        <SectionTitle>Top sản phẩm bán chạy trong</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(4).map((item, index) => (
              <ProductCard
                key={index}
                image01={item.image01}
                image02={item.image02}
                price={Number(item.price)}
                title={item.title}
                slug={item.slug}
              ></ProductCard>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/*end best selling section */}

      {/*new arrival section */}
      <Section>
        <SectionTitle>Sản phẩm mới nhất</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(8).map((item, index) => (
              <ProductCard
                key={index}
                image01={item.image01}
                image02={item.image02}
                price={Number(item.price)}
                title={item.title}
                slug={item.slug}
              ></ProductCard>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/*end new arrival section */}

      {/*banner */}
      <Section>
        <SectionBody>
          <Link to="/catalog">
            <img src={banner} alt="" />
          </Link>
        </SectionBody>
      </Section>
      {/*end banner */}

      {/*popular product section */}
      <Section>
        <SectionTitle>Phổ biến</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(8).map((item, index) => (
              <ProductCard
                key={index}
                image01={item.image01}
                image02={item.image02}
                price={Number(item.price)}
                title={item.title}
                slug={item.slug}
              ></ProductCard>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/*end popular product section */}
    </Helmet>
  );
};

export default Home;
