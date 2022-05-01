import styled from "styled-components";
import Footer from "../../Layout/Footer";
import Navbar from "../../Layout/Navbar";

const Title = styled.h1`
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 400;
  color: #b33d3d;
`;
const Data = styled.p`
  margin-bottom: 2rem;
`;
const Container = styled.div`
  margin: auto;
  width: 80%;
`;

const Terms = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Title>Terms & Conditions</Title>
        <Data>
          The domain name www.theblackfeather.in (“Website”) is a site operated
          by BR Apparels, a partnership firm incorporated under laws of India
          with our registered office at 5C, GIDC, Nr Ellis Pharma, Opposite
          Khodiyar Nagar BRTS Bus Stand, Behrampura, Ahmedabad, Gujarat
          (380022), India. By using the services on the www.theblackfeather.in,
          you are agreeing to the following terms of service, conditions,
          policies, etc. (“Terms of Service”) including those available by
          hyperlink, with Black Feather (and BR Apparels), which may be updated
          by us from time to time. Please check this page regularly to take
          notice of any changes we may have made to the Terms of Service.
        </Data>
        <Title>Copyright</Title>
        <Data>
          You acknowledge, consent and agree that Black Feather may access,
          preserve, and disclose your account information and Content if
          required to do so by law or in good faith belief that such access,
          preservation, or disclosure is reasonably necessary to: (i) comply
          with legal processes; (ii) enforce the Terms of Service; (iii) respond
          to claims that any Content violates the rights of third parties; (iv)
          respond to your requests for customer service; or (v) protect the
          rights, property, or personal safety of The Black Feather, its users,
          and the public. By using services of Black Feather, you agree to
          receiving promotional or information content relevant to The Black
          Feather through the medium of SMS or Email or both. Once you place an
          order with us, you automatically get subscribed to our order related
          SMS and/Or Email notifications. Black Feather also reserves the right
          to cancel unconfirmed accounts or accounts that have been inactive for
          extended periods of time, without providing any prior notice, and at
          its sole discretion.
        </Data>
        <Title>LIABILITY</Title>
        <Data>
          We cannot guarantee continuous or secure access to our services, and
          operation of the Website may be interfered with by numerous factors
          outside of our control. Accordingly, to the extent legally permitted,
          we exclude all implied warranties, terms, and conditions related to
          use thereof. We are not liable for any loss of money, goodwill, or
          reputation, or any special, indirect, or consequential damages arising
          out of your use of the Website and services. Some jurisdictions do not
          allow the disclaimer of warranties or exclusion of damages, so such
          disclaimers and exclusions may not apply to you. You must ensure that
          your access to the Website and Black Feather service is not illegal or
          prohibited by laws that apply to you. You must take your own
          precautions to ensure that the process you employ for accessing our
          service does not expose you to the risk of viruses, malicious computer
          code, or other forms of interference which may damage own computer
          system. We do not accept responsibility for any interference or damage
          to any computer system that arises in connection with your use of the
          Website or any linked website. We do not accept liability for any
          losses arising directly or indirectly from a failure to provide any
          service, corruption to or loss of data, errors or interruptions, any
          suspension or discontinuance of service, or any transmissions by
          others in contravention of the registered members' obligations as set
          out in these Terms of Service. You acknowledge that we may not be able
          to confirm the identity of other registered users or prevent them
          acting under false pretences or in a manner that infringes the rights
          of any person.
        </Data>
        <Title>TERMINATION OF ACCOUNT</Title>
        <Data>
          The Black Feather may terminate your access to all or any part of its
          services at any time, with or without cause, with or without notice,
          effective immediately. You may terminate your use of the service at
          any time. However, you shall continue to be bound by all provisions of
          these Terms of Service, which shall survive termination, including,
          without limitation, ownership provisions, warranty disclaimers,
          indemnity, and limitations of liability. The Black Feather will
          terminate your access to the site if you are determined to be, in The
          Black Feather’s sole discretion, a repeat infringer of the Content &
          Copyright Policy and/or these Terms of Service. The Black Feather may,
          but shall not be obligated to, give you one warning if you have
          violated these Terms of Service prior to termination of your account.
          By accepting the terms and conditions, the user consents to pay The
          Black Feather complete amount for the order placed by them from The
          Black Feather However, The Black Feather does not control the amount
          charged to the user by their bank related to their purchase from The
          Black Feather, to which The Black Feather disclaims any liability in
          this regard.
        </Data>
        <Title>TRADEMARKS</Title>
        <Data>
          If you use any of our trademarks in reference to our products or
          services, you must include a statement attributing that trade mark to
          us, and only after securing prior written permission from The Black
          Feather to do so, which may be given, or refused, at its sole
          discretion, and subject to any terms or conditions it may deem fit.
          You must not use any of our trademarks in or as the whole or part of
          your own trademarks; in connection with activities, products or
          services which are not ours; in a manner which may be confusing,
          misleading or deceptive; or in a manner that disparages us or our
          information, products, or services (including this Website), or in a
          manner that implies any kind of any association/affiliation with Black
          Feather.
        </Data>
      </Container>
      <Footer />
    </>
  );
};

export default Terms;
