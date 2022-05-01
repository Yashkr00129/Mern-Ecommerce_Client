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

const Privacy = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Title>SHIPPING POLICY</Title>
        <Data>
          This privacy policy (“Policy”) sets out how The Black Feather. (“The
          Black Feather”, also identified by “we” or “us” or “our”) uses and
          protects any information that you give us when you use this website.
          We are committed to ensuring that your privacy is protected. Should we
          ask you to provide any information by which you can be identified when
          using this website, be rest assured that it will only be used strictly
          in accordance with this Policy. Please note that our Policy is subject
          to change at any time, and we may not be able to provide you prior
          notice. To ensure you are up to date with the Policy, please review
          this page periodically. This Policy applies to current and former
          visitors and customers of our website. By visiting and/or using our
          website, you are accepting and consenting to the practices described
          in this Policy.
        </Data>
        <Title>What information do we collect?</Title>
        <Data>
          We learn, collect, and store your personal information (that we
          consider necessary) when you use our website. We use this information
          to provide you with a safe, efficient, smooth, and customised
          experience, which includes, without limitation, displaying content
          such as recommended products that might interest you and communicating
          with you about your orders, new products, and latest promotional
          offers. This allows us to provide specific services and features that
          most likely meet your needs, customise our website to make your
          experience safer and easier, and enable third parties to carry out
          technical, logistical, and other functions on our behalf.
        </Data>
        <Title>Here are the types of information we gather:</Title>
        <Subtitle>1) Information you provide us</Subtitle>
        <Data>
          We receive and store the information you explicitly provide to us.
          This includes personal information such as your user name along with
          your password, your name, address, telephone number, e-mail address
          and other contact information, date of birth, gender, financial
          information such as bank account information, credit/debit card or
          other payment instrument details and any other information that you
          provide during your time on the website. You may choose not to provide
          certain information, but this could prevent you from taking full
          advantage of our website’s various features.
        </Data>
        <Subtitle>2) Information collected automatically</Subtitle>
        <Data>
          Whenever you interact with our website, we automatically receive,
          record, and analyse information from your browser or device, which
          includes, without limitation, your IP address, geolocation data,
          device identification, “cookie” information, the type of browser
          and/or device you’re using to access our website, information about
          your mobile device, including a unique identifier for your device and
          purchase history; which we sometimes aggregate with similar
          information from other customers to create features such as
          best-selling products, products you viewed or searched for, products
          you may like. We may also use browser data such as cookies, flash
          cookies, or similar data on certain parts of our website. We may use
          software tools such as JavaScript to measure and collect session
          information, including page response times, download errors, length of
          visits to certain pages, page interaction information (such as
          scrolling, clicks, and mouse-overs), and methods used to browse away
          from the page. We use this information for internal analysis and to
          provide you with location-based services, such as advertising, search
          results, and other personalised content, to give you the best possible
          shopping experience on our website.
        </Data>
        <Title>How do we use cookies?</Title>
        <Data>
          A cookie is a small file that we, after obtaining your permission,
          transfer to your computer’s hard drive through your web browser. This
          file helps us recognise your browser and respond to you as an
          individual, as well as provide personalised features and
          advertisements based on your needs, likes, dislikes and behaviour on
          our website. You can choose to accept or decline cookies. The help
          menu on most browsers will tell you how to prevent the browser from
          accepting new cookies and deleting/ disabling existing cookies.
          However, disabling/ deleting our cookies could prevent you from taking
          full advantage of our website’s various features.
        </Data>
        <Title>Your Information is secure with us</Title>
        <Data>
          The security of your information is very important to us. We use
          adequate security policies, rules, and technical measures, as required
          under applicable law, to safeguard and protect your information from
          unauthorised access, improper use or disclosure, unauthorised
          modification, and unlawful destruction or accidental loss. However, we
          shall not be responsible for any breach of security or for any action
          of any third parties that receive users’ personal data or events that
          are beyond our reasonable control including acts of government,
          computer hacking, unauthorised access to computer data and storage
          devices, computer crashes, breach of security and encryption, etc.
        </Data>
        <Title>Customer Choices</Title>
        <ul>
          <li>
            <Data>
              You can add, correct, update, modify or review your personal
              information on a regular basis. However, whenever you update
              information, we usually keep a copy of the previous version for
              our records.
            </Data>
          </li>
          <li>
            <Data>
              If you do not want to receive emails or messages from us, please
              get in touch with our customer care team to de-list your e-mail ID
            </Data>
          </li>
          <li>
            You can choose to not provide your personal information or consent
            for usage of your personal information, subsequently withdraw your
            consent or ask for deletion of your personal information. However,
            this might not allow you to take full advantage of the features of
            our website.
          </li>
        </ul>
        <Title>Links to other websites</Title>
        <Data>
          Our website may contain third-party advertising and links to other
          websites. Once you use these links to leave our website, we do not
          have any control over that website. Hence, any information you share
          whilst visiting such sites is not governed by this Policy and we would
          not be responsible for the protection/ privacy of such information.
        </Data>
        <Title>Any grievances regarding this Privacy Policy? Contact Us</Title>
        <Data>
          If you have any questions or feedback regarding this Policy, you may
          contact us using the information below:
        </Data>
        Name: Rahul Rupani
        <br />
        Email: info@theblackfeather.in
        <br />
        Timing: Monday to Saturday- 10 am to 5 pm
        <br />
      </Container>
      <Footer />
    </>
  );
};

export default Privacy;
