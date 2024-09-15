import { useEffect } from "react";
import "./Services.css";
import Agro from "../../assets/svg/agro.svg";
import Bag from "../../assets/svg/bag.svg";
import Certificate from "../../assets/svg/certificate.svg";
import Containers from "../../assets/svg/containers.svg";
import strawberry from "../../assets/svg/strawberry.svg";
import Training from "../../assets/svg/training.svg";
import ServiceButton from "../buttons/ServiceButton";

const services = [
  {
    title: "Agro Commodity Trading",
    description:
      "We handle diverse agricultural products, navigate complex trade regulations, ensure quality control, and manage logistics for efficient export.",
    image: Agro,
  },
  {
    title: "Processing and Packaging",
    description:
      "Our facilities ensure top-notch packaging, processing, and quality control for your products. We offer cold storage and preservation for perishables.",
    image: strawberry,
  },
  {
    title: "Innovative Package Design",
    description:
      "We create custom packaging solutions that prioritize functionality, protection, and brand identity, while adhering to eco-friendly practices.",
    image: Bag,
  },
  {
    title: "Export Documentation",
    description:
      "On-site government agencies, customs clearance expertise, meticulous documentation, and coordinated transport ensure a smooth process.",
    image: Containers,
  },
  {
    title: "Certification",
    description:
      "Effortless export is our promise. We meticulously handle all export documentation to ensure complete compliance. Smooth procedures and minimal delays.",
    image: Certificate,
  },
  {
    title: "Training & Consulting",
    description:
      "We offer government consulting, farmer training, export compliance training, and market entry strategies to equip you for global success.",
    image: Training,
  },
];

const Services = () => {
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
      <div className="bg-white py-12 px-[20px] md:px-[50px]">
        <h2 className="text-[#166534] font-[700] text-[28px] md:text-[36px] text-center mb-10 fade-in-element">
          Providing High Quality Products and <br /> Services
        </h2>
        <div className="max-w-[900px] mx-auto grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 w-[340px] h-[488px] md:w-[280px] rounded-lg overflow-hidden shadow-lg flex flex-col justify-between fade-in-element card-container"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex-grow">
                <h3 className="title text-[#2A6F4A] font-[700] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#667085] text-[16px] font-[400] mb-4">
                  {service.description}
                </p>
              </div>
              <div className="p-4">
                <a
                  href="#"
                  className="text-[#56B870] hover:text-green-800 font-[400] text-[16px]"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-8">
          <ServiceButton
            backgroundColor="#315033"
            textColor="#E1CFB4"
            hoverColor="#8c7d6e"
          />
        </div>
      </div>
    </>
  );
};

export default Services;
