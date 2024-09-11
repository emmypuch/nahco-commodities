import "./Cta.css";
import TrustImg from "../../assets/svg/trust-img.svg";
import Email from "../../assets/svg/email.svg";
import Twitter from "../../assets/svg/twitter.svg";
import Instagram from "../../assets/svg/instagram.svg";
import Phone from "../../assets/svg/phone.svg";
import Location from "../../assets/svg/location-line.svg";
import { useEffect } from "react";

const Cta = () => {
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
      <div className="px-[30px] md:px-[70px] py-[30px]">
        <div className="cta-container flex justify-between">
          <div className="flex justify-center items-center">
            <div>
              <h2 className="text-[36px] font-[600] fade-in-element text-[#166534] mt-6 md:mt-0">
                Your Gateway to Global Success.
              </h2>
              <h2 className="text-[36px] font-[600] fade-in-element text-[#166534]">
                Start the Conversation Today
              </h2>
              <ul className="mt-6 space-y-4 fade-in-element">
                <li className="flex items-center text-[16px] font-[400] text-[#4B5563]">
                  <img src={Email} alt="Email" className="mr-2" />
                  info@nahcocommodities.com
                </li>
                <li className="flex items-center text-[16px] font-[400] text-[#4B5563]">
                  <img src={Twitter} alt="Twitter" className="mr-2" />X
                  (Formerly Twitter) @nahcocommodities
                </li>
                <li className="flex items-center text-[16px] font-[400] text-[#4B5563]">
                  <img src={Instagram} alt="Instagram" className="mr-2" />
                  Instagram @nahcocommodities
                </li>
                <li className="flex items-center text-[16px] font-[400] text-[#4B5563]">
                  <img src={Phone} alt="Phone" className="mr-2" />
                  +234 818 888 1529
                </li>
                <li className="flex items-center text-[16px] font-[400] text-[#4B5563]">
                  <img src={Location} alt="Location" className="mr-2 mb-4" />
                  NAHCO Export Packaging & Processing Center, <br /> Murtala
                  Muhammed International Airport Road, Ikeja, Lagos, Nigeria.
                </li>
              </ul>
            </div>
          </div>
          <div className="fade-in-element">
            <img src={TrustImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
