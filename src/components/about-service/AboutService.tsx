import HeroImage from "../../assets/svg/hero-image.svg";
import Fruit from "../../assets/svg/fruit.svg";
import Chart from "../../assets/svg/chart.svg";
import Warehouse from "../../assets/svg/warehouse.svg";
import Solar from "../../assets/svg/solar.svg";
import Brand from "../../assets/svg/snack.svg";
import Worktool from "../../assets/svg/worktool.svg";
import Tool from "../../assets/svg/meeting.svg";
import { useEffect } from "react";
import "./AboutService.css";
import ServiceCard from "./service-card/ServiceCard";

const services = [
  {
    image: Fruit,
    bgColor: "bg-[#263C28]",
    title: "Diverse Product Portfolio",
    description: "We handle a wide range of processed agricultural products.",
  },
  {
    image: Chart,
    bgColor: "bg-[#A99474]",
    title: "Market Expertise",
    description: "Our customers have reported an average of ~600% ROI.",
  },
  {
    image: Warehouse,
    bgColor: "bg-[#263C28]",
    title: "Logistics Management",
    description:
      "We handle packaging, documentation, transportation, and delivery for efficient export.",
  },
  {
    image: Solar,
    bgColor: "bg-[#A99474]",
    title: "State-of-the-Art Processing & Packaging",
    description:
      "Our advanced facilities ensure top-notch product handling and preservation.",
  },
  {
    image: Brand,
    bgColor: "bg-[#263C28]",
    title: "Innovative Package Design",
    description:
      "We create custom packaging solutions that stand out and protect your products.",
  },
  {
    image: Worktool,
    bgColor: "bg-[#A99474]",
    title: "Streamlined Documentation & Certification",
    description:
      "On-site government agencies and customs expertise ensure smooth export clearance.",
  },
  {
    image: Tool,
    bgColor: "bg-[#263C28]",
    title: "Agro-Export Training & Consulting",
    description:
      "We offer training programs to empower businesses and farmers for global success.",
  },
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
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
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
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.5]"></div>
          </div>
        </div>

        <div className="mt-[40px] mb-[40px] md:px-0 px-2">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              bgColor={service.bgColor}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutService;
