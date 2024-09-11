import { useEffect } from "react";
import TrustImg from "../../assets/svg/trust-img.svg";
import FriesLand from "../../assets/svg/friesland.svg";
import KPMG from "../../assets/svg/kpmg.svg";
import Coke from "../../assets/svg/coke.svg";
import Unilever from "../../assets/svg/unilever.svg";
import TrustLine from "../../assets/svg/trust-line.svg";
import "./TrustContainer.css";

const TrustContainer = () => {
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
    <div className="wrapper-trust relative bg-[#1D2E1F] px-[50px] w-full py-[50px] h-[600px]">
      <div className="container-context flex items-center justify-between">
        <div className="relative z-10 w-[70%] md:w-[50%] fade-in-element">
          <div className="trust-image flex fade-in-element justify-start">
            <img src={TrustImg} alt="Trust Icon" className="trustImg" />
          </div>
        </div>

        <div className="text-container relative z-10  fade-in-element">
          <p className="paragraph text-[#A6A097] font-[400] text-[16px] mb-6 leading-relaxed">
            NAHCO Commodities Limited, a subsidiary of NAHCO PLC, aims to
            revolutionize Nigeria's agricultural exports. We offer comprehensive
            solutions to simplify exporting for businesses, helping them thrive
            in the global market. Our state-of-the-art processing and packaging
            center ensures top quality products reach international
            destinations. Our mission is to be a trusted partner for navigating
            the complexities of global agricultural trade, ultimately
            contributing to Nigeria's economic growth and establishing the
            country as a major player in the global market.
          </p>

          <div className="mt-4">
            <h5 className="text-[#BAAF9F] font-[600] text-[16px] mb-4">
              Trusted by
            </h5>
            <div className="company-img flex gap-[50px] fade-in-element">
              <img src={FriesLand} alt="Friesland" className="w-[80px]" />
              <img src={KPMG} alt="KPMG" className="w-[80px]" />
              <img src={Coke} alt="Coca Cola" className="w-[80px]" />
              <img src={Unilever} alt="Unilever" className="w-[80px]" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src={TrustLine}
          alt="Trust Line Background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default TrustContainer;
