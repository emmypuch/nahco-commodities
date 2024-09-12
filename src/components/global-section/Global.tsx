import "./Global.css";
import Location from "../../assets/svg/Location.svg";
import Germany from "../../assets/svg/germany.svg";
import France from "../../assets/svg/france.svg";
import UK from "../../assets/svg/uk.svg";
import Netherlands from "../../assets/svg/netherlands.svg";
import Spain from "../../assets/svg/spain.svg";
import US from "../../assets/svg/US.svg";
import Canada from "../../assets/svg/canada.svg";
import UAE from "../../assets/svg/uae.svg";
import Arabia from "../../assets/svg/arabia.svg";
import Qatar from "../../assets/svg/qatar.svg";
import South from "../../assets/svg/south.svg";
import Egypt from "../../assets/svg/egypt.svg";
import Ghana from "../../assets/svg/ghana.svg";
import Benin from "../../assets/svg/benin.svg";
import China from "../../assets/svg/china.svg";
import India from "../../assets/svg/india.svg";
import Japan from "../../assets/svg/japan.svg";
import Korea from "../../assets/svg/korea.svg";
import CountryList from "../CountryList";
import { useEffect } from "react";

const Global = () => {
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

  const europeCountries = [
    { img: Germany, name: "Germany" },
    { img: France, name: "France" },
    { img: UK, name: "UK" },
    { img: Netherlands, name: "Netherlands" },
    { img: Spain, name: "Spain" },
  ];

  const northAmericaCountries = [
    { img: US, name: "USA" },
    { img: Canada, name: "Canada" },
  ];

  const meaCountries = [
    { img: UAE, name: "UAE" },
    { img: Arabia, name: "Saudi Arabia" },
    { img: Qatar, name: "Qatar" },
    { img: South, name: "South Africa" },
    { img: Egypt, name: "Egypt" },
    { img: Ghana, name: "Ghana" },
    { img: Benin, name: "Benin Republic" },
  ];

  const asiaCountries = [
    { img: China, name: "China" },
    { img: India, name: "India" },
    { img: Japan, name: "Japan" },
    { img: Korea, name: "South Korea" },
  ];

  return (
    <>
      <div className="bg-[#263C28] px-[50px] py-[30px]">
        <h2 className="fade-in-element text-[#B19D7F] text-[30px] md:text-[36px] font-[600] text-center">
          Our Global Reach
        </h2>
        <div className="flex fade-in-element  justify-center items-center mt-8">
          <img src={Location} alt="World Map" />
        </div>

        <div className="country-lists fade-in-element flex justify-between items-start pl-[70px] py-[30px] flex-wrap">
          <CountryList region="EUROPE" countries={europeCountries} />
          <CountryList
            region="NORTH AMERICA"
            countries={northAmericaCountries}
          />
          <CountryList region="MEA" countries={meaCountries} />
          <CountryList region="ASIA" countries={asiaCountries} />
        </div>
      </div>
    </>
  );
};

export default Global;
