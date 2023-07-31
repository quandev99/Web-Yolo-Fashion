import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Grid from "../grid";
import ProductCard from "../productCard";
const InfinityList = (props) => {
  const perLoad = 6;
  const listRef = useRef(null);
  const products = props.data;
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [index, setIndex] = useState(1);

  // useEffect(() => {
  //   setData(products.slice(0, perLoad));
  //   setIndex(1);
  // }, [products]);

  useEffect(() => {
    const handleScroll = () => {
      if (listRef && listRef.current) {
        // Kiểm tra trước khi truy cập thuộc tính clientHeight
        if (
          window.scrollY + window.innerHeight >=
          listRef.current.clientHeight + listRef.current.offsetTop + 200
        ) {
          setLoad(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [listRef]);

  const getItems = React.useCallback(() => {
    const pages = Math.floor(products.length / perLoad);
    const maxIndex = products.length % perLoad === 0 ? pages : pages + 1;
    if (load && index <= maxIndex) {
      const start = perLoad * index;
      const end = start + perLoad;
      setData((prevData) => prevData.concat(products.slice(start, end)));
      setIndex((prevIndex) => prevIndex + 1);
    }
  }, [products, index, load]);

  useEffect(() => {
    if (load) {
      getItems();
      setLoad(false);
    }
  }, [load, getItems]);
  return (
    <div ref={listRef}>
      <Grid col={3} mdCol={2} smCol={2} gap={20}>
        {data.map((item, index) => (
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
    </div>
  );
};

InfinityList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default InfinityList;
