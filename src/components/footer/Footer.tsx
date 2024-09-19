import FooterImg from "../../assets/svg/footer-image.svg";
import Divider from "../../assets/svg/divider.svg";
import NahcoLogo from "../../assets/svg/nahco-logo.svg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Newsletter from "./newsletter/Newsletter";
import "./Footer.css";

interface Link {
  href?: string;
  text: string;
  onClick?: (e: React.MouseEvent) => void;
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
        {link.onClick ? (
          <Link to="#" onClick={link.onClick}>
            {link.text}
          </Link>
        ) : (
          <Link to={link.href as string}>{link.text}</Link>
        )}
      </li>
    ))}
  </ul>
);

const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    { href: "https://www.nahcoaviance.com/aboutnms/", text: "About Us" },
    {
      href: "#",
      text: "Career",
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setIsModalOpen(true);
      },
    },
    { href: "#", text: "News" },
    { href: "/contact", text: "Contact" },
  ];

  const followUsLinks: Link[] = [
    {
      href: "https://x.com/nahcocomm?s=11&t=5RQd7A28kv157N7ZjWJQSw",
      text: "X (Formerly Twitter)",
    },
    {
      href: "https://www.linkedin.com/company/nahcocommodities/posts/?feedView=all",
      text: "LinkedIn",
    },
    {
      href: "https://www.facebook.com/profile.php?id=61562183703436",
      text: "Facebook",
    },
    {
      href: "https://www.instagram.com/nahcocommodities?igsh=MTF6NzI0emV0cHhweg==",
      text: "Instagram",
    },
  ];

  const legalLinks: Link[] = [
    {
      text: "Privacy",
      href: "/privacy",
    },
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
          <Newsletter />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.5] rounded-[24px]"></div>
        </div>
      </div>

      <div className="links flex justify-between px-[20px] md:px-[50px] fade-in-element py-[30px]">
        <LinkList title="Company" links={companyLinks} />
        <LinkList title="Follow Us" links={followUsLinks} />
        <LinkList title="Legal" links={legalLinks} />
      </div>
      <div className="divider flex justify-center items-center">
        <img src={Divider} alt="" />
      </div>
      <div className="rights flex justify-between px-[0px] gap-4 md:gap-0 md:px-[50px] py-[30px] fade-in-element">
        <Link to="/" className="">
          <img src={NahcoLogo} alt="" className="w-[100px] md:w-full" />
        </Link>
        <div className="text">
          <p className="text-[#91B29A] text-[13px] md:text-[16px] mt-0 md:mt-4 font-[400]">
            © {currentYear} NAHCO. All rights reserved.
          </p>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>Vacancies unavailable now. Kindly check back soon!</p>
            <button onClick={() => setIsModalOpen(false)}>Okay</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
