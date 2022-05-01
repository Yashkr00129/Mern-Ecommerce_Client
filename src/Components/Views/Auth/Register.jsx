import React, { useState } from "react";
import styled from "styled-components";
import { register, continueWithGoogle } from "../../../Store/Actions/Auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { mobile } from "../../Responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
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
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
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

export default function Register() {
  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { name, email, password, confirmPassword } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) return;
    register(email, password);
  };

  if (authState.isAuthenticated) navigate("/");
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            placeholder="name"
            name={"name"}
            value={name}
            onChange={(e) => onChange(e)}
          />
          <Input
            placeholder="email"
            name={"email"}
            value={email}
            onChange={(e) => onChange(e)}
          />
          <Input
            placeholder="password"
            name={"password"}
            value={password}
            onChange={(e) => onChange(e)}
          />
          <Input
            placeholder="confirm password"
            name={"confirmPassword"}
            value={confirmPassword}
            onChange={(e) => onChange(e)}
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={(e) => onSubmit(e)}>CREATE</Button>
        </Form>
        <OAuthBtn onClick={() => continueWithGoogle()}>
          Sign In With Google
        </OAuthBtn>
        {/* <OAuthBtn onClick={() => navigate("/phone")}>
          Sign In With Phone
        </OAuthBtn> */}
      </Wrapper>
    </Container>
  );
}
