import React, { useEffect, useRef } from "react";
import GroupLine from "../../../assets/svg/group-line.svg";
import "./ServiceCard.css";

interface ServiceCardProps {
  image: string;
  bgColor: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  bgColor,
  title,
  description,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

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
    <div
      ref={cardRef}
      className="service-images-layout flex flex-col justify-center md:flex-row gap-6 px-6 md:px-0 mb-0 fade-in-element"
    >
      <div className="flex justify-center items-center w-full md:w-[583px] md:h-[563px]">
        <img
          src={image}
          alt={title}
          className="w-[150px] h-[150px] md:w-full md:h-full object-contain"
        />
      </div>
      <div className={`relative ${bgColor} w-[583px] h-[563px] p-4`}>
        <div className="absolute top-0 left-0 w-full h-full z-10">
          <img src={GroupLine} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20 flex flex-col justify-center items-center h-full p-4">
          <h3 className="text-[#F9FAFB] text-[16px] md:text-[20px] font-[600] mb-2 text-center">
            {title}
          </h3>
          <p className="text-[#E5E7EB] font-[400] text-[12px] md:text-[16px] text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
