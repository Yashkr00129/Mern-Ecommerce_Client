import React, { useState } from "react";
import styled from "styled-components";
import Announcement from "../../Layout/Announcement";
import Navbar from "../../Layout/Navbar";
import Products from "../Homepage/Products";
import NewsLetter from "../Homepage/Newsletter";
import Footer from "../../Layout/Footer";
import { useLocation, useParams } from "react-router-dom";
import { mobile } from "../../Responsive";
import { Button } from "@mui/material";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  margin-left: 20px;
  ${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-left: 20px;
  ${mobile({ margin: "10px 0" })}
`;

const Option = styled.option``;

export default function ProductList() {
  const location = useLocation();
  const params = useParams();

  const category = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({ ...filters, [e.target.name]: value });
  };

  const clearFilters = () => {
    setFilters({});
  };

  return (
    <Container>
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select
            defaultValue={"default"}
            name={"color"}
            onChange={handleFilters}
          >
            <Option disabled value="default">
              Color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>pink</Option>
            <Option>blue</Option>
            <Option>orange</Option>
          </Select>
          <Select
            defaultValue={"default"}
            name={"size"}
            onChange={handleFilters}
          >
            <Option disabled value="default">
              Size
            </Option>
            <Option>xs</Option>
            <Option>s</Option>
            <Option>m</Option>
            <Option>l</Option>
            <Option>ml</Option>
          </Select>
          <Button
            color="inherit"
            variant="outlined"
            onClick={clearFilters}
            sx={{ marginInline: "1rem" }}
          >
            Clear Filters
          </Button>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value={"newest"}>Newest</Option>
            <Option value={"asc"}>Price (asc)</Option>
            <Option value={"desc"}>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products
        cat={params.query ? undefined : category}
        filters={filters}
        sort={sort}
        search={params.query}
      />
      <NewsLetter />
      <Footer />
    </Container>
  );
}
