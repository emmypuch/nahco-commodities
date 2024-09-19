import Triple from "../../assets/svg/tripple.svg";
import NEPC from "../../assets/svg/nepc.svg";
import GreenBag from "../../assets/svg/greenbag.svg";
import Turquaz from "../../assets/svg/turquaz.svg";
import Naccima from "../../assets/svg/naccima.svg";
import { useEffect } from "react";
import "./TrustedBy.css";

const TrustedBy = () => {
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

  const logos = [
    { src: Triple, alt: "Triple Logo" },
    { src: NEPC, alt: "NEPC Logo" },
    { src: GreenBag, alt: "GreenBag Logo" },
    { src: Turquaz, alt: "Turquaz Logo" },
    { src: Naccima, alt: "Naccima Logo" },
  ];

  return (
    <div className="px-[20px] md:px-[50px] py-[50px]">
      <h2 className="text-center fade-in-element text-[#166534] font-[600] text-[28px] md:text-[32px]">
        Trusted By
      </h2>
      <div className="mt-[50px] flex flex-wrap justify-center items-center md:flex md:justify-center gap-[60px]">
        {logos.map((logo, index) => (
          <div key={index}>
            <img src={logo.src} alt={logo.alt} className="fade-in-element" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;
