import "./Partnership.css";
import PartnershipImage from "../../assets/svg/partnerimg.svg";
import PLC from "../../assets/svg/plc.svg";
import FTZ from "../../assets/svg/ftz.svg";
import Logistics from "../../assets/svg/partner-logistics.svg";
import Commodities from "../../assets/svg/commodities.svg";
import Herovector from "../../assets/svg/hero-vector.svg";
import TrustLine from "../../assets/svg/trust-line.svg";
import { useEffect } from "react";
import { Link } from "react-router-dom";

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
    <div className="container-partnership bg-[#263c28] px-[20px] md:px-[50px]">
      <div className="fade-in-element background-images">
        <img className="hero-vector" src={Herovector} alt="Hero vector" />
        <img className="trust-line" src={TrustLine} alt="Trust line" />
      </div>
      <div className="fade-in-element text-content">
        <h2 className="text-[#B19D7F] text-[24px] md:text-[36px] font-[600] text-center">
          Strategic Partnerships
        </h2>
        <p className="text-[14px] md:text-[16px] font-[400] text-[#A6A097] text-justify mt-2">
          NAHCO Commodities leverages strong partnerships to provide a
          comprehensive export solution. The parent company, NAHCO PLC, ensures
          reliable logistics with established relationships with major carriers.
          The NAHCO Free Trade Zone (NFZ) offers clients cost-effective storage
          and operational services. Additionally, NAHCO Logistics Services
          Limited, a licensed customs agent, provides efficient import and
          export handling thanks to their strong relationships with relevant
          authorities.
        </p>
        <div className="px-[20px] md:px-[50px] py-[30px]">
          <div className="text-img flex justify-center fade-in-element">
            <div className="plc-img relative top-[8px] left-[85px] md:left-[115px]">
              <Link to="https://www.nahcoaviance.com/" className="">
                <img src={PLC} alt="" className="w-[70px] md:w-[100px]" />
              </Link>
            </div>
            <div className="absolute mt-[60px]">
              <img src={PartnershipImage} alt="Nahco image" />
            </div>
            <div className="relative flex justify-between gap-[30px] bottom-[-100px]">
              <div className="ftz-img relative right-[150px] md:right-[165px] mt-[60px]">
                <Link to="https://www.nfz.com.ng/">
                  <img src={FTZ} alt="" className="w-[70px] md:w-[100px]" />
                </Link>
              </div>
              <div className="logistics-img relative left-[90px] md:left-[70px] mt-[60px]">
                <Link to="https://mainlandcargooptions.com/">
                  <img
                    src={Logistics}
                    alt=""
                    className="w-[70px] md:w-[100px]"
                  />
                </Link>
              </div>
              <div className="commodity-img absolute left-[20px] ">
                <Link to="https://www.nahcoaviance.com/aboutnms/">
                  <img
                    src={Commodities}
                    alt=""
                    className="w-[70px] md:w-[100px] mt-[60px]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
