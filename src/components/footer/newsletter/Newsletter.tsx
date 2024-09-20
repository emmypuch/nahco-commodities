import { useEffect } from "react";
import ServiceButton from "../../buttons/ServiceButton";
import "./Newsletter.css";

const Newsletter = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in-element");
    const newsletter = document.querySelector(".newsletter");

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

    if (newsletter) {
      observer.observe(newsletter);
    }

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      if (newsletter) {
        observer.unobserve(newsletter);
      }
    };
  }, []);

  return (
    <div className="newsletter">
      {" "}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 w-full h-full p-6 md:p-12">
        <h2 className="text-[#F0FDF4] fade-in-element text-[24px] md:text-[48px] font-[600] leading-tight text-center md:text-left">
          Subscribe to Our <br /> Newsletter
        </h2>
        <div className="newsletter-contact flex fade-in-element flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
          <div>
            <input
              type="email"
              placeholder="Your Email Address"
              className="bg-[#121C07] text-[#D0D5DD] rounded-[32px] h-[48px] w-full md:w-[287px] px-[15px] text-[12px] md:text-[14px] font-[400]"
            />
          </div>
          <div>
            <ServiceButton
              backgroundColor="#FBFAF9"
              textColor="#166534"
              hoverColor="#F0FDF4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
