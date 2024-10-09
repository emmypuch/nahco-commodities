import { Helmet } from "react-helmet-async";
import Header from "../../components/header/Header";
import TrustContainer from "../../components/trustee/TrustContainer";
import Services from "../../components/service-section/Services";
import Partnership from "../../components/partnership/Partnership";
import Metric from "../../components/metric-section/Metric";
import Global from "../../components/global-section/Global";
import Cta from "../../components/cta-section/Cta";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero-section/Hero";
import TrustedBy from "../../components/trustedby-section/TrustedBy";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Nahco Commodities</title>
        <meta
          name="description"
          content="Welcome to Nahco Commodities, providing premium services and global reach in the commodities industry."
        />
        <meta
          name="keywords"
          content="commodities, global services, trading, trusted partners, logistics"
        />
        <meta property="og:title" content="Home - Nahco Commodities" />
        <meta
          property="og:description"
          content="Discover premium services and global reach with Nahco Commodities."
        />
        <meta property="og:image" content="/path-to-your-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Header />
      <Hero />
      <TrustContainer />
      <TrustedBy />
      <Services />
      <Partnership />
      <Metric />
      <Global />
      <Cta />
      <Footer />
    </>
  );
};

export default Home;
