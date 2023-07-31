import React from "react";
import Helmet from "../components/helmet";
import { Section, SectionTitle, SectionBody } from "../components/section";
import Grid from "../components/grid";

import ProductCard from "../components/productCard";
import productData from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import ProductDetail from "../components/product";
const Product = (props) => {
  const { slug } = useParams();
  const product = productData.getProductBySlug(slug);
  const relateProduct = productData.getProducts(4);
  // React.useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [product]);
  return (
    <Helmet title={product?.title}>
      <Section>
        <SectionBody>
          <ProductDetail product={product}></ProductDetail>
        </SectionBody>
        <Section>
          <SectionTitle>khám phá thêm</SectionTitle>
          <SectionBody>
            <Grid col={4} mdCol={2} smCol={1} gap={20}>
              {relateProduct.map((item, index) => (
                <ProductCard
                  key={index}
                  image01={item.image01}
                  image02={item.image02}
                  title={item.title}
                  price={Number(item.price)}
                  slug={item.slug}
                ></ProductCard>
              ))}
            </Grid>
          </SectionBody>
        </Section>
      </Section>
    </Helmet>
  );
};

export default Product;
