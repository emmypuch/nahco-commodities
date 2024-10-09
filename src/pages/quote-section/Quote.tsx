import { Helmet } from "react-helmet-async";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import QuoteForm from "../../components/quote/QuoteForm";

const Quote = () => {
  return (
    <>
      <Helmet>
        <title>Request a Quote - Nahco Commodities</title>
        <meta
          name="description"
          content="Request a quote for our services at Nahco Commodities. Get the best rates for your commodity needs."
        />
        <meta
          name="keywords"
          content="quote, commodities, pricing, Nahco services"
        />
        <meta
          property="og:title"
          content="Request a Quote - Nahco Commodities"
        />
        <meta
          property="og:description"
          content="Request a quote for your commodity needs and get the best services from Nahco Commodities."
        />
        <meta property="og:image" content="/path-to-your-quote-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Header />
      <QuoteForm />
      <Footer />
    </>
  );
};

export default Quote;
