import { Helmet } from "react-helmet-async";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import InquiryFeedback from "../../components/inquiry/InquiryFeedback";

const Inquiry = () => {
  return (
    <>
      <Helmet>
        <title>Inquiry - Nahco Commodities</title>
        <meta
          name="description"
          content="Submit your inquiries to Nahco Commodities and our team will get back to you as soon as possible."
        />
        <meta
          name="keywords"
          content="Nahco, Commodities, Inquiry, Feedback, Services"
        />
      </Helmet>
      <Header />
      <InquiryFeedback />
      <Footer />
    </>
  );
};

export default Inquiry;
