import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Logo = styled.img`
  width: 140px;
  /* object-fit: cover; */
  cursor: pointer;
  ${mobile({ width: "110px", height: "40px" })}
`;

export default function Footer() {
  const navigate = useNavigate();
  return (
    <Container>
      <Left>
        <Logo src={"/Logo.svg"} onClick={() => navigate("/")} />
        <Desc>
          We Black Feather (By B R Apparels, India) stepping into world on
          E-commerce from successful journey of B2B. But with your support, we
          are pretty sure that we together can make Black Feather reach to
          heights. It's a huge leap for us that we bring you the apparels for
          modern generation now on our online store. Our products are fully made
          in India and stands out most in terms of quality.
        </Desc>
        <SocialContainer>
          <SocialIcon
            color="3b5999"
            href="https://www.instagram.com/theblackfeather.in/"
          >
            <Facebook />
          </SocialIcon>
          <SocialIcon
            color="e4405f"
            href="https://www.instagram.com/theblackfeather.in/"
          >
            <Instagram />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem onClick={() => navigate("/")}>Home</ListItem>
          <ListItem onClick={() => navigate("/cart")}>Cart</ListItem>
          <ListItem onClick={() => navigate("/orders")}>My Orders</ListItem>
          <ListItem onClick={() => navigate("/shipping-policy")}>
            Shipping
          </ListItem>
          <ListItem onClick={() => navigate("/terms")}>
            Terms & Conditions
          </ListItem>
          <ListItem onClick={() => navigate("/privacy")}>Privacy</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 5/C GIDC, Nr. Ellis Pharma,
          Behrampura, Ahmedabad, 380022
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />{" "}
          info@theblackfeather.in
        </ContactItem>
      </Right>
    </Container>
  );
}
