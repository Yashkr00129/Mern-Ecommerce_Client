import React, { useState } from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { logOut } from "../../Store/Actions/Auth";
import { mobile } from "../Responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  /* ${mobile({ display: "none" })} */
`;

// const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;
//   ${mobile({ display: "none" })}
// `;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

// const Logo = styled.h1`
//   font-weight: bold;
//   ${mobile({ fontSize: "16px" })}
// `;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 1, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Logo = styled.img`
  width: 140px;
  /* object-fit: cover; */
  cursor: pointer;
  ${mobile({ width: "110px", height: "40px" })}
`;

export default function Navbar() {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const handleSearchClick = () => {
    navigate(`/products/search/${search}`);
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search
              style={{ color: "gray", fontSize: 16, cursor: "pointer" }}
              onClick={() => handleSearchClick()}
            />
          </SearchContainer>
        </Left>
        <Center>
          {/* <Logo onClick={() => navigate("/")} src={"./Logo.png"}>
            Black Feather
          </Logo> */}
          <Logo src={"/Logo.svg"} onClick={() => navigate("/")} />
        </Center>
        <Right>
          {!auth.isAuthenticated && (
            <>
              <MenuItem onClick={() => navigate("/login")}>Log In</MenuItem>
            </>
          )}
          <MenuItem onClick={() => navigate("/cart")}>
            Cart
          </MenuItem>
          {auth.isAuthenticated && (
            <>
              <MenuItem onClick={() => navigate("/orders")}>My Orders</MenuItem>
              <MenuItem onClick={logOut}>Log Out</MenuItem>
            </>
          )}
        </Right>
      </Wrapper>
    </Container>
  );
}
