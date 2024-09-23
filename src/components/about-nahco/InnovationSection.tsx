import "../../components/about-nahco/AboutNahco.css";
import Registration from "../../assets/svg/registration.svg";
import Carbon from "../../assets/svg/carbon.svg";
import Analytics from "../../assets/svg/analytics.svg";
import Payment from "../../assets/svg/payment.svg";
import Communication from "../../assets/svg/communication.svg";
import Fluent from "../../assets/svg/fluent.svg";
import { useEffect } from "react";

const items = [
  {
    imgSrc: Registration,
    title: "1. Tailored Approach",
    description:
      "We tailor solutions to your unique business needs for maximum export success.",
  },
  {
    imgSrc: Carbon,
    title: "2. Building Long-Term Partnerships",
    description:
      "Beyond services, we foster long-term global partnerships for growth.",
  },
  {
    imgSrc: Analytics,
    title: "3. Unwavering Commitment to Quality",
    description:
      "Our rigorous quality control ensures your products meet global standards.",
  },
  {
    imgSrc: Payment,
    title: "4. Agronomic Advisory for Farmers",
    description:
      "Our platform offers farmers agronomic advice for optimal yields and resilience.",
  },
  {
    imgSrc: Communication,
    title: "5. Transparency and Communication",
    description:
      "We maintain open communication and provide real-time updates. Our team is always available to assist.",
  },
  {
    imgSrc: Fluent,
    title: "6. Expert Guidance",
    description:
      "Our experienced team guides you through international trade, ensuring a smooth process.",
  },
];

const InnovationSection = () => {
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
    <div className="bg-[#fff] px-[20px] py-[20px] md:px-[70px] md:py-[40px]">
      <div className="">
        <div className="bg-[#fff] px-[20px] py-[20px] md:px-[70px] md:py-[40px]">
          <div className="flex justify-center">
            <div className="max-w-[900px]">
              <h2 className="font-[700] text-[25px] md:text-[40px] fade-in-element text-[#1F2937] text-center">
                <span className="text-[#5AC777]">Our Approach </span>
                <br />
                Integrating innovative technology and data-driven insights
              </h2>
              <p className="text-[#667085] text-[14px] fade-in-element md:text-[16px] font-[400] mt-6 md:mt-4 md:text-center text-justify">
                At NAHCO Commodities, our approach integrates innovative
                technology and data-driven insights to deliver accessible, and
                effective export solutions for agro-commodities.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#fff] px-[20px] py-[20px] md:px-[70px] md:py-[40px]">
          <div className="flex justify-center">
            <div className="innovation-layout px-[10px] md:px-[60px] mt-[30px]">
              <div className="">
                <div className="innovation-card flex gap-[30px] md:gap-[30px]">
                  {items.slice(0, 3).map((item, index) => (
                    <div key={index} className="mt-[20px]">
                      <div className="flex justify-center items-center md:block">
                        <img
                          src={item.imgSrc}
                          alt={item.title}
                          className="fade-in-element"
                        />
                      </div>
                      <div>
                        <ol className="nahco-lists">
                          <h6 className="text-[20px] fade-in-element font-[600] text-[#1F2937] mt-4">
                            {item.title}
                          </h6>
                          <p className="text-[#667085] fade-in-element text-[16px] font-[400] mt-4">
                            {item.description}
                          </p>
                        </ol>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="">
                <div className="innovation-card flex gap-[20px] md:gap-[30px]">
                  {items.slice(3).map((item, index) => (
                    <div key={index} className="mt-[50px] md:mt-[80px]">
                      <div className="flex justify-center items-center md:block">
                        <img
                          src={item.imgSrc}
                          alt={item.title}
                          className="fade-in-element"
                        />
                      </div>
                      <div>
                        <ol className="nahco-lists">
                          <h6 className="text-[20px] fade-in-element font-[600] text-[#1F2937] mt-4">
                            {item.title}
                          </h6>
                          <p className="text-[#667085] fade-in-element text-[16px] font-[400] mt-4 ">
                            {item.description}
                          </p>
                        </ol>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationSection;
