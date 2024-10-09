import { Helmet } from "react-helmet-async";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import NahcoTeam from "../../components/team-section/NahcoTeam";

const Team = () => {
  return (
    <>
      <Helmet>
        <title>Our Team - Nahco Commodities</title>
        <meta
          name="description"
          content="Meet the expert team behind Nahco Commodities who drive our mission forward."
        />
        <meta
          name="keywords"
          content="Nahco team, commodities experts, leadership"
        />
        <meta property="og:title" content="Our Team - Nahco Commodities" />
        <meta
          property="og:description"
          content="Get to know the skilled professionals at Nahco Commodities."
        />
        <meta property="og:image" content="/path-to-team-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Header />
      <NahcoTeam />
      <Footer />
    </>
  );
};

export default Team;
