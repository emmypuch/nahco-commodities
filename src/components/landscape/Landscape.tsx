import { useEffect } from "react";
import "./Landscape.css";

const regions = [
  {
    title: "Europe",
    description: `From the bustling marketplaces of Germany and France to the established economies of the UK and Netherlands, we connect you with European consumers seeking high-quality Nigerian agricultural products.`,
  },
  {
    title: "North America",
    description: `The vast markets of the USA and Canada are within reach. We help you navigate regulations and find reliable partners to successfully export your products to North America.`,
  },
  {
    title: "MEA (Middle East & Africa)",
    description: `Flourishing economies like the UAE, Saudi Arabia, Qatar, South Africa, Egypt, Ghana, and Benin await your offerings. Our expertise helps you navigate cultural preferences and establish strong trade partnerships in the MEA region.`,
  },
  {
    title: "Asia",
    description: `The booming economies of China, India, Japan, and South Korea present exciting opportunities. We can help you meet strict quality standards and cultural preferences to successfully enter these lucrative Asian markets.`,
  },
];

const Landscape = () => {
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
      <div className="px-[30px] md:px-[70px] py-[50px]">
        <h2 className="text-[#166534] font-[600] text-[28px] fade-in-element md:text-[36px] text-center">
          From bustling urban hubs to remote rural <br /> landscapes
        </h2>
        <ol className="mt-6 px-[30px] md:px-[70px] py-[5px] md:py-[30px]">
          {regions.map((region, index) => (
            <li key={index} className="flex gap-2 fade-in-element">
              <div className="hidden md:block text-[30px]">.</div>
              <div className="text-[12px] md:text-[16px] text-[#828B9C] mt-[15px] md:mt-[40px]">
                <span className="text-[#263C28]">{region.title}: </span>
                {region.description}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default Landscape;
