import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SlidePanel = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

export default function Slide({ data }) {
  const navigate = useNavigate();
  return (
    <SlidePanel bg={data.bg}>
      <ImgContainer>
        <Image src={data.img} />
      </ImgContainer>
      <InfoContainer>
        <Title>{data.title}</Title>
        <Desc>{data.desc}</Desc>
        <Button onClick={() => navigate("/products")}>Shop Now</Button>
      </InfoContainer>
    </SlidePanel>
  );
}
