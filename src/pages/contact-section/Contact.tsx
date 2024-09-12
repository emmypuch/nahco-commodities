import Header from "../../components/header/Header";
import Cta from "../../components/cta-section/Cta";
import Footer from "../../components/footer/Footer";
import ContactHero from "../../components/contact/ContactHero";
import ContactForm from "../../components/contact/ContactForm";

const Contact = () => {
  return (
    <>
      <Header />
      <ContactHero />
      <ContactForm />
      <Cta />
      <Footer />
    </>
  );
};

export default Contact;
