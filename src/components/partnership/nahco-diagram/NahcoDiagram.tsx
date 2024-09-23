import "./NahcoDiagram.css";
// import YellowLine from "../../../assets/svg/yellow-line.svg";
// import bg from "../../../assets/bg.png"; // Path to the background file
import { Link } from "react-router-dom";

const NahcoDiagram = () => {
  return (
    <div
      className="diagram-container"
      style={{ backgroundImage: `url()`, backgroundSize: "cover" }}
    >
      <div className="parent-box">
        <div className="box">
          <Link to="https://www.nahcoaviance.com/">
            <p className="text-[#E1CFB4] font-[700] text-[14px] md:text-[20px]">
              NAHCO
            </p>
            <p className="text-[#B19D7F] text-[12px] md:text-[14px] font-[400]">
              PLC
            </p>
          </Link>
        </div>
      </div>
      <div className="child-container">
        <div className="box">
          <Link to="https://www.nfz.com.ng/">
            <p className="text-[#E1CFB4] font-[700] text-[14px] md:text-[20px]">
              NAHCO
            </p>
            <p className="text-[#B19D7F] text-[12px] md:text-[14px] font-[400]">
              Free Trade Zone
            </p>
          </Link>
        </div>
        <div className="line"></div>
        <div className="box">
          <Link to="https://mainlandcargooptions.com/">
            <p className="text-[#E1CFB4] font-[700] text-[14px] md:text-[20px]">
              NAHCO
            </p>
            <p className="text-[#B19D7F] text-[12px] md:text-[14px] font-[400]">
              Logistics
            </p>
          </Link>
        </div>
        <div className="line"></div>
        <div className="box">
          <Link to="https://www.nahcoaviance.com/aboutnms/">
            <p className="text-[#E1CFB4] font-[700] text-[14px] md:text-[20px]">
              NAHCO
            </p>
            <p className="text-[#B19D7F] text-[12px] md:text-[14px] font-[400]">
              Management Services
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NahcoDiagram;
