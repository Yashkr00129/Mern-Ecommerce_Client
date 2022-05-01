import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function ({ cat, filters, sort, search }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        let res = !cat && (await axios.get("api/product"));
        if (cat) res = await axios.get(`api/product?category=${cat}`);

        if (search) {
          res = await axios.get(`api/product?search=${search}`);
        }

        await setProducts(res.data);
      } catch {}
    };
    getProducts();
  }, [cat, search]);
  useEffect(() => {
    if (search || cat)
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
    else setFilteredProducts(products);
  }, [cat, filters, products]);
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    }
    if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    }
    if (sort === "desc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  console.log(products);
  return (
    <>
      <Container>
        {filteredProducts.map((item) => (
          <Product item={item} key={item._id} />
        ))}{" "}
      </Container>
    </>
  );
}
