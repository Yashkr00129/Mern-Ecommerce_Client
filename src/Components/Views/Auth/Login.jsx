import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../../Responsive";
import {
  continueWithGoogle,
  loginWithPassword,
} from "../../../Store/Actions/Auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const OAuthBtn = styled.button`
  padding: 15px 20px;
  background: transparent;
  color: #209b87;
  cursor: pointer;
  margin: auto;
  width: 100%;
  margin-bottom: 10px;
  border: #209b87 1px solid;
`;

const Login = () => {
  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    loginWithPassword(email, password);
  };

  const handleGoogleAuthLogin = (e) => {
    e.preventDefault();
    continueWithGoogle();
  };

  if (authState.isAuthenticated) navigate("/");

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            value={email}
            placeholder="email"
            name="email"
            onChange={(e) => onChange(e)}
          />
          <Input
            password={password}
            placeholder="password"
            name="password"
            onChange={(e) => onChange(e)}
          />
          <Button onClick={(e) => onSubmit(e)}>LOGIN</Button>
          <OAuthBtn onClick={(e) => handleGoogleAuthLogin(e)}>
            Sign In With Google
          </OAuthBtn>
          {/* <OAuthBtn onClick={() => navigate("/phone")}>
            Sign In With Phone
          </OAuthBtn> */}
          <Link>DO NOT REMEMBER THE PASSWORD?</Link>
          <Link onClick={() => navigate("/register")}>
            CREATE A NEW ACCOUNT
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
