import Header from "../../components/header/Header";
import TrustContainer from "../../components/trustee/TrustContainer";
import Services from "../../components/service-section/Services";
import Partnership from "../../components/partnership/Partnership";
import Metric from "../../components/metric-section/Metric";
import Global from "../../components/global-section/Global";
import Cta from "../../components/cta-section/Cta";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero-section/Hero";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <TrustContainer />
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
