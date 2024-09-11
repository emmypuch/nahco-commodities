import Mission from "../../assets/svg/mission.svg";
import InnovationSection from "./InnovationSection";
import NahcoCard from "./NahcoCard";

const AboutNahco = () => {
  return (
    <>
      <div className="bg-[#FBFAF9]">
        <div className="flex justify-center">
          <img src={Mission} alt="" />
        </div>
        <NahcoCard />
      </div>
      <InnovationSection />
    </>
  );
};

export default AboutNahco;
