import { useState } from "react";
import { Link } from "react-router-dom";
import RightArrow from "../../assets/svg/service-arrow.svg";

const ServiceButton = ({
  backgroundColor = "#315033",
  hoverColor = "#8c7d6e",
  textColor = "#E1CFB4",
}) => {
  const [bgColor, setBgColor] = useState(backgroundColor);

  return (
    <div>
      <div>
        <Link
          to="/contact"
          className={`text-[${textColor}] rounded-full h-[56px] w-[218px] flex items-center justify-center transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#E4CAA4]`}
          style={{
            backgroundColor: bgColor,
            color: textColor,
          }}
          onMouseEnter={() => setBgColor(hoverColor)}
          onMouseLeave={() => setBgColor(backgroundColor)}
        >
          <span className="text-base font-bold">Contact Us</span>
          <img
            src={RightArrow}
            alt="Right arrow"
            className="w-4 h-4 ml-2 transition-transform duration-300"
          />
        </Link>
      </div>
    </div>
  );
};

export default ServiceButton;
