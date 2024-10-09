import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PrivacyContent from "../../components/privacy-section/PrivacyContent";
import { Helmet } from "react-helmet-async";

const PrivacyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Nahco Commodities</title>
        <meta
          name="description"
          content="Read our privacy policy to understand how we collect, use, and protect your information at Nahco Commodities."
        />
        <meta
          name="keywords"
          content="privacy, policy, data protection, Nahco Commodities"
        />
      </Helmet>
      <Header />
      <PrivacyContent />
      <Footer />
    </>
  );
};

export default PrivacyPage;
