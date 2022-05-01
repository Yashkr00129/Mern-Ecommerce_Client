import Navbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { format } from "timeago.js";
import { mobile } from "../../Responsive";

const Container = styled.div`
  width: 80%;
  margin: auto;
`;

const Order = styled.div`
  background: #f8f8f8;
  border: 1px solid #c9c9c9;
  padding: 2rem;
  margin: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${mobile({ flexFlow: "column" })}
`;

const Title = styled.h1`
  font-weight: 400;
  margin-bottom: 1rem;
  border-top: 1px solid #999;
`;

const ProductImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`;
const Button = styled.button`
  padding: 1rem;
  border: none;
  color: red;
  background: #eee;
`;
const ProductContainer = styled.div``;
const ProductImgContainer = styled.div`
  display: flex;
  flex-flow: nowrap;
`;

const Data = styled.h4`
  font-weight: 400;
  margin-bottom: 1rem;
  flex: 0.1;
`;
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);
  const navigate = useNavigate();
  const handleCancel = async (id) => {
    await axios.post("api/order/request-cancel", { id });
  };

  useEffect(() => {
    const getOrders = async () => {
      const res = await axios.get("api/order/find");
      setOrders(res.data);
    };
    if (isAuthenticated) getOrders();
  }, [isAuthenticated]);

  return (
    <>
      <Navbar />
      <Container>
        {orders.map((order) => (
          <Order key={order._id}>
            <ProductContainer>
              <Data>Order Id: {order._id}</Data>
              <Data>Amount: ₹{order.amount}</Data>
              <Data>Created At: {format(order.createdAt)}</Data>
              <Data>Status: {order.status}</Data>

              <Title>Products:</Title>
              <ProductImgContainer>
                {order.products.map((product) => (
                  <ProductImg key={product._id} src={product.img} />
                ))}
              </ProductImgContainer>
            </ProductContainer>
            {!order.cancellationRequested && (
              <Button onClick={() => handleCancel(order._id)}>
                Request Cancellation
              </Button>
            )}
            {order.cancellationRequested && <Data>Cancellation Requested</Data>}
          </Order>
        ))}
      </Container>
      <Footer />
    </>
  );
};

export default Orders;
