import BackButton from "../back-button/BackButton";
import Form from "../../components/quote/Form";
import { useEffect } from "react";
import "./QuoteForm.css";

const QuoteForm = () => {
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
      <div className="quote-wrapper px-[20px] md:px-[50px] py-[30px] fade-in-element">
        <BackButton />
        <div className="text-center">
          <h2 className="text-[#166534] text-[28px] md:text-[36px] md:mt-0 mt-4 font-[700]">
            Get a Quote
          </h2>
          <p className="text-[#4B5563] text-[16px] md:text-[20px] mt-4 font-[400]">
            Request a personalized quote tailored to your specific needs.
          </p>
        </div>
        <div>
          <Form />
        </div>
      </div>
    </>
  );
};

export default QuoteForm;
