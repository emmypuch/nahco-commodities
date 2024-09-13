import FooterImg from "../../assets/svg/footer-image.svg";
import Divider from "../../assets/svg/divider.svg";
import NahcoLogo from "../../assets/svg/nahco-logo.svg";
import { useEffect } from "react";
import "./Footer.css";
import ServiceButton from "../buttons/ServiceButton";

interface Link {
  href: string;
  text: string;
}

interface LinkListProps {
  title: string;
  links: Link[];
}

const LinkList: React.FC<LinkListProps> = ({ title, links }) => (
  <ul>
    <p className="text-[#91B29A] text-[14px] font-[600] ml-4 fade-in-element">
      {title}
    </p>
    {links.map((link, index) => (
      <li
        key={index}
        className="text-[#E4E7EC] fade-in-element text-[14px] list-none m-4 font-[400]"
      >
        <a href={link.href}>{link.text}</a>
      </li>
    ))}
  </ul>
);

const Footer: React.FC = () => {
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

  const currentYear = new Date().getFullYear();

  const companyLinks: Link[] = [
    { href: "#", text: "About Us" },
    { href: "#", text: "Career" },
    { href: "#", text: "Press" },
    { href: "#", text: "News" },
    { href: "#", text: "Contact" },
  ];

  const resourcesLinks: Link[] = [
    { href: "#", text: "Blog" },
    { href: "#", text: "Newsletter" },
    { href: "#", text: "Publications" },
    { href: "#", text: "Casestudies" },
    { href: "#", text: "Support" },
  ];

  const followUsLinks: Link[] = [
    { href: "#", text: "Twitter" },
    { href: "#", text: "LinkedIn" },
    { href: "#", text: "Facebook" },
    { href: "#", text: "AngelList" },
  ];

  const legalLinks: Link[] = [
    { href: "#", text: "Terms" },
    { href: "#", text: "Privacy" },
    { href: "#", text: "Cookies" },
    { href: "#", text: "Licenses" },
    { href: "#", text: "Settings" },
    { href: "#", text: "Contact" },
  ];

  return (
    <div className="bg-[#263C28] px-[20px] md:px-[50px] py-[30px]">
      <div className="newsletter flex justify-center items-center w-full">
        <div className="relative footer-overlay w-full max-w-[1440px]">
          <img
            src={FooterImg}
            alt="Newsletter Background"
            className="absolute top-0 left-0 rounded-[24px] w-full h-full object-cover"
          />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 w-full h-full p-6 md:p-12">
            <h2 className="text-[#F0FDF4] fade-in-element text-[24px] md:text-[48px] font-[600] leading-tight text-center md:text-left">
              Subscribe to Our <br /> Newsletter
            </h2>
            <div className="flex fade-in-element flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
              <input
                type="email"
                placeholder="Your Email Address"
                className="bg-[#121C07] text-[#D0D5DD] rounded-[32px] h-[48px] w-full md:w-[287px] px-[15px] text-[12px] md:text-[14px] font-[400]"
              />
              <ServiceButton
                backgroundColor="#FBFAF9"
                textColor="#166534"
                hoverColor="#F0FDF4"
              />
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-[24px]"></div>
        </div>
      </div>

      <div className="links flex justify-between px-[20px] md:px-[50px] fade-in-element py-[30px]">
        <LinkList title="Company" links={companyLinks} />
        <LinkList title="Resources" links={resourcesLinks} />
        <LinkList title="Follow Us" links={followUsLinks} />
        <LinkList title="Legal" links={legalLinks} />
      </div>
      <div className="divider flex justify-center items-center">
        <img src={Divider} alt="" />
      </div>
      <div className="rights flex justify-between px-[0px] gap-4 md:gap-0 md:px-[50px] py-[30px] fade-in-element">
        <div className="">
          <img src={NahcoLogo} alt="" className="w-[100px] md:w-full" />
        </div>
        <div className="text">
          <p className="text-[#91B29A] text-[13px] md:text-[16px] mt-0 md:mt-4 font-[400]">
            © {currentYear} NAHCO. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
