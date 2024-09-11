import Plant from "../../assets/svg/plant.svg";
import Weather from "../../assets/svg/weather.svg";
import "../about-nahco/AboutNahco.css";

const NahcoCard = () => {
  return (
    <>
      <div className="px-[50px] py-[30px]">
        <div className="nahco-wrapper flex justify-center items-center gap-4">
          <div className="nahco-card p-6 border border-[#E5E7EB] rounded-[8px] h-[529px] w-[583px]">
            <img src={Plant} alt="" />
            <h4 className="text-[20px] md:text-[24px] font-[700] text-[#263C28] mt-4">
              Our Mission: Unleashing Global Potential
            </h4>
            <p className="text-[#667085] text-[14px] md:text-[16px] font-[400] mt-4">
              We are dedicated to empowering businesses to thrive in the
              exciting world of international trade. We achieve this by
              providing comprehensive export solutions as a service. We simplify
              complex processes, leverage our expertise and technology, and
              utilize our global network to enable a seamless experience for
              businesses venturing into new markets.
            </p>
          </div>

          <div className="nahco-card p-6 border border-[#E5E7EB] rounded-[8px] h-[529px] w-[583px]">
            <img src={Weather} alt="" />
            <h4 className="text-[20px] md:text-[24px] font-[700] text-[#263C28] mt-4">
              The Trusted Partner for Global Success
            </h4>
            <p className="text-[#667085] text-[14px] md:text-[16px] font-[400] mt-4">
              Our vision is to become the trusted partner that businesses rely
              on to navigate the complexities of global commerce. We achieve
              this by focusing on three core pillars:
            </p>
            <p className="text-[#667085] text-[14px] md:text-[16px] font-[400] mt-4">
              <span className="text-[#263C28]">Innovation: </span>
              We continuously seek innovative solutions to streamline export
              processes and stay ahead of industry trends, ensuring our clients'
              success in the global market.
            </p>
            <p className="text-[#667085] text-[14px] md:text-[16px] font-[400] mt-4">
              <span className="text-[#263C28]">Customization: </span>
              We understand that every business is unique. We tailor our
              solutions to your specific needs and products, ensuring a
              successful export journey. Reliability: We are committed to
              providing reliable, high-quality services that consistently meet
              and exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NahcoCard;
