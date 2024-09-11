import { useEffect } from "react";
import Herovector from "../../assets/svg/hero-vector.svg";
import Landmark from "../../assets/svg/landmark.svg";
import "./Hero.css";
import HeroButton from "../buttons/HeroButton";
import LatestPrices from "../prices/LatestPrices";

const Hero = () => {
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
    <>
      <div>
        <div className="relative bg-[#263c28] w-full pb-8">
          <div className="absolute inset-0">
            <img
              src={Herovector}
              alt="Background Hero Vector"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="wrapper-hero relative flex justify-between items-center px-[20px] md:px-[50px] py-[70px]">
            <div className="fade-in-element">
              <h2 className="hero-heading text-[56px] font-bold text-[#E4CAA4] md:mt-0 mt-4 max-w-[600px] leading-tight">
                Your Gateway to Global Agricultural Exports
              </h2>
              <p className="text-[#C8C0B4] text-[16px] font-normal mt-2 max-w-[450px] leading-relaxed">
                We empower agro-allied businesses to thrive in the global
                marketplace.
              </p>

              <div className="mt-6">
                <HeroButton />
              </div>
            </div>

            <div className="ml-0 md:ml-8 fade-in-element">
              <img
                src={Landmark}
                alt="Landmark Image"
                className="max-w-full h-auto"
              />
            </div>
          </div>

          <div className="pl-[20px] md:pl-[50px] fade-in-element">
            <LatestPrices />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
