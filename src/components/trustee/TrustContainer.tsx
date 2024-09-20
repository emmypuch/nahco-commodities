import { useEffect } from "react";
import TrustImg from "../../assets/svg/trust-img.svg";
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
    <div className="wrapper-trust relative bg-[#1D2E1F] px-[20px] md:px-[50px] w-full pt-[80px] md:py-[50px]">
      <div className="container-context flex items-center justify-center">
        <div className="relative z-10 w-[70%] md:w-[50%] fade-in-element">
          <div className="trust-image flex justify-start fade-in-element">
            <img src={TrustImg} alt="Trust Icon" className="trustImg" />
          </div>
        </div>

        <div className="text-container relative z-10 ml-0 md:ml-[40px] fade-in-element">
          <p className="paragraph text-[#A6A097] text-justify font-[400] text-[16px] mb-6 leading-relaxed">
            NAHCO Commodities Limited, a subsidiary of NAHCO PLC, aims to
            revolutionize Nigeria's agricultural exports. We offer comprehensive
            solutions to simplify exporting for businesses, helping them thrive
            in the global market. Our state-of-the-art processing and packaging
            center ensures top-quality products reach international
            destinations. Our mission is to be a trusted partner for navigating
            the complexities of global agricultural trade, ultimately
            contributing to Nigeria's economic growth and establishing the
            country as a major player in the global market.
          </p>
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
