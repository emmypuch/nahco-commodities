import { Helmet } from "react-helmet-async";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Global from "../../components/global-section/Global";
import Landscape from "../../components/landscape/Landscape";

const GlobalReach = () => {
  return (
    <>
      <Helmet>
        <title>Global Reach - Nahco Commodities</title>
        <meta
          name="description"
          content="Explore Nahco Commodities' global reach and how we are impacting the world with our services."
        />
        <meta
          name="keywords"
          content="global reach, commodities, trade, international, Nahco"
        />
        <meta property="og:title" content="Global Reach - Nahco Commodities" />
        <meta
          property="og:description"
          content="Explore Nahco Commodities' global reach and how we are impacting the world with our services."
        />
        <meta property="og:image" content="/path-to-your-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Header />
      <Global />
      <Landscape />
      <Footer />
    </>
  );
};

export default GlobalReach;
