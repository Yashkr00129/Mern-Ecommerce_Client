import styled from "styled-components";
import Footer from "../../Layout/Footer";
import Navbar from "../../Layout/Navbar";

const Title = styled.h1`
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 400;
  color: #b33d3d;
`;

const Subtitle = styled.h2`
  margin: 1rem;
  font-weight: 400;
`;
const Data = styled.p`
  margin-bottom: 2rem;
`;
const Container = styled.div`
  margin: auto;
  width: 80%;
`;

const PageTitle = styled.h1`
  margin: 1rem;
  text-align: center;
  font-weight: 400;
  font-size: 40px;
`;

const Shipping = () => {
  return (
    <>
      <Navbar />
      <Container>
        <PageTitle>Refund/Cancellation</PageTitle>
        <Title>What should I do if my payment fails?</Title>
        <Data>
          In case there is a failure in payment, please retry and keep the
          following things in mind:
        </Data>
        <ul>
          <li>
            <Data>
              Please confirm if the information you’ve provided is correct i.e.
              account details, billing address, and password (for Net Banking);
              and that your internet connection wasn’t disrupted during the
              process.
            </Data>
          </li>
          <li>
            <Data>
              If your account has been debited even after a payment failure, it
              is normally rolled back to your bank account within 10 business
              days. For any further clarification, you can email us
              at info@theblackfeather.in
            </Data>
          </li>
        </ul>
        <Title>
          My product has been picked up but I have not got my refund yet.
        </Title>
        <ul>
          <li>
            You can apply for an exchange for your order within 7days after an
            order has been delivered. YOU NEED TO EMAIL US TO
            info@theblackfeather.in REGARDING REASON FOR RETURN. We have a
            reverse pick up facility for most pin codes.
          </li>
          <li>
            Exchanges can only be done for the same products in a different
            size. It cannot be exchanged for another design in the same product
            category or against any other product across our website.
          </li>
          <li>
            If you wish to exchange products from a combo pack, the whole pack
            will have to be sent back to us. Partial returns aren’t accepted. If
            there is a manufacturing issue, or if you have any other query
            regarding this, you can email us on info@blackfeather.in.
          </li>
          <li>
            Gift wrapping charges are non-refundable and we will not be able to
            gift wrap any exchanges requested.
          </li>
        </ul>
        <Title>Where should I self-ship the returns?</Title>
        <ul>
          <li>
            In case your pin code is non-serviceable for a reverse pick up,
            you’ll have courier the product(s) to the following address:
            <br />B R Apparels
            <br />
            5/C, GIDC, Nr. Ellis Pharma, Behrampura, Ahmedabad, Gujarat, 380022
          </li>
          <li>
            Please ensure the items are packed securely to prevent any loss or
            damage during transit. All items must be in unused condition with
            all original tags attached and packaging intact. Within 72 hours of
            receiving the product(s), the complete amount + delivery charges
            will be refunded back to your payment medium.
          </li>
        </ul>
      </Container>
      <Footer />
    </>
  );
};

export default Shipping;
