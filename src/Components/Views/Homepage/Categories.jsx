import React from "react";
import styled from "styled-components";
import { categories } from "./data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../../Responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
  ${mobile({ padding: "0px", flexDirection: "column", flexWrap: "wrap" })}
`;

const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  margin-top: 1rem;
  ${mobile({ display: "none" })}
`;

export default function Categories() {
  return (
    <>
      <Title>Categories</Title>
      <Container>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
}
