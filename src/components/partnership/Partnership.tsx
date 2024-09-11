import "./Partnership.css";
import PartnershipImage from "../../assets/svg/partnership.svg";
import Herovector from "../../assets/svg/hero-vector.svg";
import TrustLine from "../../assets/svg/trust-line.svg";
import { useEffect } from "react";

const Partnership = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in-element");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="container bg-[#263c28]">
      <div className="fade-in-element background-images">
        <img className="hero-vector" src={Herovector} alt="Hero vector" />
        <img className="trust-line" src={TrustLine} alt="Trust line" />
      </div>
      <div className="fade-in-element text-content">
        <h2 className="text-[#B19D7F] text-[36px] font-[600] text-center">
          Strategic Partnerships
        </h2>
        <p className="text-[14px] md:text-[16px] font-[400] text-[#A6A097] text-center mt-2">
          NAHCO Commodities leverages strong partnerships to provide a
          comprehensive export solution. The parent company, NAHCO PLC, ensures
          reliable logistics with established relationships with major carriers.
          The NAHCO Free Trade Zone (NFZ) offers clients cost-effective storage
          and operational services. Additionally, NAHCO Logistics Services
          Limited, a licensed customs agent, provides efficient import and
          export handling thanks to their strong relationships with relevant
          authorities.
        </p>
        <div className="text-img fade-in-element">
          <img src={PartnershipImage} alt="Nahco image" />
        </div>
      </div>
    </div>
  );
};

export default Partnership;
