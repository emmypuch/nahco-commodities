import "./Cta.css";
import TrustImg from "../../assets/svg/trust-img.svg";
import Email from "../../assets/svg/email.svg";
import Twitter from "../../assets/svg/twitter.svg";
import Instagram from "../../assets/svg/instagram.svg";
import Phone from "../../assets/svg/phone.svg";
import Location from "../../assets/svg/location-line.svg";
import { useEffect } from "react";

interface ContactItemProps {
  iconSrc: string;
  altText: string;
  text: React.ReactNode;
}

const ContactItem: React.FC<ContactItemProps> = ({
  iconSrc,
  altText,
  text,
}) => (
  <li className="flex fade-in-element items-center text-[14px] md:text-[16px] font-[400] text-[#4B5563]">
    <img src={iconSrc} alt={altText} className="mr-2" />
    {text}
  </li>
);

const Cta: React.FC = () => {
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
    <div className="px-[30px] md:px-[70px] py-[30px]">
      <div className="cta-container flex justify-between">
        <div className="flex justify-center items-center">
          <div>
            <h2 className="text-[28px] md:text-[36px] font-[600] fade-in-element text-[#166534] mt-6 md:mt-0">
              Your Gateway to Global Success.
            </h2>
            <h2 className="text-[28px] md:text-[36px] font-[600] fade-in-element text-[#166534]">
              Start the Conversation Today
            </h2>
            <ul className="mt-6 space-y-4 fade-in-element">
              {/* Email */}
              <ContactItem
                iconSrc={Email}
                altText="Email"
                text={
                  <a
                    href="mailto:info@nahcocommodities.com"
                    className="hover:underline"
                  >
                    info@nahcocommodities.com
                  </a>
                }
              />
              {/* Twitter */}
              <ContactItem
                iconSrc={Twitter}
                altText="Twitter"
                text={
                  <a
                    href="https://x.com/nahcocomm?s=11&t=5RQd7A28kv157N7ZjWJQSw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    (Formerly Twitter) @nahcocommodities
                  </a>
                }
              />
              {/* Instagram */}
              <ContactItem
                iconSrc={Instagram}
                altText="Instagram"
                text={
                  <a
                    href="https://www.instagram.com/nahcocommodities?igsh=MTF6NzI0emV0cHhweg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    @nahcocommodities
                  </a>
                }
              />
              {/* Phone */}
              <ContactItem
                iconSrc={Phone}
                altText="Phone"
                text={
                  <a href="tel:+2348188881529" className="hover:underline">
                    +234 818 888 1529
                  </a>
                }
              />
              {/* Location */}
              <ContactItem
                iconSrc={Location}
                altText="Location"
                text="Room 12, NAHCO Export Processing Center, Murtala Muhammed International Airport Road, Ikeja, Lagos, Nigeria."
              />
            </ul>
          </div>
        </div>
        <div className="fade-in-element cta-image">
          <img src={TrustImg} alt="Trust" className="md:w-full w-[250px] " />
        </div>
      </div>
    </div>
  );
};

export default Cta;
