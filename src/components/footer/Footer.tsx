import FooterImg from "../../assets/svg/footer.svg";
import Divider from "../../assets/svg/divider.svg";
import NahcoLogo from "../../assets/svg/nahco-logo.svg";
import { useEffect } from "react";
import "./Footer.css";

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
    <div className="bg-[#263C28] px-[50px] py-[30px]">
      <div className="newsletter flex justify-center items-center">
        <div>
          <img src={FooterImg} alt="" />
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
      <div className="rights flex justify-between px-[50px] py-[30px] fade-in-element">
        <div className="">
          <img src={NahcoLogo} alt="" />
        </div>
        <div className="text">
          <p className="text-[#91B29A] text-[16px] mt-4 font-[400]">
            © {currentYear} NAHCO. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
