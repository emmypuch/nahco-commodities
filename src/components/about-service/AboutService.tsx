import HeroImage from "../../assets/svg/hero-image.svg";
import Fruit from "../../assets/svg/fruit.svg";
import Product from "../../assets/svg/product.svg";
import Chart from "../../assets/svg/chart.svg";
import Market from "../../assets/svg/market.svg";
import Warehouse from "../../assets/svg/warehouse.svg";
import Logistics from "../../assets/svg/logistics.svg";
import Solar from "../../assets/svg/solar.svg";
import Package from "../../assets/svg/package.svg";
import Brand from "../../assets/svg/brand.svg";
import Innovation from "../../assets/svg/innovation.svg";
import Worktool from "../../assets/svg/worktool.svg";
import Document from "../../assets/svg/document.svg";
import Tool from "../../assets/svg/tool.svg";
import Consult from "../../assets/svg/consult.svg";
import { useEffect } from "react";
import "./AboutService.css";

const images = [
  [Fruit, Product],
  [Chart, Market],
  [Warehouse, Logistics],
  [Solar, Package],
  [Brand, Innovation],
  [Worktool, Document],
  [Tool, Consult],
];

const AboutService = () => {
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
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <div className="newsletter flex justify-center items-center w-full">
          <div className="relative px-[10px] md:px-[90px] py-[60px] footer-overlay w-full max-w-[1440px]">
            <img
              src={HeroImage}
              alt="Agriculture Background"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="relative z-10 w-full h-full p-6 md:p-12 flex items-center justify-center flex-col">
              <h2 className="text-[#E4CAA4] fade-in-element text-[24px] md:text-[40px] font-[600] leading-tight text-center">
                Harnessing Technology for Agricultural Resilience
              </h2>
              <p className="text-[#C8C0B4] fade-in-element px-[0] md:px-[80px] font-[400] text-[12px] md:text-[16px] mt-4 text-center">
                NAHCO Commodities Limited offers a one-stop shop for businesses
                seeking to thrive in the global agricultural export market. We
                provide comprehensive solutions to streamline the entire export
                process, from initial market research to final delivery.
              </p>
            </div>

            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.65]"></div>
          </div>
        </div>

        <div className="mt-[40px] mb-[30px] md:px-0 px-6">
          {images.map((pair, index) => (
            <div
              key={index}
              className="flex fade-in-element gap-4 justify-center"
            >
              {pair.map((image, idx) => (
                <div key={idx}>
                  <img src={image} alt="" className="md:h-[400px]" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutService;
