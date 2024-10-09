import { Helmet } from "react-helmet-async";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AboutService from "../../components/about-service/AboutService";

const Service = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - Nahco Commodities</title>
        <meta
          name="description"
          content="Explore our wide range of premium services at Nahco Commodities, designed to meet all your business needs."
        />
        <meta
          name="keywords"
          content="commodities, global services, trade, business solutions"
        />
        <meta property="og:title" content="Our Services - Nahco Commodities" />
        <meta
          property="og:description"
          content="Discover the premium services we offer at Nahco Commodities."
        />
        <meta property="og:image" content="/path-to-your-service-image.jpg" />
        <meta
          property="og:url"
          content="https://nahcocommodities.com/service"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Header />
      <AboutService />
      <Footer />
    </>
  );
};

export default Service;
