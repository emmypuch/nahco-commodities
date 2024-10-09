import { Helmet } from "react-helmet-async";
import Header from "../../components/header/Header";
import Cta from "../../components/cta-section/Cta";
import Footer from "../../components/footer/Footer";
import ContactHero from "../../components/contact/ContactHero";
import ContactForm from "../../components/contact/ContactForm";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Nahco Commodities</title>
        <meta
          name="description"
          content="Get in touch with Nahco Commodities. We are here to help with all your inquiries."
        />
        <meta
          name="keywords"
          content="Contact, Nahco Commodities, customer support, inquiries"
        />
        <meta property="og:title" content="Contact Us - Nahco Commodities" />
        <meta
          property="og:description"
          content="Reach out to us for any inquiries or support."
        />
        <meta property="og:image" content="/path-to-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Header />
      <ContactHero />
      <ContactForm />
      <Cta />
      <Footer />
    </>
  );
};

export default Contact;
