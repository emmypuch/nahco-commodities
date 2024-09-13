import HeroImage from "../../assets/svg/hero-image.svg";
import InnovationSection from "./InnovationSection";
import NahcoCard from "./NahcoCard";

const AboutNahco = () => {
  return (
    <>
      <div className="bg-[#FBFAF9]">
        <div className="newsletter flex justify-center items-center w-full">
          <div className="relative px-[10px] md:px-[90px] py-[60px] footer-overlay w-full max-w-[1440px]">
            <img
              src={HeroImage}
              alt="Agriculture Background"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="relative z-10 w-full h-full p-6 md:p-12 flex items-center justify-center flex-col">
              <h2 className="text-[#E4CAA4] fade-in-element text-[24px] md:text-[40px] font-[600] leading-tight text-center">
                Empowering Agricultural Exports: Our Mission and Vision
              </h2>
              <p className="text-[#C8C0B4] fade-in-element px-[0] md:px-[80px] font-[400] text-[12px] md:text-[16px] mt-4 text-center">
                At NAHCO Commodities Limited, we are driven by a dual purpose:
                empowering businesses and transforming the agricultural export
                landscape in Nigeria.
              </p>
            </div>

            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.62]"></div>
          </div>
        </div>
        <NahcoCard />
      </div>
      <InnovationSection />
    </>
  );
};

export default AboutNahco;
