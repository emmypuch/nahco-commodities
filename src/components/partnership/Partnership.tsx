import "./Partnership.css";
// import PartnershipImage from "../../assets/svg/partnerimg.svg";
// import PLC from "../../assets/svg/plc.svg";
// import FTZ from "../../assets/svg/ftz.svg";
// import Logistics from "../../assets/svg/management.svg";
// import Commodities from "../../assets/svg/nahco-logistics.svg";
import Herovector from "../../assets/svg/hero-vector.svg";
import TrustLine from "../../assets/svg/trust-line.svg";
import { useEffect } from "react";
import NahcoDiagram from "./nahco-diagram/NahcoDiagram";
// import { Link } from "react-router-dom";

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
        <div>
          <NahcoDiagram />
        </div>
        {/* <div className="px-[20px] md:px-[50px] pb-[50px] md:pb-[20px]">
          <div className="text-img items-center flex-col flex justify-center py-[30px] px-[50px] md:px-[50px] fade-in-element">
            <div className="plc-img relative top-[0px] md:left-[1px]">
              <Link to="https://www.nahcoaviance.com/" className="">
                <img src={PLC} alt="" className="" />
              </Link>
            </div>
            <div className="absolute mt-[95px]">
              <img src={PartnershipImage} alt="Nahco image" />
            </div>
            <div className="relative flex justify-between gap-[15px] md:gap-[30px] bottom-[-100px]">
              <div className="ftz-img relative md:right-[100px] mt-[20px]">
                <Link to="https://www.nfz.com.ng/">
                  <img src={FTZ} alt="" className="" />
                </Link>
              </div>
              <div className="commodity-img absolute md:left-[95px]">
                <Link to="https://mainlandcargooptions.com/">
                  <img src={Commodities} alt="" className=" mt-[20px]" />
                </Link>
              </div>
              <div className="logistics-img relative md:left-[130px] mt-[20px]">
                <Link to="https://www.nahcoaviance.com/aboutnms/">
                  <img src={Logistics} alt="" className="" />
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Partnership;
