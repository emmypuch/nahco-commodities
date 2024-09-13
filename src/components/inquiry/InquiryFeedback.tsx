import { useEffect } from "react";
import "./InquiryFeedback.css";
import Check from "../../assets/svg/check.svg";
import SuccessCheck from "../../assets/svg/success-check.svg";
import { Link } from "react-router-dom";

const InquiryFeedback = () => {
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

  const feedbackList = [
    "You can expect to receive a personalized quote within 2 business days.",
    "Our team will review your request and contact you directly to discuss your specific needs.",
    "We may request additional information to provide you with the most accurate quote.",
  ];

  return (
    <>
      <div className="bg-[#FBFAF9] px-[20px] md:px-[50px] py-[30px] min-h-screen flex items-center justify-center">
        <div className="feedback-card bg-[#fff] rounded-[24px] h-[692px] w-[1200px] flex flex-col justify-center items-center p-8">
          <div className="flex justify-center items-center mb-4">
            <img src={SuccessCheck} alt="Success" />
          </div>
          <div className="text-center">
            <h2 className="text-[#2A4A44] font-[700] text-[25px] md:text-[32px]">
              Thank you for your inquiry
            </h2>
            <p className="text-[#6B7280] text-[14px] md:text-[20px] mt-4 font-[400]">
              We've received your quote request and will process it as soon as
              possible.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {feedbackList.map((text, index) => (
              <div key={index} className="flex gap-2 items-center">
                <img src={Check} alt="Checkmark" />
                <p className="text-[12px] md:text-[14px] font-[400] text-[#6B7280]">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <h4 className="text-[20px] md:text-[24px] font-[700] text-[#208B5D]">
              Need more assistance?
            </h4>
            <p className="text-[14px] md:text-[18px] text-[#6b7280] font-[400] mt-4">
              Contact us at{" "}
              <a
                href="tel:+2348188881529"
                className="hover:underline text-[#374151] font-[500]"
              >
                +234 818 888 1529{" "}
              </a>
              or{" "}
              <a
                href="mailto:info@nahcocommodities.com"
                className="hover:underline text-[#374151] font-[500]"
              >
                info@nahcocommodities.com
              </a>
            </p>

            <div className="mt-6">
              <Link
                to="/"
                className="bg-[#263C28] text-[#fff] text-[14px] rounded-full h-[54px] w-[410px] px-[24px] transition-transform duration-300 hover:scale-105 hover:bg-[#8c7d6e] focus:outline-none focus:ring-2 focus:ring-[#E4CAA4] py-[10px]"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InquiryFeedback;
