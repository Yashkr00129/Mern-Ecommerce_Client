import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { mobile } from "../../Responsive";

const Container = styled.div`
  min-width: 350px;
  margin: 3px;
  flex: 1;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "30vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

export default function CategoryItem({ item }) {
  const navigate = useNavigate();
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button onClick={() => navigate(`/${item.redirect}`)}>SHOP NOW</Button>
      </Info>
    </Container>
  );
}
