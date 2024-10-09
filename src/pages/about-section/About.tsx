import { Helmet } from "react-helmet-async";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AboutNahco from "../../components/about-nahco/AboutNahco";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Nahco Commodities</title>
        <meta
          name="description"
          content="Learn more about Nahco Commodities, our mission, vision, and the services we offer globally."
        />
        <meta
          name="keywords"
          content="Nahco, Commodities, About Us, Trade, Global Services"
        />
        <meta property="og:title" content="About Us - Nahco Commodities" />
        <meta
          property="og:description"
          content="Learn more about Nahco Commodities and our commitment to providing global trade services."
        />
        <meta property="og:image" content="/path-to-your-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Header />
      <AboutNahco />
      <Footer />
    </>
  );
};

export default About;
